"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import { HSK_LISTS, getHSKCharacters } from "@/lib/data/hskLists"
import { DICTIONARY, lookupCharacter } from "@/lib/data/dictionaryData"
import { GridCell } from "@/components/GridCell"
import { generatePDF } from "@/lib/utils/pdfGenerator"

export default function Home() {
  const [title, setTitle] = useState("Chinese Practice Worksheet")
  const [characters, setCharacters] = useState("你好世界")
  const [gridStyle, setGridStyle] = useState("cross")
  const [strokeColor, setStrokeColor] = useState("black")
  const [gridSize, setGridSize] = useState([20])
  const [rowSpacing, setRowSpacing] = useState([10])
  const [traceableCount, setTraceableCount] = useState([2])
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      await generatePDF(title, 'worksheet-preview')
    } catch (error) {
      console.error('PDF generation failed:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Chinese Worksheet Generator
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Create custom practice worksheets
            </p>
          </div>

          {/* Worksheet Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Worksheet Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter worksheet title"
            />
          </div>

          {/* Characters Input */}
          <div className="space-y-2">
            <Label htmlFor="characters">Characters</Label>
            <Textarea
              id="characters"
              value={characters}
              onChange={(e) => setCharacters(e.target.value)}
              placeholder="Enter Chinese characters (e.g., 你好)"
              className="min-h-[100px] chinese-font text-lg"
            />
            <p className="text-xs text-slate-500">
              Use parentheses for words: (你好)
            </p>
          </div>

          {/* Grid Style */}
          <div className="space-y-2">
            <Label htmlFor="grid-style">Grid Style</Label>
            <Select value={gridStyle} onValueChange={setGridStyle}>
              <SelectTrigger id="grid-style">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="cross">Cross</SelectItem>
                <SelectItem value="star">Star</SelectItem>
                <SelectItem value="cross-star">Cross & Star</SelectItem>
                <SelectItem value="character">Character</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stroke Color */}
          <div className="space-y-2">
            <Label htmlFor="stroke-color">Stroke Color</Label>
            <Select value={strokeColor} onValueChange={setStrokeColor}>
              <SelectTrigger id="stroke-color">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid Size */}
          <div className="space-y-2">
            <Label htmlFor="grid-size">
              Grid Size: {gridSize[0]}px
            </Label>
            <Slider
              id="grid-size"
              min={10}
              max={30}
              step={1}
              value={gridSize}
              onValueChange={setGridSize}
            />
          </div>

          {/* Row Spacing */}
          <div className="space-y-2">
            <Label htmlFor="row-spacing">
              Row Spacing: {rowSpacing[0]}px
            </Label>
            <Slider
              id="row-spacing"
              min={5}
              max={30}
              step={1}
              value={rowSpacing}
              onValueChange={setRowSpacing}
            />
          </div>

          {/* Traceable Characters */}
          <div className="space-y-2">
            <Label htmlFor="traceable">
              Traceable Characters: {traceableCount[0]}
            </Label>
            <Slider
              id="traceable"
              min={0}
              max={5}
              step={1}
              value={traceableCount}
              onValueChange={setTraceableCount}
            />
          </div>

          {/* Quick HSK Selector */}
          <div className="space-y-2">
            <Label>Quick Select HSK Level</Label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const chars = getHSKCharacters(level);
                    // Get first 20 characters from this level
                    const sample = chars.slice(0, 20).join(' ');
                    setCharacters(sample);
                  }}
                >
                  HSK {level}
                </Button>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <Button
            className="w-full"
            size="lg"
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF || !characters.trim()}
          >
            <Download className="mr-2 h-4 w-4" />
            {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
          </Button>
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <Card id="worksheet-preview" className="bg-white shadow-lg p-8">
              {/* Worksheet Header */}
              <div className="text-center mb-8 pb-4 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                <p className="text-sm text-slate-500 mt-1">Practice Worksheet</p>
              </div>

              {/* Preview Content */}
              <div className="space-y-8">
                {characters.split(/[\s,]+/).filter(c => c.trim()).slice(0, 6).map((char, idx) => {
                  const dictEntry = lookupCharacter(char);
                  return (
                  <div key={idx} className="border-b border-slate-100 pb-6 last:border-0">
                    {/* Character with Pinyin */}
                    <div className="mb-4">
                      <div className="text-sm text-slate-500 text-center mb-1">
                        {dictEntry?.pinyin || ''}
                      </div>
                      <div className={`text-6xl chinese-font text-center mb-2`}>
                        {char}
                      </div>
                      <div className="text-sm text-slate-600 text-center">
                        {dictEntry?.definition || 'No definition available'}
                      </div>
                    </div>

                    {/* Practice Grid */}
                    <div className="flex gap-2 justify-center flex-wrap">
                      {Array.from({ length: 8 }).map((_, gridIdx) => (
                        <GridCell
                          key={gridIdx}
                          char={char}
                          gridStyle={gridStyle as any}
                          gridSize={gridSize[0]}
                          strokeColor={strokeColor}
                          isTraceable={gridIdx < traceableCount[0]}
                        />
                      ))}
                    </div>
                  </div>
                )})}

                {!characters.trim() && (
                  <div className="text-center py-12 text-slate-400">
                    <p className="text-lg">Enter characters to begin</p>
                    <p className="text-sm mt-2">Use the form on the left to customize your worksheet</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
