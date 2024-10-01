import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Group, Text, Transition, rem, useMantineColorScheme } from '@mantine/core';
import { useStores } from '@/models';

export function TogglerAffix() {
  const [scroll, scrollTo] = useWindowScroll();
  const { setColorScheme } = useMantineColorScheme();
  const { i18nStore } = useStores();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Group justify="center" mt="xl">
              <Button style={transitionStyles} onClick={() => setColorScheme('light')} aria-label="light mode">
                Light
              </Button>
              <Button style={transitionStyles} onClick={() => setColorScheme('dark')} aria-label="dark mode">
                Dark
              </Button>
              <Button style={transitionStyles} onClick={() => setColorScheme('auto')} aria-label="auto mode">
                Auto
              </Button>
              <Button
                leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                aria-label="scroll to top"
              >
                Scroll To Top
              </Button>
              <Button
                style={transitionStyles}
                onClick={() => {
                  if (i18nStore.getCurrentLanguage() == 'ar') i18nStore.setAppLanguage('en');
                  else i18nStore.setAppLanguage('ar');
                }}
                aria-label="toggle language"
              >
                Toggle Language
              </Button>
            </Group>
          )}
        </Transition>
      </Affix>
    </>
  );
}
