import { Box, Button, HStack, Text, Image ,VStack} from "@chakra-ui/react";
import logo  from './assets/img/logo.webp'
import {ImEnter} from "react-icons/im"
import TypeIt from "typeit-react"
import ButtonCus from "./components/ButtonCus";


//hstack : 큰 div
// 4 : 16px
function App() {
  return (
    <VStack w="full">
      {/* 메뉴 */}
      <HStack w="full" h="80px" justifyContent={"center"} boxShadow="sm">
        <HStack w="1280px" h="full" justifyContent={"space-between"}>

          <Box w="80px" h="80px" overflow={"hidden"} >
            <Image w="80px" h="80px" objectFit={"cover"} src={logo}/>
          </Box>
          <HStack spacing={8}>
            <Text>업체소개</Text>
            <Text>서비스안내</Text>
            <Text>포트폴리오</Text>
            <Text>커뮤니티</Text>
            <Text>고객센터</Text>
            <HStack bg="blue.400" px="4" py="2" rounded="md">
              <Text color="white">프로젝트관리</Text>
              <ImEnter color="white" size="20px"/>
            </HStack>
          </HStack>

        </HStack>
      </HStack>

      {/* 슬라이드 */}
      <Box w="full" h="550px" bg="yellow.100" position={"relative"}>
        <Image w="full" h="550px" objectFit={"cover"} objectPosition="center" src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"></Image>
        <Box position={"absolute"} w="full" h="full" left="0" top="0" bgGradient={"linear(to-r, rgba( 255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))"}></Box>
        <VStack w="full" h="full" top="30%" position={"absolute"} alignItems="center">
          <VStack w="1280px" h="500px" alignItems={"flex-start"} spacing="0">
            <VStack alignItems={"flex-end"} spacing="-4">
            <Text fontWeight={900} fontSize="60px">랜딩페이지</Text>
            <TypeIt
              options={{
                strings: ["This will be typed in a `span` element!"],
                speed: 10,
                waitUntilVisible: true,
              }}
            />
            </VStack>
            <VStack alignItems={"flex-start"} spacing="0" fontWeight={600}>
              <Text fontSize="24px">트렌드에 맞게, 퀄리티는 높게, 불만족 시 전액 환불!</Text>
              <Text>트렌드에 맞게, 퀄리티는 높게, 불만족 시 전액 환불!</Text>
              <Text>트렌드에 맞게, 퀄리티는 높게, 불만족 시 전액 환불!</Text>
            </VStack>
            <ButtonCus text="자세히보기"/>
          </VStack>
          
        </VStack>
      </Box>
    </VStack>
  );
}

export default App;
