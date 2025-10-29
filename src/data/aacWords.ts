export interface AACWord {
  id: string;
  word: string;
  category: string;
  icon?: string;
  emotionRelevancy: {
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
    neutral: number;
  };
}

export const aacWords: AACWord[] = [
  // High relevancy for happy
  { id: "1", word: "happy", category: "emotions", emotionRelevancy: { happy: 100, sad: 5, angry: 0, fearful: 0, disgusted: 0, surprised: 20, neutral: 10 } },
  { id: "2", word: "great", category: "emotions", emotionRelevancy: { happy: 95, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 15, neutral: 5 } },
  { id: "3", word: "excited", category: "emotions", emotionRelevancy: { happy: 90, sad: 0, angry: 0, fearful: 5, disgusted: 0, surprised: 80, neutral: 0 } },
  { id: "4", word: "love", category: "emotions", emotionRelevancy: { happy: 85, sad: 10, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 5 } },
  { id: "5", word: "fun", category: "activities", emotionRelevancy: { happy: 80, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 10 } },
  { id: "6", word: "laugh", category: "actions", emotionRelevancy: { happy: 90, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 15, neutral: 0 } },
  { id: "7", word: "smile", category: "actions", emotionRelevancy: { happy: 95, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 5 } },
  { id: "8", word: "play", category: "activities", emotionRelevancy: { happy: 75, sad: 5, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 20 } },
  { id: "9", word: "friend", category: "people", emotionRelevancy: { happy: 70, sad: 15, angry: 5, fearful: 10, disgusted: 0, surprised: 10, neutral: 20 } },
  { id: "10", word: "yes", category: "responses", emotionRelevancy: { happy: 60, sad: 10, angry: 10, fearful: 5, disgusted: 5, surprised: 30, neutral: 40 } },

  // High relevancy for sad
  { id: "11", word: "sad", category: "emotions", emotionRelevancy: { happy: 0, sad: 100, angry: 10, fearful: 20, disgusted: 5, surprised: 5, neutral: 10 } },
  { id: "12", word: "cry", category: "actions", emotionRelevancy: { happy: 0, sad: 95, angry: 15, fearful: 40, disgusted: 0, surprised: 10, neutral: 0 } },
  { id: "13", word: "hurt", category: "emotions", emotionRelevancy: { happy: 0, sad: 90, angry: 60, fearful: 30, disgusted: 10, surprised: 10, neutral: 5 } },
  { id: "14", word: "lonely", category: "emotions", emotionRelevancy: { happy: 0, sad: 85, angry: 5, fearful: 25, disgusted: 0, surprised: 0, neutral: 10 } },
  { id: "15", word: "miss", category: "emotions", emotionRelevancy: { happy: 10, sad: 80, angry: 0, fearful: 10, disgusted: 0, surprised: 5, neutral: 10 } },
  { id: "16", word: "help", category: "requests", emotionRelevancy: { happy: 5, sad: 75, angry: 30, fearful: 80, disgusted: 20, surprised: 20, neutral: 30 } },
  { id: "17", word: "sorry", category: "responses", emotionRelevancy: { happy: 5, sad: 70, angry: 10, fearful: 20, disgusted: 5, surprised: 10, neutral: 10 } },
  { id: "18", word: "tired", category: "states", emotionRelevancy: { happy: 5, sad: 60, angry: 15, fearful: 10, disgusted: 10, surprised: 0, neutral: 30 } },

  // High relevancy for angry
  { id: "19", word: "angry", category: "emotions", emotionRelevancy: { happy: 0, sad: 10, angry: 100, fearful: 15, disgusted: 40, surprised: 10, neutral: 5 } },
  { id: "20", word: "mad", category: "emotions", emotionRelevancy: { happy: 0, sad: 15, angry: 95, fearful: 10, disgusted: 35, surprised: 10, neutral: 5 } },
  { id: "21", word: "no", category: "responses", emotionRelevancy: { happy: 10, sad: 20, angry: 90, fearful: 40, disgusted: 60, surprised: 30, neutral: 40 } },
  { id: "22", word: "stop", category: "commands", emotionRelevancy: { happy: 5, sad: 25, angry: 85, fearful: 70, disgusted: 50, surprised: 20, neutral: 20 } },
  { id: "23", word: "annoyed", category: "emotions", emotionRelevancy: { happy: 0, sad: 10, angry: 80, fearful: 5, disgusted: 30, surprised: 5, neutral: 10 } },
  { id: "24", word: "frustrated", category: "emotions", emotionRelevancy: { happy: 0, sad: 30, angry: 75, fearful: 10, disgusted: 15, surprised: 5, neutral: 10 } },

  // High relevancy for fearful
  { id: "25", word: "scared", category: "emotions", emotionRelevancy: { happy: 0, sad: 20, angry: 5, fearful: 100, disgusted: 10, surprised: 50, neutral: 5 } },
  { id: "26", word: "afraid", category: "emotions", emotionRelevancy: { happy: 0, sad: 25, angry: 5, fearful: 95, disgusted: 5, surprised: 40, neutral: 5 } },
  { id: "27", word: "worried", category: "emotions", emotionRelevancy: { happy: 0, sad: 40, angry: 10, fearful: 85, disgusted: 5, surprised: 10, neutral: 15 } },
  { id: "28", word: "nervous", category: "emotions", emotionRelevancy: { happy: 5, sad: 20, angry: 5, fearful: 80, disgusted: 5, surprised: 15, neutral: 10 } },
  { id: "29", word: "safe", category: "states", emotionRelevancy: { happy: 40, sad: 10, angry: 0, fearful: 70, disgusted: 0, surprised: 5, neutral: 30 } },

  // High relevancy for surprised
  { id: "30", word: "surprised", category: "emotions", emotionRelevancy: { happy: 30, sad: 5, angry: 5, fearful: 20, disgusted: 5, surprised: 100, neutral: 10 } },
  { id: "31", word: "wow", category: "responses", emotionRelevancy: { happy: 50, sad: 0, angry: 0, fearful: 10, disgusted: 0, surprised: 95, neutral: 5 } },
  { id: "32", word: "amazing", category: "descriptions", emotionRelevancy: { happy: 70, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 85, neutral: 10 } },
  { id: "33", word: "cool", category: "descriptions", emotionRelevancy: { happy: 60, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 75, neutral: 20 } },

  // High relevancy for disgusted
  { id: "34", word: "disgusted", category: "emotions", emotionRelevancy: { happy: 0, sad: 10, angry: 30, fearful: 15, disgusted: 100, surprised: 20, neutral: 5 } },
  { id: "35", word: "yuck", category: "responses", emotionRelevancy: { happy: 0, sad: 5, angry: 20, fearful: 10, disgusted: 95, surprised: 10, neutral: 0 } },
  { id: "36", word: "gross", category: "descriptions", emotionRelevancy: { happy: 0, sad: 5, angry: 25, fearful: 15, disgusted: 90, surprised: 15, neutral: 0 } },
  { id: "37", word: "bad", category: "descriptions", emotionRelevancy: { happy: 5, sad: 40, angry: 50, fearful: 30, disgusted: 70, surprised: 5, neutral: 20 } },

  // Neutral/Common words (lower relevancy across emotions)
  { id: "38", word: "want", category: "requests", emotionRelevancy: { happy: 30, sad: 20, angry: 25, fearful: 15, disgusted: 10, surprised: 15, neutral: 50 } },
  { id: "39", word: "need", category: "requests", emotionRelevancy: { happy: 20, sad: 30, angry: 25, fearful: 30, disgusted: 15, surprised: 10, neutral: 50 } },
  { id: "40", word: "more", category: "requests", emotionRelevancy: { happy: 30, sad: 10, angry: 20, fearful: 5, disgusted: 5, surprised: 15, neutral: 40 } },
  { id: "41", word: "please", category: "requests", emotionRelevancy: { happy: 35, sad: 25, angry: 5, fearful: 30, disgusted: 5, surprised: 10, neutral: 45 } },
  { id: "42", word: "thank you", category: "responses", emotionRelevancy: { happy: 60, sad: 10, angry: 0, fearful: 5, disgusted: 0, surprised: 20, neutral: 30 } },
  
  // Food
  { id: "43", word: "eat", category: "activities", emotionRelevancy: { happy: 25, sad: 10, angry: 5, fearful: 5, disgusted: 15, surprised: 5, neutral: 40 } },
  { id: "44", word: "drink", category: "activities", emotionRelevancy: { happy: 20, sad: 10, angry: 5, fearful: 5, disgusted: 10, surprised: 5, neutral: 40 } },
  { id: "45", word: "food", category: "objects", emotionRelevancy: { happy: 30, sad: 5, angry: 5, fearful: 5, disgusted: 20, surprised: 5, neutral: 35 } },
  { id: "46", word: "water", category: "objects", emotionRelevancy: { happy: 15, sad: 10, angry: 5, fearful: 5, disgusted: 5, surprised: 5, neutral: 40 } },
  
  // Activities
  { id: "47", word: "go", category: "actions", emotionRelevancy: { happy: 40, sad: 10, angry: 15, fearful: 10, disgusted: 5, surprised: 15, neutral: 35 } },
  { id: "48", word: "come", category: "actions", emotionRelevancy: { happy: 35, sad: 15, angry: 10, fearful: 20, disgusted: 5, surprised: 15, neutral: 35 } },
  { id: "49", word: "sit", category: "actions", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 5, neutral: 40 } },
  { id: "50", word: "stand", category: "actions", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 5, surprised: 10, neutral: 35 } },
  
  // People
  { id: "51", word: "mom", category: "people", emotionRelevancy: { happy: 40, sad: 30, angry: 10, fearful: 25, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "52", word: "dad", category: "people", emotionRelevancy: { happy: 40, sad: 30, angry: 10, fearful: 25, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "53", word: "teacher", category: "people", emotionRelevancy: { happy: 25, sad: 15, angry: 10, fearful: 20, disgusted: 5, surprised: 10, neutral: 35 } },
  
  // Objects (low emotional relevancy)
  { id: "54", word: "toy", category: "objects", emotionRelevancy: { happy: 45, sad: 5, angry: 5, fearful: 0, disgusted: 0, surprised: 10, neutral: 25 } },
  { id: "55", word: "book", category: "objects", emotionRelevancy: { happy: 30, sad: 10, angry: 5, fearful: 0, disgusted: 0, surprised: 10, neutral: 30 } },
  { id: "56", word: "ball", category: "objects", emotionRelevancy: { happy: 40, sad: 0, angry: 5, fearful: 0, disgusted: 0, surprised: 5, neutral: 25 } },
  { id: "57", word: "chair", category: "objects", emotionRelevancy: { happy: 5, sad: 5, angry: 5, fearful: 5, disgusted: 0, surprised: 0, neutral: 35 } },
  { id: "58", word: "table", category: "objects", emotionRelevancy: { happy: 5, sad: 5, angry: 5, fearful: 5, disgusted: 0, surprised: 0, neutral: 35 } },
  { id: "59", word: "door", category: "objects", emotionRelevancy: { happy: 5, sad: 5, angry: 10, fearful: 15, disgusted: 0, surprised: 5, neutral: 30 } },
  { id: "60", word: "window", category: "objects", emotionRelevancy: { happy: 10, sad: 10, angry: 5, fearful: 10, disgusted: 0, surprised: 5, neutral: 30 } },
  
  // More neutral
  { id: "61", word: "bathroom", category: "places", emotionRelevancy: { happy: 5, sad: 5, angry: 10, fearful: 15, disgusted: 25, surprised: 0, neutral: 35 } },
  { id: "62", word: "home", category: "places", emotionRelevancy: { happy: 40, sad: 20, angry: 5, fearful: 10, disgusted: 0, surprised: 5, neutral: 35 } },
  { id: "63", word: "outside", category: "places", emotionRelevancy: { happy: 40, sad: 10, angry: 5, fearful: 10, disgusted: 5, surprised: 15, neutral: 30 } },
  { id: "64", word: "car", category: "objects", emotionRelevancy: { happy: 30, sad: 5, angry: 10, fearful: 15, disgusted: 0, surprised: 10, neutral: 30 } },
  
  // Pronouns - Subject
  { id: "65", word: "I", category: "pronouns", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "66", word: "you", category: "pronouns", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "67", word: "he", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "68", word: "she", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "69", word: "it", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 15, surprised: 10, neutral: 60 } },
  { id: "70", word: "we", category: "pronouns", emotionRelevancy: { happy: 25, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 60 } },
  { id: "71", word: "they", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  
  // Pronouns - Object
  { id: "72", word: "me", category: "pronouns", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 20, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "73", word: "him", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "74", word: "her", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "75", word: "us", category: "pronouns", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "76", word: "them", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  
  // Pronouns - Possessive
  { id: "77", word: "my", category: "pronouns", emotionRelevancy: { happy: 15, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "78", word: "your", category: "pronouns", emotionRelevancy: { happy: 15, sad: 10, angry: 20, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "79", word: "his", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "80", word: "her", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "81", word: "our", category: "pronouns", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 60 } },
  { id: "82", word: "their", category: "pronouns", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  
  // Demonstratives
  { id: "83", word: "this", category: "pronouns", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "84", word: "that", category: "pronouns", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "85", word: "these", category: "pronouns", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "86", word: "those", category: "pronouns", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  
  // Articles
  { id: "87", word: "a", category: "articles", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "88", word: "an", category: "articles", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "89", word: "the", category: "articles", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  
  // Conjunctions
  { id: "90", word: "and", category: "conjunctions", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "91", word: "or", category: "conjunctions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "92", word: "but", category: "conjunctions", emotionRelevancy: { happy: 10, sad: 20, angry: 25, fearful: 15, disgusted: 20, surprised: 15, neutral: 60 } },
  { id: "93", word: "so", category: "conjunctions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "94", word: "because", category: "conjunctions", emotionRelevancy: { happy: 15, sad: 20, angry: 25, fearful: 15, disgusted: 15, surprised: 10, neutral: 60 } },
  { id: "95", word: "if", category: "conjunctions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 25, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "96", word: "then", category: "conjunctions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  
  // Question Words
  { id: "97", word: "what", category: "questions", emotionRelevancy: { happy: 10, sad: 15, angry: 20, fearful: 20, disgusted: 20, surprised: 40, neutral: 60 } },
  { id: "98", word: "why", category: "questions", emotionRelevancy: { happy: 10, sad: 20, angry: 30, fearful: 20, disgusted: 25, surprised: 30, neutral: 60 } },
  { id: "99", word: "how", category: "questions", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 25, disgusted: 20, surprised: 30, neutral: 60 } },
  { id: "100", word: "who", category: "questions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 30, neutral: 60 } },
  { id: "101", word: "when", category: "questions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 25, neutral: 60 } },
  { id: "102", word: "where", category: "questions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 25, disgusted: 10, surprised: 25, neutral: 60 } },
  { id: "103", word: "which", category: "questions", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },
  
  // Common Adverbs
  { id: "104", word: "here", category: "adverbs", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "105", word: "there", category: "adverbs", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "106", word: "now", category: "adverbs", emotionRelevancy: { happy: 20, sad: 15, angry: 25, fearful: 25, disgusted: 15, surprised: 20, neutral: 60 } },
  { id: "107", word: "today", category: "adverbs", emotionRelevancy: { happy: 20, sad: 15, angry: 10, fearful: 10, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "108", word: "yesterday", category: "adverbs", emotionRelevancy: { happy: 15, sad: 20, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "109", word: "tomorrow", category: "adverbs", emotionRelevancy: { happy: 25, sad: 15, angry: 10, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "110", word: "very", category: "adverbs", emotionRelevancy: { happy: 15, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "111", word: "really", category: "adverbs", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 20, neutral: 60 } },
  { id: "112", word: "maybe", category: "adverbs", emotionRelevancy: { happy: 10, sad: 15, angry: 10, fearful: 20, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "113", word: "not", category: "adverbs", emotionRelevancy: { happy: 5, sad: 20, angry: 30, fearful: 20, disgusted: 25, surprised: 15, neutral: 60 } },
  
  // Essential Verbs - To Be
  { id: "114", word: "am", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "115", word: "is", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "116", word: "are", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "117", word: "was", category: "verbs", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "118", word: "were", category: "verbs", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "119", word: "be", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "120", word: "been", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  
  // Essential Verbs - To Have
  { id: "121", word: "have", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "122", word: "has", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "123", word: "had", category: "verbs", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  
  // Essential Verbs - To Do
  { id: "124", word: "do", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "125", word: "does", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "126", word: "did", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  
  // Modal Verbs
  { id: "127", word: "can", category: "verbs", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 20, neutral: 65 } },
  { id: "128", word: "could", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "129", word: "will", category: "verbs", emotionRelevancy: { happy: 25, sad: 15, angry: 20, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "130", word: "would", category: "verbs", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "131", word: "should", category: "verbs", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 20, disgusted: 15, surprised: 10, neutral: 65 } },
  { id: "132", word: "must", category: "verbs", emotionRelevancy: { happy: 15, sad: 15, angry: 25, fearful: 20, disgusted: 15, surprised: 15, neutral: 60 } },
  
  // Common Prepositions
  { id: "133", word: "in", category: "prepositions", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "134", word: "on", category: "prepositions", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "135", word: "at", category: "prepositions", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "136", word: "to", category: "prepositions", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "137", word: "from", category: "prepositions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "138", word: "with", category: "prepositions", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "139", word: "for", category: "prepositions", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "140", word: "of", category: "prepositions", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "141", word: "about", category: "prepositions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 20, neutral: 65 } },
  { id: "142", word: "by", category: "prepositions", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "143", word: "up", category: "prepositions", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "144", word: "down", category: "prepositions", emotionRelevancy: { happy: 10, sad: 25, angry: 15, fearful: 15, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "145", word: "out", category: "prepositions", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "146", word: "over", category: "prepositions", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 10, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "147", word: "under", category: "prepositions", emotionRelevancy: { happy: 10, sad: 15, angry: 10, fearful: 20, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "148", word: "into", category: "prepositions", emotionRelevancy: { happy: 20, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
];

export type EmotionType = "happy" | "sad" | "angry" | "fearful" | "disgusted" | "surprised" | "neutral";

export function sortWordsByEmotion(words: AACWord[], emotion: EmotionType): AACWord[] {
  return [...words].sort((a, b) => {
    const scoreA = a.emotionRelevancy[emotion];
    const scoreB = b.emotionRelevancy[emotion];
    
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    
    // If scores are equal and both are 0, randomize
    if (scoreA === 0 && scoreB === 0) {
      return Math.random() - 0.5;
    }
    
    return 0;
  });
}
