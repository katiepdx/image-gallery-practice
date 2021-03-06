import React from 'react'
import ImageGallery from 'react-image-gallery'
import image1 from '../src/assets/image-1.png'
import image2 from '../src/assets/image-2.png'
import image3 from '../src/assets/image-3.png'
import image4 from '../src/assets/image-4.png'
import image5 from '../src/assets/image-5.png'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

export const ImageSlider = () => {

  const images = [
    { original: image1 },
    { original: image2 },
    { original: image3 },
    { original: image4 },
    { original: image5 }
  ]


  return (
    <div>
      <ImageGallery
        items={images}
        showNav={false}
        showThumbnails={false}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        autoPlay={true}
      />
    </div>
  )
}
