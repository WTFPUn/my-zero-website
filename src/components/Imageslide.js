
import { useEffect, useState, Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

 
export default function ImageSlide({imagedata}){
        return (
            <div className="slide-container">
            <Fade>
              <div className="each-fade">
                <div className="image-container">
                  <Image src={imagedata[0]} />
                </div>
                
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <Image src={imagedata[1]} />
                </div>
                
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <Image src={imagedata[2]} />
                </div>
                
              </div>
            </Fade>
          </div>
        )
    }

    


 