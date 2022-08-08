import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://sarmadgardezi.com" isExternal>
          Sarmad Gardezi
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
