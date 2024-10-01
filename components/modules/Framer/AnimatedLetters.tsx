import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"
import styles from "@/components/modules/Portfolio/CTA/Cta.module.css"
interface AnimatedLettersProps {
    text: any
}
const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ text }: AnimatedLettersProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5});
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            
            y: 0,
            transition: {
                duration: 0.7,
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            
            y: 40,
            transition: {
                
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{  display: "flex"}}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {letters.map((letter:any, index) => (
                <motion.span variants={child} key={index} className={styles.container} >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};


export default AnimatedLetters;