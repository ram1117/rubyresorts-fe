'use client'

import FormSubmit from '@/atoms/FormSubmit'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { format } from 'date-fns'
import CreateReservationAction from '@/actions/reserve/createreservation.action'
import { useFormState } from 'react-dom'

interface ConfirmationDialogProps {
  loggedIn: boolean
  finalprice: number
  bookingData: {
    fromdate: Date | undefined
    todate: Date | undefined
    no_of_rooms: number
    guest_count: number
    roomtype: string
  }
}

export interface CreateReservationFormStateType {
  success?: boolean
  data?: any
  errors: {
    fromdate?: string[]
    todate?: string[]
    no_of_rooms?: string[]
    roomtype?: string[]
    guest_count?: string[]
    _form?: string[]
  }
}

const initialState: CreateReservationFormStateType = {
  success: false,
  errors: {
    _form: [],
  },
}

const ConfirmationDialog = ({
  loggedIn,
  bookingData,
  finalprice,
}: ConfirmationDialogProps) => {
  const bindedAction = CreateReservationAction.bind(null, bookingData)

  const [formState, formAction] = useFormState(bindedAction, initialState)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={!loggedIn}
          variant={'default'}
          className="w-max px-6 "
        >
          Book Now
        </Button>
      </DialogTrigger>
      {!loggedIn && (
        <p className="text-sm font-light text-red-800">
          Sign in to reserve now
        </p>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Reservation</DialogTitle>
          <Table className="my-4 lg:my-8">
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} className="text-base font-light">
                  From
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-base  font-medium">
                    {format(bookingData.fromdate || new Date(), 'dd MMM yyyy')}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} className="text-base font-light">
                  To
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-base  font-medium">
                    {format(bookingData.todate || new Date(), 'dd MMM yyyy')}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} className="text-base font-light">
                  Guests
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-base  font-medium">
                    {bookingData.guest_count}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} className="text-base font-light">
                  Rooms/Suites
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-base  font-medium">
                    {bookingData.no_of_rooms}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3} className="text-base font-light">
                  Total{' '}
                  <span className="text-sm italic"> {`(including taxes)`}</span>
                </TableCell>
                <TableCell className="flex items-center">
                  {' '}
                  <span className="text-base  font-medium">$ {finalprice}</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogHeader>
        <DialogFooter className="flex-row justify-between">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <form action={formAction}>
            <FormSubmit variant={'default'} text="Reserve"></FormSubmit>
          </form>
        </DialogFooter>
        <p className="text-sm text-red-800">
          {formState.errors['_form']?.join(', ')}
        </p>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmationDialog
