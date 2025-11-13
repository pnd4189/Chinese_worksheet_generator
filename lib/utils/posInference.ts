/**
 * Infers part of speech from English definition
 * This is a simple heuristic-based approach
 */

export function inferPOSFromDefinition(definition: string): string {
  if (!definition) return '';

  const lowerDef = definition.toLowerCase().trim();

  // Verb patterns
  if (lowerDef.startsWith('to ')) {
    return 'v'; // verb
  }

  // Interjection patterns
  if (lowerDef.includes('interjection') || lowerDef.includes('exclamation')) {
    return 'e'; // interjection
  }

  // Particle patterns
  if (lowerDef.includes('particle') || lowerDef.includes('modal')) {
    return 'y'; // modal particle
  }

  // Measure word patterns
  if (lowerDef.includes('measure word') || lowerDef.includes('classifier')) {
    return 'm'; // measure word
  }

  // Pronoun patterns
  if (lowerDef.includes('pronoun') || ['i', 'you', 'he', 'she', 'it', 'they', 'we'].some(p => lowerDef === p)) {
    return 'r'; // pronoun
  }

  // Conjunction patterns
  if (lowerDef.includes('conjunction') || ['and', 'or', 'but', 'if'].some(c => lowerDef === c)) {
    return 'c'; // conjunction
  }

  // Preposition patterns
  if (lowerDef.includes('preposition') || ['in', 'on', 'at', 'to', 'from', 'with'].some(p => lowerDef.split(' ')[0] === p && lowerDef.split(' ').length < 3)) {
    return 'p'; // preposition
  }

  // Number patterns
  if (/^(one|two|three|four|five|six|seven|eight|nine|ten|\d+)$/.test(lowerDef)) {
    return 'q'; // numeral
  }

  // Adjective patterns (common adjectives or describing words)
  const adjKeywords = ['big', 'small', 'good', 'bad', 'hot', 'cold', 'new', 'old', 'happy', 'sad', 'beautiful', 'ugly'];
  if (adjKeywords.some(adj => lowerDef === adj || lowerDef.startsWith(adj + ';'))) {
    return 'a'; // adjective
  }

  // Time patterns
  if (lowerDef.includes('time') || lowerDef.includes('day') || lowerDef.includes('year') || lowerDef.includes('hour')) {
    return 't'; // time word
  }

  // Location patterns
  if (lowerDef.includes('place') || lowerDef.includes('location') || ['here', 'there', 'where'].some(l => lowerDef.startsWith(l))) {
    return 's'; // location
  }

  // Adverb patterns
  if (lowerDef.includes('adverb') || lowerDef.endsWith('ly')) {
    return 'd'; // adverb
  }

  // Default to noun
  return 'n'; // noun
}
