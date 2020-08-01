import { VisibleValue } from './VisibleValue';

export interface ContactInfo {
    level: string;
    name: VisibleValue<string>;
    address: VisibleValue<string>;
    phoneNumber: VisibleValue<string>;
    email: VisibleValue<string>;
};
