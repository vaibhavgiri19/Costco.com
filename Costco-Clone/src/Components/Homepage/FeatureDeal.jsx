import React from 'react';  
import { Link } from "react-router-dom";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";



const FeaturedDeals = () => {  

    return (
        <Box>
          
    
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
                  Available In-Warehouse & Online
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_cover.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  VALID 9/25/24-10/20/24|WHILE SUPPLIES LAST
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/patio-covers"}>
              <SimpleGrid
                bg={"#D68A3D"}
                boxShadow={"md"}
                borderRadius={12}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                   WHAT'S NEW
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_whats_new.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                 
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/random"}>
              <SimpleGrid
                bg={"#D68A3D"}
                borderRadius={12}
                boxShadow={"md"}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                  $39.99-$199.99
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_kitchen.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  UPGRADE YOUR KITCHEN
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/furniture"}>
              <SimpleGrid
                bg={"#D68A3D"}
                boxShadow={"md"}
                borderRadius={12}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                  $299.99-$1299.99
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_lg.jpg"
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  LG TV S
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/random"}>
              <SimpleGrid
                bg={"#D68A3D"}
                borderRadius={12}
                boxShadow={"md"}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                  $4 - $7 OFF
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_puma.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  PUMA
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/random"}>
              <SimpleGrid
                bg={"#D68A3D"}
                boxShadow={"md"}
                borderRadius={12}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                  $3 - $4.50 OFF
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_pantene_olay.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  PANTENE+OLAY
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/random"}>
              <SimpleGrid
                bg={"#D68A3D"}
                borderRadius={12}
                boxShadow={"md"}
                cursor={"pointer"}
                gap={0.5}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                  $3 - $5 OFF
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_lysol_finish.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  LYSOL+FINISH
                </Text>
              </SimpleGrid>
            </Link>
    
            <Link to={"/random"}>
              <SimpleGrid
                bg={"#D68A3D"}
                boxShadow={"md"}
                borderRadius={12}
                cursor={"pointer"}
              >
                <Text fontWeight={700} fontSize={"1.1rem"}>
                   $5 -$6 OFF
                </Text>
                <img
                  src="https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_pharmacy.jpg"
                  alt=""
                />
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"small"}
                >
                  FALL INTO SAVINGS
                </Text>
              </SimpleGrid>
            </Link>
          </SimpleGrid>
        </Box>
      );
  
};  

export default FeaturedDeals;