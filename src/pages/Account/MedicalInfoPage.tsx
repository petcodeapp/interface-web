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
  useToast,
} from "@chakra-ui/core";

import AccountPageLayout from "./components/AccountPageLayout";
import BaseButton from "../../components/Shared/button/BaseButton";
import ExpandButton from "../../components/Shared/button/ExpandButton";
import BaseCheckbox from "../../components/Shared/input/BaseCheckbox";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "./components/InfoField";

import { action } from "mobx";
import { useObserver } from "mobx-react";
import moment from "moment";

import { AuthContext } from "../../views/Auth/index";

type AddVaccinationModalProps = {
  isShown: boolean;
  setShown: (a: boolean) => void;
};

const AddVaccinationModal: React.FC<AddVaccinationModalProps> = ({
  isShown,
  setShown,
}) => {
  const DEFAULT_VALUES = {
    name: "",
    date: "",
  };

  const [vaccination, setVaccination] = useState({ ...DEFAULT_VALUES });
  const toast = useToast();

  return useObserver(() => (
    <Modal isOpen={isShown} onClose={() => setShown(false)} isCentered>
      <ModalOverlay />
      <ModalContent rounded="lg">
        <ModalHeader
          color="petcode.neutral.700"
          fontSize="3xl"
          fontWeight="normal"
        >
          <Text>Add Vaccination</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InfoFieldInput
            placeholder="Vaccination Name"
            value={vaccination.name}
            onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
              setVaccination({ ...vaccination, name: e.target.value })
            )}
          />
          <InfoFieldLabel>Vaccination Name</InfoFieldLabel>
          <InfoFieldInput
            type="date"
            value={vaccination.date}
            max={moment().format("YYYY-MM-DD")}
            onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
              setVaccination({ ...vaccination, date: e.target.value })
            )}
          />
          <InfoFieldLabel>Vaccination Date</InfoFieldLabel>
          <BaseButton
            variantColor="petcode.blue"
            color="white"
            marginTop={3}
            onClick={action(() => {
              // INSERT VACCINATION TO BACKEND HERE
              setVaccination({ ...DEFAULT_VALUES });
              setShown(false);
              toast({
                title: "Vaccination added.",
                description: "Your vaccination was added successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            })}
          >
            <Text>Save</Text>
          </BaseButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  ));
};

type OverlaysProps = {
  isEditable: boolean;
  setEditable: (a: boolean) => void;
  setModalShown: (a: boolean) => void;
  onSave: () => void;
};

const Overlays: React.FC<OverlaysProps> = ({
  isEditable,
  setEditable,
  setModalShown,
  onSave,
}) => {
  const toast = useToast();

  return (
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
        onClick={action(() => {
          if (isEditable) {
            onSave();
            toast({
              title: "Medical information saved.",
              description: "Your medical information was saved successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }
          setEditable(!isEditable);
        })}
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
      <ExpandButton
        rounded="full"
        padding={4}
        backgroundColor="petcode.yellow.400"
        onClick={action(() => setModalShown(true))}
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
  );
};

const MedicalInfoSection = () => {
  const service = React.useContext(AuthContext);

  const [isEditable, setEditable] = useState(false);
  const [isModalShown, setModalShown] = useState(false);

  const [specialNeeds, setSpecialNeeds] = useState(
    service.pets[0]?.specialNeeds.value
  );
  const [allergies, setAllergies] = useState(service.pets[0]?.allergies.value);
  const [vetName, setVetName] = useState(service.pets[0]?.vetName.value);
  const [vetNumber, setVetNumber] = useState(
    service.pets[0]?.vetPhoneNumber.value
  );

  return useObserver(() => (
    <Stack flexGrow={1} paddingX={10} spacing={5} zIndex={1}>
      <Flex
        direction="column"
        rounded="lg"
        backgroundColor="white"
        padding={6}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      >
        <InfoFieldRow fontSize="2xl" marginBottom={3}>
          <Text color="petcode.neutral.700">General Medical Information</Text>
          <Text color="petcode.neutral.400">Visibility</Text>
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable ? (
              <InfoFieldInput
                value={specialNeeds}
                onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
                  setSpecialNeeds(e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{specialNeeds}</InfoFieldText>
            )}
            <InfoFieldLabel>Special Needs</InfoFieldLabel>
          </Box>
          <BaseCheckbox
            isChecked={service.pets[0]?.specialNeeds.visible}
            cursor={isEditable ? "pointer" : "default"}
            // onClick={action(
            //   () =>
            //     isEditable.get() &&
            //     // (pet.specialNeeds.visible = !pet.specialNeeds.visible)//TODO: Visibility in Mobx
            // )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable ? (
              <InfoFieldInput
                value={allergies}
                onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
                  setAllergies(e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{allergies}</InfoFieldText>
            )}
            <InfoFieldLabel>Allergies</InfoFieldLabel>
          </Box>
          <BaseCheckbox
            isChecked={service.pets[0]?.allergies.visible}
            cursor={isEditable ? "pointer" : "default"}
            // onClick={action(
            //   () =>
            //     isEditable.get() &&
            //     (service.pets[0]?.allergies.visible = !service.pets[0]?.allergies.visible) // TODO: VISIBILITy
            // )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable ? (
              <InfoFieldInput
                value={vetName}
                onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
                  setVetName(e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{vetName}</InfoFieldText>
            )}
            <InfoFieldLabel>Veterinarian Name</InfoFieldLabel>
          </Box>
          <BaseCheckbox
            isChecked={service.pets[0]?.vetName.visible}
            cursor={isEditable ? "pointer" : "default"}
            // onClick={action(
            //   () =>
            //     isEditable.get() && (service.pets[0]?.vetName.visible = !service.pets[0]?.vetName.visible)
            // )}
          />
        </InfoFieldRow>
        <InfoFieldRow>
          <Box flexBasis="60%">
            {isEditable ? (
              <InfoFieldInput
                value={vetNumber}
                onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
                  setVetNumber(e.target.value)
                )}
              />
            ) : (
              <InfoFieldText>{vetNumber}</InfoFieldText>
            )}
            <InfoFieldLabel>Veterinarian Phone Number</InfoFieldLabel>
          </Box>
          <BaseCheckbox
            isChecked={service.pets[0]?.vetPhoneNumber.visible}
            cursor={isEditable ? "pointer" : "default"}
            // onClick={action(
            //   () =>
            //     isEditable.get() &&
            //     (service.pets[0]?.vetPhoneNumber.visible = !service.pets[0]?.vetPhoneNumber.visible)
            // )}
          />
        </InfoFieldRow>
      </Flex>
      <Flex
        direction="column"
        rounded="lg"
        backgroundColor="white"
        padding={6}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
      >
        <Text color="petcode.neutral.700" fontSize="2xl" marginBottom={3}>
          Vaccination History
        </Text>
        {service.pets[0]?.vaccinations
          // .sort((a: { date: string }, b: {date: string}) => b.date.localeCompare(a.date))
          .map((vaccination: any, idx: number) => (
            <Box key={idx}>
              <InfoFieldText>{vaccination.name}</InfoFieldText>
              <InfoFieldLabel>
                {moment(vaccination.date).format("MM/DD/YY")}
              </InfoFieldLabel>
            </Box>
          ))}
      </Flex>
      {/* <Overlays isEditable={isEditable} isModalShown={isModalShown} /> */}
      <Overlays
        isEditable={isEditable}
        setEditable={setEditable}
        setModalShown={setModalShown}
        onSave={() =>
          service.setMedicalInfo({
            specialNeeds: {
              value: specialNeeds,
              visible: true,
            },
            allergies: {
              value: allergies,
              visible: true,
            },
            vetName: {
              value: vetName,
              visible: true,
            },
            vetNumber: {
              value: vetNumber,
              visible: true,
            },
          })
        }
      />
      <AddVaccinationModal isShown={isModalShown} setShown={setModalShown} />
    </Stack>
  ));
};

const MedicalInfoPage = () => (
  <AccountPageLayout>
    <MedicalInfoSection />
  </AccountPageLayout>
);

export default MedicalInfoPage;
