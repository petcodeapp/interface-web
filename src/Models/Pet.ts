import { Vaccination } from "./Vaccination";
import { VisibleValue } from './VisibleValue';

export interface Pet {
    pid: string;
    name: string;
    profileUrl: string;
    color: string;
    species: string;
    breed: string;
    temperament: string;
    allergies: VisibleValue<string>;
    specialNeeds: VisibleValue<string>;
    vetName: VisibleValue<string>;
    vetPhoneNumber: VisibleValue<string>;
    vetId: string;

    isServiceAnimal: boolean;
    birthday: string;
    vaccinations: Array<Vaccination>;
}

/*


  String pid;
  String name;
  String profileUrl;
  String breed;
  String temperament;
  String allergies;
  String specialNeeds;
  String vetName;
  String vetPhoneNumber;
  bool isServiceAnimal;
  int age;
  List<Vaccination> vaccinations;
  List<Medication> medications;
  Owner contact_1;
  Owner contact_2;

*/