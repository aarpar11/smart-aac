import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { spokenText } = await req.json();
    
    if (!spokenText) {
      throw new Error('No spoken text provided');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Processing spoken text:', spokenText);

    // Call Lovable AI to get AAC response suggestions
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an AAC (Augmentative and Alternative Communication) assistant helping non-verbal children communicate. 
            When someone speaks to the child, you analyze what was said and suggest 3-5 simple, appropriate responses that a non-verbal child using an AAC device might want to say back.
            
            Focus on:
            - Simple, clear words and short phrases (1-3 words max)
            - Age-appropriate responses for children
            - Common AAC vocabulary (basic needs, emotions, social responses)
            - Words that would help the child engage in the conversation
            
            Return ONLY a JSON array of suggested words/phrases, nothing else. Example format:
            ["yes", "no", "help", "more", "please"]
            
            Do not include explanations, just the JSON array.`
          },
          {
            role: 'user',
            content: `Someone said to the child: "${spokenText}"\n\nWhat simple words or short phrases should the AAC device suggest as possible responses?`
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error('AI gateway error');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log('AI response:', aiResponse);

    // Parse the JSON array from the response
    let suggestedWords: string[];
    try {
      // Extract JSON array from the response (remove markdown code blocks if present)
      const jsonMatch = aiResponse.match(/\[.*\]/s);
      if (jsonMatch) {
        suggestedWords = JSON.parse(jsonMatch[0]);
      } else {
        suggestedWords = JSON.parse(aiResponse);
      }
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      // Fallback: extract words from the response
      suggestedWords = aiResponse
        .toLowerCase()
        .match(/\b[a-z]+\b/g)
        ?.slice(0, 5) || ['yes', 'no', 'help'];
    }

    console.log('Suggested words:', suggestedWords);

    return new Response(
      JSON.stringify({ suggestedWords }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in aac-suggestions function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
