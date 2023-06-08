import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Input, TamaguiProvider, Theme, XStack, YStack } from 'tamagui';

import { Button } from './src/components/Button';
import { ChangeTheme } from './src/components/ChangeTheme';
import { User } from './src/components/User';
import config from './tamagui.config';

export default function App() {
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('light');

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const onChangeColorScheme = (isDarkScheme: boolean) => {
    setColorScheme(isDarkScheme ? 'dark' : 'light');
  };

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <YStack f={1} backgroundColor={'$background'} p="$6" pt="$8">
          <XStack jc={'space-between'} ai={'center'}>
            <User />
            <ChangeTheme onCheckedChange={onChangeColorScheme} />
          </XStack>

          <XStack space={'$2'} mt={'$6'}>
            <Input
              f={1}
              w={'$5'}
              h={'$5'}
              placeholder="Search..."
              placeholderTextColor={'$gray11'}
              focusStyle={{
                bw: 2,
                boc: '$blue10',
              }}
            />
            <Button background="outline" />
          </XStack>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
