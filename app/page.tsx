"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Sparkles, BookOpen, Settings2, Languages } from "lucide-react"
import { getHSKCharacters } from "@/lib/data/hskLists"
import { lookupCharacter } from "@/lib/data/dictionaryData"
import { WorksheetRow } from "@/components/WorksheetRow"
import { generatePDF } from "@/lib/utils/pdfGenerator"
import { distributeCharactersTo10Rows, getCharacterRepeatCounts } from "@/lib/utils/characterDistribution"
import { translateDefinition, LANGUAGE_OPTIONS, type SupportedLanguage } from "@/lib/utils/translation"

export default function Home() {
  const [title, setTitle] = useState("Chinese Practice Worksheet")
  const [characters, setCharacters] = useState("你好世界")
  const [gridStyle, setGridStyle] = useState("cross")
  const [strokeColor, setStrokeColor] = useState("black")
  const [gridSize, setGridSize] = useState([18])
  const [secondLanguage, setSecondLanguage] = useState<SupportedLanguage>("vi")
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

  // Parse characters: split words by space/comma, then split each word into individual characters
  // Example: "爱情 你好" → ["爱", "情", "你", "好"] - each character gets its own row
  const words = characters.split(/[\s,]+/).filter(w => w.trim());
  const uniqueChars = words.flatMap(word => word.split(''));

  // Auto-distribute to exactly 10 rows (repeating characters if needed)
  const charArray = distributeCharactersTo10Rows(uniqueChars);
  const repeatCounts = getCharacterRepeatCounts(uniqueChars);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 bg-white/80 backdrop-blur-sm border-r border-purple-100 shadow-xl">
          <div className="sticky top-0 p-8 space-y-6 max-h-screen overflow-y-auto">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Chinese Worksheet
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Generate beautiful practice sheets
                  </p>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <Card className="border-purple-100 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings2 className="h-5 w-5" />
                  Worksheet Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Worksheet Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter worksheet title"
                    className="border-purple-200 focus:ring-purple-500"
                  />
                </div>

                {/* Characters Input */}
                <div className="space-y-2">
                  <Label htmlFor="characters" className="text-sm font-medium">Characters</Label>
                  <Textarea
                    id="characters"
                    value={characters}
                    onChange={(e) => setCharacters(e.target.value)}
                    placeholder="Enter Chinese characters (e.g., 你好)"
                    className="min-h-[100px] chinese-font text-lg border-purple-200 focus:ring-purple-500"
                  />
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    Auto-fills to 10 rows (repeats characters if needed)
                  </p>
                </div>

                {/* Grid Style */}
                <div className="space-y-2">
                  <Label htmlFor="grid-style" className="text-sm font-medium">Grid Style</Label>
                  <Select value={gridStyle} onValueChange={setGridStyle}>
                    <SelectTrigger id="grid-style" className="border-purple-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">⬜ None</SelectItem>
                      <SelectItem value="cross">➕ Cross (田字格)</SelectItem>
                      <SelectItem value="star">✖️ Star (X)</SelectItem>
                      <SelectItem value="cross-star">❇️ Cross & Star (米字格)</SelectItem>
                      <SelectItem value="character">字 Character</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Stroke Color */}
                <div className="space-y-2">
                  <Label htmlFor="stroke-color" className="text-sm font-medium">Stroke Color</Label>
                  <Select value={strokeColor} onValueChange={setStrokeColor}>
                    <SelectTrigger id="stroke-color" className="border-purple-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="black">⬛ Black</SelectItem>
                      <SelectItem value="red">🟥 Red</SelectItem>
                      <SelectItem value="blue">🟦 Blue</SelectItem>
                      <SelectItem value="green">🟩 Green</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Grid Size */}
                <div className="space-y-2">
                  <Label htmlFor="grid-size" className="text-sm font-medium">
                    Grid Size: <span className="text-purple-600 font-semibold">{gridSize[0]}px</span>
                  </Label>
                  <Slider
                    id="grid-size"
                    min={12}
                    max={25}
                    step={1}
                    value={gridSize}
                    onValueChange={setGridSize}
                    className="py-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Optimized for A4 printing (18-20px recommended)
                  </p>
                </div>

                {/* Second Language */}
                <div className="space-y-2">
                  <Label htmlFor="second-language" className="text-sm font-medium flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    Second Language
                  </Label>
                  <Select value={secondLanguage} onValueChange={(val) => setSecondLanguage(val as SupportedLanguage)}>
                    <SelectTrigger id="second-language" className="border-purple-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGE_OPTIONS.map(lang => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.flag} {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Definitions shown in English + selected language
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* HSK Quick Select */}
            <Card className="border-purple-100 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Select HSK</CardTitle>
                <CardDescription>Load vocabulary by level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((level) => (
                    <Button
                      key={level}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const chars = getHSKCharacters(level);
                        const sample = chars.slice(0, 10).join(' ');
                        setCharacters(sample);
                      }}
                      className="hover:bg-purple-50 hover:border-purple-300 transition-colors"
                    >
                      HSK {level}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Button */}
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
              size="lg"
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF || !characters.trim()}
            >
              <Download className="mr-2 h-5 w-5" />
              {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
            </Button>
          </div>
        </aside>

        {/* Main Preview Area */}
        <main className="flex-1 p-8 overflow-auto bg-gray-100">
          {/* A4 Page Container - 794px width (210mm) */}
          <div className="mx-auto" style={{ width: '794px', minHeight: '1123px' }}>
            <Card id="worksheet-preview" className="bg-white shadow-2xl border-2 border-purple-100" style={{ width: '794px', minHeight: '1123px' }}>
              {/* Worksheet Header */}
              <div className="text-center py-6 border-b-2 border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50">
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <p className="text-xs text-muted-foreground mt-1">Chinese Character Practice Sheet</p>
                <div className="flex items-center justify-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span>Date: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{uniqueChars.length} unique characters • {charArray.length} rows</span>
                </div>
              </div>

              {/* Preview Content - A4 printable area */}
              <div className="px-12 py-6">
                {charArray.length > 0 ? (
                  <div className="space-y-4">
                    {charArray.map((char, idx) => {
                      const dictEntry = lookupCharacter(char);
                      const englishDef = dictEntry?.definition || '';
                      const translatedDef = translateDefinition(char, englishDef, secondLanguage);

                      return (
                        <div key={idx} className="pb-3 border-b border-gray-100 last:border-0">
                          <WorksheetRow
                            char={char}
                            gridStyle={gridStyle as any}
                            gridSize={gridSize[0]}
                            strokeColor={strokeColor}
                            pinyin={dictEntry?.pinyin}
                            rowNumber={idx + 1}
                            englishDefinition={englishDef}
                            translatedDefinition={translatedDef}
                            secondLanguage={secondLanguage}
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 mb-4">
                      <BookOpen className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Characters Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Enter characters or select HSK level to begin
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
