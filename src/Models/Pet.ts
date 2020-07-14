import { Vaccination } from "./Vaccination";

export interface Pet {
    pid: string;
    name: string;
    profileUrl: string;
    breed: string;
    temperament: string;
    allergies: string;
    specialNeeds: string;
    vetName: string;
    vetPhoneNumber: string;
    vetId: string;

    isServiceAnimal: boolean;
    age: number;
    vaccinations: Array<Vaccination>
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