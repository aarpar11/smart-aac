// Category color mappings based on AAC standard color schemes
export const categoryColors: Record<string, string> = {
  // Core/Social categories - Yellow family
  "Communication Aid": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  "People Feelings": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  "People Descriptive": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  "People Profession": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  "People Relationship": "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  
  // Actions/Verbs - Red/Pink family
  "Food Kitchen actions": "bg-red-100 border-red-300 hover:bg-red-200",
  "Healthcare Grooming activities": "bg-pink-100 border-pink-300 hover:bg-pink-200",
  "Animal Activity Grooming": "bg-pink-100 border-pink-300 hover:bg-pink-200",
  
  // Descriptors - Green family
  "Descriptive Position": "bg-green-100 border-green-300 hover:bg-green-200",
  "Descriptive Direction": "bg-green-100 border-green-300 hover:bg-green-200",
  "Descriptive State": "bg-green-100 border-green-300 hover:bg-green-200",
  "Descriptive Shape": "bg-green-100 border-green-300 hover:bg-green-200",
  "Descriptive Quantity": "bg-green-100 border-green-300 hover:bg-green-200",
  
  // Nouns/Objects - Blue family
  "Food Fruit": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Food Vegetables and salads": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Food Breads and baking": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Food Meat": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Food Nuts": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Food Kitchen items": "bg-orange-100 border-orange-300 hover:bg-orange-200",
  "Drink Type": "bg-blue-100 border-blue-300 hover:bg-blue-200",
  
  // Questions - Purple family
  "Computer Icon": "bg-purple-100 border-purple-300 hover:bg-purple-200",
  
  // Building/Places - Brown family
  "Building Furniture": "bg-amber-100 border-amber-300 hover:bg-amber-200",
  "Building School": "bg-amber-100 border-amber-300 hover:bg-amber-200",
  "Building Public": "bg-amber-100 border-amber-300 hover:bg-amber-200",
  "Building Contents": "bg-amber-100 border-amber-300 hover:bg-amber-200",
  "Building Garden and farm": "bg-amber-100 border-amber-300 hover:bg-amber-200",
  
  // Animals - Orange family  
  "Animal Birds": "bg-orange-200 border-orange-400 hover:bg-orange-300",
  "Animal Mammal": "bg-orange-200 border-orange-400 hover:bg-orange-300",
  "Animal Spiders and Insects": "bg-orange-200 border-orange-400 hover:bg-orange-300",
  "Animal Features": "bg-orange-200 border-orange-400 hover:bg-orange-300",
  "Animal Habitat": "bg-orange-200 border-orange-400 hover:bg-orange-300",
  
  // Default fallback - Gray
  "default": "bg-gray-100 border-gray-300 hover:bg-gray-200"
};

// Map common AAC word categories to CSV categories
export const categoryMapping: Record<string, string> = {
  // Pronouns map to social/people
  "pronouns": "People Descriptive",
  
  // Verbs/Actions map to action categories
  "verbs": "Food Kitchen actions",
  "actions": "Food Kitchen actions",
  
  // Questions stay as questions
  "questions": "Computer Icon",
  
  // Emotions map to feelings
  "emotions": "People Feelings",
  
  // Descriptors
  "descriptors": "Descriptive State",
  
  // Responses are social
  "responses": "Communication Aid",
  
  // Grammar words
  "articles": "Descriptive State",
  "conjunctions": "Descriptive State",
  "prepositions": "Descriptive Position",
  
  // Time words
  "temporal": "Descriptive Time",
  "adverbs": "Descriptive State",
  
  // Nouns
  "people": "People Descriptive",
  "objects": "Building Contents",
  "places": "Building Public",
  "requests": "Communication Aid"
};

export function getCategoryColor(category: string): string {
  // First try to get mapped category
  const mappedCategory = categoryMapping[category.toLowerCase()];
  if (mappedCategory && categoryColors[mappedCategory]) {
    return categoryColors[mappedCategory];
  }
  
  // Try direct category match
  if (categoryColors[category]) {
    return categoryColors[category];
  }
  
  // Return default
  return categoryColors.default;
}
