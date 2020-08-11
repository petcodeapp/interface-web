import React, { useState } from "react";

import {
  Box,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalHeader,
  Stack,
  Text,
} from "@chakra-ui/core";

import AccountPageLayout from "./components/AccountPageLayout";
import BaseButton from "../../components/Shared/button/BaseButton";
import ExpandButton from "../../components/Shared/button/ExpandButton";
import Checkbox from "./components/Checkbox";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "./components/InfoField";

import { action, observable, IObservableValue } from "mobx";
import { useObserver, observer } from "mobx-react";
import moment from "moment";

import { Vaccination } from "../../Models/Vaccination";

type AddVaccinationModalProps = {
  isShown: IObservableValue<boolean>;
  vaccinations: Vaccination[];
};

const AddVaccinationModal: React.FC<AddVaccinationModalProps> = ({ isShown, vaccinations }) => {
  const DEFAULT_VALUES = {
    name: '',
    date: ''
  };

  const [vaccination] = useState(() => observable({...DEFAULT_VALUES} as Vaccination));

  return useObserver(() => (
    <Modal
      isOpen={isShown.get()}
      onClose={action(() => isShown.set(false))}
      isCentered
    >
      <ModalOverlay/>
      <ModalContent rounded="lg">
        <ModalHeader color='petcode.neutral.700' fontSize='3xl' fontWeight='normal'>
          <Text>
            Add Vaccination
          </Text>
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <InfoFieldInput
            placeholder="Vaccination Name"
            value={vaccination.name}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (vaccination.name = e.target.value)
            )}
          />
          <InfoFieldLabel>Vaccination Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            value={vaccination.date}
            max={moment().format("YYYY-MM-DD")}
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (vaccination.date = e.target.value)
            )}
          />
          <InfoFieldLabel>Vaccination Date</InfoFieldLabel>
          <BaseButton
            variantColor='petcode.blue'
            color='white'
            marginTop={3}
            onClick={action(() => {
              vaccinations.push({...vaccination});
              Object.assign(vaccination, DEFAULT_VALUES);
              isShown.set(false);
            })}
          >
            <Text>Save</Text>
          </BaseButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  ));
}

type OverlaysProps = {
  isEditable: IObservableValue<boolean>;
  isModalShown: IObservableValue<boolean>;
};

const Overlays: React.FC<OverlaysProps> = observer(({ isEditable, isModalShown }) => (
  <Stack
    alignItems="end"
    spacing={2}
    position="fixed"
    bottom={5}
    right={5}
    color="petcode.neutral.700"
  >
    <ExpandButton
      rounded="full"
      padding={4}
      backgroundColor="petcode.yellow.400"
      onClick={action(() => isEditable.set(!isEditable.get()))}
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
    <ExpandButton
      rounded="full"
      padding={4}
      backgroundColor="petcode.yellow.400"
      onClick={action(() => isModalShown.set(true))}
      expandChildren={
        <Text
          fontSize="xl"
          fontWeight="thin"
          textTransform="uppercase"
          whiteSpace="nowrap"
          marginRight={2}
        >
          Add Vaccination
        </Text>
      }
    >
      <Text fontSize="5xl" lineHeight={0.5}>
        +
      </Text>
    </ExpandButton>
  </Stack>
));

