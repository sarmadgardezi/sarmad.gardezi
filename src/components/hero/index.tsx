import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  GITHUB_PROFILE,
  POLYWORK_PROFILE,
  TWITCH_CHANNEL,
  TWITTER_PROFILE,
} from 'src/constants';
import { Link as LinkType } from '@/types/link';
import ExternalLink from '../external-link';
import HeroImage from '../hero-image';
import HeroPlay from '../hero-play';

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
    color: 'twitter',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
  {
    href: POLYWORK_PROFILE,
    label: 'Polywork',
    color: 'purple.500',
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
          <HeroPlay />
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
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
