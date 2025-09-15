export interface ABAKnowledgeItem {
  topic: string;
  childFriendlyExplanation: string;
  examples: string[];
  tips: string[];
}

export const abaKnowledgeBase: ABAKnowledgeItem[] = [
  {
    topic: "positive reinforcement",
    childFriendlyExplanation: "When you do something good, you get something nice! This makes you want to do that good thing again.",
    examples: [
      "Getting a sticker when you clean up your toys",
      "Getting extra playtime when you finish your homework",
      "Getting a high-five when you use kind words"
    ],
    tips: [
      "The reward should come right after the good behavior",
      "Make sure the reward is something you really like",
      "Celebrate small wins too!"
    ]
  },
  {
    topic: "routines",
    childFriendlyExplanation: "Routines are like a special order of doing things every day. They help you know what comes next!",
    examples: [
      "Brush teeth, put on pajamas, read a story, then bedtime",
      "Wake up, eat breakfast, get dressed, then go to school",
      "Wash hands, sit down, eat lunch, clean up"
    ],
    tips: [
      "Use pictures to show each step",
      "Practice the routine when you're calm",
      "It's okay if routines take time to learn"
    ]
  },
  {
    topic: "communication",
    childFriendlyExplanation: "Communication is how we share our thoughts and feelings with others. There are many ways to communicate!",
    examples: [
      "Using words to say 'I want water'",
      "Pointing to show what you want",
      "Using pictures or symbols to express needs",
      "Making gestures like waving hello"
    ],
    tips: [
      "Start with simple words or gestures",
      "Practice in fun, relaxed situations",
      "Everyone communicates differently and that's okay"
    ]
  },
  {
    topic: "self-regulation",
    childFriendlyExplanation: "Self-regulation is like being the boss of your own feelings and actions. It helps you stay calm and make good choices.",
    examples: [
      "Taking deep breaths when feeling upset",
      "Counting to ten before responding",
      "Using a calm-down space when overwhelmed",
      "Asking for help when needed"
    ],
    tips: [
      "Practice calming strategies when you're already calm",
      "Find what works best for you",
      "It's normal to need breaks sometimes"
    ]
  },
  {
    topic: "social skills",
    childFriendlyExplanation: "Social skills help us get along with others and make friends. They're like tools for playing and talking with people.",
    examples: [
      "Taking turns in games",
      "Saying 'please' and 'thank you'",
      "Listening when others are talking",
      "Sharing toys with friends"
    ],
    tips: [
      "Practice with family first",
      "Start with one skill at a time",
      "Watch how others interact"
    ]
  },
  {
    topic: "problem solving",
    childFriendlyExplanation: "Problem solving is like being a detective! You look at what's wrong and find ways to fix it.",
    examples: [
      "If a toy is broken, ask an adult for help",
      "If you can't find something, look in the places you last had it",
      "If you're having trouble with a friend, talk about it"
    ],
    tips: [
      "Break big problems into smaller pieces",
      "Ask for help when you need it",
      "Try different solutions if the first one doesn't work"
    ]
  }
];

export const chatbotResponses = {
  greeting: [
    "Hi there! I'm your ABA helper! I'm here to help you learn and grow. What would you like to talk about today?",
    "Hello! I'm so happy to see you! I know lots of fun ways to learn new things. What interests you?",
    "Hey! I'm your friendly guide. I love helping kids learn cool stuff. What's on your mind?"
  ],
  encouragement: [
    "You're doing amazing! Keep up the great work!",
    "That's fantastic! I'm so proud of you!",
    "Wow, you're really getting the hang of this!",
    "You're such a good learner! Keep going!",
    "I believe in you! You can do this!"
  ],
  help: [
    "I'm here to help! What would you like to learn about?",
    "No worries, we can figure this out together!",
    "That's a great question! Let me help you with that.",
    "I love helping! What can I do for you?"
  ],
  goodbye: [
    "It was so nice talking with you! Remember, you're awesome!",
    "Thanks for chatting with me! Keep practicing what we talked about!",
    "Bye for now! I'll be here whenever you want to learn more!",
    "See you later! Remember, every day is a chance to learn something new!"
  ]
};

export function findRelevantKnowledge(userInput: string): ABAKnowledgeItem[] {
  const input = userInput.toLowerCase();
  return abaKnowledgeBase.filter(item => 
    input.includes(item.topic) || 
    item.childFriendlyExplanation.toLowerCase().includes(input) ||
    item.examples.some(example => example.toLowerCase().includes(input))
  );
}

export function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}