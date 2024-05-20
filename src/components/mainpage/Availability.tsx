'use client'

import { Button } from '../ui/button'
import { DateRangePicker } from '../ui/daterangepicker'

const Availability = () => {
  return (
    <section className="mx-4 px-4 xl:ms-20 md:px-12 mt-12">
      <h2 className="my-6 text-sm tracking-[0.25rem] uppercase font-medium text-center sm:text-left">
        Check Availability
      </h2>
      <div className="flex flex-col gap-4 items-center sm:flex-row">
        <DateRangePicker buttonStyle="bg-transparent"></DateRangePicker>
        <Button
          variant={'secondary'}
          className="text-xs uppercase min-w-[200px]"
        >
          Check
        </Button>
      </div>
    </section>
  )
}

export default Availability
