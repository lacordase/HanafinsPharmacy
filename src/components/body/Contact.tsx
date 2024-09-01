import { Center, Flex, Paper, Text, Title } from '@mantine/core';
import GoogleMapReact from 'google-map-react';
import React from 'react';

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = ({ lat, lng }) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      borderRadius: '50%',
      textAlign: 'center',
      color: 'white',
      lineHeight: '20px',
    }}
  >
    H
  </div>
);


export default function Contact() {
  const defaultProps = {
    center: {
      lat: -43.52888376794229,
      lng: 172.60531066773504,
    },
    zoom: 15,
  };

  return (
    <>
      <Center mt="xl">
        <Title
          style={{
            fontSize: '150%',
            fontWeight: 600,
            lineHeight: 0.5,
          }}
          my="1rem"
          ta="center"
          mb="xl"
        >
          Contact Us
        </Title>
      </Center>
      <Flex direction="column" align="center" justify="center" mt="md">
        <Center w="100%" maw="75vw">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap="lg"
            w="100%"
            align="center"
            justify="center"
          >
            <Paper p="md" style={{ width: '100%', maxWidth: '600px' }}>
              <Text
                size="clamp(16px, 2vw, 24px)"
                fw={500}
                mb="md"
              >
                Open Monday to Friday 8.30am - 5.30pm <br /> Closed Saturday and Sunday
              </Text>
              <Text mb="md" c="dimmed" size="clamp(14px, 1.5vw, 20px)">
                Shop 8, 62 Riccarton Road <br /> Riccarton <br /> Christchurch
              </Text>
              <Text size="clamp(14px, 1.5vw, 20px)">
                <Text component="span" fw={500}>
                  Phone:
                </Text>{' '}
                03 348 8071
              </Text>
              <Text size="clamp(14px, 1.5vw, 20px)">
                <Text component="span" fw={500}>
                  Email:
                </Text>{' '}
                pharmacy@hanafinspharmacy.co.nz
              </Text>
            </Paper>
            <div style={{ height: '30vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCx8B92YvV9HkPg12rtxUZ8grr0rUSJ2e8' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <Marker lat={-43.52888376794229} lng={172.60531066773504} />
              </GoogleMapReact>
            </div>
          </Flex>
        </Center>
      </Flex>
      <Center mt="xl">
        <Paper p="md" h="60vh" style={{ maxWidth: '600px' }}>
          <Text maw="100%" ta="center" size="clamp(14px, 1.5vw, 20px)">
            For urgent matters outside these hours, please contact: The Urgent Pharmacy <br />
            Corner Bealey Ave and Columbo St <br /> Christchurch <br />
            (03) 366 4439
          </Text>
        </Paper>
      </Center>
    </>
  );
}
