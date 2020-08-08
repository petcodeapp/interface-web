export interface Reminder {
    name: string;
    date: string;
    frequency: 'One-Time'|'Daily'|'Weekly'|'Monthly';
    notificationMethod: string;
    enabled: boolean;
}
