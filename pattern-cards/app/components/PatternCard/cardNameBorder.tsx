import { Cog } from "lucide-react"

const CardNameBorder = ({ name }: { name: string }) => {
    return (
        <div className="flex flex-row items-center gap-1">
            <Cog className="w-7 h-7" />
            <div className="flex border-dashed rounded-sm border-1 border-white w-max pl-4 pr-4 py-1 uppercase font-semibold">
                {name}
            </div>
            <Cog className="w-7 h-7" />
        </div>
    )
}

export default CardNameBorder