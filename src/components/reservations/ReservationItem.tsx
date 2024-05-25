import { format } from 'date-fns'
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion'
import { Card } from '../ui/card'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import Link from 'next/link'
import CancelDialog from './CancelDialog'

interface ReservationItemProps {
  reservation: any
}

const ReservationItem = ({ reservation }: ReservationItemProps) => {
  const dates = `${format(reservation.fromdate, 'dd MMM')} - ${format(reservation.todate, 'dd MMM')}`
  const isPending = reservation.status === 'payment pending'
  const isCancelled = reservation.status === 'cancelled'
  const statusStyle = isPending ? 'text-red-800' : 'text-green-700'

  return (
    <Card className="px-4 my-4 border border-card rounded-none">
      <AccordionItem value={reservation._id}>
        <AccordionTrigger className="border-b">
          <div className="w-full px-2 flex items-center justify-between">
            <div className="text-left">
              <h2>{reservation.roomtype.name}</h2>
              <h2 className="font-light text-sm">{dates}</h2>
            </div>

            <h2 className={`font-light capitalize ${statusStyle}`}>
              {reservation.status}
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-2 py-6 border-t">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Rooms/Suites</TableCell>
                  <TableCell align="right">{reservation.no_of_rooms}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Guests</TableCell>
                  <TableCell align="right">{reservation.guest_count}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Invoice No</TableCell>
                  <TableCell align="right">
                    {reservation.invoice ? reservation.invoice._id : 'N/A'}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>From</TableCell>
                  <TableCell align="right">
                    {format(reservation.fromdate, 'dd MMM yyyy')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>To</TableCell>
                  <TableCell align="right">
                    {format(reservation.todate, 'dd MMM yyyy')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Total{' '}
                    <span className="text-sm italic font-light">{`(inc Taxes)`}</span>
                  </TableCell>
                  <TableCell align="right" className="text-lg font-bold">
                    $ {reservation.total_price}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    {isPending && (
                      <Button variant={'default'}>
                        <Link
                          href={`/reservations/payments/${reservation._id}`}
                        >
                          Payments
                        </Link>
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="right" className="text-lg font-bold">
                    {!isCancelled && (
                      <CancelDialog reservationId={reservation._id} />
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Card>
  )
}

export default ReservationItem
