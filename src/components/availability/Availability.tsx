'use client'

import AvailabilityAction from '@/actions/availability/availability.action'
import { DateRangePicker } from '../ui/daterangepicker'
import { DateRange } from 'react-day-picker'
import { ChangeEvent, useEffect, useState } from 'react'
import { addDays } from 'date-fns'
import FormSubmit from '@/atoms/FormSubmit'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { useFormState } from 'react-dom'
import ImageWrapper from '@/atoms/ImageWrapper'
import { Card } from '../ui/card'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'

interface AvailabilityProps {
  roomsData: any
}

export interface AvailabilityFormStateType {
  success?: true
  data?: any
  errors: {
    roomtype?: string[]
    people?: string[]
    _form?: string[]
  }
}

const initialState: AvailabilityFormStateType = {
  errors: {
    _form: [],
  },
}

const Availability = ({ roomsData }: AvailabilityProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  const [roomtype, setRoomtype] = useState<any>()
  const [totalrooms, setTotalRooms] = useState(1)
  const [totalpeople, setTotalpeople] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const occupants = parseInt(e.target.value, 10)
    setTotalpeople(occupants)
    if (roomtype && !Number.isNaN(occupants)) {
      const rooms = Math.ceil(occupants / roomtype.occupancy)
      setTotalRooms(rooms)
    } else {
      setTotalRooms(1)
    }
  }

  const bindedAction = AvailabilityAction.bind(null, date, totalrooms)

  const [formState, formAction] = useFormState(bindedAction, initialState)

  useEffect(() => {
    console.log(formState.data)
  }, [formState])

  return (
    <section className="px-4 md:px-12 mt-6 py-4 mx-auto ">
      <h2 className="my-6 text-xl uppercase font-medium text-center">
        Check Availability
      </h2>
      <div className="flex flex-col gap-4 lg:gap-8 my-4">
        <div className="p-4">
          <form
            className="flex flex-col lg:flex-row gap-4 mx-auto items-center max-w-[1024px]"
            action={formAction}
          >
            <DateRangePicker
              date={date}
              setDate={setDate}
              buttonStyle="bg-transparent"
              className="border border-card w-full"
            ></DateRangePicker>
            <div className="w-full">
              <Select
                name="roomtype"
                onValueChange={(e) => {
                  const room: any = roomsData.find(
                    (item: any) => item._id === e
                  )
                  if (totalpeople > 0) {
                    setTotalRooms(Math.ceil(totalpeople / room.occupancy))
                  }
                  setRoomtype(room)
                }}
              >
                <SelectTrigger className="w-full bg-transparent border border-card rounded-none">
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Room</SelectLabel>
                    {roomsData.map((item: any) => (
                      <SelectItem value={item._id} key={item._id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="my-1 text-red-500 text-sm">
                {formState.errors['roomtype']?.join(', ')}
              </p>
            </div>
            <div className="w-full">
              <Input
                onChange={handleChange}
                type="number"
                max={10}
                min={1}
                placeholder="No of People"
                name="people"
                className="w-full bg-transparent rounded-none border border-card"
              />
              <p className="my-1 text-red-500 text-sm">
                {formState.errors['people']?.join(', ')}
              </p>
            </div>

            <div className="w-full text-left font-light">
              No. of rooms: <span className="font-bold">{totalrooms}</span>
            </div>
            <p className="my-4 text-red-500 text-sm">
              {formState.errors['_form']?.join(', ')}
            </p>
            <FormSubmit
              text="Check Availability"
              variant={'outline'}
              className="uppercase min-w-[200px] bg-card text-light-text border border-card"
            ></FormSubmit>
          </form>
        </div>

        {formState.success && (
          <Card className="bg-transparent border-card grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-[1024px] w-11/12 md:w-4/5 mx-auto">
            <ImageWrapper
              src={roomtype.images[0]}
              alt="room image"
              containerStyle="w-full aspect-square"
            ></ImageWrapper>
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-2xl border-b pb-2">
                {roomtype.name}
              </h3>
              {!formState.data.available && (
                <h3 className="italic text-lg">
                  Unfortunately, there is no availability for the given dates.
                  Please try again with different dates and room types
                </h3>
              )}
              {formState.data.available && (
                <Table className="my-4 lg:my-8">
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={3} className="text-base font-light">
                        Per night
                      </TableCell>
                      <TableCell className="flex items-center">
                        {' '}
                        <span className="text-base underline underline-offset-4 font-medium">
                          $ {formState.data.prices.perday}
                        </span>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={3} className="text-base font-light">
                        Total per room
                      </TableCell>
                      <TableCell className="flex items-center">
                        {' '}
                        <span className="text-base underline underline-offset-4 font-medium">
                          $ {formState.data.prices.perroom}
                        </span>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={3} className="text-base font-light">
                        Grand Total
                      </TableCell>
                      <TableCell className="flex items-center">
                        {' '}
                        <span className="text-base underline underline-offset-4 font-medium">
                          $ {formState.data.prices.grand}
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              )}
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}

export default Availability
