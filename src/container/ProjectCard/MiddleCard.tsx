import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { BounceBox } from "../../components/MotionBox";
import ProjectCard, { ProjectCardI } from "./ProjectCard";

export default function MiddleCard() {
  const projects: ProjectCardI[] = [
    {
      title: "Collegy 🦉",
      description:
        "Designed an algorithm around College Scorecard API and user input, outputs recommended universities. Developed backend RESTful API with Express and site authorization with Google Oauth 2.0 and Redux. Implemented UI/UX design from Figma; included SVG manipulation, animation, and background patterning.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
        { name: "Python", color: "yellow" },
        { name: "TypeScript", color: "teal" },
        { name: "MongoDB", color: "green" },
        { name: "Express", color: "green" },
        { name: "Redux", color: "red" },
        { name: "Figma", color: "purple" },
        { name: "Oauth 2.0", color: "green" },
        { name: "ChakraUI", color: "blue" },
        { name: "Heroku", color: "blue" },
      ],
      demo: "https://collegy.org/",
      github: "https://github.com/Collegy/client",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Ghost Stories 👻",
      description:
        "24 hour project for Hack@Brown 2023 - UI/UX focused story generator - (MERN). Designed 3D models and animations to be rendered in React using Spline. Converted user form data to a formatted prompt to be used with OpenAI's API. Managed story listings and view counts with MongoDB and Express endpoints.",
      badges: [
        { name: "React", color: "blue" },
        { name: "Node", color: "green" },
        { name: "TypeScript", color: "teal" },
        { name: "MongoDB", color: "green" },
        { name: "Express", color: "green" },
        { name: "OPENAI API", color: "teal" },
        { name: "ChakraUI", color: "blue" },
        { name: "Heroku", color: "blue" },
        { name: "Spline", color: "pink" },
      ],
      demo: "https://johnsfarrell.github.io/hb-client/",
      github: "https://github.com/johnsfarrell/hb-client/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Stock Analysis 📈",
      description:
        "Project to get comfortable with Python, MongoDB, and web scraping. Analyzed and applied algorithms in Python to calculate a fundamental analysis of a stock. Queried data from web scrapers, APIs, and MongoDB. Hosted cloud applications from backend to frontend.",
      badges: [
        { name: "DiscordJS", color: "teal" },
        { name: "Python", color: "yellow" },
        { name: "Web Scraping", color: "red" },
        { name: "Heroku", color: "teal" },
        { name: "MongoDB", color: "green" },
      ],
      github: "https://github.com/johnsfarrell/analysis-proj/",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
    {
      title: "Graphing Calculator 📊",
      description:
        "Final project for AP Calculus BC: a web-version of a graphing calculator similar to a TI-84. Implementation of Nerdamer framework, and Patrick Stein's Simple Graph. Designed a UI similar to a TI-84, including graphing, matrices, lists, state plots, and more.",
      badges: [
        { name: "HTML", color: "blue" },
        { name: "CSS", color: "yellow" },
        { name: "JavaScript", color: "green" },
        { name: "Nerdamer", color: "teal" },
        { name: "Simple Graph", color: "teal" },
      ],
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
                  <BounceBox key={key} noOfLines={key % 2 !== 0 ? 0.2 : 0}>
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
