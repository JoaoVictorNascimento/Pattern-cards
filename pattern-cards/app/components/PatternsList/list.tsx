import { patternCategories } from './config'

const PatternsList = ({ selectedPattern, setSelectedPattern }: { selectedPattern: number | null, setSelectedPattern: (pattern: number) => void }) => {
  return (
    <div className="absolute z-2 ml-60 mt-28 h-2/3 w-64 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-amber-400 scrollbar-track-amber-100 scrollbar-track-rounded-full">
      {patternCategories.map((category) => (
        <div key={category.title} className="mt-3">
          <h2 className="text-xs font-bold text-amber-600">{category.title}</h2>
          <div className="text-left">
            {category.patterns.map((pattern) => (
                <div key={pattern.id} className="flex flex-col items-start">
                  <p className={`mt-2 text-sm cursor-pointer ${selectedPattern === pattern.id ? 'text-amber-500' : 'text-gray-700'}`} onClick={() => setSelectedPattern(pattern.id)}>
                    {pattern.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PatternsList
