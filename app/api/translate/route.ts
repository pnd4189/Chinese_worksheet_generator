import { NextRequest, NextResponse } from 'next/server';

// API endpoints
const GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const AZURE_TRANSLATOR_URL = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

// Microsoft Translator language code mapping (ISO 639-1)
const MS_TRANSLATOR_LANG_MAP: Record<string, string> = {
  'vi': 'vi', 'zh': 'zh-Hans', 'ja': 'ja', 'ko': 'ko', 'th': 'th',
  'id': 'id', 'ms': 'ms', 'tl': 'fil', 'hi': 'hi', 'bn': 'bn',
  'ta': 'ta', 'te': 'te', 'ur': 'ur', 'fa': 'fa', 'ar': 'ar',
  'he': 'he', 'tr': 'tr', 'fr': 'fr', 'de': 'de', 'es': 'es',
  'it': 'it', 'pt': 'pt', 'ru': 'ru', 'pl': 'pl', 'nl': 'nl',
  'sv': 'sv', 'no': 'nb', 'da': 'da', 'fi': 'fi', 'el': 'el',
  'cs': 'cs', 'ro': 'ro', 'hu': 'hu', 'bg': 'bg', 'hr': 'hr',
  'sr': 'sr-Latn', 'sk': 'sk', 'sl': 'sl', 'sq': 'sq', 'lt': 'lt',
  'lv': 'lv', 'et': 'et', 'uk': 'uk', 'be': 'be', 'ka': 'ka',
  'hy': 'hy', 'az': 'az', 'kk': 'kk', 'uz': 'uz', 'mn': 'mn',
  'my': 'my', 'km': 'km', 'lo': 'lo', 'ne': 'ne', 'si': 'si',
  'am': 'am', 'ti': 'ti', 'so': 'so', 'sw': 'sw', 'yo': 'yo',
  'ig': 'ig', 'ha': 'ha', 'zu': 'zu', 'xh': 'xh', 'af': 'af',
  'mr': 'mr', 'gu': 'gu', 'kn': 'kn', 'ml': 'ml', 'pa': 'pa',
  'is': 'is', 'ga': 'ga', 'cy': 'cy', 'mt': 'mt',
  'eu': 'eu', 'ca': 'ca', 'gl': 'gl', 'la': 'la'
};

// Language names for GLM prompts
const LANGUAGE_NAMES: Record<string, string> = {
  'vi': 'Vietnamese', 'zh': 'Chinese', 'ja': 'Japanese', 'ko': 'Korean',
  'th': 'Thai', 'id': 'Indonesian', 'ms': 'Malay', 'tl': 'Filipino',
  'hi': 'Hindi', 'bn': 'Bengali', 'ta': 'Tamil', 'te': 'Telugu',
  'ur': 'Urdu', 'fa': 'Persian', 'ar': 'Arabic', 'he': 'Hebrew',
  'tr': 'Turkish', 'fr': 'French', 'de': 'German', 'es': 'Spanish',
  'it': 'Italian', 'pt': 'Portuguese', 'ru': 'Russian', 'pl': 'Polish',
  'nl': 'Dutch', 'sv': 'Swedish', 'no': 'Norwegian', 'da': 'Danish',
  'fi': 'Finnish', 'el': 'Greek', 'cs': 'Czech', 'ro': 'Romanian',
  'hu': 'Hungarian', 'bg': 'Bulgarian', 'hr': 'Croatian', 'sr': 'Serbian',
  'sk': 'Slovak', 'sl': 'Slovenian', 'sq': 'Albanian', 'lt': 'Lithuanian',
  'lv': 'Latvian', 'et': 'Estonian', 'uk': 'Ukrainian', 'be': 'Belarusian',
  'ka': 'Georgian', 'hy': 'Armenian', 'az': 'Azerbaijani', 'kk': 'Kazakh',
  'uz': 'Uzbek', 'mn': 'Mongolian', 'my': 'Burmese', 'km': 'Khmer',
  'lo': 'Lao', 'ne': 'Nepali', 'si': 'Sinhala', 'am': 'Amharic',
  'ti': 'Tigrinya', 'so': 'Somali', 'sw': 'Swahili', 'yo': 'Yoruba',
  'ig': 'Igbo', 'ha': 'Hausa', 'zu': 'Zulu', 'xh': 'Xhosa', 'af': 'Afrikaans'
};

