import {
  Box,
  Text,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/common/Header";
import moon from "../images/svg/moon.svg";
import mars from "../images/svg/mars.svg";
import titan from "../images/svg/titan.svg";
import europa from "../images/svg/europa.svg";
import destination_bg from "../image/destination_bg.jpg";
import destination_mobile from "../image/destination_bgM.jpg";

const destinationDetails = [
  {
    planet: "moon",
    body: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time_travel: "3days",
    image: moon,
  },
  {
    planet: "mars",
    body: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time_travel: "9 month",
    image: mars,
  },
  {
    planet: "europa",
    body: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time_travel: "3 years",
    image: europa,
  },
  {
    planet: "titan",
    body: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time_travel: "7 years",
    image: titan,
  },
];

const Destination = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const setImage = destinationDetails[tabIndex].image;
  // const [isActive, setIsActive] = useState(false);
  // // const navigate = useNavigate()
  // React.useEffect(() => {
  //   if (window.location.pathname.includes(`/destination`)) {
  //     setIsActive((prev) => (prev ? !prev : prev));
  //   }
  // }, []);
  const isActive = "destination";
  return (
    <Flex
      color="#fff"
      flexDir="column"
      h="100%"
      backgroundImage={{
        lg: `url(${destination_bg})`,
        md: `url(${destination_mobile})`,
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
    >
      <Header isActive={isActive} />
      <Text
        mt="76px"
        ml="160px"
        fontFamily="Barlow Condensed"
        fontSize="28px"
        lineHeight="34px"
        letterSpacing="4.72px"
      >
        PICK YOUR DESTINATION
      </Text>

      <Flex
        flexDirection={{ md: "column", lg: "row" }}
        alignItems="center"
        justifyContent={{ md: "center", lg: "space-around" }}
        mt={{ md: "10px", lg: "64px" }}
      >
        <Flex w={{ md: "300px", lg: "445px" }} h={{ md: "300px", lg: "472px" }}>
          <Image src={setImage} alt="logo" boxSize="md" />
        </Flex>
        <Flex
          w={{ md: "573px", lg: "444px" }}
          h="472px"
          mt={{ md: "53px", lg: "0px" }}
          justifyContent={{ md: "center", lg: "normal" }}
          alignItems={{ md: "center", lg: "normal" }}
        >
          <Tabs
            variant="unstyled"
            onChange={(index) => setTabIndex(index)}
            w="100%"
          >
            <TabList
              display="flex"
              justifyContent={{ md: "center", lg: "normal" }}
              alignItems={{ md: "center", lg: "normal" }}
            >
              {destinationDetails.map((destination) => (
                <Tab
                  _selected={{
                    color: "white",
                    bg: "transparent",
                    borderBottom: "2px solid #fff",
                  }}
                  mr="35px"
                >
                  <Box
                    h="34px"
                    fontFamily="Barlow Condensed"
                    fontSize="16px"
                    color="#D0D6F9"
                  >
                    {destination.planet.toUpperCase()}
                  </Box>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {destinationDetails.map((destination) => (
                <TabPanel>
                  <Flex
                    flexDir="column"
                    justifyContent={{ md: "center", lg: "normal" }}
                    alignItems={{ md: "center", lg: "normal" }}
                    textAlign={{ md: "center", lg: "left" }}
                  >
                    <Text
                      fontSize="100px"
                      lineHeight="115px"
                      fontFamily="Bellefair"
                    >
                      {destination.planet.toUpperCase()}
                    </Text>
                    <Text
                      fontSize="18px"
                      lineHeight="32px"
                      color="#D0D6F9"
                      fontFamily="Barlow"
                    >
                      {destination.body}
                    </Text>
                    <Box
                      w={{ md: "573px", lg: "444px" }}
                      h="1px"
                      bgColor="#383B4B"
                      mt="54px"
                    />
                    <Flex
                      mt="28px"
                      justifyContent={{ md: "space-around", lg: "normal" }}
                      alignItems={{ md: "center", lg: "normal" }}
                    >
                      <Flex
                        flexDir="column"
                        mr="20px"
                        justifyContent={{ md: "center", lg: "normal" }}
                        alignItems={{ md: "center", lg: "normal" }}
                      >
                        <Text color="#D0D6F9">AVG DISTANCE</Text>
                        <Text mt="12px">{destination.distance}</Text>
                      </Flex>
                      <Flex
                        flexDir="column"
                        justifyContent={{ md: "center", lg: "normal" }}
                        alignItems={{ md: "center", lg: "normal" }}
                      >
                        <Text color="#D0D6F9">EST. TRAVEL TIME</Text>
                        <Text mt="12px">{destination.time_travel}</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Destination;
