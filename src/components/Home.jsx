import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";

function Home() {
  return (
    <div className='home'>
        <div className='my-name'>
            <span className='im'>I'M </span>
            <span className='name'>
                <Typewriter words={["Abderrazzak Boukarou"]} cursorColor='#ffffff'/>
            </span>
            <Cursor />
        </div>
        <motion.div initial={{opacity : 0, x : -100}}
                    animate={{opacity : 1, x : 0}} 
                    transition={{duration : 1.5, delay: 2}}
                    className='my-title'>
            Web Full Stack Developer
        </motion.div>
        <div className='my-cv'>
            <motion.button initial={{opacity : 0}}
                            animate={{opacity : 1}}
                            transition={{duration : 1.2, delay: 3}}>
                Download CV
            </motion.button>
        </div>
    </div>
  )
}

export default Home;