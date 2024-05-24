import ImageWrapper from '@/atoms/ImageWrapper'
import { Card } from '../ui/card'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import ConfirmationDialog from './ConfirmationDialog'

interface RoomDetailProps {
  loggedIn: boolean
  roomtype: any
  availabilityData: any
  bookingData: {
    fromdate: Date | undefined
    todate: Date | undefined
    no_of_rooms: number
    guest_count: number
    roomtype: string
  }
}

const RoomDetails = ({
  loggedIn,
  roomtype,
  availabilityData,
  bookingData,
}: RoomDetailProps) => {
  return (
    <Card className="bg-transparent border-card grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-[1024px] w-11/12 md:w-full mx-auto">
      <ImageWrapper
        src={roomtype.images[0]}
        alt="room image"
        containerStyle="w-full aspect-square"
      ></ImageWrapper>
      <div className="flex flex-col gap-2">
        <h3 className="font-playfair text-2xl border-b pb-2">
          {roomtype.name}
        </h3>
        {!availabilityData.available && (
          <h3 className="italic text-base text-red-800 font-light my-4">
            Unfortunately, there is no availability for the given dates. Please
            try again with different dates
          </h3>
        )}
        {availabilityData.available && (
          <>
            <Table className="my-4">
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} className="text-base font-light">
                    Per night
                  </TableCell>
                  <TableCell className="flex items-center">
                    {' '}
                    <span className="text-base  font-medium">
                      $ {availabilityData.prices.perday}
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3} className="text-base font-light">
                    Total per room
                  </TableCell>
                  <TableCell className="flex items-center">
                    {' '}
                    <span className="text-base  font-medium">
                      $ {availabilityData.prices.perroom}
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3} className="text-base font-light">
                    Grand Total
                  </TableCell>
                  <TableCell className="flex items-center">
                    {' '}
                    <span className="text-base  font-medium">
                      $ {availabilityData.prices.grand}
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <ConfirmationDialog
              loggedIn={loggedIn}
              bookingData={bookingData}
              finalprice={availabilityData.prices.grand}
            ></ConfirmationDialog>
          </>
        )}
      </div>
    </Card>
  )
}
export default RoomDetails
