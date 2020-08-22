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
import DatePicker from "../../components/Shared/input/DatePicker";
import Select from "../../components/Shared/input/Select";
import { Props as SelectProps, OptionTypeBase } from "react-select";

import { action, observable } from "mobx";
import { useObserver } from "mobx-react";
import moment from "moment";

import { Pet } from "../../Models/Pet";

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
    opacity={0.1}
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
  const [pet] = useState(() =>
    observable({
      species: "dog",
      breed: "Weimaraner",
      birthday: new Date("2012-07-31"),
      color: "Gray",
      temperament: "Friendly",
      isServiceAnimal: false,
    } as Pet)
  );

  const [isEditable] = useState(() => observable.box(false));
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
          {isEditable.get() ? (
            <Box width="50%">
              <PetInfoSelect
                value={{
                  label: pet.species.charAt(0).toUpperCase() + pet.species.slice(1),
                  value: pet.species
                }}
                onChange={action(option => pet.species = (option as OptionTypeBase).value)}
                options={["dog", "cat", "other"].map(option => ({
                  label: option.charAt(0).toUpperCase() + option.slice(1),
                  value: option
                }))}
              />
            </Box>
          ) : (
            <PetInfoCardText>{pet.species.charAt(0).toUpperCase() + pet.species.slice(1)}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Species</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="120px" name="dog" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable.get() ? (
            <PetInfoInput
              value={pet.breed}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (pet.breed = e.target.value)
              )}
            />
          ) : (
            <PetInfoCardText>{pet.breed}</PetInfoCardText>
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
          {isEditable.get() ? (
            <DatePicker
              selected={pet.birthday}
              onChange={action(date => pet.birthday = date as Date)}
              customInput={<PetInfoInput/>}
            />
          ) : (
            <PetInfoCardText>
              {moment.duration(moment().diff(moment(pet.birthday))).humanize()}{" "}
              old
            </PetInfoCardText>
          )}
          <PetInfoCardLabel>Age</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="120px" name="clock" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable.get() ? (
            <PetInfoInput
              value={pet.color}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (pet.color = e.target.value)
              )}
            />
          ) : (
            <PetInfoCardText>{pet.color}</PetInfoCardText>
          )}
          <PetInfoCardLabel>Color</PetInfoCardLabel>
          <BackgroundIcon alignSelf="end" size="100px" name="colors" />
        </PetInfoCard>
        <PetInfoCard>
          {isEditable.get() ? (
            <PetInfoInput
              value={pet.temperament}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (pet.temperament = e.target.value)
              )}
            />
          ) : (
            <PetInfoCardText>{pet.temperament}</PetInfoCardText>
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
          {isEditable.get() ? (
            <Box width="50%">
              <PetInfoSelect
                value={{
                  label: pet.isServiceAnimal ? "Yes" : "No",
                  value: pet.isServiceAnimal ? "yes" : "no"
                }}
                onChange={action(option => pet.isServiceAnimal = (option as OptionTypeBase).value == "yes")}
                options={["yes", "no"].map(option => ({
                  label: option.charAt(0).toUpperCase() + option.slice(1),
                  value: option
                }))}
              />
            </Box>
          ) : (
            <PetInfoCardText>
              {pet.isServiceAnimal ? "Yes" : "No"}
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
        onClick={action(() => {
          if (isEditable.get()) {
            toast({
              title: "Pet information saved.",
              description: "Your pet information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          isEditable.set(!isEditable.get());
        })}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            marginRight={2}
          >
            {isEditable.get() ? "Save" : "Edit"}
          </Text>
        }
      >
        <Icon name={isEditable.get() ? "checkmark" : "edit"} size="30px" />
      </ExpandButton>
    </Flex>
  ));
};

const PetInfoPage = () => {
  
  return (
  <AccountPageLayout>
    <PetInfoSection />
  </AccountPageLayout>
)};

export default PetInfoPage;
