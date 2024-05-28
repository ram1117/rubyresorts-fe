import ImageWrapper from '@/atoms/ImageWrapper'
import Link from 'next/link'

interface RoomItemProps {
  room: any
}

const RoomItem = ({ room }: RoomItemProps) => {
  return (
    <li className="flex flex-col gap-4 lg:gap-6">
      <ImageWrapper
        src={room.images[0]}
        alt={room.name}
        containerStyle="w-full aspect-[3/2]"
        sizes="(max-width:640px) 100vw,(max-width:768px) 50vw, 40vw "
      />
      <h3 className="font-playfair text-xl md:text-2xl font-light">
        {room.name}
      </h3>
      <Link
        href={`/rooms/${room._id}`}
        className="text-sm tracking-tight font-light underline underline-offset-8 decoration-1"
      >
        Learn more
      </Link>
    </li>
  )
}

export default RoomItem
