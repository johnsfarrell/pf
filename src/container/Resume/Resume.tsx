import { Box } from "@chakra-ui/react";
import "./Resume.css";

export default function Resume() {
  return (
    <Box h={"100vh"}>
      <iframe
        title={"Resume"}
        src={process.env.PUBLIC_URL + "/Resume.pdf"}
      ></iframe>
    </Box>
  );
}
