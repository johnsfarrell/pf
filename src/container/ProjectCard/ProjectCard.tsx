import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";

export interface ProjectCardI {
  title: string;
  description: string;
  badges: { name: string; color: string }[];
  image: string;
  github: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  badges,
  image,
  github,
  demo,
}: ProjectCardI) {
  return (
    <Card maxW="md" bgColor={"#121212"} color={"#ffffff"}>
      <CardHeader>
        <Flex w={"100%"} justifyContent={"center"}>
          <Heading as="h3" fontSize={"2xl"} textAlign={"center"}>
            {title}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody pt={0}>
        <Text mb={4}>{description}</Text>
        <Flex flexWrap={"wrap"}>
          {badges.map((badge, key) => {
            return (
              <Badge key={key} mt={1} mr={1} colorScheme={badge.color}>
                {badge.name}
              </Badge>
            );
          })}
        </Flex>
      </CardBody>
      <Image objectFit="cover" src={image} alt={title + " demo"} h={160} />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {demo && (
          <a href={demo}>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<FaSignOutAlt />}
              _hover={{ backgroundColor: "#454545" }}
              mx={1}
            >
              Demo
            </Button>
          </a>
        )}
        {github && (
          <a href={github}>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={<FaGithub />}
              _hover={{ backgroundColor: "#454545" }}
              mx={1}
            >
              GitHub
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
