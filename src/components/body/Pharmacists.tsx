import { Card, Image, Flex, Stack, Text, Title, Center, Divider } from '@mantine/core';
import jon from '../images/jon.png';
import puneet from '../images/puneet.png';

export function Pharmacists() {
  const teamMembers = [
    {
      id: 1,
      name: 'Puneet Saini',
      title: 'Pharmacist',
      imageSrc: puneet,
    },
    {
      id: 2,
      name: 'Jon Ram',
      title: 'Pharmacist',
      imageSrc: jon,
    },
  ];

  return (
    <Center>
      <Flex justify="center" ta="center" direction="column" maw="65vw">
        <Flex
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          justify="center"
        >
          <Title
            style={{
              fontSize: '150%',
              fontWeight: 600,
              lineHeight: 0.5,
            }}
            my="1rem"
            ta="center"
          >
            Our Pharmacists
          </Title>
          <Text
            style={{
              fontSize: '100%',
              lineHeight: 1.2,
              marginTop: 0,
              fontWeight: 50,
            }}
            ta="center"
            my="1rem"
          >
            Our friendly pharmacists offer Directions for safe and effective use of your medications
            and help explain possible side effects of your medication. We also provide a safe
            disposal service for unused medications.
          </Text>
        </Flex>
        <Flex
          style={{
            padding: 20,
            maxWidth: '1500px',
          }}
          justify="center"
          wrap="wrap"
        >
          {teamMembers.map((item) => (
            <Card
              key={item.id} // Use 'id' as key to avoid potential duplication issues
              shadow="md"
              style={{
                width: '300px',
                margin: '10px',
              }}
              radius="sm"
              withBorder
              padding={0}
            >
              <Flex justify="center" ta="center" direction="column">
                <div style={{ width: '100%', minWidth: '220px' }}>
                  <Image src={item.imageSrc} width="100%" alt={item.title} />
                </div>
                <Stack p={10} justify="flex-end">
                  <Flex direction="column" align="flex-start">
                    <Title size="h4">{item.name}</Title>
                    <Text size="sm">{item.title}</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Card>
          ))}
        </Flex>
        <Divider my="sm" />
      </Flex>
    </Center>
  );
}
