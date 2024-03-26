import { Owner } from "./owner.model";

export interface Owners {
    items: Array<Owner>;
    hasnext: boolean;
    remaingrecords: number;
}