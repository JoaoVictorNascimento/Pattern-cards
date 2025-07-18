import { PatternCardProps } from "@/app/components/PatternCard/types"
import {
    Apple, BicepsFlexed, Bone, BowArrow, Briefcase, Cake,
    CircleDotDashed, ClockFading, Coffee, Cog, Dog, Eye,
    FishSymbol, FlaskConical, Hand, Handshake, MapPinned, Plane, Pointer,
    Rainbow, Sparkle, Utensils, VenetianMask
} from "lucide-react"

export const deck: PatternCardProps[] = [
    {
        id: 1,
        name: "Abstract Factory",
        image: "/abstract-factory.png",
        icon: Cog,
    },
    {
        id: 2,
        name: "Builder",
        image: "/builder.png",
        icon: Cake,
    },
    {
        id: 3,
        name: "Factory Method",
        image: "/factory-method.png",
        icon: Dog,
    },
    {
        id: 4,
        name: "Prototype",
        image: "/prototype.png",
        icon: Sparkle,
    },
    {
        id: 5,
        name: "Singleton",
        image: "/singleton.png",
        icon: FlaskConical,
    },
    {
        id: 6,
        name: "Adapter",
        image: "/adapter.png",
        icon: BicepsFlexed,
    },
    {
        id: 7,
        name: "Bridge",
        image: "/bridge.png",
        icon: Rainbow,
    },
    {
        id: 8,
        name: "Composite",
        image: "/composite.png",
        icon: Apple,
    },
    {
        id: 9,
        name: "Decorator",
        image: "/decorator.png",
        icon: Coffee,
    },
    {
        id: 10,
        name: "Facade",
        image: "/facade.png",
        icon: Plane,
    },
    {
        id: 11,
        name: "Flyweight",
        image: "/flyweight.png",
        icon: FishSymbol,
    },
    {
        id: 12,
        name: "Proxy",
        image: "/proxy.png",
        icon: Hand,
    },
    {
        id: 13,
        name: "Chain of Responsibility",
        image: "/chain-of-responsibility.png",
        icon: BowArrow,
    },
    {
        id: 14,
        name: "Command",
        image: "/command.png",
        icon: Pointer,
    },
    {
        id: 15,
        name: "Interpreter",
        image: "/interpreter.png",
        icon: CircleDotDashed,
    },
    {
        id: 16,
        name: "Iterator",
        image: "/iterator.png",
        icon: Briefcase,
    },
    {
        id: 17,
        name: "Mediator",
        image: "/mediator.png",
        icon: Handshake,
    },
    {
        id: 18,
        name: "Memento",
        image: "/memento.png",
        icon: ClockFading,
    },
    {
        id: 19,
        name: "Observer",
        image: "/observer.png",
        icon: Eye,
    },
    {
        id: 20,
        name: "State",
        image: "/state.png",
        icon: VenetianMask,
    },
    {
        id: 21,
        name: "Strategy",
        image: "/strategy.png",
        icon: MapPinned,
    },
    {
        id: 22,
        name: "Template Method",
        image: "/template-method.png",
        icon: Utensils,
    },
    {
        id: 23,
        name: "Visitor",
        image: "/visitor.png",
        icon: Bone,
    },
]