interface TranslateRequest {
  character: string;
  definition: string;
  targetLanguage: string;
}

interface TranslationResult {
  translation: string;
  provider: string;
}

/**
 * Translate using Microsoft Translator API
 * Rate limits: 2M chars/month, 33K chars/min
 */
async function translateWithMicrosoft(
  text: string,
  targetLanguage: string
): Promise<TranslationResult> {
  const apiKey = process.env.AZURE_TRANSLATOR_KEY;
  const region = process.env.AZURE_TRANSLATOR_REGION || 'eastus';

  if (!apiKey || apiKey.trim() === '') {
    throw new Error('AZURE_TRANSLATOR_KEY not configured');
  }

  const targetLang = MS_TRANSLATOR_LANG_MAP[targetLanguage] || targetLanguage;
  const url = `${AZURE_TRANSLATOR_URL}&to=${targetLang}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': apiKey,
      'Ocp-Apim-Subscription-Region': region,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{ text }]),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Microsoft Translator error: ${errorText}`);
  }

  const data = await response.json();
  const translation = data[0]?.translations?.[0]?.text;

  if (!translation) {
    throw new Error('No translation returned from Microsoft Translator');
  }

  return {
    translation,
    provider: 'microsoft_translator',
  };
}

/**
 * Translate using GLM-4-Flash API
 * Rate limits: Unknown (likely lower than Microsoft)
 */
async function translateWithGLM(
  character: string,
  definition: string,
  targetLanguage: string
): Promise<TranslationResult> {
  const apiKey = process.env.GLM_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    throw new Error('GLM_API_KEY not configured');
  }

  const languageName = LANGUAGE_NAMES[targetLanguage] || targetLanguage;
  const prompt = `Translate this Chinese character definition to ${languageName}. Be concise.

Character: ${character}
English: ${definition}

${languageName} translation:`;

  const response = await fetch(GLM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'glm-4-flash',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 100,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GLM API error: ${errorText}`);
  }

  const data = await response.json();
  const translation = data.choices?.[0]?.message?.content?.trim();

  if (!translation) {
    throw new Error('No translation returned from GLM');
  }

  return {
    translation,
    provider: 'glm_flash',
  };
}

/**
 * Main translation handler with fallback mechanism
 */
export async function POST(request: NextRequest) {
  try {
    const { character, definition, targetLanguage } = await request.json() as TranslateRequest;

    // Validate input
    if (!character || !definition || !targetLanguage) {
      return NextResponse.json(
        { error: 'Missing required fields: character, definition, targetLanguage' },
        { status: 400 }
      );
    }

    // Get provider priority from env or use default
    const providersEnv = process.env.TRANSLATION_PROVIDERS || 'microsoft_translator,glm_flash';
    const providers = providersEnv.split(',').map(p => p.trim());

    let lastError: Error | null = null;

    // Try each provider in order
    for (const provider of providers) {
      try {
        let result: TranslationResult;

        if (provider === 'microsoft_translator') {
          result = await translateWithMicrosoft(definition, targetLanguage);
        } else if (provider === 'glm_flash') {
          result = await translateWithGLM(character, definition, targetLanguage);
        } else {
          console.warn(`Unknown translation provider: ${provider}`);
          continue;
        }

        // Success! Return the translation
        return NextResponse.json({
          translation: result.translation,
          provider: result.provider,
          character,
          targetLanguage,
        });

      } catch (error) {
        console.error(`Translation failed with ${provider}:`, error);
        lastError = error as Error;
        // Continue to next provider
      }
    }

    // All providers failed
    return NextResponse.json(
      {
        error: 'All translation providers failed',
        message: lastError?.message || 'Unknown error',
        fallback: definition, // Return English as fallback
      },
      { status: 500 }
    );

  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
