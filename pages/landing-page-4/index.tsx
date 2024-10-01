import { DoubleHeader } from '@/components/modules/Mantine/HeaderWithLayers/DoubleHeader';
import classes from './portfolio.module.css';
import AnimatedHero from '@/components/modules/Portfolio/Hero/AnimatedHero';
import AnimatedBody from '@/components/modules/Portfolio/Body/AnimatedBody';
import AwardsSection from '@/components/modules/Portfolio/Awards/Awards';
import { TableReviews } from '@/components/modules/Mantine/TableReviews/TableReviews';
import Cta from '@/components/modules/Portfolio/CTA/Cta';
import { FooterSocial } from '@/components/modules/Portfolio/FooterSocial/FooterSocial';
import { BackgroundImage, Box, Container } from '@mantine/core';
import Image from 'next/image';
import { Images } from '@/public';
import { useContext, useEffect, useState } from 'react';
import I18nContext from '@/context/i18nContext';
// import '@/public/image/portfolio_assets/asset_7.svg'
const PortfolioLanding = () => {
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <div dir={language == "ar"? 'rtl' : 'ltr'}>
    <div className={classes.custom_background}>
      <Box className={classes.honours}>
        <a href={"https://www.awwwards.com/sites/barbora-design"} target='_blank'>
          <Image src={Images.portfolio.body.project_cards.honours} alt={"honours"} width={52.8} height={171.3} />
        </a>
      </Box>
      <Container size={1425}>
        <DoubleHeader />
        <AnimatedHero />
        <AnimatedBody />
      </Container>
      <AwardsSection />
      <Container size={1425}>
        <TableReviews />
        <Cta />
      </Container>
      <FooterSocial />
    </ div>
    </div>

  );
};

export default PortfolioLanding;
