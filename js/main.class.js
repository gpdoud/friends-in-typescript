"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_class_1 = require("./friend.class");
var Main = /** @class */ (function () {
    function Main() {
        this.friends = [
            new friend_class_1.Friend("Jane", 27, "jane@email.com", true),
            new friend_class_1.Friend("Joe", 33, "joe@email.com"),
            new friend_class_1.Friend("Jill", 47, "jill@email.com"),
            new friend_class_1.Friend("James", 51, "james@email.com", true),
            new friend_class_1.Friend("John", 62, "john@email.com")
        ];
    }
    Main.prototype.display = function () {
        for (var _i = 0, _a = this.friends; _i < _a.length; _i++) {
            var friend = _a[_i];
            console.log(friend.print());
        }
    };
    return Main;
}());
var main = new Main();
main.display();
