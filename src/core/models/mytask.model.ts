export class MyTask {
    id: number = 0;
    userId: number = 0;
    myTask_Title: string = '';
    myTask_Description: string = '';
    myTask_Status: MyTaskStatus = 0;
    myTask_DeadLine: Date = new Date();
}

export enum MyTaskStatus {
    NotStarted,
    InProgress,
    Completed
}
