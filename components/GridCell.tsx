import React from 'react';

interface GridCellProps {
  char: string;
  gridStyle: 'none' | 'star' | 'cross' | 'cross-star' | 'character';
  gridSize: number;
  strokeColor: string;
  isTraceable: boolean;
}

/**
 * GridCell component renders a single practice grid cell with various guide patterns
 */
export function GridCell({ char, gridStyle, gridSize, strokeColor, isTraceable }: GridCellProps) {
  const cellSize = gridSize * 3;
  const halfSize = cellSize / 2;

  const getColorValue = (color: string) => {
    switch (color) {
      case 'red': return '#DC2626';
      case 'blue': return '#2563EB';
      case 'green': return '#16A34A';
      default: return '#000000';
    }
  };

  return (
    <div
      className="relative border-2 border-slate-300"
      style={{ width: cellSize, height: cellSize }}
    >
      {/* SVG Grid Pattern */}
      <svg
        className="absolute inset-0"
        width={cellSize}
        height={cellSize}
        style={{ pointerEvents: 'none' }}
      >
        {/* Cross pattern (田字格 - + shape) */}
        {(gridStyle === 'cross' || gridStyle === 'cross-star') && (
          <>
            {/* Vertical line */}
            <line
              x1={halfSize}
              y1={0}
              x2={halfSize}
              y2={cellSize}
              stroke="rgb(209, 213, 219)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            {/* Horizontal line */}
            <line
              x1={0}
              y1={halfSize}
              x2={cellSize}
              y2={halfSize}
              stroke="rgb(209, 213, 219)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </>
        )}

        {/* Star pattern (X shape - diagonal lines) */}
        {(gridStyle === 'star' || gridStyle === 'cross-star') && (
          <>
            {/* Diagonal line top-left to bottom-right */}
            <line
              x1={0}
              y1={0}
              x2={cellSize}
              y2={cellSize}
              stroke="rgb(209, 213, 219)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            {/* Diagonal line top-right to bottom-left */}
            <line
              x1={cellSize}
              y1={0}
              x2={0}
              y2={cellSize}
              stroke="rgb(209, 213, 219)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </>
        )}
      </svg>

      {/* Character display */}
      <div className="absolute inset-0 flex items-center justify-center">
        {gridStyle === 'character' && (
          <span
            className="chinese-font select-none"
            style={{
              fontSize: gridSize * 2,
              color: '#D1D5DB',
              opacity: 0.3
            }}
          >
            {char}
          </span>
        )}
        {isTraceable && gridStyle !== 'character' && (
          <span
            className="chinese-font select-none"
            style={{
              fontSize: gridSize * 2,
              color: getColorValue(strokeColor),
              opacity: 0.3
            }}
          >
            {char}
          </span>
        )}
      </div>
    </div>
  );
}
