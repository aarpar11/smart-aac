import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { abaKnowledgeBase, chatbotResponses, findRelevantKnowledge, getRandomResponse } from "@/data/abaKnowledgeBase";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  suggestions?: string[];
}

export const ABAChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: getRandomResponse(chatbotResponses.greeting),
      isUser: false,
      timestamp: new Date(),
      suggestions: ["Tell me about positive reinforcement", "How can I make friends?", "What are routines?", "Help me stay calm"]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = (userInput: string): { text: string; suggestions?: string[] } => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return {
        text: getRandomResponse(chatbotResponses.greeting),
        suggestions: ["Tell me about positive reinforcement", "How can I make friends?", "What are routines?"]
      };
    }

    // Check for help requests
    if (input.includes("help") || input.includes("don't understand") || input.includes("confused")) {
      return {
        text: getRandomResponse(chatbotResponses.help),
        suggestions: ["Positive reinforcement", "Communication tips", "Self-regulation", "Social skills"]
      };
    }

    // Check for goodbye
    if (input.includes("bye") || input.includes("goodbye") || input.includes("see you")) {
      return {
        text: getRandomResponse(chatbotResponses.goodbye)
      };
    }

    // Find relevant knowledge
    const relevantKnowledge = findRelevantKnowledge(input);
    
    if (relevantKnowledge.length > 0) {
      const knowledge = relevantKnowledge[0];
      const response = `Great question about ${knowledge.topic}! ${knowledge.childFriendlyExplanation}\n\n` +
        `Here are some examples:\n${knowledge.examples.map(ex => `• ${ex}`).join('\n')}\n\n` +
        `Tips to remember:\n${knowledge.tips.map(tip => `• ${tip}`).join('\n')}`;
      
      const otherTopics = abaKnowledgeBase
        .filter(item => item.topic !== knowledge.topic)
        .slice(0, 3)
        .map(item => `Tell me about ${item.topic}`);

      return {
        text: response,
        suggestions: otherTopics
      };
    }

    // Default responses for common emotions/situations
    if (input.includes("sad") || input.includes("upset") || input.includes("angry")) {
      return {
        text: "I understand you might be feeling upset. That's okay! Everyone has different feelings. Let's talk about some ways to feel better. Taking deep breaths can help, or maybe you'd like to talk about what's making you feel this way?",
        suggestions: ["How to stay calm", "Tell me about self-regulation", "I need help with feelings"]
      };
    }

    if (input.includes("scared") || input.includes("worried") || input.includes("anxious")) {
      return {
        text: "It's normal to feel scared or worried sometimes. You're very brave for talking about it! There are ways to feel safer and calmer. Would you like to learn some techniques that might help?",
        suggestions: ["Calming techniques", "How to feel safe", "Tell me about routines"]
      };
    }

    // General encouraging response
    return {
      text: "That's a really good question! I love that you're curious and want to learn. " + 
            getRandomResponse(chatbotResponses.encouragement) + 
            " Can you tell me more about what you'd like to know?",
      suggestions: ["Communication tips", "Social skills", "Problem solving", "Positive reinforcement"]
    };
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary">
          <Bot className="w-5 h-5" />
          ABA Learning Buddy
          <Sparkles className="w-4 h-4 text-secondary" />
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your friendly guide to learning and growing!
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4 p-4">
        <ScrollArea ref={scrollAreaRef} className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? "bg-gradient-primary text-primary-foreground ml-4"
                      : "bg-muted text-muted-foreground mr-4"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      {message.isUser ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4 text-secondary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {message.text}
                      </p>
                      {message.suggestions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="cursor-pointer hover:bg-primary/20 transition-colors text-xs"
                              onClick={() => handleSendMessage(suggestion)}
                            >
                              {suggestion}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground max-w-[80%] rounded-lg p-3 mr-4">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-secondary" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.1s]" />
                      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about learning and growing..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-primary hover:opacity-90 transition-gentle"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};