import { CoffeeFlavors } from "./flavor";

export interface Coffee<T> {
    name : string,
    text : string,
    price : T,
    additionalInfo? : string,
    imgLink : string,
    groupId? : T extends number ? number : never,
    url: string,
    defaultPrice : number,
    flavors? : CoffeeFlavors,
    parentGroupId? : T extends string ? number : never
}