import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react"

const ChevronSign = ({ position, visible }: { position: 'left' | 'right' | 'up' | 'down', visible: boolean }) => {
    const positionIcon = {
        left: <ChevronLeftIcon className="w-7 h-7 text-amber-800" />,
        right: <ChevronRightIcon className="w-7 h-7 text-amber-800" />,
        up: <ChevronUpIcon className="w-7 h-7 text-amber-800" />,
        down: <ChevronDownIcon className="w-7 h-7 text-amber-800" />,
    }

    const getAnimationClass = () => {
        if (!visible) return 'opacity-0'

        switch (position) {
            case 'left': return 'animate-pulse-bounce-left opacity-100'
            case 'right': return 'animate-pulse-bounce-right opacity-100'
            case 'up': return 'animate-pulse-bounce-up opacity-100'
            case 'down': return 'animate-pulse-bounce-down opacity-100'
            default: return 'animate-pulse-bounce opacity-100'
        }
    }

    return (
        <div className={`transition-all duration-200 ${getAnimationClass()}`}>
            {positionIcon[position]}
        </div>
    )
}

export default ChevronSign