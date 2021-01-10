import React from "react"
import Particles from "react-tsparticles"
import snowflake1 from '../assets/snowflake/snowflake_1.png'
import snowflake2 from '../assets/snowflake/snowflake_2.png'
import snowflake3 from '../assets/snowflake/snowflake_3.png'


const Background: React.FC = () => {
    return (
        <>
            <div className="back_img"/>
            <Particles className="snow"
                       options={{
                           particles: {
                               number: {
                                   value: 250,
                                   density: {
                                       enable: true,
                                       value_area: 800
                                   }
                               },
                               color: {
                                   value: "#ffffff"
                               },
                               shape: {
                                   type: "images",
                                   images: [
                                       {
                                           src: snowflake1
                                       },
                                       {
                                           src: snowflake2
                                       },
                                       {
                                           src: snowflake3
                                       }
                                   ],
                                   stroke: {
                                       width: 0,
                                       color: "#000000"
                                   },
                                   polygon: {
                                       nb_sides: 5
                                   }
                               },
                               opacity: {
                                   value: 1,
                                   random: false,
                                   anim: {
                                       enable: false,
                                       speed: 1,
                                       opacity_min: 0.1,
                                       sync: false
                                   }
                               },
                               size: {
                                   value: 7,
                                   random: {
                                       enable: true,
                                       minimumValue: 4
                                   },
                                   anim: {
                                       enable: false,
                                       speed: 1,
                                       size_min: 4,
                                       sync: false
                                   }
                               },
                               line_linked: {
                                   enable: false,
                                   distance: 150,
                                   color: "#ffffff",
                                   opacity: 0.4,
                                   width: 1
                               },
                               move: {
                                   enable: true,
                                   speed: 3,
                                   direction: "bottom",
                                   random: false,
                                   straight: false,
                                   out_mode: "out",
                                   attract: {
                                       enable: false,
                                       rotateX: 600,
                                       rotateY: 1200
                                   }
                               }
                           },
                           retina_detect: true
                       }}/>
        </>
    )
}

export default Background