import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({name, label, ...rest} : InputProps) {
    return (
        <FormControl>
        { !!label && <FormLabel htmlFor="email">{label}</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="cyan.500"
          backgroundColor="blue.600"
          variant="filled"
          _hover={{
            backgroundColor: "blue.600",
          }}
          size="lg"
          {...rest}
        />
      </FormControl>
    );
}