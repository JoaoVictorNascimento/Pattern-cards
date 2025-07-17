import { LucideIcon } from "lucide-react"

interface CardNameBorderProps {
    name: string
    icon: LucideIcon
}

const CardNameBorder = ({ name, icon: Icon }: CardNameBorderProps) => {
    return (
        <div className="flex flex-row items-center gap-1 mt-3">
            <Icon className="w-4 h-4" />
            <div className="flex border-dashed rounded-sm border-1 border-white w-max pl-4 pr-4 py-1 uppercase font-semibold text-[11px]">
                {name}
            </div>
            <Icon className="w-4 h-4" />
        </div>
    )
}

export default CardNameBorder