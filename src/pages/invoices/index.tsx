import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Checkbox,
  Tbody
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Pagination } from "../../components/Pagination";

export default function InvoicesList() {
  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <Box as="aside" w="64" mr="8"></Box>
        <Box flex="1" borderRadius={8} bg="blue.500" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="nomal">
              Invoices
            </Heading>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="blue.50" width="32">COMPANIES</Th>
                <Th px="6" color="blue.50" width="32">INVOICES</Th>
                <Th px="6" color="blue.50" width="32">INVOICES AMOUNT</Th>
                <Th px="6" color="blue.50" width="32">DUE DATE</Th>
              </Tr>
            </Thead>
            <Tbody>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
                <Tr>
                <Td px="6">
                    company 1
                </Td>
                <Td px="6">
                    invoice #1234
                </Td>
                <Td px="6">
                    $120,00.00
                </Td>
                <Td px="6">
                    August 2, 2022
                </Td>
                </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
        
      </Flex>
    </Box>
  );
}
