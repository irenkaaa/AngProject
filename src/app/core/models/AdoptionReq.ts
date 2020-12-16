export interface AdoptionRequest {
    _id: string;
    fullName: string;
    address: string,
    email: string,
    phoneNumber: number, 
    birthDate: Date,
    animalId: string,
    userId: string,
}