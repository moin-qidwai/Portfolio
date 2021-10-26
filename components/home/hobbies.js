import { motion } from "framer-motion"
import { useState } from 'react';

const hobbies = ['Eating', 'Raspberry PI', 'Hiking', 'LOL', 'GTA', 'Crunches', 'Angular', 'Codeforces', 'Math', 'Augmented Reality', 'Quantum Computing', 'Tea', 'Open Spaces'];

export default function Hobbies() {

    const [hobby, setHobby] = useState(hobbies[0]);

    function onUpdate(latest) {
        if (latest.x === -200.0) {
            setHobby(hobbies[Math.floor(Math.random()*hobbies.length)])
        }
    }

    return (
        <div>
            <motion.p 
                class="max-w-max my-1 px-2 py-1 md:text-lg font-medium text-green-500 bg-gray-800"
                initial={{ x: 0, scale: '100%' }}
                animate={{ x: -200, scale: '10%' }}
                transition={{ type: 'tween', ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1, duration: 3 }}
                onUpdate={onUpdate}
                >
                    { hobby }
                </motion.p>
        </div>
    )
}