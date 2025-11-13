/**
 * Distributes characters across exactly 10 rows
 * If fewer than 10 characters, repeats some characters to fill 10 rows
 *
 * @param chars - Array of characters to distribute
 * @returns Array of 10 characters (with repeats if needed)
 *
 * @example
 * distributeCharactersTo10Rows(['你', '好'])
 * // Returns: ['你', '你', '你', '你', '你', '好', '好', '好', '好', '好']
 *
 * distributeCharactersTo10Rows(['我', '爱', '你', '中'])
 * // Returns: ['我', '我', '我', '爱', '爱', '爱', '你', '你', '中', '中']
 */
export function distributeCharactersTo10Rows(chars: string[]): string[] {
  if (chars.length === 0) return [];
  if (chars.length >= 10) return chars.slice(0, 10);

  const targetRows = 10;
  const numChars = chars.length;
  const baseRepeat = Math.floor(targetRows / numChars);
  const extraRows = targetRows % numChars;

  const distributed: string[] = [];

  chars.forEach((char, index) => {
    // First 'extraRows' characters get one extra row
    const repeatCount = index < extraRows ? baseRepeat + 1 : baseRepeat;

    for (let i = 0; i < repeatCount; i++) {
      distributed.push(char);
    }
  });

  return distributed;
}

/**
 * Calculates how many times each character appears in the distribution
 *
 * @param chars - Original array of characters
 * @returns Map of character to repeat count
 *
 * @example
 * getCharacterRepeatCounts(['你', '好', '世', '界'])
 * // Returns: Map { '你' => 3, '好' => 3, '世' => 2, '界' => 2 }
 */
export function getCharacterRepeatCounts(chars: string[]): Map<string, number> {
  if (chars.length === 0) return new Map();
  if (chars.length >= 10) {
    const counts = new Map<string, number>();
    chars.slice(0, 10).forEach(char => counts.set(char, 1));
    return counts;
  }

  const targetRows = 10;
  const numChars = chars.length;
  const baseRepeat = Math.floor(targetRows / numChars);
  const extraRows = targetRows % numChars;

  const counts = new Map<string, number>();

  chars.forEach((char, index) => {
    const repeatCount = index < extraRows ? baseRepeat + 1 : baseRepeat;
    counts.set(char, repeatCount);
  });

  return counts;
}
