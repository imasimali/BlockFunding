import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Register = ({ user, createUserWithEmailAndPassword }) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    checkUser(user);
  }, []);

  useEffect(() => {
    checkUser(user);
  }, [user]);

  function checkUser(user) {
    if (user != null) {
      router.push("/");
    }
  }

  async function onSubmit(data) {
    // console.log(data.emailAddress, data.passWord);
    setError("");
    const registerUser = await createUserWithEmailAndPassword(
      data.emailAddress,
      data.passWord
    );
    if (registerUser.code) {
      setError(registerUser.message);
    }
    checkUser(user);
  }

  return (
    <div>
      <Head>
        <title>Create Account</title>
        <meta name="description" content="Create your account." />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Text fontSize={"lg"} color={"teal.400"}>
            <ArrowBackIcon mr={2} />
            <NextLink href="/"> Back to Home</NextLink>
          </Text>
          <Stack>
            <Heading fontSize={"4xl"}>Create your account 📢</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl id="cnicNumber">
                  <FormLabel>CNIC Number</FormLabel>
                  <Input
                    {...register("cnicNumber", { required: true })}
                    isDisabled={isSubmitting}
                    type="number"
                  />
                </FormControl>
                <FormControl id="phoneNumber">
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    {...register("phoneNumber", { required: true })}
                    isDisabled={isSubmitting}
                    type="number"
                  />
                </FormControl>
                <FormControl id="emailAddress">
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    {...register("emailAddress", { required: true })}
                    isDisabled={isSubmitting}
                    type="email"
                  />
                </FormControl>
                <FormControl id="passWord">
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...register("passWord", { required: true })}
                    isDisabled={isSubmitting}
                    type="password"
                  />
                </FormControl>

                {error ? (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription mr={2}> {error}</AlertDescription>
                  </Alert>
                ) : null}
                {errors.cnicNumber ||
                errors.phoneNumber ||
                errors.name ||
                errors.passWord ? (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription mr={2}>
                      {" "}
                      All Fields are Required
                    </AlertDescription>
                  </Alert>
                ) : null}
                <Stack spacing={10}>
                  <Button
                    bg={"teal.400"}
                    color={"white"}
                    _hover={{
                      bg: "teal.500",
                    }}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Create User Account
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </main>
    </div>
  );
};

export default Register;
