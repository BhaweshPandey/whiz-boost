import React, { useEffect, useRef } from 'react';
import { AnimatePresence, inView, motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useMantineTheme } from '@mantine/core';
import classes from "@/components/modules/Portfolio/Body/AnimatedBody.module.css"
import { Images } from '@/public';

interface AnimatedCardsProps {
  children: JSX.Element;
}

const AnimatedCards: React.FC<AnimatedCardsProps> = ({ children }: AnimatedCardsProps) => {


  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref);
 
  const controls = useAnimation();

  // Define animation variants for the card and overlay
  const cardVariants = {

    hidden: {
      opacity: 1,
      x: 0 // Initial position
    },
    visible: {
      opacity: 1,
      x: isInView ? -900 : 0, // Translate in negative x-direction when in view
      transition: {
        duration: 0.8, // Adjust the transition duration as needed, 
        delay: 0.2
      }
    }
  };

  const overlayVariants = {

    hidden: {
      opacity: 0,
      x: 600 // Initial position
    },
    visible: {
      opacity: 1,
      x: isInView ? -900 : 600, // Translate in negative x-direction when in view
      transition: {
        duration: 1, // Adjust the transition duration as needed
        delay: 0.25
      }
    }
  };
  const imgVariants = {
    initial: {
      x:0,
      opacity:1,
      
    }, 
    visible:{
      x: "-100%",
      opacity: 1,
      transition:{
        duration: 2,
        type: "ease",
        
      }
    }, 
   
  }

  // Trigger animations when the component comes into view
  useEffect(() => {
    
    controls.start(isInView ? "visible" : "hidden");
  }, [isInView])


  return (
    <motion.div
      ref={ref}
      style={{
        overflowX: "hidden", // Hide horizontal overflow
        position: "relative", // Positioning context for the absolute positioned image
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.7)", // Adjust overlay color and opacity
        }}
        initial="hidden"
        animate={controls}
        variants={overlayVariants}
      />
      <motion.div

        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};






export default AnimatedCards;
