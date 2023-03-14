import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../../images/svg/header-logo.svg";
import { NavLink } from "react-router-dom";
interface Prop {
  isActive: any;
}

const Header: React.FC<Prop> = ({ isActive }) => {
  return (
    <Flex
      h="96px"
      ml="55px"
      mt="40px"
      justifyContent="space-between"
      position="relative"
    >
      <Flex alignItems="center">
        <Image src={logo} alt="header_logo" boxSize="48px" />
      </Flex>
      <Flex alignItems="center">
        <Box
          width="400px"
          backgroundColor="#fff"
          h="1px"
          opacity="0.25"
          position="absolute"
          left="120px"
          display={{ md: "none", lg: "block" }}
        />
      </Flex>
      <Flex
        w={{ md: "450px", lg: "830px" }}
        style={{ backgroundColor: `rgba(255, 255, 255, 0.1)` }}
        alignItems="center"
        justifyContent="space-around"
        color="#fff"
        fontSize={{ md: "14px", lg: "16px" }}
        fontFamily="
          Barlow Condensed"
      >
        <Flex
          alignItems="center"
          h="100%"
          as={NavLink}
          to={"/"}
          style={{
            borderBottom:
              isActive === "homePage" ? "2px solid white" : "transparent",
          }}
          _hover={{
            borderBottom: "1px solid hsla(360, 100%, 100%, 0.5)",
          }}
        >
          HOME
        </Flex>
        <Flex
          alignItems="center"
          h="100%"
          as={NavLink}
          to={"/destination"}
          style={{
            borderBottom:
              isActive === "destination" ? "2px solid white" : "transparent",
          }}
          _hover={{
            borderBottom: "1px solid hsla(360, 100%, 100%, 0.5)",
          }}
        >
          DESTINATION
        </Flex>
        <Flex
          alignItems="center"
          h="100%"
          as={NavLink}
          to={"/crew"}
          style={{
            borderBottom:
              isActive === "crew" ? "2px solid white" : "transparent",
          }}
          _hover={{
            borderBottom: "1px solid hsla(360, 100%, 100%, 0.5)",
          }}
        >
          CREW
        </Flex>
        <Flex
          alignItems="center"
          h="100%"
          as={NavLink}
          to={"/technology"}
          style={{
            borderBottom:
              isActive === "tech" ? "2px solid white" : "transparent",
          }}
          _hover={{
            borderBottom: "1px solid hsla(360, 100%, 100%, 0.5)",
          }}
        >
          TECHNOLOGY
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
