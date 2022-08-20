import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiSettings3Fill,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" marginLeft="1" color="blue.900">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={480}
        alignSelf="center"
        color="blue.200"
        position="relative"
        bg="blue.500"
        borderRadius="full"
      >
        <Input
          color="blue.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search in platform"
          _placeholder={{ color: "blue.400" }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" marginLeft="auto">
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="blue.100"
          borderRightWidth={1}
          borderColor="blue.500"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiSettings3Fill} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text> Thiago</Text>
            <Text color="blue.300" fontSize="small">
              thiagomv.ca@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Thiago Meneses"
            src="https://github.com/thiagomv-ca.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
