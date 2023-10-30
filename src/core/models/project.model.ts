export class Project {
    id: number = 0;
    project_Title: string = "";
    project_Description: string = '';
    project_DeadLine: Date = new Date();
    project_Status: ProjectStatus = 0;
    userId: number = 0;
    roomId: number = 0;
}

export enum ProjectStatus {
    NotStarted,
    InProgress,
    Completed
}
