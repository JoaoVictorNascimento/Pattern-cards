import { Card, CardContent } from '@/components/ui/card'
import { PatternCardProps } from './types'
import { CardContentBorder } from './cardContentBorder'
import CardIndex from './cardIndex'
import Image from 'next/image'
import CardImageBorder from './cardImageBorder'


const PatternCard = (props: PatternCardProps) => {
  const { id, name, image } = props
  return (
    <Card className="w-full max-w-72  bg-black border-none p-4 rounded-lg">
      <CardContent className="flex h-[500px] text-amber-400 border-amber-400 rounded-lg border-4 border-double p-0">
        <CardContentBorder>
          <CardImageBorder>
            <CardIndex id={id} />
            <Image src={image} alt={name} width={200} height={300} />
          </CardImageBorder>
          <span>{name}</span>
        </CardContentBorder>
      </CardContent>
    </Card>
  )
}

export default PatternCard
