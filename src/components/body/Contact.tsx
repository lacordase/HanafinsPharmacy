import { Flex, Text, Center, Title, Paper } from '@mantine/core';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Pin } from 'tabler-icons-react';

const Marker = () => (
  <div
    style={{
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      borderRadius: '50%', // Adjusted for perfect circle
      textAlign: 'center',
      color: 'white',
      lineHeight: '20px', // Adjusted to match height
    }}
  >
    H{' '}
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
      <Center mt='xl'>
        <Title
          style={{
            fontSize: '150%',
            fontWeight: 600,
            lineHeight: 0.5,
          }}
          my="1rem"
          ta="center"
          mb='xl'
        >
          Contact Us
        </Title>
      </Center>
      <Flex direction="column" align="center" justify="center" mt="md">
        <Center>
          <Flex maw="75vw">
            <Paper w="50%">
              <Text size='xl' fw={500} mb='md'>Open Monday to Friday 8.30am - 5.30pm <br/> Closed Saturday and Sunday</Text>
              <Text mb='md' c='dimmed'>Shop 8, 62 Riccarton Road  <br/>  Riccarton  <br/> Christchurch</Text>
              <Text><Text component='span' fw={500}>Phone:</Text> 03 348 8071</Text>
              <Text><Text component='span' fw={500}>Email:</Text> pharmacy@hanafinspharmacy.co.nz</Text>
            </Paper>
            <div style={{ height: '20vh', width: '500px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCx8B92YvV9HkPg12rtxUZ8grr0rUSJ2e8' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <Marker
                  lat={-43.52888376794229} // Marker latitude
                  lng={172.60531066773504} // Marker longitude
                />
              </GoogleMapReact>
            </div>
          </Flex>
        </Center>
      </Flex>
      <Center mt='xl'>
        <Paper h="60vh">
          <Text maw="400px" ta="center">
            For urgent matters outside these hours, please contact: The Urgent Pharmacy <br />
            Corner Bealey Ave and Columbo St <br/> Christchurch <br />
            (03) 366 4439
          </Text>
        </Paper>
      </Center>
    </>
  );
}
