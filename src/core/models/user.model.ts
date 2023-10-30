export class User {
    id: number = 0;
    tc_no: string = '';
    email: string = '';
    phone: string = '';
    userName: string = '';
    fullName: string = '';
    password: string = '';
    userType: UserType = 0;
    myTasks: string[] = [];
    rooms: string[] = [];
    tickets: string[] = [];
    projects: string[] = [];
}

export enum UserType {
    Admin,
    TeamLead,
    Developer
}
