import { Center, Flex, Image } from '@mantine/core';
import hanafinsLogo from '../images/Hanafins Logo.png';

export function Header() {
  return (
    <Flex justify="center" mt="5px">
      <Center>
        <Image src={hanafinsLogo} w="40%" />
      </Center>
    </Flex>
  );
}
