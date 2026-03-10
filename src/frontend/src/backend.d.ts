import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    checkInDate: string;
    guestName: string;
    email: string;
    message: string;
    checkOutDate: string;
    phoneNumber: string;
    roomType: RoomType;
    numberOfGuests: bigint;
}
export enum RoomType {
    premium = "premium",
    deluxe = "deluxe"
}
export interface backendInterface {
    getAllEnquiries(): Promise<Array<Enquiry>>;
    submitEnquiry(guestName: string, email: string, phoneNumber: string, checkInDate: string, checkOutDate: string, roomType: RoomType, numberOfGuests: bigint, message: string): Promise<void>;
}
