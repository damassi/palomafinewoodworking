import { Box, Flex, Separator, Spacer, Text } from "@artsy/palette";
import Link from "next/link";
import { Nav } from "./Nav";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Box maxWidth={1000} margin="auto" mt={4}>
      <Link href="/">
        <Text variant="xl" textAlign={["center"]}>
          Paloma Fine
          <br /> Woodworking
        </Text>
      </Link>

      <Nav />

      <Box my={4} textAlign="center">
        {children}
      </Box>
    </Box>
  );
};
