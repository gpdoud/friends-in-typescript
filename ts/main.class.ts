import { Friend } from './friend.class';
class Main {
    friends: Friend[] = [
        new Friend("Jane", 27, "jane@email.com", true),
        new Friend("Joe", 33, "joe@email.com"),
        new Friend("Jill", 47, "jill@email.com"),
        new Friend("James", 51, "james@email.com", true),
        new Friend("John", 62, "john@email.com")
    ];
    display(): void {
        for(let friend of this.friends) {
            console.log(friend.print());
        }
    }
}
let main = new Main();
main.display();