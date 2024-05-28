import ImageWrapper from '@/atoms/ImageWrapper'
import PenIcon from '@public/icons/icon-pen.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import PasswordChangeForm from './PasswordChangeForm'

const EditPassword = () => {
  return (
    <Accordion type="single" collapsible className="border-b">
      <AccordionItem value={'Edit_item'} className="">
        <div className="flex items-center justify-between">
          <p>Password</p>

          <AccordionTrigger className="flex gap-4 items-center">
            <div className="flex gap-1 items-center">
              <ImageWrapper
                src={PenIcon}
                alt="edit icon"
                containerStyle="h-4 w-4"
                sizes="10vw"
              />
            </div>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <PasswordChangeForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default EditPassword
