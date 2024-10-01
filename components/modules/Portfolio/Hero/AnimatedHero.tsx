import {
  Box,
  Center,
  Container,
  Flex,
  Group,
  Overlay,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import React, { useRef } from 'react';
import classes from './AnimatedHero.module.css';
import Reveal from '@/components/modules/Framer/Reveal';
import { motion } from 'framer-motion';
import { translate } from '@/i18n';

const AnimatedSubheading = () => {
  const ref = useRef(null);

  const p_text = [
    translate("landingPageFour.text1"),
    translate("landingPageFour.text2"),
    translate("landingPageFour.text3")
  ];

  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: 'spring',
      },
    }),
  };
  return (
    <Box className={classes.intrigued}>
      {p_text.map((text, index) => {
        return (
          <motion.p
            ref={ref}
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
          >
           {text}
          </motion.p>
        );
      })}
    </Box>
  );
};

const AnimatedHero = () => {
  return (
    <>
      <Box className={classes.container} >
        <Flex justify={"flex-end"} wrap={"wrap"} direction={"column"} gap={80}>
          <Box>

            <Reveal children={<>{translate("landingPageFour.heading")}</>} />
            <Flex direction={"column"} wrap={"wrap"} mt={"lg"}>
              <Stack className={classes.title} >
                <Reveal children={
                  <>{translate("landingPageFour.web")}</>
                } transitions={{ duration: 0.4, delay: 0.1 }} />
                <Reveal children={
                  <>{translate("landingPageFour.developer")}</>
                } transitions={{ duration: 0.7, delay: 0.3 }} />
              </Stack>
            </Flex>
          </Box>
          <Box className={classes.title}  >
            <Flex justify={"center"} align={"center"} >
              <Box h={179} w={201} id={"flex_wrapper"}>
                <Reveal children={<>&</>}  />
              </Box>
              <Stack >
                <Reveal children={<>{translate("landingPageFour.digital")}</>} />
                <Reveal children={<>{translate("landingPageFour.designer")}</>} />
              </Stack>
            </Flex>
          </Box>
          <AnimatedSubheading />
        </Flex>
        
      </Box>
    </>
  );
};

export default AnimatedHero;
