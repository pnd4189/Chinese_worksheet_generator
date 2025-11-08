/**
 * Type definitions for the Chinese Worksheet Generator
 */

/**
 * Grid pattern style options
 */
export type GridStyle = "none" | "star" | "cross" | "cross-star" | "character"

/**
 * Stroke color options for character rendering
 */
export type StrokeColor = "black" | "red" | "blue" | "green"

/**
 * Individual stroke path data from Make Me a Hanzi
 */
export interface StrokePath {
  /** SVG path data */
  path: string
  /** Stroke order number (0-indexed) */
  order: number
}

/**
 * Complete stroke order data for a single character
 */
export interface StrokeOrderData {
  /** The Chinese character */
  character: string
  /** Number of strokes */
  strokeCount: number
  /** Array of stroke paths in order */
  strokes: StrokePath[]
  /** Optional: Medians for stroke path (from Make Me a Hanzi) */
  medians?: number[][][]
}

/**
 * Dictionary entry from CC-CEDICT
 */
export interface DictionaryEntry {
  /** Traditional Chinese form */
  traditional: string
  /** Simplified Chinese form */
  simplified: string
  /** Pinyin pronunciation with tone marks */
  pinyin: string
  /** English definitions (array for multiple meanings) */
  definitions: string[]
}

/**
 * Parsed character or word for worksheet generation
 */
export interface CharacterItem {
  /** The character(s) - single char or grouped word */
  text: string
  /** Whether this is a word group (from parentheses) */
  isWord: boolean
  /** Pinyin for this character/word */
  pinyin?: string
  /** Definition(s) */
  definition?: string
  /** Stroke order data (only for single characters) */
  strokeOrder?: StrokeOrderData
}

/**
 * Worksheet configuration options
 */
export interface WorksheetConfig {
  /** Title displayed at top of worksheet */
  title: string
  /** Characters/words to include (space or comma separated) */
  characters: string
  /** Grid pattern style */
  gridStyle: GridStyle
  /** Stroke color for character rendering */
  strokeColor: StrokeColor
  /** Size of each grid cell in pixels (10-30) */
  gridSize: number
  /** Spacing between rows in pixels */
  rowSpacing: number
  /** Number of traceable character copies (0-5) */
  traceableCount: number
  /** Show pinyin above characters */
  showPinyin: boolean
  /** Show definitions below characters */
  showDefinitions: boolean
}

/**
 * HSK level grouping
 */
export interface HSKLevel {
  /** HSK level number (1-6) */
  level: number
  /** Array of characters in this level */
  characters: string[]
}

/**
 * Canvas rendering options
 */
export interface CanvasRenderOptions {
  /** Canvas width */
  width: number
  /** Canvas height */
  height: number
  /** Stroke color */
  color: StrokeColor
  /** Show stroke order numbers */
  showNumbers?: boolean
  /** Animation progress (0-1) for animated rendering */
  progress?: number
}

/**
 * PDF export options
 */
export interface PDFExportOptions {
  /** Worksheet configuration */
  config: WorksheetConfig
  /** Parsed character items */
  items: CharacterItem[]
  /** Paper size (default: A4) */
  paperSize?: "a4" | "letter"
  /** Orientation */
  orientation?: "portrait" | "landscape"
}

/**
 * Text-to-Speech options
 */
export interface TTSOptions {
  /** Language code (default: zh-CN) */
  lang?: string
  /** Speech rate (0.1 to 10) */
  rate?: number
  /** Pitch (0 to 2) */
  pitch?: number
  /** Volume (0 to 1) */
  volume?: number
}

/**
 * Browser TTS support detection result
 */
export interface TTSSupport {
  /** Whether TTS is supported */
  supported: boolean
  /** Available voices */
  voices: SpeechSynthesisVoice[]
  /** Mandarin Chinese voice if available */
  mandarinVoice?: SpeechSynthesisVoice
}
