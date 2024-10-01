import { Container, Stack, Text, Box, Card, AspectRatio, Image, Flex, Group, Center, Anchor, Button } from '@mantine/core';
import React, { useContext, useRef } from 'react';
import classes from './AnimatedBody.module.css';
import AnimatedText from '../../Framer/AnimatedText';
import { Images } from '@/public';
import AnimatedCards from '../../Framer/AnimatedCards';
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion"
import { useAnimate, stagger } from "framer-motion"
import ImageWrapper from '../../Framer/ImageWrapper';
import { useMediaQuery } from '@mantine/hooks';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';
const AnimatedProjects = () => {
  return (
    <Stack opacity={0.4}>
      <AnimatedText text={translate("landingPageFour.project")} />
      <AnimatedText transitionDuration={0.5} text={translate("landingPageFour.showcase")} />
    </Stack>
  );
};

const BodyContent: React.FC = () => {
  const breakPointMAW610px = useMediaQuery('(max-width: 610px)');
  const projectCards = [
    {
      id: 1,
      img: Images.portfolio.body.project_cards.card_one,
      project_name: translate("landingPageFour.designSystem"),
      category: [translate("landingPageFour.webDesign")],
      h: "515px",
      w: "660px",
    },
    {
      id: 2,
      img: Images.portfolio.body.project_cards.card_two,
      project_name: translate("landingPageFour.projectTwo"),
      category: [translate("landingPageFour.category1"), translate("landingPageFour.category2"), translate("landingPageFour.category3")],
      h: "316px",
      w: "474px"
    },
    {
      id: 3,
      img: Images.portfolio.body.project_cards.card_three,
      project_name: 'Project Three',
      category: `['Category1', 'Category2', 'Category3']`,
      h: "382px",
      w: "635px"
    },
    {
      id: 4,
      img: Images.portfolio.body.project_cards.card_four,
      project_name: 'Project Four',
      category: `['Category1', 'Category2', 'Category3']`,
      h: "459px",
      w: "600px"
    },
  ];

  return (
    <>
      {/* body content */}
      <div >
        <Stack gap={250} >
          {projectCards.map((card, index) => (
            <Flex justify={breakPointMAW610px ? "center" : index % 2 == 0 ? "flex-start" : "flex-end"} wrap={"nowrap"}   key={card.id}>
              {/* <Box maw={"33%"} h={"auto"} > */}
                <ImageWrapper src={card.img} h={card.h} w={card.w} />
              {/* </Box> */}
            </Flex>

          ))}
        </Stack>
        <Box mt={200}>



          <ImageWrapper src={Images.portfolio.body.project_cards.card_five} index={4} />


        </Box>

      </div>
    </>
  );
};
const AnimatedValues: React.FC = () => {
  const values ={en: `Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Velit sed
       ullamcorper morbi tincidunt. Posuere sollicitudin
        aliquam ultrices sagittis orci a scelerisque
         purus semper. Cras tincidunt lobortis feugiat. `,
ar:`أعتقد أن هذا التصميم يجب أن يخدم وظيفيًا ،
غرض مؤثر وذات مغزى ، والذي يتطلب
استخدام لغة مرئية تمزج الاستراتيجية
والإبداع لنقل السرد المميز لـ
علامة تجارية أو شركة وإنشاء رابطة معها
الجمهور المستهدف.`
}

  const valuesHeadRef = useRef(null);
  const valuesRef = useRef(null);
  const isHeadInView = useInView(valuesHeadRef, { amount: 0.5 })
  const isValueInView = useInView(valuesRef, { amount: 0.25 })
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  const headingVariants = {
    initial: { opacity: 0, y: 25, },
    animate: { opacity: 1, y: 0 },

  }
  const valuesVariants = {
    initial: { opacity: 0, y: 35 },
    animate: {
      opacity: 1, y: 0,
    },

  }
  
  const Languages = {
    en: "en",
    ar: "ar"
  };
  
  type LanguageTypes = keyof typeof Languages;
  const data = {
    en:"MY VALUES;",
    ar:"قيمي؛"
  }

  return (
    <Box mt={50}>
      {data[language as LanguageTypes]?.split(" ").map((word:any, index:number) => (
        <motion.span
          key={index}
          initial="initial"
          variants={headingVariants}
          animate={isHeadInView ? "animate" : "initial"}
          ref={valuesHeadRef}
          style={{ marginRight: "10px", display: "inline-block", fontSize: "35px", lineHeight: "25px" }}
        >
          <span >{word == " " ? " " : word}</span>
        </motion.span>
      ))}

      <Box mt={25} >
        {values[language as LanguageTypes]?.split("\n").map((word:any, index:any) => {
          return (
            <motion.span
              key={index}
              initial="initial"
              variants={valuesVariants}
              animate={isValueInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.3, type: "easeInOut", staggerChildren: 0.4 }}
              ref={valuesRef}
              
              style={{ display: "inline-block", textTransform: "none" }}
            >
              {word == " " ? " " : word}
            </motion.span>

          )
        })}

      </Box>
    </Box >
  )
}
const AnimatedBody = () => {
  return (
    <>
      <div className={classes.body_container}>
        <Box className={classes.sticky_container}>
          <Box className={classes.backgroundText}>
            <AnimatedProjects />
          </Box>
        <BodyContent />
        </Box>
      </div>
      <Box className={classes.values_container}>

        <AnimatedValues />
      </Box>
     
    </>

  );
};

export default AnimatedBody;
