import { CreateYourPetCodeAccountData } from "./CreateYourPetCodeAccountStep";
import { ConnectYourPetCodeTagData } from "./ConnectYourPetCodeTagStep";
import { PetInformationData } from "./PetInformationStep";
import { OwnerInformationData } from "./OwnerInformationStep";
import { MedicalInformationData } from "./MedicalInformationStep";
import { VaccinationHistoryData } from "./VaccinationHistoryStep";
import { RemindersData } from "./RemindersStep";

export type OnboardingValues = {
  accountInfo: Partial<CreateYourPetCodeAccountData>;
  tagInfo: Partial<ConnectYourPetCodeTagData>;
  petInfo: Partial<PetInformationData>;
  owners: Partial<OwnerInformationData>[];
  medicalInfo: Partial<MedicalInformationData>;
  vaccinationHistory: Partial<VaccinationHistoryData>[];
  reminders: Partial<RemindersData>[];
};
