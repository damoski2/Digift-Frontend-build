import React, { useEffect } from 'react'
import { sphereImage, scribbleIconLeft } from '../../images'
import style from '../../styles/Interaction.module.css'
import AOS from "aos";
import "aos/dist/aos.css";



const Interaction = () => {

  useEffect(()=>{
    AOS.init()
    AOS.refresh();
  },[])

  return (
    <div className={style.interaction__cnt} >
        <h1>
        Create happiness from buying a gift card today.
        <img data-aos="fade-up" src={scribbleIconLeft} />
        </h1>
    </div>
  )
}

export default Interaction