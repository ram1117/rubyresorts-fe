import Image, { StaticImageData } from 'next/image'

interface ImageWrapperProps {
  src: string | StaticImageData
  alt: string
  containerStyle: string
  className?: string
  sizes?: string
}

const ImageWrapper = ({
  src,
  alt,
  containerStyle,
  className = '',
  sizes = '',
}: ImageWrapperProps) => {
  return (
    <div className={`${containerStyle} relative`}>
      <Image
        src={src}
        alt={alt}
        className={`${className}`}
        sizes={sizes}
        fill
      />
    </div>
  )
}

export default ImageWrapper
