import React, { useEffect } from "react";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  StackProps,
  Text,
  ThemeProvider,
  useTheme,
} from "@chakra-ui/core";
import { motion, useAnimation, Transition } from "framer-motion";
import { IPhoneX } from "react-device-mockups";

import BaseButton, {
  BaseButtonProps,
} from "../../components/Shared/button/BaseButton";
import MotionImage from "../../components/Motion/Image";
import MotionBox from "../../components/Motion/Box";
import Layout from "../../components/Shared/layout";
import Footer from "../../components/Shared/footer";

import { useInView } from "react-intersection-observer";

import { PetCodeTheme } from "../../theme";

import "html5-device-mockups/dist/device-mockups.min.css";

const ActionButton: React.FC<BaseButtonProps> = (props) => (
  <BaseButton size="md" paddingX={10} textTransform="uppercase" {...props} />
);

const HowItWorksStep: React.FC<
  StackProps & {
    image: string;
    stepNumber: number;
    name: string;
    description: string;
  }
> = ({ image, stepNumber, name, description, ...props }) => (
  <Stack
    alignItems="center"
    textAlign="center"
    spacing={4}
    maxWidth={300}
    {...props}
  >
    <Image height={150} src={image} alt={`Step ${stepNumber}`} />
    <Text color="petcode.yellow.400" fontSize="xl">
      Step {stepNumber}
    </Text>
    <Heading color="petcode.neutral.700" fontSize="3xl">
      {name}
    </Heading>
    <Text fontWeight="thin" marginX={3}>
      {description}
    </Text>
  </Stack>
);

