import { PatternCardProps } from "@/app/components/PatternCard/types"
import { Cake, Cog, Dog } from "lucide-react"

export const deck: PatternCardProps[] = [
    {
        id: 1,
        name: "Abstract Factory",
        image: "/abstract-factory.png",
        description: "",
        icon: Cog,
    },
    {
        id: 2,
        name: "Builder",
        image: "/builder.png",
        description: "",
        icon: Cake,
    },
    {
        id: 3,
        name: "Factory Method",
        image: "/factory-method.png",
        description: "",
        icon: Dog,
    },
]