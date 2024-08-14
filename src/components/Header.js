import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Slide } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: khayyon.parker@coloradocollege.edu",
  },
  {
    icon: faGithub,
    url: "https://github.com/Khayyon1",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/khayyon-parker/",
  },
  {
    icon: faMedium,
    url: "https://parktwin2.medium.com/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const listIcons = socials.map(item => 
    <a href={item.url}>
      <FontAwesomeIcon icon={item.icon} size="2x" />
    </a>
);

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const handleScroll = () => {
    let currScrollY = window.scrollY;

    setShowHeader(prevScrollY === 0 || prevScrollY >= currScrollY);
    setPrevScrollY(currScrollY);
  }

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Slide direction="top" in={showHeader} style = {{ zIndex: 10}}>
    <Box backgroundColor="#18181b">
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {listIcons}
            </HStack>
            
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
                <BrowserRouter>
                  <HashLink onClick={handleClick} to="#projects-section">Projects</HashLink>
                  <HashLink onClick={handleClick} to="#contactme-section">Contact Me</HashLink>
                </BrowserRouter>
                {/* <a id="projects" href="/projects" onClick={handleClick}>Projects</a> */}
                {/* <a id="contactme" href="/#contact-me" onClick={handleClick}>Contact Me</a> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
    </Slide>
  );
};
export default Header;
