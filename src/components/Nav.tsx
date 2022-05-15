import { Box, Flex, Separator, Text } from "@artsy/palette";
import Link from "next/link";
import React from "react";

export const Nav: React.FC<any> = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection={["column"]}
    >
      <Link href="/">
        <Text variant="xl" textAlign={["center"]}>
          Paloma Fine
          <br /> Woodworking
        </Text>
      </Link>
      <Separator width="50%" mt={2} />
      <Flex justifyContent={["center"]} mt={[2]} width="50%">
        <NavItem href="/work">Work</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Flex>
    </Flex>
  );
};

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <Box>
      <Link href={href}>
        <Text variant="md" style={{ cursor: "pointer" }} px={1}>
          {children}
        </Text>
      </Link>
    </Box>
  );
};
