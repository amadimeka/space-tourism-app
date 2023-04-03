import {
  Flex,
  Text,
  Image,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import Header from "../components/common/Header";
import crew_bg from "../image/crew3_bg.jpg";
import crew_bgM from "../image/crew_bgM.jpg";
import douglas_img from "../image/douglas1.png";
import mark_img from "../image/mark1.png";
import ansari_img from "../image/ansari1.png";
import victor_img from "../image/victor.png";
import React from "react";

const crewDetails = [
  {
    title: "Commander",
    name: "Douglas Hurley",
    body: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo.",
    img: douglas_img,
    id: 1,
  },
  {
    title: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    body: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: mark_img,
    id: 2,
  },
  {
    title: "PILOT",
    name: "Victor Glover",
    body: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: victor_img,
    id: 3,
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    body: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: ansari_img,
    id: 4,
  },
];

const Crew = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const crewName = ["douglas", "victor", "mark", "ansari"];

  const isActive = "crew";

  return (
    <Flex
      w="100%"
      h="100%"
      backgroundImage={{
        lg: `url(${crew_bg})`,
        md: `url(${crew_bgM})`,
      }}
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      flexDir="column"
    >
      <Header isActive={isActive} />
      <Flex color="#fff" flexDir={{ md: "column", lg: "row" }}>
        <Flex
          flexDir="column"
          w={{ md: "100%", lg: "55%" }}
          pl={{ md: "0px", lg: "150px" }}
          pb={{ md: "0px", lg: "100px" }}
          alignItems={{ md: "center", lg: "normal" }}
          justifyContent={{ md: "center", lg: "normal" }}
        >
          <Text
            fontFamily="Barlow Condensed"
            fontSize="28px"
            letterSpacing="4.72px"
            mt="76px"
          >
            Meet your crew
          </Text>

          <Tabs
            onChange={(index) => setTabIndex(index)}
            mt={{ md: "60px", lg: "154px" }}
          >
            <TabPanels>
              {crewDetails.map((detail) => (
                <TabPanel
                  w={{ md: "520px", lg: "100%" }}
                  display={{ md: "flex", lg: "block" }}
                  flexDirection={{ md: "column", lg: "row" }}
                  alignItems={{ md: "center", lg: "normal" }}
                  justifyContent={{ md: "center", lg: "normal" }}
                >
                  <Text fontSize="32px" fontFamily="Bellefair" opacity="0.5">
                    {detail.title.toUpperCase()}
                  </Text>
                  <Text
                    fontSize="45px"
                    fontFamily="Bellefair"
                    lineHeight="64px"
                  >
                    {detail.name.toUpperCase()}
                  </Text>
                  <Text
                    fontFamily="Barlow"
                    textAlign={{ md: "center", lg: "left" }}
                    fontSize="18px"
                    color="#D0D6F9"
                  >
                    {detail.body}
                  </Text>
                </TabPanel>
              ))}
            </TabPanels>
            <TabList
              mt="40px"
              display={{ md: "flex", lg: "flex" }}
              flexDirection="row"
              alignItems={{ md: "center", lg: "normal" }}
              justifyContent={{ md: "center", lg: "normal" }}
            >
              {crewName.map((index: any) => (
                <Tab
                  key={index}
                  _selected={{
                    bg: "#fff",
                    opacity: 1,
                    border: "1px solid #fff",
                  }}
                  _active={{
                    bg: "#fff",
                    opacity: 1,
                    border: "1px solid #fff",
                  }}
                  _hover={{
                    bg: "#fff",
                    opacity: 0.5,
                  }}
                  bg="#fff"
                  opacity="0.17"
                  borderRadius="100px"
                  border="1px solid black"
                  w="15px"
                  h="15px"
                  mr="24px"
                />
              ))}
            </TabList>
          </Tabs>
        </Flex>
        <Flex
          alignItems={{ md: "center", lg: "normal" }}
          justifyContent={{ md: "center", lg: "normal" }}
          alignSelf={{ md: "normal", lg: "end" }}
          pr={{ md: "0", lg: "150px" }}
          mt={{ md: "40px", lg: "0px" }}
        >
          <Image src={crewDetails[tabIndex].img} alt="douglas" boxSize="lg" />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Crew;
