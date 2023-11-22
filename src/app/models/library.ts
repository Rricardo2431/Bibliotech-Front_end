import { Book } from "./book";
import { librarian } from "./librarian";

export class Library {

    constructor(
    public id: number,
    public collection: string,
    public location: string,
    public dateInventory: Date,
    public books: Book[],
    public librarians: librarian[])
     {}  
}