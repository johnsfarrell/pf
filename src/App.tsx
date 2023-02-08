import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import ContactCardContainer from "./container/ContactCard/ContactContainer";
import MiddleCard from "./container/ProjectCard/MiddleCard";
import Resume from "./container/Resume/Resume";
import TopCard from "./container/TopCard/TopCard";

export const App = () => {
  const [hashtag, setHashtag] = React.useState(window.location.hash);
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.split("?")[0];
      setHashtag(hash);
    };
    window.onhashchange = handleHashChange;
    return () => {
      window.onhashchange = null;
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {hashtag === "#resume" && <Resume />}
      {hashtag !== "#resume" && (
        <>
          <TopCard />
          <MiddleCard />
          <ContactCardContainer />
        </>
      )}
    </ChakraProvider>
  );
};