const HowItWorksPage: React.FunctionComponent = () => {
  const theme = useTheme() as PetCodeTheme;
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  const bounce = { y: [-5, 5] };
  const wave = { scaleY: [1, 1.1] };

  const transition: Transition = {
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2,
  };

  return (
    <ThemeProvider theme={{ ...theme, fonts: {
      ...theme.fonts,
      heading: '"Open Sans", sans-serif'
    } }}>
      <Layout
        position="relative"
        headerProps={{
          position: "absolute",
          backgroundColor: "transparent",
        }}
        paddingTop={0}
      >
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
            height: 140,
          }}
          viewBox="0 0 873 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="578"
            cy="-160.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            top: 0,
            height: 200,
          }}
          viewBox="0 0 984 298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.4"
            cx="598"
            cy="-116.5"
            rx="578"
            ry="390.5"
            fill={theme.colors.petcode.blue[400]}
          />
        </svg>
        <Flex
          direction="row"
          backgroundImage="url(/media/how-it-works-splash.svg)"
          backgroundSize="cover"
          height="calc(100vw * 0.5875)"
        >
          <Box flexBasis="55%" />
          <Stack color="white">
            <Box flexGrow={2} />
            <Heading fontSize="6xl">How It Works</Heading>
            <Stack isInline>
              <ActionButton variantColor="petcode.yellow">
                Watch Video
              </ActionButton>
              <ActionButton variantColor="petcode.yellow">
                Get Started
              </ActionButton>
            </Stack>
            <Box flexGrow={3} />
          </Stack>
        </Flex>
        <Stack spacing={10} paddingY={10} alignItems="center">
          <Heading color="petcode.neutral.700" fontSize="5xl" paddingBottom={4}>
            Get Started
          </Heading>
          <Stack isInline spacing={6}>
            <HowItWorksStep
              image="/media/order-petcode-tag-step.svg"
              stepNumber={1}
              name="Order Your PetCode QR Tag"
              description="Head to the “Purchase” page to order a tag"
            />
            <HowItWorksStep
              image="/media/create-petcode-account-step.svg"
              stepNumber={2}
              name="Create Your PetCode Account"
              description="Set up an account with PetCode to begin using the tag"
            />
            <HowItWorksStep
              image="/media/activate-petcode-tag-step.svg"
              stepNumber={3}
              name="Activate Your PetCode QR Tag"
              description="Connect your PetCode account with your new  tag to activate your QR Tag"
            />
          </Stack>
          <Stack isInline spacing={6}>
            <HowItWorksStep
              image="/media/upload-information-step.svg"
              stepNumber={4}
              name="Upload Information"
              description="Once set up, add your info to the tag to access the full functionality of PetCode"
            />
            <HowItWorksStep
              maxWidth={400}
              image="/media/finished-step.svg"
              stepNumber={5}
              name="You’re Now Set Up with Your PetCode Tag!"
              description="Enjoy the full range of features that PetCode’s tag and software give you!"
            />
          </Stack>
        </Stack>
        <Flex direction="column">
          <Box position="relative" paddingBottom="9.625%">
            <svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1440 16.1984C1340.95 0.65578 1089.74 -9.82133 865 19.2153C527.214 62.8572 248.968 40.7618 33.3533 23.6399L33.353 23.6399C22.0635 22.7434 10.9457 21.8605 0 21.0014V76.875H1440V16.1984Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <motion.svg
              style={{ position: "absolute", bottom: 0 }}
              viewBox="0 0 1440 126"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={wave}
              transition={transition}
            >
              <path
                opacity="0.4"
                d="M0 125.875H1440V37.0214C1291.46 14.0773 929.032 57.6094 757 83.8455C393.389 97.6584 119.022 39.2724 0 0V125.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </motion.svg>
          </Box>
          <Stack
            backgroundColor="petcode.blue.400"
            color="white"
            isInline
            paddingLeft={32}
            paddingY={12}
            justifyContent="-between"
          >
            <Stack flexBasis="50%" spacing={6}>
              <Heading fontSize="6xl">The QR Tag</Heading>
              <Text fontWeight="thin">
                Got a new phone? Moved recently? PetCode’s durable QR tags allow
                you to easily update your pet’s contact info with the tap of
                finger—you’ll never need to buy another pet tag again. Anyone
                can scan our smart QR tags to see your pet’s info in a flash.
                Lost your pet? Our tags can reunite you with your furry friend
                in a flash.
              </Text>
              <ActionButton
                alignSelf="start"
                variantColor="white"
                color="petcode.blue.400"
              >
                Buy Now
              </ActionButton>
            </Stack>
            <Box position="relative" height={375}>
              <Image
                src="/media/tag-front.png"
                alt="Tag front"
                width={250}
                height={250}
              />
              <MotionBox
                ref={ref}
                animate={controls}
                position="absolute"
                top={125}
                left={150}
              >
                <Image
                  src="/media/tag-back.png"
                  alt="Tag back"
                  width={250}
                  height={250}
                />
                <Flex
                  direction="row"
                  position="absolute"
                  right={157.5}
                  top={160}
                  width={171 + 224.833 + 8}
                >
                  <Box flexGrow={1} />
                  <MotionBox
                    alignSelf="end"
                    initial="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    // @ts-ignore
                    transition={{ duration: 2 }}
                  >
                    <Text
                      marginRight={2}
                      transform="translateY(33%)"
                      color={theme.colors.petcode.neutral[300]}
                    >
                      QR code syncs with pet profile
                    </Text>
                  </MotionBox>
                  <svg
                    width="171"
                    height="73"
                    viewBox="0 0 171 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="159"
                      cy="12"
                      r="10.5"
                      stroke={theme.colors.petcode.neutral[400]}
                      stroke-width="3"
                    />
                    <motion.path
                      d="M153 20L105 71H0"
                      stroke={theme.colors.petcode.neutral[400]}
                      strokeWidth="3"
                      initial="hidden"
                      variants={{
                        hidden: { pathLength: 0 },
                        visible: { pathLength: 1 },
                      }}
                      transition={{ duration: 2 }}
                    />
                  </svg>
                </Flex>
                <Flex
                  direction="row"
                  position="absolute"
                  left={90}
                  bottom={225}
                  width={98 + 172.45 + 8}
                >
                  <svg
                    width="98"
                    height="92"
                    viewBox="0 0 98 92"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="80"
                      r="10.5"
                      stroke={theme.colors.petcode.neutral[400]}
                      stroke-width="3"
                    />
                    <motion.path
                      d="M18.0001 72L69.0001 2.00001L97.5 2"
                      stroke={theme.colors.petcode.neutral[400]}
                      strokeWidth="3"
                      initial="hidden"
                      variants={{
                        hidden: { pathLength: 0 },
                        visible: { pathLength: 1 },
                      }}
                      transition={{ duration: 2 }}
                    />
                  </svg>
                  <MotionBox
                    alignSelf="start"
                    initial="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    // @ts-ignore
                    transition={{ duration: 2 }}
                  >
                    <Text
                      marginLeft={2}
                      transform="translateY(-50%)"
                      color={theme.colors.petcode.neutral[300]}
                    >
                      Made of durable epoxy
                    </Text>
                  </MotionBox>
                </Flex>
              </MotionBox>
            </Box>
          </Stack>
          <Box position="relative" paddingBottom="9.55%">
            <svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 1 1440 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1440 0.875H0V82.9433C95.3623 69.6537 464.317 47.5142 790 36.4594C1064.63 27.1375 1205.09 44.4307 1333.7 60.2636C1369.18 64.6316 1403.76 68.8884 1440 72.4446V0.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </svg>
            <motion.svg
              style={{ position: "absolute", top: 0 }}
              viewBox="0 0 1440 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={wave}
              transition={transition}
            >
              <path
                opacity="0.4"
                d="M1440 0.875H0V124.684C253.483 87.1289 356.86 73.675 681 54.8868C997.167 36.5609 1303.08 65.1192 1440 92.2188V0.875Z"
                fill={theme.colors.petcode.blue[400]}
              />
            </motion.svg>
          </Box>
        </Flex>
        <Stack
          isInline
          paddingRight={32}
          paddingY={16}
          spacing={16}
          justifyContent="space-between"
        >
          <Box
            height={400}
            flexGrow={1}
            position="relative"
            overflowY="visible"
          >
            <MotionBox
              position="relative"
              zIndex={1}
              animate={bounce}
              // @ts-ignore
              transition={transition}
            >
              <IPhoneX
                height={400}
                wrapperProps={{
                  style: { position: "absolute", left: 375 },
                }}
                screenProps={{
                  style: { backgroundColor: theme.colors.petcode.blue[400] },
                }}
              >
                <Image
                  width="100%"
                  height="100%"
                  src="/media/pet-parks-mobile-screen.svg"
                  alt="Pet parks mobile screen"
                />
              </IPhoneX>
            </MotionBox>
            <MotionImage
              top={-75}
              left={-125}
              position="relative"
              animate={bounce}
              // @ts-ignore
              transition={transition}
              height={450}
              src="/media/reminders-web-screen.svg"
              alt="Scan locations web screen"
            />
          </Box>
          <Stack textAlign="left" spacing={4} color="petcode.neutral.700">
            <Heading fontSize="5xl">The Pet Portal</Heading>
            <Text fontSize="xl" color="petcode.yellow.400">
              A place your pet’s data can call home
            </Text>
            <Text fontWeight="thin">
              All your pet’s info—from contact and medical info to name, age,
              and breed—in one place. Your PetPortal syncs with the PetCode QR
              tag and is easily accessible through our app, giving you access to
              the full suite of features whenever, wherever. PetCode’s app and
              QR tags help keep you and your pet safe, healthy, and happy. Your
              PetPortal opens doors to a whole world of features just waiting
              for you and your pet to explore. Get started with PetCode today to
              unlock all the features we have to offer!
            </Text>
            <Flex direction="row" justifyContent="space-between">
              <Icon
                color="petcode.neutral.400"
                name="arrow-thin"
                size="40px"
                alignSelf="start"
              />
              <ActionButton variantColor="petcode.blue">Buy Now</ActionButton>
            </Flex>
          </Stack>
        </Stack>
        <Footer />
      </Layout>
    </ThemeProvider>
  );  
};  

export default HowItWorksPage;
