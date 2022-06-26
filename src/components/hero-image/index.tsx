import { Box, AspectRatio, Flex, Image } from "@chakra-ui/react";

import StatusIndicator from "../status-indicator";

const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Box overflow="hidden" rounded="full">
        </Box>
      </AspectRatio>
      <StatusIndicator />
    </Flex>
  );
};

export default HeroImage;
