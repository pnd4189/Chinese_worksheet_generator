# Translation API Setup Guide

## TL;DR - Quick Start

**For 500-1000 concurrent users, use Microsoft Translator (RECOMMENDED)**

```bash
# 1. Get Microsoft Translator API key (FREE)
# 2. Add to .env.local:
AZURE_TRANSLATOR_KEY=your_key_here
AZURE_TRANSLATOR_REGION=eastus

# 3. Done! Supports 2M chars/month, 33K chars/min
```

---

## Translation Provider Comparison

### Microsoft Translator (RECOMMENDED) ⭐

**Free Tier (F0):**
- ✅ **2 million characters/month**
- ✅ **33,000 characters/minute** (~660 definitions/min)
- ✅ **Unlimited concurrent requests**
- ✅ **50,000 characters per request**
- ✅ **100+ languages supported**
- ✅ **Enterprise-grade quality**

**Perfect for:** Production apps with 500-1000+ concurrent users

**Cost:** FREE (F0 tier)

---

###  GLM-4-Flash (Optional Fallback)

**Free Tier:**
- ❓ Rate limits unknown (likely ~60-100 requests/min)
- ✅ Good quality translations
- ✅ Supports 26+ languages

**Best for:** Fallback provider or low-traffic apps

**Cost:** FREE

---

### Google Cloud Translation

**Pricing:**
- 💰 $20 per 1 million characters
- ✅ High rate limits
- ✅ Excellent quality

**Best for:** High-volume commercial applications with budget

---

## Setup Instructions

### Option 1: Microsoft Translator (RECOMMENDED)

#### Step 1: Create Azure Account

1. Go to: https://azure.microsoft.com/free/
2. Sign up for free account (no credit card required for F0 tier)
3. Get $200 free Azure credit (optional)

#### Step 2: Create Translator Resource

1. Go to Azure Portal: https://portal.azure.com
2. Click "Create a resource"
3. Search for "Translator"
4. Click "Translator" → "Create"
5. Fill in details:
   - **Resource Group**: Create new (e.g., "chinese-worksheet")
   - **Region**: Choose closest (e.g., East US)
   - **Name**: Any name (e.g., "chinese-worksheet-translator")
   - **Pricing Tier**: Select **F0 (Free)** ⭐
6. Click "Review + Create" → "Create"

#### Step 3: Get API Keys

1. After deployment completes, click "Go to resource"
2. In left menu, click "Keys and Endpoint"
3. Copy **KEY 1** (or KEY 2)
4. Note the **REGION** (e.g., eastus)

#### Step 4: Configure Environment

Open `.env.local` and add:

```bash
# Microsoft Translator API (RECOMMENDED)
AZURE_TRANSLATOR_KEY=your_key_from_step_3
AZURE_TRANSLATOR_REGION=eastus

# Translation Provider Priority
TRANSLATION_PROVIDERS=microsoft_translator
```

#### Step 5: Test

```bash
npm run dev
```

Open app, select a non-Vietnamese language → translations should load!

---

### Option 2: GLM-4-Flash (Alternative/Fallback)

#### Step 1: Get API Key

1. Visit: https://bigmodel.cn/usercenter/proj-mgmt/apikeys
2. Sign up/login (free account)
3. Create new API key
4. Copy the key

#### Step 2: Configure Environment

```bash
# GLM-4-Flash API
GLM_API_KEY=your_glm_key_here

# Use GLM as primary provider
TRANSLATION_PROVIDERS=glm_flash
```

---

### Option 3: Multi-Provider with Fallback

Use Microsoft Translator as primary, GLM-4-Flash as fallback:

```bash
# Both API keys configured
AZURE_TRANSLATOR_KEY=your_azure_key
AZURE_TRANSLATOR_REGION=eastus
GLM_API_KEY=your_glm_key

# Try Microsoft first, fallback to GLM
TRANSLATION_PROVIDERS=microsoft_translator,glm_flash
```

If Microsoft fails (quota exceeded, network error), system automatically tries GLM.

---

## Rate Limits & Scalability

### Microsoft Translator F0 Tier

**Monthly Quota:** 2,000,000 characters

**Per-Minute Rate:** 33,000 characters
- Average Chinese definition: ~50 characters
- **~660 definitions per minute**
- **~66 worksheets per minute** (10 chars each)

**Concurrent Users:**
- With caching: **Supports 1000+ users** ✅
- Without caching: ~66 users/minute
- **Recommendation**: Enable caching for production

### Estimated Usage for 1000 Concurrent Users

**Scenario**: 1000 users each create 1 worksheet (10 characters)

**First-time users (no cache):**
- 1000 users × 10 characters × 50 chars/def = **500,000 characters**
- Time to translate: 500,000 / 33,000 = **~15 minutes**

**With 50% cache hit rate:**
- 500,000 × 50% = **250,000 characters needed**
- Time to translate: **~7.5 minutes** ✅

**With 80% cache hit rate (after first day):**
- 500,000 × 20% = **100,000 characters needed**
- Time to translate: **~3 minutes** ✅✅

### Caching Strategy

The app automatically caches translations in `localStorage`:
- Cache key: `{character}:{languageCode}`
- Persistent across browser sessions
- No expiration (permanent cache)

