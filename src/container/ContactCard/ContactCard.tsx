import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowUp } from "react-icons/fa";

export default function ContactCard() {
  return (
    <>
      <Card
        maxW="md"
        bgColor={"#2b2b2b"}
        color={"#ffffff"}
        boxShadow={"2xl"}
        id={"contact"}
      >
        <CardHeader display={"flex"} flexDir={"column"}>
          <Button
            position={{ base: "initial", sm: "absolute" }}
            variant={"ghost"}
            _hover={{ backgroundColor: "#454545" }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <FaArrowUp />
          </Button>
          <Flex w={"100%"} justifyContent={"center"}>
            <Heading as="h3" fontSize={"4xl"} textAlign={"center"}>
              John Farrell
            </Heading>
          </Flex>
          <Text mt={8} textAlign={"center"}>
            <a href={"mailto:jsfarrell@gmail.com"}>
              <u>jsfarrell12@gmail.com</u>
            </a>
          </Text>
        </CardHeader>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <SimpleGrid columns={{ base: 2, sm: 3 }}>
            <a href={"/#resume"}>
              <Button
                _hover={{ backgroundColor: "#454545" }}
                flex="1"
                variant="ghost"
                leftIcon={<FaFileAlt />}
              >
                Resume
              </Button>
            </a>
            <a
              href={"https://www.linkedin.com/in/johnsfarrell/"}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<FaLinkedin />}
                _hover={{ backgroundColor: "#454545" }}
                mx={1}
              >
                LinkedIn
              </Button>
            </a>
            <GridItem colSpan={{ base: 2, sm: 1 }}>
              <a
                href={"https://github.com/johnsfarrell"}
                target={"_blank"}
                rel="noopener noreferrer"
                style={{ width: "100%" }}
              >
                <Button
                  w={"100%"}
                  flex="1"
                  variant="ghost"
                  leftIcon={<FaGithub />}
                  _hover={{ backgroundColor: "#454545" }}
                >
                  GitHub
                </Button>
              </a>
            </GridItem>
          </SimpleGrid>
        </CardFooter>
      </Card>
    </>
  );
}
