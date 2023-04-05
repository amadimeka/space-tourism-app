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
import moon from "../image/moon1.png";
import mars from "../image/mars1.png";
import titan from "../image/titan1.png";
import europa from "../image/europa1.png";
import destination_bg from "../image/destination_bg.jpg";
import destination_mobile from "../image/destination_bgM.jpg";

const destinationDetails = [
  {
    planet: "moon",
    body: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time_travel: "3 DAYS",
    image: moon,
  },
  {
    planet: "mars",
    body: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time_travel: "9 MONTHS",
    image: mars,
  },
  {
    planet: "europa",
    body: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time_travel: "3 YEARS",
    image: europa,
  },
  {
    planet: "titan",
    body: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time_travel: "7 YEARS",
    image: titan,
  },
];

const Destination = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const setImage = destinationDetails[tabIndex].image;
  const isActive = "destination";
  return (
    <Flex
      color="#fff"
      flexDir="column"
      h={"full"}
      backgroundImage={{
        lg: `url(${destination_bg})`,
        md: `url(${destination_mobile})`,
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      pb={{ mb: "62px", lg: "118px" }}
    >
      <Header isActive={isActive} />
      <Text
        mt="76px"
        ml={{ md: "75px", lg: "160px" }}
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
        mt={{ md: "60px", lg: "64px" }}
      >
        <Flex w={{ md: "300px", lg: "445px" }} h={{ md: "300px", lg: "472px" }}>
          <Image src={setImage} alt="logo" boxSize={{ md: "xs", lg: "md" }} />
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
                    <Box
                      w="444px"
                      fontSize="18px"
                      lineHeight="32px"
                      color="#D0D6F9"
                      fontFamily="Barlow"
                    >
                      {destination.body}
                    </Box>
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
                        mr="65px"
                        justifyContent={{ md: "center", lg: "normal" }}
                        alignItems={{ md: "center", lg: "normal" }}
                      >
                        <Text
                          color="#D0D6F9"
                          fontSize="14px"
                          fontFamily="Barlow Condensed"
                        >
                          AVG DISTANCE
                        </Text>
                        <Text
                          mt="12px"
                          fontSize="28px"
                          fontFamily="Bellefair"
                          fontWeight="400"
                        >
                          {destination.distance}
                        </Text>
                      </Flex>
                      <Flex
                        flexDir="column"
                        justifyContent={{ md: "center", lg: "normal" }}
                        alignItems={{ md: "center", lg: "normal" }}
                      >
                        <Text
                          color="#D0D6F9"
                          fontSize="14px"
                          fontFamily="Barlow Condensed"
                        >
                          EST. TRAVEL TIME
                        </Text>
                        <Text
                          mt="12px"
                          fontSize="28px"
                          fontFamily="Bellefair"
                          fontWeight="400"
                        >
                          {destination.time_travel}
                        </Text>
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
