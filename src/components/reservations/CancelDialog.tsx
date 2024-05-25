'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '../ui/dialog'
import CancelReservationForm from './CancelReservationForm'

interface CancelDialogProps {
  reservationId: string
}
const CancelDialog = ({ reservationId }: CancelDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="border p-2 rounded-md bg-red-400 text-light-text">
        Cancel
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Confirmation</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to cancel this reservation? This action is not
          reversable
        </DialogDescription>
        <DialogFooter className="flex justify-between">
          <DialogClose>Cancel</DialogClose>
          <CancelReservationForm
            reservationId={reservationId}
          ></CancelReservationForm>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CancelDialog
