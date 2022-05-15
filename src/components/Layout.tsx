import { Box, Flex, Separator, Spacer, Text } from "@artsy/palette";
import { Nav } from "./Nav";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Box maxWidth={1000} margin="auto" mt={4}>
      <Nav />

      <Flex justifyContent={"center"} my={2}>
        <Separator width="50%" />
      </Flex>

      {/* <Box my={4}>{children}</Box> */}
    </Box>
  );
};
