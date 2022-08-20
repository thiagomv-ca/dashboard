import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiPagesFill} from "react-icons/ri";
export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Stack spacing="4" mt="8" align="stretch">
          <Link display="flex" align="center">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Dashboard
            </Text>
          </Link>

          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Data Entry
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Documents
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Mechanical
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Invoices
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Administrations
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Review
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Management
            </Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiPagesFill} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Reports
            </Text>
          </Link>
          </Stack>

        </Box>
      </Stack>
    </Box>
  );
}
