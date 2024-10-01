import { Container, Group, ActionIcon, rem, Center, Box, Text, Flex, SimpleGrid, Grid, Divider } from '@mantine/core';
import classes from './FooterSocial.module.css';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';
import { useContext } from 'react';

const Languages = {
  en: "en",
  ar: "ar"
};

type LanguageTypes = keyof typeof Languages;

export function FooterSocial() {
  // const socials = [translate("landingPageFour.email"), translate("landingPageFour.behance"), translate("landingPageFour.facebook"), translate("landingPageFour.linkedin"), translate("landingPageFour.dribble"), translate("landingPageFour.instagram")];
  const context = useContext(I18nContext);

  const socials = [
     { en: "Email", ar: "البريد الإلكتروني" },
    { en: "Behance", ar: "بيهانس" },
    { en: "Facebook", ar: "فيسبوك" },
    { en: "Linkedin", ar: "لينكدإن" },
    { en: "Dribbble", ar: "دريبل" },
    { en: "Instagram", ar: "إنستغرام" }]
  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  const data = {
    en:"©2024 Whiz Boost | all rights reserved | CVR: 44013460",
    ar:"© 2024 Whiz Boost |جميع الحقوق محفوظة |CVR: 44013460"
  }

  return (
    <div className={classes.footer}>
      <Container size={1425}>
        <Grid justify='flex-start' gutter={0}>
          {socials.map((social, index) => (
            <Grid.Col span={{ base: 12, xl: 4, lg: 4 }} key={index}  >
              <Text className={classes.text}>{social[language as LanguageTypes]} </Text>
            </Grid.Col>
          ))}

        </Grid>
        <Box className={classes.afterFooter}>

        </Box>
        <Box>
          <h2 className={classes.footerText}>{data[language as LanguageTypes]?.toUpperCase()}</h2>
        </Box>
      </Container>



    </div>
  );
}