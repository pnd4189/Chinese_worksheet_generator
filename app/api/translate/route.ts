import { NextRequest, NextResponse } from 'next/server';

// API endpoints
const GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const AZURE_TRANSLATOR_URL = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

// MyMemory language code mapping (ISO 639-1)
const MYMEMORY_LANG_MAP: Record<string, string> = {
  'vi': 'vi-VN', 'ja': 'ja-JP', 'ko': 'ko-KR', 'th': 'th-TH',
  'id': 'id-ID', 'ms': 'ms-MY', 'tl': 'fil-PH', 'hi': 'hi-IN',
  'bn': 'bn-BD', 'ta': 'ta-IN', 'te': 'te-IN', 'ur': 'ur-PK',
  'fa': 'fa-IR', 'ar': 'ar-SA', 'he': 'he-IL', 'tr': 'tr-TR',
  'fr': 'fr-FR', 'de': 'de-DE', 'es': 'es-ES', 'it': 'it-IT',
  'pt': 'pt-PT', 'ru': 'ru-RU', 'pl': 'pl-PL', 'nl': 'nl-NL',
  'sv': 'sv-SE', 'no': 'nb-NO', 'da': 'da-DK', 'fi': 'fi-FI',
  'el': 'el-GR', 'cs': 'cs-CZ', 'ro': 'ro-RO', 'hu': 'hu-HU',
  'bg': 'bg-BG', 'hr': 'hr-HR', 'sr': 'sr-RS', 'sk': 'sk-SK',
  'sl': 'sl-SI', 'sq': 'sq-AL', 'lt': 'lt-LT', 'lv': 'lv-LV',
  'et': 'et-EE', 'uk': 'uk-UA', 'be': 'be-BY', 'ka': 'ka-GE',
  'hy': 'hy-AM', 'az': 'az-AZ', 'kk': 'kk-KZ', 'uz': 'uz-UZ',
  'mn': 'mn-MN', 'my': 'my-MM', 'km': 'km-KH', 'lo': 'lo-LA',
  'ne': 'ne-NP', 'si': 'si-LK', 'am': 'am-ET', 'sw': 'sw-KE',
  'yo': 'yo-NG', 'ig': 'ig-NG', 'ha': 'ha-NG', 'zu': 'zu-ZA',
  'xh': 'xh-ZA', 'af': 'af-ZA', 'mr': 'mr-IN', 'gu': 'gu-IN',
  'kn': 'kn-IN', 'ml': 'ml-IN', 'pa': 'pa-IN', 'is': 'is-IS',
  'ga': 'ga-IE', 'cy': 'cy-GB', 'mt': 'mt-MT', 'eu': 'eu-ES',
  'ca': 'ca-ES', 'gl': 'gl-ES', 'la': 'la-VA'
};

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
 * Translate using MyMemory API (FREE, NO API KEY NEEDED!)
 * Rate limits: 1000 translations/day (anonymous), 10000/day with email
 * This is the SIMPLEST option - works immediately without any setup
 */
async function translateWithMyMemory(
  text: string,
  targetLanguage: string
): Promise<TranslationResult> {
  const targetLang = MYMEMORY_LANG_MAP[targetLanguage] || targetLanguage;

  // Optional: add your email for higher rate limits (10k/day instead of 1k)
  const email = process.env.MYMEMORY_EMAIL || '';
  const emailParam = email ? `&de=${encodeURIComponent(email)}` : '';

  const url = `${MYMEMORY_API_URL}?q=${encodeURIComponent(text)}&langpair=en|${targetLang}${emailParam}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`MyMemory API error: ${errorText}`);
  }

  const data = await response.json();

  // Check if we got a valid response
  if (data.responseStatus !== 200) {
    throw new Error(`MyMemory API returned status ${data.responseStatus}`);
  }

  const translation = data.responseData?.translatedText;

  if (!translation) {
    throw new Error('No translation returned from MyMemory');
  }

  return {
    translation,
    provider: 'mymemory',
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
    // MyMemory is default because it needs NO setup - works immediately!
    const providersEnv = process.env.TRANSLATION_PROVIDERS || 'mymemory,microsoft_translator,glm_flash';
    const providers = providersEnv.split(',').map(p => p.trim());

    let lastError: Error | null = null;

    // Try each provider in order
    for (const provider of providers) {
      try {
        let result: TranslationResult;

        if (provider === 'mymemory') {
          result = await translateWithMyMemory(definition, targetLanguage);
        } else if (provider === 'microsoft_translator') {
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
