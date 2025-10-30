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
  // PRONOUNS (Subject)
  { id: "1", word: "I", category: "pronouns", icon: "User", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "2", word: "you", category: "pronouns", icon: "UserCircle", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "3", word: "he", category: "pronouns", icon: "UserCircle2", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "4", word: "she", category: "pronouns", icon: "UserCircle2", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "5", word: "it", category: "pronouns", icon: "Circle", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 15, surprised: 10, neutral: 60 } },
  { id: "6", word: "we", category: "pronouns", icon: "Users", emotionRelevancy: { happy: 25, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 60 } },
  { id: "7", word: "they", category: "pronouns", icon: "Users2", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "8", word: "me", category: "pronouns", icon: "User", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 20, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "9", word: "us", category: "pronouns", icon: "Users", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "10", word: "him", category: "pronouns", icon: "User", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "11", word: "her", category: "pronouns", icon: "User", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "12", word: "them", category: "pronouns", icon: "Users", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "13", word: "my", category: "pronouns", icon: "Hand", emotionRelevancy: { happy: 15, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "14", word: "your", category: "pronouns", icon: "Hand", emotionRelevancy: { happy: 15, sad: 10, angry: 20, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "15", word: "his", category: "pronouns", icon: "Hand", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "16", word: "our", category: "pronouns", icon: "Handshake", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 60 } },
  { id: "17", word: "their", category: "pronouns", icon: "HandHelping", emotionRelevancy: { happy: 10, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "18", word: "this", category: "pronouns", icon: "Hand", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "19", word: "that", category: "pronouns", icon: "Hand", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "20", word: "these", category: "pronouns", icon: "Scan", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },
  { id: "21", word: "those", category: "pronouns", icon: "Scan", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 10, disgusted: 20, surprised: 20, neutral: 60 } },

  // VERBS / ACTIONS
  { id: "22", word: "am", category: "verbs", icon: "Check", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "23", word: "is", category: "verbs", icon: "Check", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "24", word: "are", category: "verbs", icon: "Check", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "25", word: "was", category: "verbs", icon: "ArrowLeft", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "26", word: "were", category: "verbs", icon: "ArrowLeft", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "27", word: "be", category: "verbs", icon: "Sparkles", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "28", word: "been", category: "verbs", icon: "Check", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "29", word: "have", category: "verbs", icon: "Package", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "30", word: "has", category: "verbs", icon: "Package", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "31", word: "had", category: "verbs", icon: "PackageCheck", emotionRelevancy: { happy: 15, sad: 20, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "32", word: "do", category: "verbs", icon: "Zap", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "33", word: "does", category: "verbs", icon: "Zap", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "34", word: "did", category: "verbs", icon: "CheckCircle", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "35", word: "can", category: "verbs", icon: "ThumbsUp", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 20, neutral: 65 } },
  { id: "36", word: "could", category: "verbs", icon: "ThumbsUp", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "37", word: "will", category: "verbs", icon: "ArrowRight", emotionRelevancy: { happy: 25, sad: 15, angry: 20, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "38", word: "would", category: "verbs", icon: "ArrowRight", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "39", word: "should", category: "verbs", icon: "Info", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 20, disgusted: 15, surprised: 10, neutral: 65 } },
  { id: "40", word: "must", category: "verbs", icon: "AlertCircle", emotionRelevancy: { happy: 15, sad: 15, angry: 25, fearful: 20, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "41", word: "go", category: "actions", icon: "MoveRight", emotionRelevancy: { happy: 40, sad: 10, angry: 15, fearful: 10, disgusted: 5, surprised: 15, neutral: 35 } },
  { id: "42", word: "come", category: "actions", icon: "MoveLeft", emotionRelevancy: { happy: 35, sad: 15, angry: 10, fearful: 20, disgusted: 5, surprised: 15, neutral: 35 } },
  { id: "43", word: "sit", category: "actions", icon: "Armchair", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 5, neutral: 40 } },
  { id: "44", word: "stand", category: "actions", icon: "User", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 5, surprised: 10, neutral: 35 } },
  { id: "45", word: "eat", category: "actions", icon: "Utensils", emotionRelevancy: { happy: 25, sad: 10, angry: 5, fearful: 5, disgusted: 15, surprised: 5, neutral: 40 } },
  { id: "46", word: "drink", category: "actions", icon: "Coffee", emotionRelevancy: { happy: 20, sad: 10, angry: 5, fearful: 5, disgusted: 10, surprised: 5, neutral: 40 } },
  { id: "47", word: "play", category: "actions", icon: "Gamepad2", emotionRelevancy: { happy: 75, sad: 5, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 20 } },
  { id: "48", word: "laugh", category: "actions", icon: "Laugh", emotionRelevancy: { happy: 90, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 15, neutral: 0 } },
  { id: "49", word: "smile", category: "actions", icon: "Smile", emotionRelevancy: { happy: 95, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 5 } },
  { id: "50", word: "cry", category: "actions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 95, angry: 15, fearful: 40, disgusted: 0, surprised: 10, neutral: 0 } },
  { id: "51", word: "help", category: "actions", icon: "HandHelping", emotionRelevancy: { happy: 5, sad: 75, angry: 30, fearful: 80, disgusted: 20, surprised: 20, neutral: 30 } },
  { id: "52", word: "tell", category: "actions", icon: "MessageSquare", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 10, surprised: 20, neutral: 50 } },
  { id: "53", word: "read", category: "actions", icon: "BookOpen", emotionRelevancy: { happy: 30, sad: 10, angry: 5, fearful: 5, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "54", word: "need", category: "actions", icon: "AlertTriangle", emotionRelevancy: { happy: 20, sad: 30, angry: 25, fearful: 30, disgusted: 15, surprised: 10, neutral: 50 } },
  { id: "55", word: "feel", category: "actions", icon: "Heart", emotionRelevancy: { happy: 30, sad: 40, angry: 30, fearful: 30, disgusted: 20, surprised: 30, neutral: 40 } },
  { id: "56", word: "give", category: "actions", icon: "Gift", emotionRelevancy: { happy: 50, sad: 10, angry: 5, fearful: 5, disgusted: 0, surprised: 15, neutral: 30 } },
  { id: "57", word: "hear", category: "actions", icon: "Ear", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 30, neutral: 45 } },
  { id: "58", word: "think", category: "actions", icon: "Brain", emotionRelevancy: { happy: 20, sad: 25, angry: 20, fearful: 25, disgusted: 15, surprised: 25, neutral: 50 } },
  { id: "59", word: "work", category: "actions", icon: "Briefcase", emotionRelevancy: { happy: 25, sad: 20, angry: 15, fearful: 10, disgusted: 10, surprised: 5, neutral: 40 } },
  { id: "60", word: "know", category: "actions", icon: "Lightbulb", emotionRelevancy: { happy: 30, sad: 15, angry: 10, fearful: 15, disgusted: 5, surprised: 40, neutral: 45 } },
  { id: "61", word: "get", category: "actions", icon: "ArrowDownToLine", emotionRelevancy: { happy: 35, sad: 15, angry: 20, fearful: 10, disgusted: 10, surprised: 20, neutral: 40 } },
  { id: "62", word: "use", category: "actions", icon: "Hand", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 50 } },
  { id: "63", word: "make", category: "actions", icon: "Wrench", emotionRelevancy: { happy: 40, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 40 } },
  { id: "64", word: "look", category: "actions", icon: "Eye", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 20, disgusted: 20, surprised: 30, neutral: 45 } },
  { id: "65", word: "wear", category: "actions", icon: "Shirt", emotionRelevancy: { happy: 15, sad: 10, angry: 5, fearful: 5, disgusted: 10, surprised: 10, neutral: 40 } },
  { id: "66", word: "stop", category: "actions", icon: "Hand", emotionRelevancy: { happy: 5, sad: 25, angry: 85, fearful: 70, disgusted: 50, surprised: 20, neutral: 20 } },

  // QUESTIONS
  { id: "67", word: "what", category: "questions", icon: "HelpCircle", emotionRelevancy: { happy: 10, sad: 15, angry: 20, fearful: 20, disgusted: 20, surprised: 40, neutral: 60 } },
  { id: "68", word: "who", category: "questions", icon: "UserCircle", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 30, neutral: 60 } },
  { id: "69", word: "when", category: "questions", icon: "Clock", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 10, surprised: 25, neutral: 60 } },
  { id: "70", word: "where", category: "questions", icon: "MapPin", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 25, disgusted: 10, surprised: 25, neutral: 60 } },
  { id: "71", word: "why", category: "questions", icon: "HelpCircle", emotionRelevancy: { happy: 10, sad: 20, angry: 30, fearful: 20, disgusted: 25, surprised: 30, neutral: 60 } },
  { id: "72", word: "how", category: "questions", icon: "Cog", emotionRelevancy: { happy: 15, sad: 20, angry: 20, fearful: 25, disgusted: 20, surprised: 30, neutral: 60 } },
  { id: "73", word: "which", category: "questions", icon: "GitBranch", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },

  // EMOTIONS
  { id: "74", word: "happy", category: "emotions", icon: "Smile", emotionRelevancy: { happy: 100, sad: 5, angry: 0, fearful: 0, disgusted: 0, surprised: 20, neutral: 10 } },
  { id: "75", word: "sad", category: "emotions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 100, angry: 10, fearful: 20, disgusted: 5, surprised: 5, neutral: 10 } },
  { id: "76", word: "angry", category: "emotions", icon: "Angry", emotionRelevancy: { happy: 0, sad: 10, angry: 100, fearful: 15, disgusted: 40, surprised: 10, neutral: 5 } },
  { id: "77", word: "scared", category: "emotions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 20, angry: 5, fearful: 100, disgusted: 10, surprised: 50, neutral: 5 } },
  { id: "78", word: "surprised", category: "emotions", icon: "Laugh", emotionRelevancy: { happy: 30, sad: 5, angry: 5, fearful: 20, disgusted: 5, surprised: 100, neutral: 10 } },
  { id: "79", word: "excited", category: "emotions", icon: "Sparkles", emotionRelevancy: { happy: 90, sad: 0, angry: 0, fearful: 5, disgusted: 0, surprised: 80, neutral: 0 } },
  { id: "80", word: "love", category: "emotions", icon: "Heart", emotionRelevancy: { happy: 85, sad: 10, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 5 } },
  { id: "81", word: "hurt", category: "emotions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 90, angry: 60, fearful: 30, disgusted: 10, surprised: 10, neutral: 5 } },
  { id: "82", word: "lonely", category: "emotions", icon: "User", emotionRelevancy: { happy: 0, sad: 85, angry: 5, fearful: 25, disgusted: 0, surprised: 0, neutral: 10 } },
  { id: "83", word: "miss", category: "emotions", icon: "Heart", emotionRelevancy: { happy: 10, sad: 80, angry: 0, fearful: 10, disgusted: 0, surprised: 5, neutral: 10 } },
  { id: "84", word: "mad", category: "emotions", icon: "Angry", emotionRelevancy: { happy: 0, sad: 15, angry: 95, fearful: 10, disgusted: 35, surprised: 10, neutral: 5 } },
  { id: "85", word: "annoyed", category: "emotions", icon: "Meh", emotionRelevancy: { happy: 0, sad: 10, angry: 80, fearful: 5, disgusted: 30, surprised: 5, neutral: 10 } },
  { id: "86", word: "frustrated", category: "emotions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 30, angry: 75, fearful: 10, disgusted: 15, surprised: 5, neutral: 10 } },
  { id: "87", word: "afraid", category: "emotions", icon: "Frown", emotionRelevancy: { happy: 0, sad: 25, angry: 5, fearful: 95, disgusted: 5, surprised: 40, neutral: 5 } },
  { id: "88", word: "worried", category: "emotions", icon: "AlertTriangle", emotionRelevancy: { happy: 0, sad: 40, angry: 10, fearful: 85, disgusted: 5, surprised: 10, neutral: 15 } },
  { id: "89", word: "nervous", category: "emotions", icon: "AlertCircle", emotionRelevancy: { happy: 5, sad: 20, angry: 5, fearful: 80, disgusted: 5, surprised: 15, neutral: 10 } },
  { id: "90", word: "disgusted", category: "emotions", icon: "Meh", emotionRelevancy: { happy: 0, sad: 10, angry: 30, fearful: 15, disgusted: 100, surprised: 20, neutral: 5 } },
  { id: "91", word: "tired", category: "emotions", icon: "Moon", emotionRelevancy: { happy: 5, sad: 60, angry: 15, fearful: 10, disgusted: 10, surprised: 0, neutral: 30 } },

  // DESCRIPTORS / ADJECTIVES
  { id: "92", word: "good", category: "descriptors", icon: "ThumbsUp", emotionRelevancy: { happy: 70, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 15, neutral: 20 } },
  { id: "93", word: "bad", category: "descriptors", icon: "ThumbsDown", emotionRelevancy: { happy: 5, sad: 40, angry: 50, fearful: 30, disgusted: 70, surprised: 5, neutral: 20 } },
  { id: "94", word: "great", category: "descriptors", icon: "Star", emotionRelevancy: { happy: 95, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 15, neutral: 5 } },
  { id: "95", word: "fun", category: "descriptors", icon: "Sparkles", emotionRelevancy: { happy: 80, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 10, neutral: 10 } },
  { id: "96", word: "cool", category: "descriptors", icon: "Sparkles", emotionRelevancy: { happy: 60, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 75, neutral: 20 } },
  { id: "97", word: "amazing", category: "descriptors", icon: "Zap", emotionRelevancy: { happy: 70, sad: 0, angry: 0, fearful: 0, disgusted: 0, surprised: 85, neutral: 10 } },
  { id: "98", word: "big", category: "descriptors", icon: "Maximize2", emotionRelevancy: { happy: 15, sad: 5, angry: 10, fearful: 10, disgusted: 5, surprised: 20, neutral: 40 } },
  { id: "99", word: "little", category: "descriptors", icon: "Minimize2", emotionRelevancy: { happy: 15, sad: 10, angry: 5, fearful: 5, disgusted: 5, surprised: 15, neutral: 40 } },
  { id: "100", word: "new", category: "descriptors", icon: "Sparkles", emotionRelevancy: { happy: 40, sad: 5, angry: 5, fearful: 10, disgusted: 5, surprised: 30, neutral: 30 } },
  { id: "101", word: "old", category: "descriptors", icon: "Clock", emotionRelevancy: { happy: 10, sad: 20, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 40 } },
  { id: "102", word: "hot", category: "descriptors", icon: "Flame", emotionRelevancy: { happy: 20, sad: 10, angry: 25, fearful: 20, disgusted: 15, surprised: 15, neutral: 30 } },
  { id: "103", word: "cold", category: "descriptors", icon: "Snowflake", emotionRelevancy: { happy: 10, sad: 20, angry: 10, fearful: 15, disgusted: 15, surprised: 10, neutral: 35 } },
  { id: "104", word: "safe", category: "descriptors", icon: "Shield", emotionRelevancy: { happy: 40, sad: 10, angry: 0, fearful: 70, disgusted: 0, surprised: 5, neutral: 30 } },
  { id: "105", word: "easy", category: "descriptors", icon: "Check", emotionRelevancy: { happy: 30, sad: 10, angry: 5, fearful: 10, disgusted: 5, surprised: 10, neutral: 40 } },
  { id: "106", word: "difficult", category: "descriptors", icon: "AlertTriangle", emotionRelevancy: { happy: 5, sad: 30, angry: 25, fearful: 20, disgusted: 15, surprised: 10, neutral: 30 } },
  { id: "107", word: "near", category: "descriptors", icon: "Target", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 15, disgusted: 5, surprised: 10, neutral: 40 } },
  { id: "108", word: "far", category: "descriptors", icon: "Move", emotionRelevancy: { happy: 10, sad: 15, angry: 10, fearful: 15, disgusted: 5, surprised: 10, neutral: 40 } },
  { id: "109", word: "different", category: "descriptors", icon: "Shuffle", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 15, surprised: 25, neutral: 40 } },
  { id: "110", word: "same", category: "descriptors", icon: "Equal", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 5, surprised: 15, neutral: 45 } },

  // RESPONSES / SOCIAL
  { id: "111", word: "yes", category: "responses", icon: "CheckCircle", emotionRelevancy: { happy: 60, sad: 10, angry: 10, fearful: 5, disgusted: 5, surprised: 30, neutral: 40 } },
  { id: "112", word: "no", category: "responses", icon: "XCircle", emotionRelevancy: { happy: 10, sad: 20, angry: 90, fearful: 40, disgusted: 60, surprised: 30, neutral: 40 } },
  { id: "113", word: "please", category: "responses", icon: "Heart", emotionRelevancy: { happy: 35, sad: 25, angry: 5, fearful: 30, disgusted: 5, surprised: 10, neutral: 45 } },
  { id: "114", word: "thank you", category: "responses", icon: "Heart", emotionRelevancy: { happy: 60, sad: 10, angry: 0, fearful: 5, disgusted: 0, surprised: 20, neutral: 30 } },
  { id: "115", word: "sorry", category: "responses", icon: "Frown", emotionRelevancy: { happy: 5, sad: 70, angry: 10, fearful: 20, disgusted: 5, surprised: 10, neutral: 10 } },
  { id: "116", word: "hello", category: "responses", icon: "Hand", emotionRelevancy: { happy: 50, sad: 5, angry: 0, fearful: 5, disgusted: 0, surprised: 15, neutral: 35 } },
  { id: "117", word: "goodbye", category: "responses", icon: "Hand", emotionRelevancy: { happy: 20, sad: 30, angry: 5, fearful: 10, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "118", word: "okay", category: "responses", icon: "Check", emotionRelevancy: { happy: 30, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 15, neutral: 45 } },
  { id: "119", word: "wow", category: "responses", icon: "Star", emotionRelevancy: { happy: 50, sad: 0, angry: 0, fearful: 10, disgusted: 0, surprised: 95, neutral: 5 } },
  { id: "120", word: "yuck", category: "responses", icon: "X", emotionRelevancy: { happy: 0, sad: 5, angry: 20, fearful: 10, disgusted: 95, surprised: 10, neutral: 0 } },
  { id: "121", word: "gross", category: "responses", icon: "X", emotionRelevancy: { happy: 0, sad: 5, angry: 25, fearful: 15, disgusted: 90, surprised: 15, neutral: 0 } },

  // ARTICLES
  { id: "122", word: "a", category: "articles", icon: "Type", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "123", word: "an", category: "articles", icon: "Type", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "124", word: "the", category: "articles", icon: "Type", emotionRelevancy: { happy: 10, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "125", word: "some", category: "articles", icon: "List", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "126", word: "all", category: "articles", icon: "List", emotionRelevancy: { happy: 20, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "127", word: "more", category: "articles", icon: "Plus", emotionRelevancy: { happy: 30, sad: 10, angry: 20, fearful: 5, disgusted: 5, surprised: 15, neutral: 40 } },

  // CONJUNCTIONS / CONNECTORS
  { id: "128", word: "and", category: "conjunctions", icon: "Plus", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "129", word: "or", category: "conjunctions", icon: "GitBranch", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 15, neutral: 65 } },
  { id: "130", word: "but", category: "conjunctions", icon: "X", emotionRelevancy: { happy: 10, sad: 20, angry: 25, fearful: 15, disgusted: 20, surprised: 15, neutral: 60 } },
  { id: "131", word: "so", category: "conjunctions", icon: "ArrowRight", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "132", word: "because", category: "conjunctions", icon: "HelpCircle", emotionRelevancy: { happy: 15, sad: 20, angry: 25, fearful: 15, disgusted: 15, surprised: 10, neutral: 60 } },
  { id: "133", word: "if", category: "conjunctions", icon: "GitBranch", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 25, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "134", word: "then", category: "conjunctions", icon: "ArrowRight", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "135", word: "with", category: "conjunctions", icon: "Users", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 15, neutral: 65 } },

  // PREPOSITIONS
  { id: "136", word: "in", category: "prepositions", icon: "ArrowDownToSquare", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "137", word: "on", category: "prepositions", icon: "Square", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "138", word: "at", category: "prepositions", icon: "MapPin", emotionRelevancy: { happy: 15, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "139", word: "to", category: "prepositions", icon: "ArrowRight", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "140", word: "from", category: "prepositions", icon: "ArrowLeft", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "141", word: "for", category: "prepositions", icon: "Gift", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 65 } },
  { id: "142", word: "of", category: "prepositions", icon: "Link", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "143", word: "about", category: "prepositions", icon: "Info", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 20, disgusted: 15, surprised: 20, neutral: 65 } },
  { id: "144", word: "by", category: "prepositions", icon: "User", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 65 } },
  { id: "145", word: "up", category: "prepositions", icon: "ArrowUp", emotionRelevancy: { happy: 25, sad: 10, angry: 15, fearful: 10, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "146", word: "down", category: "prepositions", icon: "ArrowDown", emotionRelevancy: { happy: 10, sad: 25, angry: 15, fearful: 15, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "147", word: "out", category: "prepositions", icon: "LogOut", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "148", word: "over", category: "prepositions", icon: "ArrowUpRight", emotionRelevancy: { happy: 15, sad: 15, angry: 15, fearful: 10, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "149", word: "under", category: "prepositions", icon: "ArrowDownRight", emotionRelevancy: { happy: 10, sad: 15, angry: 10, fearful: 20, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "150", word: "into", category: "prepositions", icon: "ArrowRightToLine", emotionRelevancy: { happy: 20, sad: 10, angry: 15, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },

  // TEMPORAL / TIME
  { id: "151", word: "now", category: "temporal", icon: "Clock", emotionRelevancy: { happy: 20, sad: 15, angry: 25, fearful: 25, disgusted: 15, surprised: 20, neutral: 60 } },
  { id: "152", word: "today", category: "temporal", icon: "Calendar", emotionRelevancy: { happy: 20, sad: 15, angry: 10, fearful: 10, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "153", word: "yesterday", category: "temporal", icon: "CalendarMinus", emotionRelevancy: { happy: 15, sad: 20, angry: 10, fearful: 10, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "154", word: "tomorrow", category: "temporal", icon: "CalendarPlus", emotionRelevancy: { happy: 25, sad: 15, angry: 10, fearful: 15, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "155", word: "again", category: "temporal", icon: "RefreshCw", emotionRelevancy: { happy: 20, sad: 15, angry: 15, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "156", word: "always", category: "temporal", icon: "Infinity", emotionRelevancy: { happy: 25, sad: 20, angry: 20, fearful: 15, disgusted: 10, surprised: 10, neutral: 60 } },
  { id: "157", word: "never", category: "temporal", icon: "Ban", emotionRelevancy: { happy: 5, sad: 25, angry: 30, fearful: 20, disgusted: 25, surprised: 15, neutral: 55 } },

  // ADVERBS
  { id: "158", word: "here", category: "adverbs", icon: "MapPin", emotionRelevancy: { happy: 20, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "159", word: "there", category: "adverbs", icon: "Map", emotionRelevancy: { happy: 15, sad: 10, angry: 10, fearful: 15, disgusted: 10, surprised: 20, neutral: 60 } },
  { id: "160", word: "very", category: "adverbs", icon: "Plus", emotionRelevancy: { happy: 15, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 15, neutral: 60 } },
  { id: "161", word: "really", category: "adverbs", icon: "Zap", emotionRelevancy: { happy: 20, sad: 15, angry: 20, fearful: 15, disgusted: 15, surprised: 20, neutral: 60 } },
  { id: "162", word: "maybe", category: "adverbs", icon: "HelpCircle", emotionRelevancy: { happy: 10, sad: 15, angry: 10, fearful: 20, disgusted: 10, surprised: 15, neutral: 60 } },
  { id: "163", word: "not", category: "adverbs", icon: "X", emotionRelevancy: { happy: 5, sad: 20, angry: 30, fearful: 20, disgusted: 25, surprised: 15, neutral: 60 } },
  { id: "164", word: "away", category: "adverbs", icon: "MoveRight", emotionRelevancy: { happy: 10, sad: 20, angry: 15, fearful: 20, disgusted: 10, surprised: 10, neutral: 55 } },
  { id: "165", word: "together", category: "adverbs", icon: "Users", emotionRelevancy: { happy: 40, sad: 10, angry: 5, fearful: 10, disgusted: 5, surprised: 15, neutral: 50 } },

  // PEOPLE
  { id: "166", word: "friend", category: "people", icon: "UserPlus", emotionRelevancy: { happy: 70, sad: 15, angry: 5, fearful: 10, disgusted: 0, surprised: 10, neutral: 20 } },
  { id: "167", word: "mom", category: "people", icon: "User", emotionRelevancy: { happy: 40, sad: 30, angry: 10, fearful: 25, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "168", word: "dad", category: "people", icon: "User", emotionRelevancy: { happy: 40, sad: 30, angry: 10, fearful: 25, disgusted: 0, surprised: 10, neutral: 35 } },
  { id: "169", word: "teacher", category: "people", icon: "GraduationCap", emotionRelevancy: { happy: 25, sad: 15, angry: 10, fearful: 20, disgusted: 5, surprised: 10, neutral: 35 } },

  // OBJECTS / THINGS
  { id: "170", word: "toy", category: "objects", icon: "Blocks", emotionRelevancy: { happy: 45, sad: 5, angry: 5, fearful: 0, disgusted: 0, surprised: 10, neutral: 25 } },
  { id: "171", word: "book", category: "objects", icon: "BookOpen", emotionRelevancy: { happy: 30, sad: 10, angry: 5, fearful: 0, disgusted: 0, surprised: 10, neutral: 30 } },
  { id: "172", word: "ball", category: "objects", icon: "Circle", emotionRelevancy: { happy: 40, sad: 0, angry: 5, fearful: 0, disgusted: 0, surprised: 5, neutral: 25 } },
  { id: "173", word: "food", category: "objects", icon: "Utensils", emotionRelevancy: { happy: 30, sad: 5, angry: 5, fearful: 5, disgusted: 20, surprised: 5, neutral: 35 } },
  { id: "174", word: "water", category: "objects", icon: "Droplet", emotionRelevancy: { happy: 15, sad: 10, angry: 5, fearful: 5, disgusted: 5, surprised: 5, neutral: 40 } },
  { id: "175", word: "chair", category: "objects", icon: "Armchair", emotionRelevancy: { happy: 5, sad: 5, angry: 5, fearful: 5, disgusted: 0, surprised: 0, neutral: 35 } },
  { id: "176", word: "table", category: "objects", icon: "Box", emotionRelevancy: { happy: 5, sad: 5, angry: 5, fearful: 5, disgusted: 0, surprised: 0, neutral: 35 } },
  { id: "177", word: "door", category: "objects", icon: "DoorOpen", emotionRelevancy: { happy: 5, sad: 5, angry: 10, fearful: 15, disgusted: 0, surprised: 5, neutral: 30 } },
  { id: "178", word: "window", category: "objects", icon: "Square", emotionRelevancy: { happy: 10, sad: 10, angry: 5, fearful: 10, disgusted: 0, surprised: 5, neutral: 30 } },
  { id: "179", word: "car", category: "objects", icon: "Car", emotionRelevancy: { happy: 30, sad: 5, angry: 10, fearful: 15, disgusted: 0, surprised: 10, neutral: 30 } },

  // PLACES
  { id: "180", word: "home", category: "places", icon: "Home", emotionRelevancy: { happy: 40, sad: 20, angry: 5, fearful: 10, disgusted: 0, surprised: 5, neutral: 35 } },
  { id: "181", word: "outside", category: "places", icon: "TreePine", emotionRelevancy: { happy: 40, sad: 10, angry: 5, fearful: 10, disgusted: 5, surprised: 15, neutral: 30 } },
  { id: "182", word: "bathroom", category: "places", icon: "Bath", emotionRelevancy: { happy: 5, sad: 5, angry: 10, fearful: 15, disgusted: 25, surprised: 0, neutral: 35 } },

  // REQUESTS / NEEDS
  { id: "183", word: "want", category: "requests", icon: "Heart", emotionRelevancy: { happy: 30, sad: 20, angry: 25, fearful: 15, disgusted: 10, surprised: 15, neutral: 50 } },
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
