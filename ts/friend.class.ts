export class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    print(): string {
        return `${this.name}|${this.age}|${this.email}|${this.bff}`;
    }

    constructor(name: string, age: number,
                email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}