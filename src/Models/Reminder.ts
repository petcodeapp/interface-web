export interface Reminder {
  name: string;
  date: Date;
  time: string;
  frequency: string;
  notificationMethod: string;
  enabled: boolean;
}
