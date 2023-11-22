import { Library } from "./library";


export class librarian {

constructor(
public id: number,
public firstName: string,
public lastName: string,
public password: string,
public role: string,
public library: Library[])
{}

}