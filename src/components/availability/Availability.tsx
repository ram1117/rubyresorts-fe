'use client'

import AvailabilityAction from '@/actions/availability/availability.action'
import { DateRangePicker } from '../ui/daterangepicker'
import { DateRange } from 'react-day-picker'
import { ChangeEvent, useState } from 'react'
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
import RoomDetails from './RoomDetails'
import { Label } from '../ui/label'

interface AvailabilityProps {
  loggedIn: boolean
  roomsData: any
}

export interface AvailabilityFormStateType {
  success?: true
  data?: any
  errors: {
    roomtype?: string[]
    people?: string[]
    no_of_rooms?: string[]
    _form?: string[]
  }
}

const initialState: AvailabilityFormStateType = {
  errors: {
    _form: [],
  },
}

const Availability = ({ roomsData, loggedIn }: AvailabilityProps) => {
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

  const bindedAction = AvailabilityAction.bind(null, date)

  const [formState, formAction] = useFormState(bindedAction, initialState)

  return (
    <section className="px-4 md:px-12 mt-6 py-4 mx-auto ">
      <h2 className="my-6 text-xl uppercase font-medium text-center">
        Check Availability
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 my-4 mx-auto max-w-[1300px]">
        <div className="w-full">
          <form className="flex flex-col gap-4 items-start" action={formAction}>
            <div className="w-full">
              <p className="text-sm uppercase tracking-wider">Pick dates</p>
              <DateRangePicker
                date={date}
                setDate={setDate}
                buttonStyle="bg-transparent"
                className="border border-card w-full"
              ></DateRangePicker>
            </div>

            <div className="w-full">
              <Label
                htmlFor="roomtype"
                className="text-sm uppercase tracking-wider"
              >
                Select Room
              </Label>
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
                <SelectContent id="roomtype">
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
              <Label
                htmlFor="people"
                className="text-sm uppercase tracking-wider"
              >
                Guests
              </Label>
              <Input
                id="people"
                onChange={handleChange}
                type="number"
                placeholder="No of Guests"
                name="people"
                className="w-full bg-transparent rounded-none border border-card"
              />
              <p className="my-1 text-red-500 text-sm">
                {formState.errors['people']?.join(', ')}
              </p>
            </div>
            <div className="w-full">
              <Label
                htmlFor="no_of_rooms"
                className="text-sm uppercase tracking-wider"
              >
                Rooms
              </Label>
              <Input
                name="no_of_rooms"
                type="number"
                placeholder="No. of rooms"
                min={totalrooms}
                defaultValue={totalrooms}
                id="no_of_rooms"
                className="w-full bg-transparent rounded-none border border-card"
              />
              <p className="my-1 text-red-500 text-sm">
                {formState.errors['no_of_rooms']?.join(', ')}
              </p>
            </div>

            <FormSubmit
              text="Check Availability"
              variant={'outline'}
              className="uppercase min-w-[200px] bg-card text-light-text border border-card"
            ></FormSubmit>
            <p className="my-4 text-red-500 text-sm">
              {formState.errors['_form']?.join(', ')}
            </p>
          </form>
        </div>

        {formState.success && (
          <RoomDetails
            loggedIn={loggedIn}
            roomtype={roomtype}
            availabilityData={formState.data}
            bookingData={{
              fromdate: date?.from,
              todate: date?.to,
              no_of_rooms: totalrooms,
              guest_count: totalpeople,
              roomtype: roomtype._id,
            }}
          ></RoomDetails>
        )}
      </div>
    </section>
  )
}

export default Availability
