import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 my-4">
      <h4>Resort: {'(444)'} 123 456 789</h4>
      <div className="font-light">
        <h4>45C, Lake Hill,</h4>
        <h4>Hill State.</h4>
      </div>
      <div className="flex gap-4">
        <InstagramLogoIcon height={26} width={26}></InstagramLogoIcon>
        <TwitterLogoIcon height={26} width={26}></TwitterLogoIcon>
      </div>
    </div>
  )
}

export default Contact
