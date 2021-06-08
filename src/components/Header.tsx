import{ 
  Box, 
  Flex,
  Center,
  Spacer
} from '@chakra-ui/react';
import React from 'react';

import { IconsPanel } from './IconsPanel';
import { Inputsearch } from './Inputsearch';
import { BurgerMenu } from './BurgurMenu';
import { MainLogo } from './Logo';

export interface Props {
  
}

export function Header(props: Props) {
  return (
    <Box>
      <Box 
      bg="#183380" height="44px">
        <Flex >
          <Center m={2}>
            <Box display={['block', 'none', 'none', 'none', 'none', 'none']}>
              <BurgerMenu />
            </Box>
          </Center>
          <Center>
            <Box margin="0 21.1px 0 80px" display={['none', 'block']}>
              <MainLogo />
            </Box>
          </Center>
          <Box mt={1.5} display={['none', 'block']}>
            <Inputsearch />
          </Box>
          <Spacer />
          <Box display={['none', 'block']} mr="84px">
            <IconsPanel />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
};

