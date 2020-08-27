import React, { useState } from "react";

import {
  Box,
  Flex,
  FlexProps,
  Input,
  InputProps,
  Icon,
  IconProps,
  Link,
  LinkProps,
  PseudoBoxProps,
  Select,
  SelectProps,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/core";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import AccountPageLayout from "./components/AccountPageLayout";
import ExpandButton from "../../components/Shared/button/ExpandButton";

import { useObserver } from "mobx-react";
import moment from "moment";

const PetInfoCard: React.FC<FlexProps> = (props) => (
  <Flex
    direction="column"
    justifyContent="center"
    rounded="lg"
    background="white"
    height="100px"
    padding={6}
    marginTop={10}
    {...props}
  />
);

const PetInfoCardText: React.FC<PseudoBoxProps> = (props) => (
  <Text color="petcode.neutral.700" fontSize="4xl" {...props} />
);

const PetInfoCardLabel: React.FC<PseudoBoxProps> = (props) => (
  <Text color="petcode.blue.400" fontSize="lg" marginTop={1} {...props} />
);

const BackgroundIcon: React.FC<IconProps> = (props) => (
  <Icon
    color="petcode.neutral.700"
    position="absolute"
    opacity={0.05}
    {...props}
  />
);

const InfoButton: React.FC<LinkProps & RouterLinkProps> = (props) => (
  <Link
    // @ts-ignore
    as={RouterLink}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    rounded="lg"
    backgroundColor="petcode.yellow.400"
    flexBasis="250px"
    padding={6}
    {...props}
  />
);

const PetInfoSelect: React.FC<SelectProps> = (props) => (
  <Select
    size="lg"
    color="petcode.neutral.700"
    fontFamily="body"
    fontSize="2xl"
    width="50%"
    {...props}
  />
);

const PetInfoInput: React.FC<InputProps> = (props) => (
  <Input
    size="lg"
    variant="flushed"
    color="petcode.neutral.700"
    fontFamily="body"
    fontSize="4xl"
    width="50%"
    {...props}
  />
);

const PetInfoSection = () => {
  const [species, setSpecies] = useState("Dog");
  const [breed, setBreed] = useState("Weimaraner");
  const [birthday, setBirthday] = useState("2012-07-31");
  const [color, setColor] = useState("Gray");
  const [temperament, setTemperament] = useState("Friendly");
  const [isServiceAnimal, setServiceAnimal] = useState(false);


  const [isEditable, setEditable] = useState(false);

  const toast = useToast();

  return useObserver(() => (
    <Flex
      direction="column"
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
    >
      <Flex direction="row" alignItems="center" color="petcode.neutral.700">
        <Box
          rounded="full"
          size="150px"
          minWidth="150px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage="url(/media/placeholder-dog.png)"
        />
        <Flex alignItems="center" marginLeft={4}>
          <BackgroundIcon
            size="120px"
            transform="rotate(12.84deg)"
            name="paw"
          />
          <Text position="relative" zIndex={2} fontSize="6xl" marginLeft={16}>
            Max
          </Text>
        </Flex>
        <Box flexGrow={1} />
        <InfoButton to="/contactinfo" marginX={6}>
          <Text position="relative" fontSize="3xl" zIndex={2}>
            Contact Information
          </Text>
          <BackgroundIcon alignSelf="end" size="100px" name="phone" />
        </InfoButton>
        <InfoButton to="/medicalinfo">
          <Text position="relative" fontSize="3xl" zIndex={2}>
            Medical Information
          </Text>
          <BackgroundIcon alignSelf="end" size="100px" name="clipboard" />
        </InfoButton>
      </Flex>
      <SimpleGrid columns={{ xs: 1, md: 2 }} spacingX={5}>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoSelect
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </PetInfoSelect>
          ) : (
            <PetInfoCardText>{species}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Species</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="120px" name="dog" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoInput
              value={breed}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setBreed(e.target.value)
              }
            />
          ) : (
            <PetInfoCardText>{breed}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Breed</PetInfoCardLabel>
          <BackgroundIcon
            alignSelf="end"
            size="100px"
            transform="rotate(12.84deg)"
            name="paw"
          />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoInput
              type="date"
              fontSize="3xl"
              value={birthday}
              max={moment().format("YYYY-MM-DD")}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setBirthday(e.target.value)
              }
            />
          ) : (
            <PetInfoCardText>
              {moment.duration(moment().diff(moment(birthday))).humanize()}{" "}
              old
            </PetInfoCardText>
          )}
          <PetInfoCardLabel>Age</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="120px" name="clock" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoInput
              value={color}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setColor(e.target.value)
              }
            />
          ) : (
            <PetInfoCardText>{color}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Color</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="100px" name="colors" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoInput
              value={temperament}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setTemperament(e.target.value)
              }
            />
          ) : (
            <PetInfoCardText>{temperament}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Temperament</PetInfoCardLabel>
          <BackgroundIcon
            alignSelf="end"
            size="100px"
            transform="rotate(12.84deg)"
            name="paw"
          />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable ? (
            <PetInfoSelect
              value={isServiceAnimal ? "Yes" : "No"}
              onChange={
                (e) => setServiceAnimal(e.target.value == "Yes")
              }
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </PetInfoSelect>
          ) : (
            <PetInfoCardText>
              {isServiceAnimal ? "Yes" : "No"}
            </PetInfoCardText>
          )}
          <PetInfoCardLabel>Service Animal</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="120px" name="service-animal" />
        </PetInfoCard>
      </SimpleGrid>
      <ExpandButton
        position="fixed"
        bottom={5}
        right={5}
        rounded="full"
        color="petcode.neutral.700"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={() => {
          if (isEditable) {
            toast({
              title: "Pet information saved.",
              description: "Your pet information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          setEditable(!isEditable);
        }}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            marginRight={2}
          >
            {isEditable ? "Save" : "Edit"}
          </Text>
        }
      >
        <Icon name={isEditable ? "checkmark" : "edit"} size="30px" />
      </ExpandButton>
    </Flex>
  ));
};

const PetInfoPage = () => {
  return (
    <AccountPageLayout>
      <PetInfoSection />
    </AccountPageLayout>
  );
};

export default PetInfoPage;
