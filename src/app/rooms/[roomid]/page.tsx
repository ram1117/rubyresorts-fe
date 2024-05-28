import ImageWrapper from '@/atoms/ImageWrapper'
import { urlGetRoomById } from '@/lib/apilinks'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { API_METHODS, makeApiRequest } from '@/lib/apiservice'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DataNotAvailable from '@/atoms/DataNotAvailable'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export const revalidate = 3600

const Page = async ({ params }: { params: { roomid: string } }) => {
  const response = await makeApiRequest(
    API_METHODS.GET,
    urlGetRoomById(params.roomid)
  )

  if (!response?.ok) {
    return <DataNotAvailable />
  }
  const roomData = await response?.json()

  return (
    <div className="mx-4 mt-8 lg:mt-16 border-2 px-6 md:px-12 max-w-[1440px] w-11/12 mx-auto">
      <h1 className="border-b py-2 font-playfair text-xl lg:text-3xl mt-8 max-w-[1024x] font-light tracking-wider w-full">
        {roomData.name}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full my-8 gap-4 lg:gap-8 text-lg">
        <Carousel className="w-full lg:col-span-2">
          <CarouselContent>
            {roomData.images.map((image: string) => (
              <CarouselItem key={image}>
                <ImageWrapper
                  src={image}
                  alt="room images"
                  containerStyle="w-full aspect-square"
                  sizes="(max-width:768px) 90vw, 40vw"
                ></ImageWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={'secondary'} className="!-left-0" />
          <CarouselNext variant={'secondary'} className="!-right-0" />
        </Carousel>
        <div className="px-4 lg:px-8 lg:col-span-3">
          <p className="mb-4">{roomData.description}</p>
          <p>Amenities Include:</p>
          <ul className="grid grid-cols-2 list-disc ms-6 font-light text-base py-2">
            {roomData.amenities.map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          <Table className="my-4 lg:my-8">
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} className="text-lg">
                  Maximum Occupancy
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-xl underline underline-offset-4 font-bold">
                    {roomData.occupancy}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} className="text-lg">
                  Prices start from
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-xl underline underline-offset-4 font-bold">
                    $ {roomData.price.baserate}
                  </span>
                  <span className="mx-2 text-sm italic font-light">/night</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Button
            asChild
            variant={'default'}
            className="my-4 w-full bg-card border-2 border-card !rounded-none w-max tracking-wider uppercase"
          >
            <Link href="/availability">Check Availability</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page
