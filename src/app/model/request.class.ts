import { User } from './user.class';

export class Request {
    id: number;
    description: string;
    justification: string;
    rejectionReason: string;
    deliveryMode: string;
    status: string;
    total: number;
    userId: number;
    user: User;

constructor() {
               
        this.id = 0;
        this.description = '';
        this.justification = '';
        this.rejectionReason = null;
        this.deliveryMode = 'Pickup';
        this.status = 'NEW';
        this.total = 0;
        this.userId = 0;
    }
}