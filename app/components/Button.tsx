// src/components/Button.tsx
import { TouchableOpacity, Text } from 'react-native';

import { FC } from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity className='bg-blue-400 w-[50%] mx-auto p-4 rounded-lg  '  onPress={onPress}>
      <Text className='text-white text-center text-[16px]'>{title}</Text>
    </TouchableOpacity>
  );
};



export default Button;