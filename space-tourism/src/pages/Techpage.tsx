import {
  Flex,
  Text,
  Image,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";
import Header from "../components/common/Header";
import tech2_bg from "../image/tech2_bg.jpg";
import tech2_bgM from "../image/tech_bgM.jpg";
import space_capsule from "../image/space_capsule.jpg";
import spaceport from "../image/spaceport.jpg";
import launch_vehicleM from "../image/launch_vehicleM.jpg";
import space_capsuleM from "../image/space_shuttleM.jpg";
import spaceportM from "../image/spaceportM.jpg";
import launch_vehicle from "../image/launch_vehicle.jpg";
import React from "react";

const techValue = [
  {
    term: "THE TERMINOLOGY…",
    machine: "LAUNCH VEHICLE",
    use: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: launch_vehicle,
    img_mobile: launch_vehicleM,
  },
  {
    term: "THE TERMINOLOGY…",
    machine: "SPACEPORT",
    use: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: spaceport,
    img_mobile: spaceportM,
  },
  {
    term: "THE TERMINOLOGY…",
    machine: "SPACE CAPSULE",
    use: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: space_capsule,
    img_mobile: space_capsuleM,
  },
];

const Tech = () => {
  const isActive = "tech";
  const buttonCount = [
    {
      value: 1,
      class: "first",
    },
    {
      value: 2,
      class: "second",
    },
    {
      value: 3,
      class: "third",
    },
  ];
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Flex
      backgroundImage={{
        lg: `url(${tech2_bg})`,
        md: `url(${tech2_bgM})`,
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      flexDir="column"
      h={'full'}
    >
      <Header isActive={isActive} />
      <Text
        mt="76px"
        ml="160px"
        color="#fff"
        fontFamily="Barlow Condensed"
        fontSize="28px"
        letterSpacing="4.72px"
        lineHeight="33.6px"
      >
        SPACE LAUNCH 101
      </Text>
      <Flex className="img" mt="26px" display={{ lg: "none", md: "flex" }}>
        <Image
          src={techValue[tabIndex].img_mobile}
          alt="launch_vehicle"
          h="310px"
          w="100%"
        />
      </Flex>
      <Flex
        color="#fff"
        ml={{ md: "0px", lg: "160px" }}
        justifyContent="space-between"
        flexDir={{ md: "column", lg: "row" }}
      >
        <Flex w={{ md: "100%", lg: "50%" }} mt={{ md: "56px", lg: "137px" }}>
          <Flex>
            <Tabs
              display="flex"
              justifyContent={{ md: "center", lg: "normal" }}
              alignItems={{ md: "center", lg: "normal" }}
              flexDir={{ md: "column", lg: "row" }}
              onChange={(index) => setTabIndex(index)}
            >
              <TabList>
                <Flex
                  flexDir={{ lg: "column", md: "row" }}
                  justifyContent={{ md: "center", lg: "normal" }}
                  alignItems={{ md: "center", lg: "normal" }}
                >
                  {buttonCount.map((count) => (
                    <Tab
                      display="flex"
                      w="80px"
                      h="80px"
                      as="button"
                      borderRadius="100px"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid gray"
                      _hover={{ border: "1px solid #fff" }}
                      mb={{ md: "0", lg: "32px" }}
                      mr={{ md: "16px", lg: "0" }}
                      _selected={{
                        color: "#000",
                        bg: "white",
                        borderB: "1px solid #fff",
                      }}
                      className={count.class}
                      cursor="pointer"
                    >
                      {count.value}
                    </Tab>
                  ))}
                </Flex>
              </TabList>
              <TabPanels>
                {techValue.map((valueDetails) => (
                  <TabPanel>
                    <Flex
                      flexDir="column"
                      ml={{ lg: "80px", md: "0" }}
                      mt={{ lg: "0px", md: "44px" }}
                      justifyContent={{ md: "center", lg: "normal" }}
                      alignItems={{ md: "center", lg: "normal" }}
                      px={{ md: "155px", lg: "0" }}
                    >
                      <Text
                        fontFamily="Barlow Condensed"
                        fontSize="16px"
                        letterSpacing="2.72px"
                        color="#D0D6F9"
                        lineHeight="19px"
                      >
                        {valueDetails.term}
                      </Text>
                      <Text
                        fontFamily="Bellefair"
                        fontSize="48px"
                        fontWeight="400"
                        lineHeight="64px"
                      >
                        {valueDetails.machine}
                      </Text>
                      <Text
                        fontFamily="Barlow"
                        fontSize="18px"
                        color="#D0D6F9"
                        lineHeight="32px"
                        textAlign={{ md: "center", lg: "left" }}
                      >
                        {valueDetails.use}
                      </Text>
                    </Flex>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
        <Flex
          className="img"
          alignItems="center"
          mt="26px"
          w="40%"
          display={{ md: "none", lg: "flex" }}
        >
          <Image
            src={techValue[tabIndex].img}
            alt="launch_vehicle"
            h="527px"
            w="515px"
            mb="42px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Tech;
