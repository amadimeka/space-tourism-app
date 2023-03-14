import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
export const HeaderContainer = () => {
  return (
    <Flex w="100%" flexDirection="column" overflow="hidden">
      <Box flex="1" w="100%"  overflow="hidden">
        <Outlet />
      </Box>
    </Flex>
  );
};
