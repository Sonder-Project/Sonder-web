import {
  Box,
  chakra,
  Container,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const features = [
  {
    feature: 'One-on-One Chat',
    content:
      'Our matching system will find the people you are looking to talk to. The deepest thoughts are shared in one-on-one chats',
  },
  {
    feature: 'Group Forum',
    content:
      "Engage in community forums where the best ideas are discussed. Forums are invite only or self-created",
  },
  {
    feature: 'Events',
    content:
      "Community hosted events. Host an event to share your knowledge, receive feedback, and interact with the community",
  },
  {
    feature: 'Matching System',
    content:
      'Build your profile and take our behavorial report to help us find the people you are looking for',
  },
  {
    feature: 'Token',
    content:
      'Tokens are used to back ideas. Think of them as venture funds. Ideas with the most support allocate the most token',
  },
  {
    feature: 'Solve Problems',
    content:
      'Problem solving communties are highly encouraged. Too many problems are neglected. We want to end that!',
  },
];


const backgrounds = [
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
]

interface FeatureCardProps {
  feature: string;
  content: string;
  index: number;
}

function FeatureCard(props: FeatureCardProps) {
  const { feature, content, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'440px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('linear(#ffffff 0%, #d7e1ec 74%)', 'gray.800')}
      bgGradient={useColorModeValue('linear(#ffffff 0%, #d7e1ec 74%)', 'gray.800')}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 6],

      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        /*justifyContent={'space-between'}*/ >
        <chakra.h2
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {feature}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
          {content}
        </chakra.p>
      </Flex>

    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Container maxW={'7xl'}>
      <Box pb={100}>
        <Flex
          textAlign={'center'}
          justifyContent={'center'}
          direction={'column'}
          width={'full'}>

          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 3 }}
            spacing={'20'}
            mt={16}
            mx={'auto'}>
            {features.map((cardInfo, index) => (
              <FeatureCard {...cardInfo} index={index} />
            ))}
          </SimpleGrid>

        </Flex>
      </Box>

    </Container>
  );
}