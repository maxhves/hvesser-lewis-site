import { MAPBOX_API_KEY } from '@/lib/constant'
import Image from 'next/image'
import {
  staticLocationDataUrl,
  staticLocationDataUrlDark,
} from '@/app/home/components/location/static-location-data-url'

import emojiSmilingFace from '../../../../../public/images/emoji-grinning-face-with-smiling-eyes.png'
import GridOutline from '@/components/ui/grid-outline'

//region Map Constants

const STYLE_LIGHT: string = 'streets-v12'
const STYLE_DARK: string = 'dark-v11'
const LATITUDE: number = -0.1
const LONGITUDE: number = 51.505
const ZOOM: number = 12
const BEARING: number = 0
const WIDTH: number = 1000
const HEIGHT: number = 340

//endregion

export default function CurrentLocationCard() {
  const staticMapUrl: string = `https://api.mapbox.com/styles/v1/mapbox/${STYLE_LIGHT}/static/${LATITUDE},${LONGITUDE},${ZOOM},${BEARING}/${WIDTH}x${HEIGHT}@2x?access_token=${MAPBOX_API_KEY}`
  const staticMapUrlDark: string = `https://api.mapbox.com/styles/v1/mapbox/${STYLE_DARK}/static/${LATITUDE},${LONGITUDE},${ZOOM},${BEARING}/${WIDTH}x${HEIGHT}@2x?access_token=${MAPBOX_API_KEY}`

  return (
    <GridOutline className="relative w-full">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <MapMarker />
      </div>
      <div className="relative h-64 overflow-clip rounded-2xl border border-stone-200 dark:border-stone-800">
        <Image
          className="block object-cover dark:hidden"
          src={staticMapUrl}
          alt="Map of Oslo, Norway"
          fill={true}
          placeholder="blur"
          blurDataURL={staticLocationDataUrl}
        />
        <Image
          className="hidden object-cover dark:block"
          src={staticMapUrlDark}
          alt="Map of Oslo, Norway"
          fill={true}
          placeholder="blur"
          blurDataURL={staticLocationDataUrlDark}
        />
      </div>
    </GridOutline>
  )
}

//region Map Marker

function MapMarker() {
  return (
    <div className="flex size-16 items-center justify-center rounded-full border-4 border-white bg-white/50 shadow-lg backdrop-blur-[1px] dark:border-stone-950 dark:bg-stone-950/50">
      <Image
        className="size-10"
        src={emojiSmilingFace}
        alt="Emoji Grinning Face With Smiling Eyes"
        width={40}
        height={40}
      />
    </div>
  )
}

//endregion
