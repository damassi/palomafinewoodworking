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
      <Flex justifyContent={["center"]} width="50%">
        <Text variant="xs" color="black60" mt={2}>
          <a href="mailto:james@palomafinewoodworking.com">
            james@palomafinewoodworking.com
          </a>
        </Text>
        {/* <NavItem href="/work">Work</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem> */}
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
        <Text variant="md" style={{ cursor: "pointer" }} px={1} color="black60">
          {children}
        </Text>
      </Link>
    </Box>
  );
};
