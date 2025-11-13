import React from 'react';
import { GridCell } from './GridCell';
import { getShortPOS } from '@/lib/utils/partOfSpeech';

interface WorksheetRowProps {
  char: string;
  gridStyle: 'none' | 'star' | 'cross' | 'cross-star' | 'character';
  gridSize: number;
  strokeColor: string;
  pinyin?: string;
  rowNumber?: number;
  englishDefinition?: string;
  translatedDefinition?: string;
  secondLanguage?: string;
  pos?: string;
}

/**
 * WorksheetRow component renders a single practice row for one character
 * Layout: 10 cells total
 * - Cell 1: Full character (model)
 * - Cells 2-3: Faded character (tracing guide)
 * - Cells 4-10: Empty cells for practice
 */
export function WorksheetRow({
  char,
  gridStyle,
  gridSize,
  strokeColor,
  pinyin,
  rowNumber,
  englishDefinition,
  translatedDefinition,
  secondLanguage,
  pos
}: WorksheetRowProps) {
  // Format definitions for display
  const formatDefinition = (def: string) => {
    if (!def) return '';
    // Truncate long definitions and take first meaning
    const firstMeaning = def.split(';')[0].split(',')[0];
    return firstMeaning.length > 30 ? firstMeaning.substring(0, 30) + '...' : firstMeaning;
  };

  const posLabel = pos ? getShortPOS(pos) : '';

  return (
    <div>
      {/* Row header - compact inline layout with pinyin, POS, and bilingual definitions */}
      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
        {rowNumber && (
          <span className="text-xs font-semibold text-purple-600 w-6">{rowNumber}.</span>
        )}
        <div className="chinese-font text-2xl font-bold">{char}</div>
        {pinyin && (
          <div className="text-xs text-muted-foreground italic">{pinyin}</div>
        )}
        {posLabel && (
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
            {posLabel}
          </span>
        )}
        {englishDefinition && (
          <div className="text-xs text-gray-600">
            🇬🇧 {formatDefinition(englishDefinition)}
          </div>
        )}
        {translatedDefinition && secondLanguage !== 'en' && translatedDefinition !== englishDefinition && (
          <div className="text-xs text-gray-600">
            {secondLanguage === 'vi' ? '🇻🇳' : secondLanguage === 'zh' ? '🇨🇳' : ''} {formatDefinition(translatedDefinition)}
          </div>
        )}
      </div>

      {/* Practice grid: 10 cells in one row - no wrapping */}
      <div className="flex gap-1.5">
        {Array.from({ length: 10 }).map((_, idx) => {
          let isTraceable = false;
          let traceOpacity = 1;

          // Cell 0: Full character
          if (idx === 0) {
            isTraceable = true;
            traceOpacity = 1;
          }
          // Cells 1-2: Faded characters (gradually lighter)
          else if (idx === 1) {
            isTraceable = true;
            traceOpacity = 0.5;
          } else if (idx === 2) {
            isTraceable = true;
            traceOpacity = 0.25;
          }
          // Cells 3-9: Empty for practice
          else {
            isTraceable = false;
          }

          return (
            <GridCell
              key={idx}
              char={char}
              gridStyle={gridStyle}
              gridSize={gridSize}
              strokeColor={strokeColor}
              isTraceable={isTraceable}
              traceOpacity={traceOpacity}
            />
          );
        })}
      </div>
    </div>
  );
}
