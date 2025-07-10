import { toRoman } from "@/app/helpers/format"

const CardIndex = ({ id }: { id: number }) => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <div className="flex justify-center items-center w-14 h-14 rounded-full border-amber-400 border-2">
                <div className="flex justify-center items-center w-12 h-12 rounded-full border-black border-1 bg-amber-300">
                    <div className="flex justify-center items-center w-11 h-11 rounded-full border-amber-400 border-2 border-dotted bg-black">
                        <div className="flex justify-center items-center w-7 h-7 rounded-full border-amber-400 border-2 bg-black">
                            <span>{toRoman(id)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardIndex