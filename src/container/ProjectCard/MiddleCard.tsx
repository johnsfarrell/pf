import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { BounceBox } from "../../components/MotionBox";
import ProjectCard, { ProjectCardI } from "./ProjectCard";

export default function MiddleCard() {
  const projects: ProjectCardI[] = [
    {
      title: "Collegy 🦉",
      description:
        "Collegy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
      ],
      demo: "https://collegy.org/",
      github: "https://collegy.github.com/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Collegy 🦉",
      description:
        "Collegy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
      ],
      demo: "https://collegy.org/",
      github: "https://collegy.github.com/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Collegy 🦉",
      description:
        "Collegy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
      ],
      demo: "https://collegy.org/",
      github: "https://collegy.github.com/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Collegy 🦉",
      description:
        "Collegy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
      ],
      demo: "https://collegy.org/",
      github: "https://collegy.github.com/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Collegy 🦉",
      description:
        "Collegy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
      ],
      demo: "https://collegy.org/",
      github: "https://collegy.github.com/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
  ];

  return (
    <Box
      w={"100vw"}
      bgColor={"rgb(0, 0, 0)"}
      bgImage={process.env.PUBLIC_URL + "/pattern.svg"}
      bgSize={"auto"}
    >
      <Box
        bgGradient={
          "radial-gradient(circle, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,1) 70%)"
        }
      >
        <Container maxW={"container.lg"} pb={"20"}>
          <Heading as="h2" py={"20"} px={2} color={"#ffffff"} id={"projects"}>
            <a href={"/#projects"}>
              <u>#</u>
            </a>{" "}
            Recent Projects
          </Heading>
          <SimpleGrid
            spacingY={10}
            columns={{ base: 1, lg: 2 }}
            justifyItems={"center"}
          >
            {projects.map(
              ({ title, description, badges, demo, github, image }, key) => {
                return (
                  <BounceBox key={key} noOfLines={key % 2 !== 0 ? 0.1 : 0}>
                    <ProjectCard
                      title={title}
                      description={description}
                      badges={badges}
                      demo={demo}
                      github={github}
                      image={image}
                    />
                  </BounceBox>
                );
              }
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
