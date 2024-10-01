import { useContext, useState } from 'react';
import { Container, Anchor, Group, Burger, Box, Text, Drawer, Stack, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DoubleHeader.module.css';
import { Images } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedNav } from '../../Framer/NavBar/AnimatedNav';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';
import { IconLanguage } from '@tabler/icons-react';
import { useRouter } from 'next/router';


const Languages = {
  en: "en",
  ar: "ar"
};

type LanguageTypes = keyof typeof Languages;
const userLinks = [
  { link: '#', label:{ en: "Privacy & Security", ar: "الخصوصية والأمان" }},
  { link: '#', label:{ en: "Account settings", ar: "إعدادات الحساب" }},
  { link: '#', label: { en: "Support options", ar: "خيارات الدعم" } },
];


const mainLinks = [
  { link: '#', label:{ en: "HOME", ar: "الرئيسية" } },
  { link: '#', label:{ en: "WORK", ar: "العمل" } },
  { link: '#', label: { en: "ABOUT", ar: "حول" } },
  { link: '#', label: { en: "CONTACT", ar: "اتصل" }},
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<Number>(0);
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label[language as LanguageTypes]}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label[language as LanguageTypes ]}
    </Anchor>
  ));

  return (
    // <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
    <header className={classes.header}>
      <div className={classes.inner} >
        {/* <Link href="https://highpolar.io/" passHref> */}
        <Text className={classes.logo}>WB.</Text>
        {/* </Link> */}
        <Box  >
          <Group gap={0} justify="flex-end" className={classes.mainLink} visibleFrom='sm'>
            {mainItems}
            <Button color= "gray" variant='subtle' onClick={() => {
              changeLanguage();
              }}>
             {language=="en"?"Language":"لغة"}<IconLanguage/>
          </Button>
          </Group>
         
        </Box>
        <Burger
          color={"white"}
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
          hiddenFrom="sm"
          aria-label="toggle menu"
        />
        {/* <Drawer opened={opened} onClose={toggle} >
        <Stack gap={10}  >
                {mainItems}
              </Stack>
        </Drawer> */}
        <Drawer opened={opened} onClose={toggle} onClick={() => toggle()}>
        <Text mb = "lg" fw = {900} fz={"50px"} color= "black" variant='subtle' onClick={() => {
              changeLanguage();
              }}>
            {language=="en"?"Language":"لغة"}<IconLanguage/>
          </Text>
          <Stack justify='center' gap={"xl"}>
            {mainLinks.map((link) => {
              return (
                <Anchor href={link.link} aria-label='drawer-menu' underline='never'>
                  <Text c={" #202123"} fz={68} fw={700}>{link.label[language as LanguageTypes]}</Text>
                  </Anchor>


              )
            })}
             
          </Stack>

        </Drawer>

        {/* <AnimatedNav/> */}
      </div>
    </header>
    // </ScrollArea>
  );
}
