import { Blockquote, Box, Flex, Group, Image, Text } from '@mantine/core';
import landingImg from '../images/landing.png';
import hanafinsWhite from '../images/hanafinsWhite.png';
import { Quote } from 'tabler-icons-react';

export function Landing() {
  const icon = <Quote />;

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
          backgroundColor: 'rgba(0, 0, 0, 0.45)', // Slightly black overlay
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
        <Flex>
          <Blockquote color="gray" cite="– Craig Mitchell" icon={icon} mt="xl" w="50%">
            I have found the staff at this pharmacy absolutely brilliant I would recommend this
            pharmacy to anyone
          </Blockquote>
          <Blockquote color="gray" cite="– Alexa Tannert" icon={icon} mt="xl" w="50%">
            Very friendly staff! They put a lot of effort into finding the right medication.
          </Blockquote>
        </Flex>
      </Box>
    </Flex>
  );
}
