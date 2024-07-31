import React from 'react';
import html from '../img/html.svg';
import css from '../img/css.svg';
import python from '../img/python.svg';
import js from '../img/js.svg';
import php from '../img/php.svg';
import laravel from '../img/laravel.svg';
import react from '../img/react.svg';
import mysql from '../img/mysql.svg';
import mongodb from '../img/mongodb.svg';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-list'>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={html} alt='not found'/>
                <h3>HTML</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={css} alt='not found'/>
                <h3>CSS</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={js} alt='not found'/>
                <h3>JavaScript</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={python} alt='not found'/>
                <h3>Python</h3>
            </motion.div>
            
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={php} alt='not found'/>
                <h3>PHP</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={laravel} alt='not found'/>
                <h3>Laravel</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={react} alt='not found'/>
                <h3>React</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={mysql} alt='not found'/>
                <h3>MySQL</h3>
            </motion.div>
            <motion.div className='skills-item' whileHover={{y:-5, backgroundColor : '#FFD700', color: '#1A1A1A'}}>
                <img src={mongodb} alt='not found'/>
                <h3>mongoDB</h3>
            </motion.div>
        </div>
    </div>
  )
}

export default Skills;