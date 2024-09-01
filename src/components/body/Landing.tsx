import { useState, useEffect } from 'react';
import { Blockquote, Box, Flex, Image, useMantineTheme } from '@mantine/core';
import landingImg from '../images/landing.png';
import { Quote } from 'tabler-icons-react';

export function Landing() {
  const icon = <Quote />;
  const theme = useMantineTheme();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 752);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 752);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.breakpoints.sm]);

  return (
    <Flex justify="center" align="center" mt="5px" style={{ position: 'relative' }}>
      <Image src={landingImg} w="100%" fit="cover" />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '0 20px',
          width: '70%',
        }}
      >
        <Flex
          direction="row"
          gap="md"
          style={{
            display: isSmallScreen ? 'none' : 'flex',
          }}
        >
          <Blockquote
            color="gray"
            cite="– Craig Mitchell"
            icon={icon}
            mt="xl"
            style={{
              width: '50%',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
            }}
          >
            I have found the staff at this pharmacy absolutely brilliant I would recommend this
            pharmacy to anyone
          </Blockquote>
          <Blockquote
            color="gray"
            cite="– Alexa Tannert"
            icon={icon}
            mt="xl"
            style={{
              width: '50%',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
            }}
          >
            Very friendly staff! They put a lot of effort into finding the right medication.
          </Blockquote>
        </Flex>
      </Box>
    </Flex>
  );
}
