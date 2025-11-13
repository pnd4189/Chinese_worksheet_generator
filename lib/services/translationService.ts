/**
 * AI Translation Service with Caching
 * Uses GLM-4-Flash API via Next.js API route
 */

interface TranslationCache {
  [key: string]: string;
}

const CACHE_KEY = 'chinese_worksheet_translations';
const CACHE_VERSION = 'v1';
const CACHE_KEY_WITH_VERSION = `${CACHE_KEY}_${CACHE_VERSION}`;

/**
 * Get cached translation from localStorage
 */
function getCachedTranslation(character: string, targetLanguage: string): string | null {
  if (typeof window === 'undefined') return null;

  try {
    const cacheStr = localStorage.getItem(CACHE_KEY_WITH_VERSION);
    if (!cacheStr) return null;

    const cache: TranslationCache = JSON.parse(cacheStr);
    const cacheKey = `${character}:${targetLanguage}`;
    return cache[cacheKey] || null;
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

/**
 * Save translation to localStorage cache
 */
function setCachedTranslation(character: string, targetLanguage: string, translation: string): void {
  if (typeof window === 'undefined') return;

  try {
    const cacheStr = localStorage.getItem(CACHE_KEY_WITH_VERSION);
    const cache: TranslationCache = cacheStr ? JSON.parse(cacheStr) : {};

    const cacheKey = `${character}:${targetLanguage}`;
    cache[cacheKey] = translation;

    localStorage.setItem(CACHE_KEY_WITH_VERSION, JSON.stringify(cache));
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

/**
 * Clear translation cache
 */
export function clearTranslationCache(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CACHE_KEY_WITH_VERSION);
  } catch (error) {
    console.error('Cache clear error:', error);
  }
}

/**
 * Get cache statistics
 */
export function getTranslationCacheStats(): { size: number; entries: number } {
  if (typeof window === 'undefined') return { size: 0, entries: 0 };

  try {
    const cacheStr = localStorage.getItem(CACHE_KEY_WITH_VERSION);
    if (!cacheStr) return { size: 0, entries: 0 };

    const cache: TranslationCache = JSON.parse(cacheStr);
    return {
      size: new Blob([cacheStr]).size,
      entries: Object.keys(cache).length,
    };
  } catch (error) {
    console.error('Cache stats error:', error);
    return { size: 0, entries: 0 };
  }
}

interface TranslationResult {
  translation: string;
  cached: boolean;
  error?: string;
}

/**
 * Translate a Chinese character definition using AI
 * Automatically caches results to reduce API calls
 *
 * @param character - Chinese character
 * @param definition - English definition
 * @param targetLanguage - Target language code (e.g., 'vi', 'fr', 'ja')
 * @returns Translation result with caching info
 */
export async function translateWithAI(
  character: string,
  definition: string,
  targetLanguage: string
): Promise<TranslationResult> {
  // Check cache first
  const cached = getCachedTranslation(character, targetLanguage);
  if (cached) {
    return {
      translation: cached,
      cached: true,
    };
  }

  // Call API
  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        character,
        definition,
        targetLanguage,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Translation failed');
    }

    const data = await response.json();
    const translation = data.translation;

    // Cache the result
    setCachedTranslation(character, targetLanguage, translation);

    return {
      translation,
      cached: false,
    };
  } catch (error) {
    console.error('Translation error:', error);
    return {
      translation: definition, // Fallback to English
      cached: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Batch translate multiple characters
 * Uses parallel requests with cache checking
 *
 * @param items - Array of {character, definition} objects
 * @param targetLanguage - Target language code
 * @returns Array of translations
 */
export async function batchTranslate(
  items: Array<{ character: string; definition: string }>,
  targetLanguage: string
): Promise<TranslationResult[]> {
  const promises = items.map(({ character, definition }) =>
    translateWithAI(character, definition, targetLanguage)
  );

  return Promise.all(promises);
}
