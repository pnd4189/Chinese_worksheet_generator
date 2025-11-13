import { NextRequest, NextResponse } from 'next/server';

// GLM-4-Flash API endpoint
const GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';

// Language name mapping for better prompts
const LANGUAGE_NAMES: Record<string, string> = {
  'vi': 'Vietnamese (Tiếng Việt)',
  'zh': 'Chinese (中文)',
  'ja': 'Japanese (日本語)',
  'ko': 'Korean (한국어)',
  'th': 'Thai (ไทย)',
  'id': 'Indonesian (Bahasa Indonesia)',
  'ms': 'Malay (Bahasa Melayu)',
  'tl': 'Filipino (Tagalog)',
  'hi': 'Hindi (हिन्दी)',
  'bn': 'Bengali (বাংলা)',
  'ta': 'Tamil (தமிழ்)',
  'te': 'Telugu (తెలుగు)',
  'ur': 'Urdu (اردو)',
  'fa': 'Persian (فارسی)',
  'ar': 'Arabic (العربية)',
  'he': 'Hebrew (עברית)',
  'tr': 'Turkish (Türkçe)',
  'fr': 'French (Français)',
  'de': 'German (Deutsch)',
  'es': 'Spanish (Español)',
  'it': 'Italian (Italiano)',
  'pt': 'Portuguese (Português)',
  'ru': 'Russian (Русский)',
  'pl': 'Polish (Polski)',
  'nl': 'Dutch (Nederlands)',
  'sv': 'Swedish (Svenska)',
  'no': 'Norwegian (Norsk)',
  'da': 'Danish (Dansk)',
  'fi': 'Finnish (Suomi)',
  'el': 'Greek (Ελληνικά)',
  'cs': 'Czech (Čeština)',
  'ro': 'Romanian (Română)',
  'hu': 'Hungarian (Magyar)',
  'bg': 'Bulgarian (Български)',
  'hr': 'Croatian (Hrvatski)',
  'sr': 'Serbian (Српски)',
  'sk': 'Slovak (Slovenčina)',
  'sl': 'Slovenian (Slovenščina)',
  'sq': 'Albanian (Shqip)',
  'lt': 'Lithuanian (Lietuvių)',
  'lv': 'Latvian (Latviešu)',
  'et': 'Estonian (Eesti)',
  'uk': 'Ukrainian (Українська)',
  'be': 'Belarusian (Беларуская)',
  'ka': 'Georgian (ქართული)',
  'hy': 'Armenian (Հայերեն)',
  'az': 'Azerbaijani (Azərbaycan)',
  'kk': 'Kazakh (Қазақ)',
  'uz': 'Uzbek (Oʻzbek)',
  'mn': 'Mongolian (Монгол)',
  'my': 'Burmese (မြန်မာ)',
  'km': 'Khmer (ភាសាខ្មែរ)',
  'lo': 'Lao (ລາວ)',
  'ne': 'Nepali (नेपाली)',
  'si': 'Sinhala (සිංහල)',
  'am': 'Amharic (አማርኛ)',
  'ti': 'Tigrinya (ትግርኛ)',
  'so': 'Somali (Soomaali)',
  'sw': 'Swahili (Kiswahili)',
  'yo': 'Yoruba',
  'ig': 'Igbo',
  'ha': 'Hausa',
  'zu': 'Zulu (isiZulu)',
  'xh': 'Xhosa (isiXhosa)',
  'af': 'Afrikaans',
};

interface TranslateRequest {
  character: string;
  definition: string;
  targetLanguage: string;
}

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

    // Check if API key is configured
    const apiKey = process.env.GLM_API_KEY;
    if (!apiKey || apiKey.trim() === '') {
      return NextResponse.json(
        { error: 'GLM_API_KEY not configured. Please add it to .env.local' },
        { status: 500 }
      );
    }

    // Get language name for better prompt
    const languageName = LANGUAGE_NAMES[targetLanguage] || targetLanguage;

    // Create translation prompt
    const prompt = `Translate the following Chinese character definition from English to ${languageName}.
Provide a concise, accurate translation suitable for a language learning worksheet.

Chinese Character: ${character}
English Definition: ${definition}

Translate to ${languageName}:`;

    // Call GLM-4-Flash API
    const response = await fetch(GLM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'glm-4-flash',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.3, // Lower temperature for more consistent translations
        max_tokens: 100, // Short translations only
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GLM API error:', errorText);
      return NextResponse.json(
        { error: 'Translation API request failed', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    const translation = data.choices?.[0]?.message?.content?.trim();

    if (!translation) {
      return NextResponse.json(
        { error: 'No translation returned from API' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      translation,
      character,
      targetLanguage,
    });

  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