**Cache hit rates (estimated):**
- Day 1: 0-20%
- Day 7: 60-80%
- Day 30: 85-95%

With good cache hit rates, Microsoft Translator F0 easily handles 1000+ concurrent users!

---

## Troubleshooting

### "AZURE_TRANSLATOR_KEY not configured"

**Solution:**
1. Check `.env.local` file exists in project root
2. Verify key is set: `AZURE_TRANSLATOR_KEY=...`
3. Restart dev server: `npm run dev`

### "Translation failed" Error

**Possible causes:**
1. **Rate limit exceeded**
   - Check Azure portal for usage
   - Implement request queuing
   - Add second API key rotation

2. **Invalid API key**
   - Regenerate key in Azure portal
   - Update `.env.local`

3. **Network error**
   - Check internet connection
   - Verify Azure service status

**Solution**: Enable fallback provider:
```bash
TRANSLATION_PROVIDERS=microsoft_translator,glm_flash
```

### Slow Translation Speed

**Causes:**
1. Cold start (first translation)
2. Network latency
3. No cache

**Solutions:**
1. Enable caching (already default)
2. Warm up cache by pre-translating common characters
3. Use CDN/edge functions (Vercel Edge Functions)

### Quota Exceeded

**F0 Tier Limits:**
- 2M characters/month
- 33K characters/minute

**Solutions:**

**Option 1: Upgrade Azure Plan**
- F0 → S1: $10/month for unlimited* translations
- *Fair use policy applies

**Option 2: Multiple API Keys**
```bash
# Rotate keys
AZURE_TRANSLATOR_KEY=key1,key2,key3
```

**Option 3: Implement Queue**
- Add request queuing system
- Spread requests over time

---

## Production Deployment

### Environment Variables (Vercel)

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   ```
   AZURE_TRANSLATOR_KEY=your_key
   AZURE_TRANSLATOR_REGION=eastus
   TRANSLATION_PROVIDERS=microsoft_translator
   ```
4. Redeploy

### Monitoring

**Check API usage:**
1. Azure Portal → Your Translator resource
2. Left menu → Metrics
3. View: Total Calls, Total Characters, etc.

**Set up alerts:**
1. Azure Portal → Your Translator resource
2. Left menu → Alerts
3. Create alert rule (e.g., "Characters > 1.5M")

### Performance Optimization

**1. Enable Edge Caching**
```typescript
// app/api/translate/route.ts
export const runtime = 'edge'; // Use edge runtime
```

**2. Batch Translations**
```typescript
// Translate multiple characters in one request
// Microsoft Translator supports batching
```

**3. Pre-warm Cache**
```typescript
// Pre-translate top 1000 most common characters
```

---

## Security Best Practices

### API Key Security

✅ **DO:**
- Store keys in `.env.local` (gitignored)
- Use separate keys for dev/prod
- Rotate keys regularly
- Monitor usage for anomalies

❌ **DON'T:**
- Commit keys to git
- Share keys publicly
- Use production keys in development
- Hardcode keys in source code

### Rate Limiting

Implement application-level rate limiting:

```typescript
// app/api/translate/route.ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100 // limit each IP to 100 requests per minute
});
```

---

## Cost Analysis

### Free Tier (F0) - RECOMMENDED

**Monthly Cost:** $0
**Characters:** 2M/month
**Usage estimate:**
- 2M chars / 50 chars per def = **40,000 definitions/month**
- 40,000 defs / 10 per worksheet = **4,000 worksheets/month**

**Sufficient for:**
- ~130 worksheets per day
- Small to medium applications
- MVP/prototype phase
- Personal projects

### Paid Tier (S1)

**Monthly Cost:** $10
**Characters:** Pay as you go, unlimited*
**Best for:**
- High-traffic applications (1000+ daily users)
- Commercial applications
- Enterprise use

---

## FAQ

### Q: Can I use Microsoft Translator without Azure account?

**A:** No, you need an Azure account. But F0 tier is completely free, no credit card required.

### Q: Will my translations be public?

**A:** No, all translations are stored locally in user's browser cache. Microsoft doesn't store your translations.

### Q: Can I switch providers later?

**A:** Yes! Just update `TRANSLATION_PROVIDERS` in `.env.local`. Existing cache remains valid.

### Q: What happens if I exceed quota?

**A:** API returns 429 error. App falls back to English definitions. Or fallback provider is used if configured.

### Q: Is Microsoft Translator quality good?

**A:** Yes! Microsoft Translator uses neural machine translation, same tech powering Bing Translator. Quality is excellent for 100+ languages.

### Q: Can I use both providers simultaneously?

**A:** Yes! Set `TRANSLATION_PROVIDERS=microsoft_translator,glm_flash` for automatic fallback.

---

## Additional Resources

- [Microsoft Translator Documentation](https://learn.microsoft.com/azure/ai-services/translator/)
- [Azure Free Account](https://azure.microsoft.com/free/)
- [Supported Languages](https://learn.microsoft.com/azure/ai-services/translator/language-support)
- [Rate Limits Reference](https://learn.microsoft.com/azure/ai-services/translator/service-limits)

---

## Support

For issues:
- **Microsoft Translator**: Azure Support Portal
- **GLM-4-Flash**: Zhipu AI support
- **App Issues**: GitHub Issues

---

**Last Updated:** 2025-11-13
