# GLM-4-Flash AI Translation Setup Guide

## Overview

This Chinese Worksheet Generator now uses **GLM-4-Flash** (智谱AI) for AI-powered translations to support 97+ languages. Vietnamese translations are still hardcoded for optimal quality.

## Getting Your Free API Key

1. **Visit Zhipu AI Platform**
   - Go to: https://bigmodel.cn/usercenter/proj-mgmt/apikeys
   - You may need to create an account (free)

2. **Create API Key**
   - Click "Create New API Key" (创建新的API密钥)
   - Give it a name (e.g., "Chinese Worksheet")
   - Copy the API key (you won't be able to see it again!)

3. **Add API Key to Your Project**
   - Open `.env.local` file in the project root
   - Add your API key:
     ```
     GLM_API_KEY=your_actual_api_key_here
     ```
   - Save the file

4. **Restart Development Server**
   ```bash
   npm run dev
   ```

## How It Works

### Translation Flow

1. **Vietnamese**: Uses hardcoded translations (already provided)
2. **English**: Shows original English definition
3. **Other 97 languages**: Uses GLM-4-Flash AI translation with caching

### Caching System

- Translations are automatically cached in browser localStorage
- Once a character is translated to a language, it won't call the API again
- Cache key format: `{character}:{languageCode}`
- Cache persists across browser sessions

### Supported Features

✅ 97+ languages supported (French, Japanese, Spanish, etc.)
✅ Automatic caching to reduce API calls
✅ Parallel translation requests for better performance
✅ Fallback to English if translation fails
✅ Loading indicator while translating

## Usage Tips

1. **First Time Use**: When you select a new language, translations will load (takes a few seconds)
2. **Subsequent Use**: Cached translations load instantly
3. **API Limits**: GLM-4-Flash is free but may have rate limits
4. **Best Performance**: Use Vietnamese for best quality (hardcoded translations)

## Troubleshooting

### "GLM_API_KEY not configured" Error

- Make sure `.env.local` file exists in project root
- Check that `GLM_API_KEY=` has your actual key
- Restart the dev server after adding the key

### Translations Not Loading

- Check browser console for errors
- Verify API key is valid
- Check internet connection
- Try clearing translation cache: `localStorage.removeItem('chinese_worksheet_translations_v1')`

### Slow Translations

- First translation for each language will be slow (API call)
- Subsequent translations are instant (cached)
- Consider using Vietnamese for best experience

## API Information

- **Model**: GLM-4-Flash
- **Provider**: Zhipu AI (智谱清言)
- **Cost**: Free tier available
- **Rate Limits**: Check Zhipu AI documentation
- **Context Window**: 128K tokens
- **Languages**: 26+ languages natively supported

## Privacy & Security

- API key is stored in `.env.local` (not committed to git)
- Translations are cached locally in browser
- No data is sent to third parties except Zhipu AI
- `.env.local` is in `.gitignore` by default

## Advanced Configuration

### Clear Translation Cache

Open browser console and run:
```javascript
localStorage.removeItem('chinese_worksheet_translations_v1')
```

### Check Cache Statistics

```javascript
// In browser console
console.log(localStorage.getItem('chinese_worksheet_translations_v1'))
```

### Disable AI Translation

Set `GLM_API_KEY=` to empty in `.env.local` - app will fall back to English for non-Vietnamese languages.

## Support

For issues with:
- **API Key**: Contact Zhipu AI support
- **Translation Quality**: Try Vietnamese (better quality) or report specific issues
- **App Bugs**: Report via GitHub issues

---

**Note**: Vietnamese translations are manually curated for highest quality. Other languages use AI translation which may occasionally have minor inaccuracies.
