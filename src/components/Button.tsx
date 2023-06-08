import { Search } from '@tamagui/lucide-icons';
import { Button as TButton, styled } from 'tamagui';

export const Button = styled(TButton, {
  w: '$5',
  h: '$5',
  icon: Search,
  color: '$gray11',
  variants: {
    background: {
      normal: {
        bg: '$blue10',
      },
      outline: {
        borderWidth: '$1',
        borderColor: '$blue10',
      },
    },
  } as const,
  defaultVariants: {
    background: 'normal',
  },
});
