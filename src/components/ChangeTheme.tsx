import { Moon, Sun } from '@tamagui/lucide-icons';
import React from 'react';
import { Switch, SwitchProps, XStack } from 'tamagui';

export function ChangeTheme({ ...rest }: SwitchProps) {
  return (
    <XStack space={'$2'} ai={'center'}>
      <Sun size={'$1'} />
      <Switch size={'$2'} bg={'$gray6'} {...rest}>
        <Switch.Thumb animation={'bouncy'} />
      </Switch>
      <Moon size={'$1'} />
    </XStack>
  );
}
