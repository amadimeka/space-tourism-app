import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Header from "../components/common/Header";
import landing_image from "../image/landing_image.jpg";
import landing_image_mobile from "../image/home_bgM.jpg";

const Home = () => {
  const isActive = "homePage";
  return (
    <>
      <Flex
        color="#fff"
        flexDir="column"
        w="100%"
        h="100%"
        backgroundImage={{
          lg: `url(${landing_image})`,
          md: `url(${landing_image_mobile})`,
        }}
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      >
        <Header isActive={isActive} />
        <Flex
          flexDirection={{ md: "column", lg: "row" }}
          justifyContent={{ md: "center", lg: "space-between" }}
          alignItems={{ md: "center", lg: "normal" }}
          mt={{ md: "106px", lg: "250px" }}
          pl={{ md: "0", lg: "165px" }}
          pr={{ md: "0", lg: "11px" }}
        >
          <Flex flexDir="column" w="500px" h="382px">
            <Text
              fontSize={{ md: "20px", lg: "28px" }}
              fontFamily="Barlow Condensed"
              lineHeight="33px"
              color="#D0D6F9"
            >
              SO, YOU WANT TO TRAVEL TO
            </Text>
            <Text fontFamily="Bellefair" fontSize="150px" lineHeight="171px">
              SPACE
            </Text>
            <Text
              fontFamily="Barlow"
              color="#D0D6F9"
              fontSize={{ md: "16px", lg: "18px" }}
              lineHeight="33px"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Text>
          </Flex>
          <Flex
            width="450px"
            h="450px"
            borderRadius="100%"
            backgroundColor="transparent"
            alignItems="center"
            justifyContent="center"
            _hover={{ backgroundColor: "hsla(360, 100%, 100%, 0.11)" }}
          >
            <Flex
              borderRadius="100%"
              h="274px"
              w="274px"
              as={NavLink}
              to={"/destination"}
              alignItems="center"
              justifyContent="center"
              backgroundColor="#fff"
            >
              <Text color="#000">EXPLORE</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Home;
