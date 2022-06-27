import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
  Grid,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import HeroImage from './hero-image';
import { Link as LinkType } from "@/types/link";
import {
  GITHUB_PROFILE, TWITCH_CHANNEL,
  TWITTER_PROFILE
} from "src/constants";
import ExternalLink from "../external-link";

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: TWITTER_PROFILE,
    label: "Twitter",
    color: "twitter",
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
  },
 
];
const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            Hi, I’m Sarmad Gardezi.
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
        I’m a full-stack engineer, a designer, and a content creator. I work
          at <ExternalLink href="https://zeuzmedia.com">Zeuz Media</ExternalLink>{' '}
          as a <strong>developer/designer</strong>, and I’m a{' '}
          <strong>core member</strong> at{' '}
          <ExternalLink href="https://gdgcloudislamabad.com">GDG Cloud isb</ExternalLink>,
          contributing as a <strong>Social Media Advisor</strong>. I’m also an{' '}
          <ExternalLink href="https://egghead.io">egghead.io</ExternalLink>{' '}
          <strong>instructor</strong>.
        </Text>
        <Grid gap={{ base: 3, lg: 6 }}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                width={{ base: "100%" }}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              variant="ghost"
              color={color}
              href={href}
              target="_blank"
              px={4}
              justifyContent={{ base: "center", md: "center" }}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              {label}
            </Button>
          ))}
        </Grid>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
