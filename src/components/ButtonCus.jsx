import { Box, Button, HStack, Text, Image ,VStack} from "@chakra-ui/react";

export default function ButtonCus({text}) {
    return (
        <Box cursor="pointer" py="2" px="4" color="white" rounded="lg" _hover={{
            color: "orange.500",
            bg : "white",
        }} bg="red.300"><Text>{text}</Text></Box>

    )
}