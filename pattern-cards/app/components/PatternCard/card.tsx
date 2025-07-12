import { Card, CardContent } from '@/components/ui/card'
import { PatternCardProps } from './types'
import { CardContentBorder } from './cardContentBorder'
import CardIndex from './cardIndex'
import Image from 'next/image'
import CardImageBorder from './cardImageBorder'
import CardNameBorder from './cardNameBorder'


const PatternCard = (props: PatternCardProps) => {
  const { id, name, image, icon } = props
  return (
    <Card className="w-full max-w-80 p-4">
      <div className="relative z-10 bg-black border-none rounded-lg">
        <CardContent className="flex h-[500px] text-amber-400 border-amber-400 rounded-lg border-4 border-double p-0">
          <CardContentBorder>
            <CardImageBorder icon={icon}>
              <CardIndex id={id} />
              <Image src={image} alt={name} width={350} height={550} className="rounded-lg border-4 border-double border-amber-400" />
            </CardImageBorder>
            <CardNameBorder name={name} icon={icon} />
          </CardContentBorder>
        </CardContent>
      </div>
    </Card>
  )
}

export default PatternCard
