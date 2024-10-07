import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Box>
      <Flex  
      bg="red.500"  
      color="white"  
      align="center"  
      justify="center"  
      padding="20px"  
      borderRadius="md"  
      cursor="pointer"  
      height={"110px"}
      width={"89.5%"}
      ml={"100px"}
      mb={"30px"}
    >  
      <Text fontSize="30px" textAlign="center">  
        Join us in supporting the American Red Cross. Help people affected by Hurricane Helene
        &gt;  
      </Text>   
    </Flex> 
      <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/25w01207/d_25w01207_hero_member_savings_event.jpg"
            alt=""
            width={"1700px"}
          />
        </Link>
      </Flex>

      <SimpleGrid
        textAlign={"center"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={7}
        p={[6, 6, 8, 20]}
      >
        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $500 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/sn8fp8b6nj95w9bn53k8rbx/4000240858-847__1?auto=webp&amp;format=jpg&amp;width=350&amp;height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              FABRIC SECTIONAL
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
               $700 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/tpw86536rfsg6mk7wt8f8xrx/2670948-847__1?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              WOOD SHED
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $429.99
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/j7w4pvrmnf46v89p888b8xz/9465800-847__3?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              65 INCH TV
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/furniture"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $320 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/q3cvmpwbcjwm6chqrzqjfcqr/6660750-847__1?auto=webp&amp;format=jpg&amp;width=350&amp;height=350"
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              DISHWASHER
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $30 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/c3np9vpb92xjktb3ngh3hm7/3449587-847__1?auto=webp&amp;format=jpg&amp;width=350&amp;height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              AIR PURIFIER
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $50 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/as/nbjrrhbww3vxb7jf7wpmrbn/4000294363-847__1?auto=webp&amp;format=jpg&amp;width=350&amp;height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              KNIFE SET
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              Member Only
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/n4vrcjww5xx9z6vn7bpmr4/1795801-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              INSTCART
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
               $18 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/7ftnckbzvbr8sv56n2nq9q4/1491066-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              FRONTLINE
            </Text>
          </SimpleGrid>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default Section1;
