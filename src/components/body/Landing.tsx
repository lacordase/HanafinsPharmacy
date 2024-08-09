import { Box, Flex, Image, Text } from '@mantine/core';
import landingImg from '../images/landing.png';
import hanafinsWhite from '../images/hanafinsWhite.png';

export function Landing() {
  return (
    <Flex
      justify="center"
      align="center" // Center text vertically
      mt="5px"
      style={{ position: 'relative' }} // Use style prop for positioning
    >
      <Image src={landingImg} w="100%" fit="cover" />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slightly black overlay
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center text
          color: 'white',
          textAlign: 'center',
          padding: '0 20px', // Optional padding for readability
        }}
      >
        <Text size="30pt" fw={500}>
          Compassionate Community Care Right Around the Corner
        </Text>
      </Box>
    </Flex>
  );
}
