import { Request } from '@model/request.class';
import { Product } from '@model/product.class';

export class RequestLine {

    id: number;
    requestid: number;
    productid: number;
    request: Request;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
        this.requestid = 0;
        this.productid = 0;
        this.quantity = 0;

    }
}

