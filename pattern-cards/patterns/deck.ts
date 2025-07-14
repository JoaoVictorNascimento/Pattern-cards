import { PatternCardProps } from "@/app/components/PatternCard/types"
import { Apple, BicepsFlexed, Cake, Coffee, Cog, Dog, FishSymbol, FlaskConical, Plane, Rainbow, Sparkle } from "lucide-react"

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
    },
    {
        id: 6,
        name: "Adapter",
        image: "/adapter.png",
        description: "",
        icon: BicepsFlexed,
    },
    {
        id: 7,
        name: "Bridge",
        image: "/bridge.png",
        description: "",
        icon: Rainbow,
    },
    {
        id: 8,
        name: "Composite",
        image: "/composite.png",
        description: "",
        icon: Apple,
    },
    {
        id: 9,
        name: "Decorator",
        image: "/decorator.png",
        description: "",
        icon: Coffee,
    },
    {
        id: 10,
        name: "Facade",
        image: "/facade.png",
        description: "",
        icon: Plane,
    },
    {
        id: 11,
        name: "Flyweight",
        image: "/flyweight.png",
        description: "",
        icon: FishSymbol,
    },
]