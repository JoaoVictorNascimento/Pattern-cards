import ChevronSign from '../ChevronSign'
import { patternCategories } from './config'

const PatternsList = ({ selectedPattern, setSelectedPattern }: { selectedPattern: { id: number, file: string } | null, setSelectedPattern: (pattern: { id: number, file: string }) => void }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="absolute z-2 bottom-19 right-2/8 h-6/8 w-40 lg:w-58 overflow-y-auto scrollbar-hidden">
        {patternCategories.map((category) => (
          <div key={category.title} className="mt-3">
            <h2 className="text-xs font-bold text-amber-700">{category.title}</h2>
            <div className="text-left">
              {category.patterns.map((pattern) => (
                <div key={pattern.id} className="flex flex-col items-start">
                  <p className={`mt-2 text-[11px] cursor-pointer ${selectedPattern?.id === pattern.id ? 'text-amber-600' : 'text-gray-700'}`} onClick={() => setSelectedPattern(pattern)}>
                    {pattern.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-70">
        <ChevronSign position="down" visible={true} />
      </div>
    </div>
  )
}

export default PatternsList
