import React, { useState } from "react";

import { Box, Flex, Icon, SimpleGrid, Text, useToast } from "@chakra-ui/core";

import AccountPageLayout from "../../components/Shared/layouts/AccountPageLayout";
import { ExpandButton } from "../../components/Shared/atoms/ExpandButton";
import BackgroundIcon from "../../components/Shared/atoms/BackgroundIcon";
import PetInfoCard, {
  PetInfoInput,
  PetInfoSelect,
} from "../../components/Shared/molecules/PetInfoCard";
import Link, { LinkProps } from "../../components/Shared/atoms/link";

import { useObserver } from "mobx-react";
import moment from "moment";
import { AuthContext } from "../../views/Auth/index";

const InfoButton: React.FC<LinkProps> = (props) => (
  <Link
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

const PetInfoSection = () => {
  const service = React.useContext(AuthContext);
  const pet = service.pets[0];

  console.log(pet);

  const toast = useToast();

  const [species, setSpecies] = useState(pet.species);
  const [breed, setBreed] = useState(pet.breed);
  const [birthday, setBirthday] = useState(pet.birthday);
  const [color, setColor] = useState(pet.color);
  const [temperament, setTemperament] = useState(pet.temperament);
  const [isServiceAnimal, setServiceAnimal] = useState(pet.isServiceAnimal);

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  return useObserver(() => (
    <Flex direction="column" flexGrow={1} paddingX={10} zIndex={1}>
      <Flex direction="row" alignItems="center" color="petcode.neutral.700">
        <Box
          rounded="full"
          size="150px"
          minWidth="150px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(${pet.profileUrl})`}
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
          <BackgroundIcon alignSelf="flex-end" size="100px" name="phone" />
        </InfoButton>
        <InfoButton to="/medicalinfo">
          <Text position="relative" fontSize="3xl" zIndex={2}>
            Medical Information
          </Text>
          <BackgroundIcon alignSelf="flex-end" size="100px" name="clipboard" />
        </InfoButton>
      </Flex>
      <SimpleGrid columns={{ xs: 1, md: 2 }} spacingX={5}>
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoSelect
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </PetInfoSelect>
          }
          value={species}
          label="Species"
          iconProps={{
            name: "dog",
          }}
        />
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoInput
              value={breed}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBreed(e.target.value)
              }
            />
          }
          value={breed}
          label="Breed"
          iconProps={{
            name: "paw",
            size: "100px",
            transform: "rotate(12.84deg)",
          }}
        />
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoInput
              type="date"
              fontSize="3xl"
              value={birthday}
              max={moment().format("YYYY-MM-DD")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBirthday(e.target.value)
              }
            />
          }
          value={`${moment
            .duration(moment().diff(moment(birthday)))
            .humanize()} old`}
          label="Age"
          iconProps={{
            name: "clock",
          }}
        />
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoInput
              value={color}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setColor(e.target.value)
              }
            />
          }
          value={color}
          label="Color"
          iconProps={{
            name: "colors",
            size: "100px",
          }}
        />
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoInput
              value={temperament}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTemperament(e.target.value)
              }
            />
          }
          value={temperament}
          label="Temperament"
          iconProps={{
            name: "paw",
            size: "100px",
            transform: "rotate(12.84deg)",
          }}
        />
        <PetInfoCard
          isBeingEdited={isBeingEdited}
          inputChild={
            <PetInfoSelect
              value={isServiceAnimal ? "Yes" : "No"}
              onChange={(e) => setServiceAnimal(e.target.value == "Yes")}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </PetInfoSelect>
          }
          value={isServiceAnimal ? "Yes" : "No"}
          label="Service Animal"
          iconProps={{
            name: "service-animal",
          }}
        />
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
          if (isBeingEdited) {
            toast({
              title: "Pet information saved.",
              description: "Your pet information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          setIsBeingEdited(!isBeingEdited);
        }}
        expandChildren={
          <Text
            fontSize="xl"
            fontWeight="thin"
            textTransform="uppercase"
            marginRight={2}
          >
            {isBeingEdited ? "Save" : "Edit"}
          </Text>
        }
      >
        <Icon name={isBeingEdited ? "checkmark" : "edit"} size="30px" />
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
