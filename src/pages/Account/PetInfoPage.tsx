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

import { action, observable } from "mobx";
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
  const [pet] = useState(() =>
    observable({
      species: "Dog",
      breed: "Weimaraner",
      birthday: "2012-07-31",
      color: "Gray",
      temperament: "Friendly",
      isServiceAnimal: false,
    })
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
            <PetInfoSelect
              value={pet.species}
              onChange={action((e) => (pet.species = e.target.value))}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </PetInfoSelect>
          ) : (
            <PetInfoCardText>{pet.species}</PetInfoCardText>
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
            <PetInfoInput
              type="date"
              fontSize="3xl"
              value={pet.birthday}
              max={moment().format("YYYY-MM-DD")}
              onChange={action(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  (pet.birthday = e.target.value)
              )}
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
            <PetInfoSelect
              value={pet.isServiceAnimal ? "Yes" : "No"}
              onChange={action(
                (e) => (pet.isServiceAnimal = e.target.value == "Yes")
              )}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </PetInfoSelect>
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
