import { Library } from "./library";

export class Book {

  constructor(
    public id: number,
    public title: string,
    public category: string,
    public quantity: number,
    public libraries: Library[])
    {}

  }