const MedicalInfoSection = () => {
  const [pet] = useState(() =>
    observable({
      allergies: { value: "Wheat", visible: true },
      specialNeeds: { value: "Heat Sensitivity", visible: true },
      vetName: { value: "Dr. Veterinarian", visible: true },
      vetPhoneNumber: { value: "(408) 123 4567", visible: true },
      vaccinations: [
        { name: "Bordetella", date: "2020-07-09" },
        { name: "Lyme Disease", date: "2020-06-25" },
        { name: "Influenza", date: "2020-06-20" },
        { name: "Rabies", date: "2020-06-10" },
        { name: "DHPP", date: "2020-06-01" },
      ],
    })
  );

  const [isEditable] = useState(() => observable.box(false));
  const [isModalShown] = useState(() => observable.box(false));

  return useObserver(() => (
    <Stack
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
      spacing={5}
    >
      <Flex
        direction="column"
        rounded="lg"
        backgroundColor="white"
        padding={6}
      >
        <InfoFieldRow fontSize="2xl" marginBottom={3}>
          <Text color="petcode.neutral.700">General Medical Information</Text>
          <Text color="petcode.neutral.400">Visibility</Text>
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable.get() ? (
              <InfoFieldInput
                value={pet.specialNeeds.value}
                onChange={action(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    (pet.specialNeeds.value = e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{pet.specialNeeds.value}</InfoFieldText>
            )}
            <InfoFieldLabel>Special Needs</InfoFieldLabel>
          </Box>
          <Checkbox
            checked={pet.specialNeeds.visible}
            cursor={isEditable.get() ? "pointer" : "default"}
            onClick={action(
              () =>
                isEditable.get() &&
                (pet.specialNeeds.visible = !pet.specialNeeds.visible)
            )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable.get() ? (
              <InfoFieldInput
                value={pet.allergies.value}
                onChange={action(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    (pet.allergies.value = e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{pet.allergies.value}</InfoFieldText>
            )}
            <InfoFieldLabel>Allergies</InfoFieldLabel>
          </Box>
          <Checkbox
            checked={pet.allergies.visible}
            cursor={isEditable.get() ? "pointer" : "default"}
            onClick={action(
              () =>
                isEditable.get() &&
                (pet.allergies.visible = !pet.allergies.visible)
            )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable.get() ? (
              <InfoFieldInput
                value={pet.vetName.value}
                onChange={action(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    (pet.vetName.value = e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{pet.vetName.value}</InfoFieldText>
            )}
            <InfoFieldLabel>Veterinarian Name</InfoFieldLabel>
          </Box>
          <Checkbox
            checked={pet.vetName.visible}
            cursor={isEditable.get() ? "pointer" : "default"}
            onClick={action(
              () =>
                isEditable.get() && (pet.vetName.visible = !pet.vetName.visible)
            )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable.get() ? (
              <InfoFieldInput
                value={pet.vetPhoneNumber.value}
                onChange={action(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    (pet.vetPhoneNumber.value = e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{pet.vetPhoneNumber.value}</InfoFieldText>
            )}
            <InfoFieldLabel>Veterinarian Phone Number</InfoFieldLabel>
          </Box>
          <Checkbox
            checked={pet.vetPhoneNumber.visible}
            cursor={isEditable.get() ? "pointer" : "default"}
            onClick={action(
              () =>
                isEditable.get() &&
                (pet.vetPhoneNumber.visible = !pet.vetPhoneNumber.visible)
            )}
          />
        </InfoFieldRow>
      </Flex>
      <Flex direction="column" rounded="lg" backgroundColor="white" padding={6}>
        <Text color="petcode.neutral.700" fontSize="2xl" marginBottom={3}>
          Vaccination History
        </Text>
        {pet.vaccinations.sort((a, b) => b.date.localeCompare(a.date)).map((vaccination, idx) => (
          <Box key={idx}>
            <InfoFieldText>{vaccination.name}</InfoFieldText>
            <InfoFieldLabel>
              {moment(vaccination.date).format("MM/DD/YY")}
            </InfoFieldLabel>
          </Box>
        ))}
      </Flex>
      <Overlays isEditable={isEditable} isModalShown={isModalShown}/>
      <AddVaccinationModal vaccinations={pet.vaccinations} isShown={isModalShown}/>
    </Stack>
  ));
};

const MedicalInfoPage = () => (
  <AccountPageLayout>
    <MedicalInfoSection />
  </AccountPageLayout>
);

export default MedicalInfoPage;
