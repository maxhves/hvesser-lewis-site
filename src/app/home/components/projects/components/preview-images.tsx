import Image, { StaticImageData } from 'next/image'

//region Find the Menu

import findTheMenuDesktopPreview from '../../../../../../public/images/find-the-menu-preview-desktop.webp'
import findTheMenuMobilePreview from '../../../../../../public/images/find-the-menu-preview-mobile.webp'

export function FindTheMenuPreviewImage() {
  return <DualImagePreview imageOne={findTheMenuDesktopPreview} imageTwo={findTheMenuMobilePreview} />
}

//endregion

//region Visa Match

import visaMatchDesktopPreview from '../../../../../../public/images/visa-match-preview-desktop.webp'

export function VisaMatchPreviewImage() {
  return <SingleImagePreview image={visaMatchDesktopPreview} />
}

//endregion

//region Common

function SingleImagePreview({ image }: { image: StaticImageData }) {
  return (
    <div className="relative h-full w-full border border-stone-200 opacity-100 dark:border-stone-800 dark:opacity-90">
      <Image className="object-cover object-top" src={image} alt="Product preview" fill={true} />
    </div>
  )
}

function DualImagePreview({ imageOne, imageTwo }: { imageOne: StaticImageData; imageTwo: StaticImageData }) {
  return (
    <div className="relative h-full w-full border border-stone-200 opacity-100 dark:border-stone-800 dark:opacity-90">
      <div className="absolute inset-y-0 left-0 top-0 h-full w-full">
        <Image className="object-cover object-top" src={imageOne} alt="Product preview" fill={true} />
      </div>
      <div className="absolute inset-y-0 right-0 top-0 h-full w-72 border-s border-stone-200">
        <Image className="object-cover object-top" src={imageTwo} alt="Product preview" fill={true} />
      </div>
    </div>
  )
}

//endregion