import React from 'react';
import { GridCell } from './GridCell';

interface WorksheetRowProps {
  char: string;
  gridStyle: 'none' | 'star' | 'cross' | 'cross-star' | 'character';
  gridSize: number;
  strokeColor: string;
  pinyin?: string;
}

/**
 * WorksheetRow component renders a single practice row for one character
 * Layout: 10 cells total
 * - Cell 1: Full character (model)
 * - Cells 2-3: Faded character (tracing guide)
 * - Cells 4-10: Empty cells for practice
 */
export function WorksheetRow({ char, gridStyle, gridSize, strokeColor, pinyin }: WorksheetRowProps) {
  return (
    <div className="mb-4">
      {/* Character info header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="chinese-font text-3xl font-bold">{char}</div>
        {pinyin && (
          <div className="text-sm text-muted-foreground">{pinyin}</div>
        )}
      </div>

      {/* Practice grid: 10 cells */}
      <div className="flex gap-1.5 flex-wrap">
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
