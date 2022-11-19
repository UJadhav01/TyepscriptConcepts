var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    //for displaying id and name of organizer
    function Organizer() {
        this.id = 1;
        this.name = 'Aditya';
        console.log("My Id is = ".concat(this.id, " and my name is = ").concat(this.name));
    }
    //display data of organizer message
    Organizer.prototype.display = function () {
        console.log("Hello sunshines I am your organizer...");
    };
    return Organizer;
}());
var ClassEvent = /** @class */ (function (_super) {
    __extends(ClassEvent, _super);
    function ClassEvent(id, name, description, category, eventDate, startTime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.category = category;
        _this.eventDate = eventDate;
        _this.startTime = startTime;
        return _this;
    }
    //display all data of event
    ClassEvent.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("\nEvent Id = ".concat(this.id, "\nName of Event = ").concat(this.name, "\ndescription = ").concat(this.description, "\ncategory = ").concat(this.category, "\nParty date = ").concat(this.eventDate, " | time = ").concat(this.startTime, " pm"));
    };
    return ClassEvent;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    //for display data of venue
    Venue.prototype.display = function () {
        console.log("\nVenue Id = ".concat(this.id, "\nName of Venue = ").concat(this.name, "\nVenue description = ").concat(this.description, "\nAddress = ").concat(this.address));
    };
    return Venue;
}(Organizer));
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentDate = "".concat(day, "-").concat(month, "-").concat(year);
var startTime1 = (date.getHours());
var array = [new ClassEvent(2, 'Birthday Party', ' Lets Celebrate...!,\n\t\t\t\tJoin us in celebrating day at jack 11th birthday party!', 'this is family event with an enjoyable evening with music , dinner and dancing', currentDate, startTime1),
    new Venue(2, 'Shivneri hotel', 'with parking facility', '\tShivneri hotel ,\n\t\t\t102 hall,\n\t\t\tstation road solapur')];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var event_org = array_1[_i];
    event_org.display();
}
