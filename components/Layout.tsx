import { Box, Flex, Spacer, Text } from "@artsy/palette";
import { Nav } from "./Nav";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Box maxWidth={1000} margin="auto" mt={4}>
      <Nav />

      <Box my={4}>{children}</Box>
    </Box>
  );
};
