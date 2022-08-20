import { Stack, Button, Box} from "@chakra-ui/react";

export function Pagination() {
return (
    <Stack
    direction="row"
    mt="8"
    justifyContent="space-between"
    align="center"

    >
 <Box>
<strong>0</strong> - <strong>10</strong> of <strong>40</strong>   
</Box>       
 <Stack direction="row" spacing="2">
 <Button 
        size="sm"
        fontSize="xs"
        colorScheme="cyan"
        disabled
        _disabled={{
            bgColor:'blue.200',
            cursor: 'default'
        }}
        >
            1
        </Button>
        <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="blue.700"
        _hover={{
            bgColor: 'blue.200'
        }}
        >
            2
        </Button>
        <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="blue.700"
        _hover={{
            bgColor: 'blue.200'
        }}
        >
            3
        </Button>
        <Button 
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="blue.700"
        _hover={{
            bgColor: 'blue.200'
        }}
        >
            4
        </Button>
 </Stack>
    </Stack>
);
}