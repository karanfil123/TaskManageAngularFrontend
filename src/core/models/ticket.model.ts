export class Ticket {
    id: number = 0;
    userId: number = 0;
    roomId: number = 0;
    ticket_Content: string = '';
    ticket_Status: TicketStatus =0;
}

export enum TicketStatus {
    Opened,
    Closed
}
