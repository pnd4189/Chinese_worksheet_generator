/**
 * Maps part of speech codes to full names
 * Based on Chinese grammar classification
 */

export const POS_MAP: Record<string, string> = {
  // Nouns
  'n': 'noun',
  'nz': 'proper noun',

  // Verbs
  'v': 'verb',
  'vd': 'auxiliary verb',
  'vn': 'verbal noun',

  // Adjectives
  'a': 'adjective',
  'an': 'adjective noun',

  // Adverbs
  'd': 'adverb',
  'ad': 'adverb',

  // Pronouns
  'r': 'pronoun',
  'rz': 'demonstrative',
  'ry': 'interrogative',
  'rr': 'personal pronoun',
  'rg': 'general pronoun',

  // Numerals & Quantifiers
  'm': 'measure word',
  'mq': 'numeral-measure',
  'q': 'quantifier',

  // Function Words
  'c': 'conjunction',
  'p': 'preposition',
  'u': 'particle',
  'e': 'interjection',
  'y': 'modal particle',
  'o': 'onomatopoeia',
  'h': 'prefix',
  'k': 'suffix',

  // Time & Location
  't': 'time word',
  'tg': 'time noun',
  's': 'location',
  'f': 'direction',

  // Others
  'b': 'distinction word',
  'z': 'status word',
  'g': 'morpheme',
  'x': 'character string',
  'w': 'punctuation',
  'i': 'idiom',
  'l': 'set phrase',
  'j': 'abbreviation',
};

/**
 * Converts POS code(s) to readable format
 * @param pos - Single POS code or array of codes
 * @returns Human-readable POS string
 */
export function formatPOS(pos: string | string[] | undefined): string {
  if (!pos) return '';

  const codes = Array.isArray(pos) ? pos : [pos];
  const names = codes
    .map(code => POS_MAP[code] || code)
    .filter(Boolean)
    .slice(0, 2); // Show max 2 POS types

  return names.join(', ');
}

/**
 * Gets short POS label (first letter uppercase)
 * @param pos - Single POS code, array of codes, or comma-separated string
 * @returns Short label like "N", "V", "Adj"
 */
export function getShortPOS(pos: string | string[] | undefined): string {
  if (!pos) return '';

  // Handle comma-separated string from HSK dictionary
  let codes: string[];
  if (Array.isArray(pos)) {
    codes = pos;
  } else {
    codes = pos.split(',').map(c => c.trim());
  }
  const firstCode = codes[0];

  const shortMap: Record<string, string> = {
    'n': 'N',
    'nz': 'PN',
    'nr': 'PN',
    'v': 'V',
    'vd': 'Aux',
    'vn': 'V-N',
    'a': 'Adj',
    'ad': 'Adv',
    'd': 'Adv',
    'r': 'Pron',
    'm': 'MW',
    'q': 'Quant',
    'c': 'Conj',
    'p': 'Prep',
    'u': 'Part',
    'e': 'Interj',
    'y': 'Part',
    't': 'Time',
    's': 'Loc',
    'f': 'Dir',
    'b': 'Dist',
    'g': 'Morph',
    'i': 'Idiom',
  };

  return shortMap[firstCode] || firstCode.toUpperCase();
}
