import { Center, Divider, Flex, Stack, Text } from '@mantine/core';

export function Info() {
  return (
    <Flex justify="center" mt="50" maw="100%">
      <Center>
        <Stack maw="65%" mb="xl">
          <Text c="black" size="clamp(14px, 3vw, 20pt)" fw={300} ta="center">
            Hanafins Pharmacy is conveniently located in Riccarton Rd, Christchurch. It has an
            excellent range of prescription and over-the-counter medicines and vitamins.
          </Text>
          <Text c="black" size="clamp(14px, 3vw, 20pt)" fw={300} ta="center" mb="xl">
            The pharmacy is next to High Street City Health Medical Centre for all of your medical
            needs. We are open Monday to Friday 8.30am - 5.30pm, or until the last patient has been
            seen at High Street City Health.
          </Text>
          <Divider my="sm" />
        </Stack>
      </Center>
    </Flex>
  );
}
