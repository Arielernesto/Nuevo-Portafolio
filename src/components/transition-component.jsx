"use client"
import { fadeIn } from "../../utils/motion-transitions"
import { motion } from "framer-motion"

export const MotionTransition = (props) => {
    const {children, className , position} = props
       return (
        <motion.div variants={fadeIn(position)} initial="hidden" animate="visible" exit="hidden" className={className}>
            {children}
        </motion.div> 
    )
}
