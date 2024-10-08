import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Email, Password } from "../Redux/actionItems";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import Chakra UI icons

const SignupPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(state.email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!passwordRegex.test(state.password)) {
      toast({
        title: "Weak password",
        description:
          "Password must be at least 8 characters long and contain 1 uppercase letter, 1 number, and 1 special character.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (confirmPassword !== state.password) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    localStorage.setItem("credentials", JSON.stringify(state));
    navigate("/login");
  };

  return (
    <Box>
      <Flex justifyContent={"center"} p={4} bg={"#EEEEEE"}>
        <Box w={150}>
          <Link to={"/"}>
            <img
              src="https://signin-ui.costco.com/ecomssoui/22/common/Images/logo-bc-us.svg"
              alt=""
            />
          </Link>
        </Box>
      </Flex>

      <SimpleGrid
        justifyContent={"center"}
        alignItems={"center"}
        w={["90%", "70%", "50%", "30%"]}
        m={"auto"}
      >
        <SimpleGrid>
          <Text fontSize={"36px"} mt={5} mb={5}>
            Create Account
          </Text>
          <Box p={7} border={"1px solid rgba(0,0,0,0.2)"}>
            <FormControl>
              {/* Email Input */}
              <Input
                type="email"
                placeholder="Email Address"
                border={"1px solid"}
                mb={3}
                onChange={(e) =>
                  dispatch({ type: Email, payload: e.target.value })
                }
              />
              
              {/* Password Input with Eye Icon */}
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  border={"1px solid"}
                  mb={3}
                  onChange={(e) =>
                    dispatch({ type: Password, payload: e.target.value })
                  }
                />
                <InputRightElement>
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    _hover="none"
                    size="sm"
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {/* Confirm Password Input */}
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  border={"1px solid"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <InputRightElement>
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    _hover="none"
                    size="sm"
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Text
                color={"rgb(0,96,169)"}
                fontSize={"12px"}
                _hover={{ textDecoration: "underline" }}
                fontWeight={400}
                cursor={"pointer"}
                m={2}
              >
                Where can I find my membership number?
              </Text>
              <Flex mt={5} mb={4}>
                <input type="checkbox" />
                <Text fontWeight={400} fontSize={"14px"}>
                  Yes, I would like to receive emails about special promotions
                  and new product information from Costco. Costco will not rent
                  or sell your email address.
                </Text>
              </Flex>
              <Text fontWeight={400} fontSize={"12px"}>
                By creating an account you agree to Costco.com terms and
                conditions of use.
              </Text>

              <Button
                w={"100%"}
                mt={4}
                mb={3}
                fontWeight={400}
                bg={"#2A6293"}
                color={"#FFFFFF"}
                _hover={"none"}
                onClick={handleSignup}
              >
                Create Account
              </Button>
            </FormControl>

            <Divider bg={"rgba(0,0,0,0.5)"} mt={2} mb={3}></Divider>

            <Flex fontWeight={400} fontSize={"16px"}>
              <Text fontWeight={400} fontSize={"18px"} mb={4}>
                Already have an account?
              </Text>
              <Link to={"/login"}>
                <Text
                  color={"#0056B3"}
                  ml={2}
                  _hover={{ textDecoration: "underline" }}
                  cursor={"pointer"}
                >
                  Sign In
                </Text>
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid
        bg={"#EEEEEE"}
        p={5}
        mt={28}
        justifyContent={"center"}
        color={"#5F5F5F"}
      >
        <Flex
          gap={3}
          fontSize={"14px"}
          mt={3}
          mb={5}
          fontWeight={400}
          justifyContent={"center"}
        >
          <Text _hover={{ textDecoration: "underline" }}>Terms and Conditions</Text>
          <Text _hover={{ textDecoration: "underline" }}>Privacy Rights</Text>
        </Flex>
        <Text fontWeight={400} fontSize={"14px"}>
          © 2024 Costco Wholesale Corporation. All rights reserved.
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default SignupPage;
