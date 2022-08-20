import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="blue.500"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="facebook" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
