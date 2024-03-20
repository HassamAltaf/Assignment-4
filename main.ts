interface AddressType {

    streetName: string;

    city: string;

    country: string;

    PostalCode: string;

};

type UserType = {

    firstName: string;

    lastName: string;

    cnicNo: string;

    isStudent: boolean;

    subjects: string[];

    Address: AddressType

};

let user: UserType = {

    firstName: "Raja",

    lastName: "Zishan",

    cnicNo: "73325-345399-3",

    isStudent: true,

    subjects: ["Mathematics", "Computer Science", "Physics"],

    Address: {

        streetName: "New Muhammad Ali Jinnah Road",

        city: "Karachi",

        country: "Pakistan",

        PostalCode: "59201"

    },

};

console.log(user);

// data define in object
let studentObj: { studentName: string } = {
    studentName: 'Haris Rajput',
}

console.log(studentObj)

var address: AddressType = {

    streetName: "Rashid Minhas Road",

    city: "Karachi",

    country: "Pakistan",

    PostalCode: "12311"

};

console.log(address)

// practice

let fruitName: string = "Fruits";

var fruits: string[] = ['orange', 'pomegranate', 'apple'];

var users: UserType[] = []
console.log(fruitName,fruits)
