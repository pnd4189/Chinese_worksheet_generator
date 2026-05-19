# Chinese Worksheet Generator

A web application for generating customizable Chinese character practice worksheets with pinyin, definitions, part-of-speech labels, and PDF export. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Character Practice Grids** -- Each worksheet contains 10 rows with guide cells (full, faded, empty) for tracing and free practice.
- **Multiple Grid Styles** -- Cross (田字格), Star (X), Cross & Star (米字格), Character overlay, or no guides.
- **HSK Vocabulary (1-6)** -- Quick-select buttons load vocabulary by HSK level with built-in pinyin, definitions, and part-of-speech data sourced from [complete-hsk-vocabulary](https://github.com/drkameleon/complete-hsk-vocabulary).
- **Auto-fill to 10 Rows** -- When fewer than 10 characters are entered, the app distributes and repeats characters evenly to fill a full page.
- **Pinyin & Definitions** -- Automatically looked up from the embedded HSK dictionary and CC-CEDICT-based character dictionary.
- **Part-of-Speech Labels** -- Displayed as compact tags (N, V, Adj, etc.) inferred from dictionary data or definitions.
- **Multi-language Translation** -- Translate definitions into 97+ languages via pluggable translation providers:
  - **MyMemory** (default, no API key needed)
  - **Microsoft Translator** (Azure Cognitive Services, recommended for production)
  - **GLM-4-Flash** (Zhipu AI, optional fallback)
- **Translation Caching** -- Results are cached in `localStorage` to minimize API calls across sessions.
- **PDF Export** -- Download the worksheet as an A4-optimized PDF using html2canvas + jsPDF.
- **Configurable Stroke Color** -- Black, red, blue, or green.
- **Adjustable Grid Size** -- Slider from 12 px to 25 px per cell (18-20 px recommended for A4 printing).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| UI | React 18, Tailwind CSS 3, Radix UI primitives |
| Icons | Lucide React |
| PDF | jsPDF + html2canvas |
| Fonts | Inter, Noto Sans SC (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js >= 18
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/pnd4189/Chinese_worksheet_generator.git
cd Chinese_worksheet_generator
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Translation Setup (Optional)

Translation works out of the box using the free MyMemory API (no key required, 1000 translations/day anonymous, 10 000/day with email).

For higher-volume or production use, see [TRANSLATION_SETUP.md](TRANSLATION_SETUP.md) for detailed instructions on configuring Microsoft Translator or GLM-4-Flash.

### Quick Config

Copy the example environment file and fill in the keys you need:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `MYMEMORY_EMAIL` | No | Your email to raise MyMemory limit to 10 000/day |
| `AZURE_TRANSLATOR_KEY` | No | Microsoft Translator API key |
| `AZURE_TRANSLATOR_REGION` | No | Azure region (default: `eastus`) |
| `GLM_API_KEY` | No | Zhipu AI GLM-4-Flash API key |
| `TRANSLATION_PROVIDERS` | No | Comma-separated priority list (default: `mymemory,microsoft_translator,glm_flash`) |

## Project Structure

```
.
├── app/
│   ├── api/translate/route.ts   # Translation API route (MyMemory, Azure, GLM)
│   ├── globals.css              # Global styles & Tailwind base
│   ├── layout.tsx               # Root layout with fonts
│   └── page.tsx                 # Main worksheet page
├── components/
│   ├── GridCell.tsx              # Single practice grid cell with SVG guides
│   ├── WorksheetRow.tsx          # One row: model + tracing + empty cells
│   └── ui/                      # Radix-based UI primitives (button, card, etc.)
├── lib/
│   ├── data/
│   │   ├── dictionaryData.ts    # CC-CEDICT character dictionary
│   │   ├── hskDictionary.ts     # HSK vocabulary with pinyin, definitions, POS
│   │   └── hskLists.ts          # HSK 1-6 word lists
│   ├── services/
│   │   └── translationService.ts # Client-side translation with caching
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── utils/
│       ├── characterDistribution.ts  # Auto-distribute chars to 10 rows
│       ├── cn.ts                     # Tailwind class merge utility
│       ├── partOfSpeech.ts           # POS code mapping
│       ├── pdfGenerator.ts           # PDF export via html2canvas + jsPDF
│       ├── posInference.ts           # Infer POS from English definitions
│       └── translation.ts           # Language options & Vietnamese translations
├── .env.local.example           # Example environment variables
├── GLM_API_SETUP.md             # GLM-4-Flash setup guide
├── TRANSLATION_SETUP.md         # Full translation provider setup guide
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

This project is private.
