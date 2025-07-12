import { LucideIcon } from "lucide-react";

interface BorderCornerProps {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    icon: LucideIcon;
}

const BorderCorner = ({ position, icon: Icon }: BorderCornerProps) => {
    const getPositionClasses = () => {
        switch (position) {
            case 'top-left':
                return 'top-[2.2rem] left-[0.2rem] rounded-tl-[0.5rem] rounded-br-[1.4rem]';
            case 'top-right':
                return 'top-[2.2rem] right-[0.2rem] rounded-tr-[0.5rem] rounded-bl-[1.4rem]';
            case 'bottom-left':
                return 'bottom-[0.2rem] left-[0.2rem] rounded-bl-[0.5rem] rounded-tr-[1.4rem]';
            case 'bottom-right':
                return 'bottom-[0.2rem] right-[0.2rem] rounded-br-[0.5rem] rounded-tl-[1.4rem]';
        }
    };

    const classes = getPositionClasses();
    
    const getIconPositionClasses = () => {
        switch (position) {
            case 'top-left':
                return 'top-0 left-[0.01rem]';
            case 'top-right':
                return 'top-0 right-[0.01rem]';
            case 'bottom-left':
                return 'bottom-0 left-[0.01rem]';
            case 'bottom-right':
                return 'bottom-0 right-[0.01rem]';
        }
    };

    return (
        <div className={`absolute w-5 h-5 bg-amber-400 ${classes}`}>
            <Icon className={`absolute w-4 h-4 text-black ${getIconPositionClasses()}`} />
        </div>
    );
};

interface CardImageBorderProps {
    children: React.ReactNode;
    icon: LucideIcon;
}

const CardImageBorder = ({ children, icon }: CardImageBorderProps) => {
    return (
        <div className="relative pt-8">
            <BorderCorner position="top-left" icon={icon} />
            <BorderCorner position="top-right" icon={icon} />
            {children}
            <BorderCorner position="bottom-left" icon={icon} />
            <BorderCorner position="bottom-right" icon={icon} />
        </div>
    )
}

export default CardImageBorder