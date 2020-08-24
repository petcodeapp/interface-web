import React, { useState } from "react";

import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Input,
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
import DatePicker from "../../components/Shared/input/DatePicker";
import {
  InfoFieldRow,
  InfoFieldText,
  InfoFieldLabel,
  InfoFieldInput,
} from "./components/InfoField";

import { action, observable, IObservableValue } from "mobx";
import { useObserver } from "mobx-react";
import moment from "moment";

import { Vaccination } from "../../Models/Vaccination";

type AddVaccinationModalProps = {
  isShown: IObservableValue<boolean>;
  vaccinations: Vaccination[];
};

const AddVaccinationModal: React.FC<AddVaccinationModalProps> = ({
  isShown,
  vaccinations,
}) => {
  const DEFAULT_VALUES = {
    name: "",
    date: new Date(),
  };

  const [vaccination] = useState(() =>
    observable({ ...DEFAULT_VALUES } as Vaccination)
  );
  const toast = useToast();

  return useObserver(() => (
    <Modal
      isOpen={isShown.get()}
      onClose={action(() => isShown.set(false))}
      isCentered
    >
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
            onChange={action(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                (vaccination.name = e.target.value)
            )}
          />
          <InfoFieldLabel>Vaccination Name</InfoFieldLabel>
          <DatePicker
            selected={vaccination.date}
            onChange={action(date => vaccination.date = date as Date)}
            customInput={<InfoFieldInput/>}
          />
          <InfoFieldLabel>Expiration Date</InfoFieldLabel>
          <BaseButton
            variantColor="petcode.blue"
            color="white"
            marginTop={3}
            onClick={action(() => {
              vaccinations.push({ ...vaccination });
              Object.assign(vaccination, DEFAULT_VALUES);
              isShown.set(false);
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
  isEditable: IObservableValue<boolean>;
  isModalShown: IObservableValue<boolean>;
};

const Overlays: React.FC<OverlaysProps> = ({ isEditable, isModalShown }) => {
  const toast = useToast();

  return useObserver(() => (
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
          if (isEditable.get()) {
            toast({
              title: "Medical information saved.",
              description: "Your medical information was saved successfully.",
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
};

const Card: React.FC<FlexProps> = (props) => (
  <Flex direction="column" rounded="lg" backgroundColor="white" padding={6}  {...props}/>
);

const CardHeading: React.FC<BoxProps> = (props) => (
  <Text fontSize="2xl" color="petcode.neutral.700" {...props}/>
)

const MedicalInfoSection = () => {
  const [pet] = useState(() =>
    observable({
      allergies: { value: "Wheat", visible: true },
      specialNeeds: { value: "Heat Sensitivity", visible: true },
      vetName: { value: "Dr. Veterinarian", visible: true },
      vetPhoneNumber: { value: "(408) 123 4567", visible: true },
      vaccinations: [
        { name: "Bordetella", date: new Date("2020-07-09") },
        { name: "Lyme Disease", date: new Date("2020-06-25") },
        { name: "Influenza", date: new Date("2020-06-20") },
        { name: "Rabies", date: new Date("2020-06-10") },
        { name: "DHPP", date: new Date("2020-06-01") },
      ],
    })
  );
  const [vaccinationDocuments] = useState(() =>
    observable([
      { name: "Vaccination Document 1", size: 26.5 * 10e5 }
    ])
  );

  const [isEditable] = useState(() => observable.box(false));
  const [isModalShown] = useState(() => observable.box(false));

  const toast = useToast();

  return useObserver(() => (
    <Stack
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
      spacing={5}
    >
      <Card>
        <InfoFieldRow marginBottom={3}>
          <CardHeading>General Medical Information</CardHeading>
          <CardHeading color="petcode.neutral.400">Visibility</CardHeading>
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
          <BaseCheckbox
            isChecked={pet.specialNeeds.visible}
            isDisabled={!isEditable.get()}
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
          <BaseCheckbox
            isChecked={pet.allergies.visible}
            isDisabled={!isEditable.get()}
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
          <BaseCheckbox
            isChecked={pet.vetName.visible}
            isDisabled={!isEditable.get()}
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
          <BaseCheckbox
            isChecked={pet.vetPhoneNumber.visible}
            isDisabled={!isEditable.get()}
            onClick={action(
              () =>
                isEditable.get() &&
                (pet.vetPhoneNumber.visible = !pet.vetPhoneNumber.visible)
            )}
          />
        </InfoFieldRow>
      </Card>
      <Card>
        <CardHeading marginBottom={3}>Vaccination Documents</CardHeading>
        {vaccinationDocuments.length > 0 ? vaccinationDocuments.map((vaccinationDocument, idx) => (
          <InfoFieldRow key={idx}>
            <Box>
              <InfoFieldText>{vaccinationDocument.name}</InfoFieldText>
              <InfoFieldLabel>
                {(vaccinationDocument.size / 10e5).toFixed(1)} MB
              </InfoFieldLabel>
            </Box>
            <Stack isInline alignSelf="start">
              <IconButton aria-label="View" icon="search"/>
              <IconButton aria-label="Download" icon="download"/>
              <IconButton
                color="red.400"
                aria-label="Delete"
                icon="delete"
                onClick={() => vaccinationDocuments.splice(idx, 1)}
              />
            </Stack>
          </InfoFieldRow>
        )) : <Text color="petcode.neutral.500">No Vaccination Documents have been uploaded.</Text>}
        <Input 
          id="vaccination-document-file-upload"
          type="file"
          isDisabled={vaccinationDocuments.length >= 3}
          onChange={action((e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files![0];
            // 50 MB
            if (file.size / 10e5 > 50) {
              toast({
                title: "File too big.",
                description: "Please only upload files smaller than 50 MB.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              vaccinationDocuments.push(file);
            }
          })}
        />
        <BaseButton
          alignSelf="start"
          isDisabled={vaccinationDocuments.length >= 3}
          as="label"
          variantColor="petcode.blue"
          // @ts-ignore
          for="vaccination-document-file-upload"
          marginTop={3}
        >
          <Stack isInline alignItems="center">
            <Icon transform="scale(1, -1);" name="download"/>
            <Text>Upload</Text>
          </Stack>
        </BaseButton>
      </Card>
      <Card>
        <CardHeading marginBottom={3}>
          Vaccinations
        </CardHeading>
        {pet.vaccinations
          .sort((a, b) => b.date.valueOf() - a.date.valueOf())
          .map((vaccination, idx) => (
            <Box key={idx}>
              <InfoFieldText>{vaccination.name}</InfoFieldText>
              <InfoFieldLabel>
                {moment(vaccination.date).format("MM/DD/YY")}
              </InfoFieldLabel>
            </Box>
          ))}
      </Card>
      <Overlays isEditable={isEditable} isModalShown={isModalShown} />
      <AddVaccinationModal
        vaccinations={pet.vaccinations}
        isShown={isModalShown}
      />
    </Stack>
  ));
};

const MedicalInfoPage = () => (
  <AccountPageLayout>
    <MedicalInfoSection />
  </AccountPageLayout>
);

export default MedicalInfoPage;
