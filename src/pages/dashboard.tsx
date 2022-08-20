import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { theme } from "../styles/theme";
import InvoicesList from "./invoices";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
 const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.blue[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
              axisBorder: {
            color: theme.colors.blue[700],
        },
        axisTicks: {
            color:theme.colors.blue[700],
        },
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom:0.7,
            opacityTo: 0.3
        }
    }
 }
const series = [
    {name: 'income by month', data: [5, 210, 190, 10, 400]}
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
  
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
      <SideBar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box
            p="8"
            bg="blue.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
            Income by Month
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          
          <Box
            p="8"
            bg="blue.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Income by Month
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
        <Box >
        <InvoicesList/>
        </Box>
    </Flex>
 
  );
}
