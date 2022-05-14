import { Box, Flex, Text } from "@artsy/palette";
import Link from "next/link";
import React from "react";

export const Nav: React.FC<any> = ({ children }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Link href="/">
        <Text variant="xl" textAlign={"right"}>
          Paloma Fine &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br /> Woodworking
        </Text>
      </Link>
      <Flex justifyContent="flex-end" width="50%">
        <NavItem href="/">Home</NavItem>
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
