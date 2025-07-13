import { PatternCardProps } from "@/app/components/PatternCard/types"
import { Cake, Cog, Dog, FlaskConical, Sparkle } from "lucide-react"

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
    {
        id: 4,
        name: "Prototype",
        image: "/prototype.png",
        description: "",
        icon: Sparkle,
    },
    {
        id: 5,
        name: "Singleton",
        image: "/singleton.png",
        description: "",
        icon: FlaskConical,
    }
]