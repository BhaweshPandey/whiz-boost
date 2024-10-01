import { Box, Center, Container, Flex, Stack, Text, rem } from '@mantine/core';
import React, { useContext } from 'react'
import classes from "./Cta.module.css";
import { delay, motion } from "framer-motion"
import AnimatedLetters from '../../Framer/AnimatedLetters';
import Reveal from '../../Framer/Reveal';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';
const Languages = {
  en: "en",
  ar: "ar"
};

type LanguageTypes = keyof typeof Languages;

const Cta = () => {

  const domains = [{ en: "DIGITAL DESIGN", ar: "التصميم الرقمي" },
    { en: "WEB DEVELOPMENT", ar: "تطوير الويب" },
    { en: "BRANDING", ar: "العلامة التجارية" },
    { en: "UI/UX", ar: "واجهة المستخدم / تجربة المستخدم" },
    { en: "ART DIRECTION", ar: "إدارة الفن" }
  ]
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  return (
    <>


      <Box pb={150} className={classes.container}>
        <Flex justify={"flex-start"} w={"100%"} pl={"10px"} >
          <Stack
            gap={35}
          >
            <AnimatedLetters text={translate("landingPageFour.designThe")} />
            <AnimatedLetters text={translate("landingPageFour.change")} />
          </Stack>
        </Flex>
        <Flex justify={"space-between"} align={"center"} mt={75} wrap={"wrap"} mb={110}>
          {domains.map((domain, index) => (
            <Reveal children={<Text size={"xl"} fw={400} key={index} lts={-0.9}>
              {domain[language as LanguageTypes]}
            </Text>} />

          ))}
        </Flex>
        <Flex justify={"flex-end"} w={"100%"}>
          <Stack
            gap={35}
          >
            <AnimatedLetters text={translate("landingPageFour.youWant")} />
            <AnimatedLetters text={translate("landingPageFour.toSee")} />
          </Stack>
        </Flex>
      </Box>

    </>


  )
}

export default Cta