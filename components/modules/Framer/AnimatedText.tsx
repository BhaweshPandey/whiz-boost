import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: any;
  transitionDuration?: number;
}
const AnimatedText = ({ text, transitionDuration }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: transitionDuration ? transitionDuration : 0.1,
      },
    },
  };
  return (
    <motion.span
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.1, type: 'spring', damping: 8, stiffness: 10 }}
      ref={ref}
    >
      {text.split('').map((char:any, index:number) => (
        <motion.span variants={defaultAnimations} key={index} style={{ display: 'inline' }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
