# Chinese Worksheet Generator

Generate beautiful, printable Chinese character practice worksheets with stroke order, pinyin, and multilingual definitions.

## Features

- **Stroke Order Display** - Animated stroke-by-stroke rendering using Make Me a Hanzi data
- **HSK Integration** - Built-in HSK 1-6 word lists with accurate dictionary definitions
- **Multilingual Support** - Definitions in English, Vietnamese (hardcoded), and 97+ languages via AI translation
- **PDF Export** - High-quality A4 PDF generation with jsPDF + html2canvas
- **Customizable Grid** - Multiple grid styles (cross, star, character, cross-star), adjustable size & stroke color
- **Smart Distribution** - Auto-distributes characters across 10 practice rows
- **Text-to-Speech** - Browser TTS for Mandarin pronunciation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **UI**: React 18 + Radix UI + Tailwind CSS
- **PDF**: jsPDF + html2canvas
- **Dictionary**: CC-CEDICT based HSK dictionary (offline)
- **Translation**: Microsoft Translator / GLM-4-Flash AI (optional)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) and start creating worksheets.

## Translation Setup (Optional)

The app works out-of-the-box with English definitions. For additional languages:

```bash
# .env.local
AZURE_TRANSLATOR_KEY=your_key       # Microsoft Translator (recommended, free F0 tier)
AZURE_TRANSLATOR_REGION=eastus
GLM_API_KEY=your_key                # GLM-4-Flash fallback
```

See [TRANSLATION_SETUP.md](./TRANSLATION_SETUP.md) for detailed setup instructions.

## Project Structure

```
app/
  api/translate/route.ts    # Translation API endpoint
  layout.tsx                # Root layout
  page.tsx                  # Main worksheet page
components/
  GridCell.tsx              # Character grid cell with stroke rendering
  WorksheetRow.tsx          # Single worksheet row component
  ui/                       # Reusable UI components (Radix-based)
lib/
  data/
    dictionaryData.ts       # CC-CEDICT character lookup
    hskDictionary.ts        # HSK word dictionary
    hskLists.ts             # HSK 1-6 character lists
  services/
    translationService.ts   # Multi-provider translation service
  types/
    index.ts                # TypeScript type definitions
  utils/
    characterDistribution.ts # Character-to-row distribution logic
    pdfGenerator.ts         # PDF export logic
    posInference.ts         # Part-of-speech inference
    translation.ts          # Translation utilities
```

## Usage

1. **Enter characters** - Type Chinese characters separated by spaces or commas
2. **Select HSK level** - Pick random characters from HSK 1-6 word lists
3. **Customize** - Adjust grid style, size, stroke color
4. **Preview** - See the worksheet with stroke order, pinyin, and definitions
5. **Export** - Download as PDF

## License

Private project.
