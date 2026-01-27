let studentData = {
    name: "Debanshika",
    age: 18,
    marks: 100,
    "isPass or isFail": true,
    allies: ["Brahma", "Vishnu", "Mahesh"],
    address: {
        country: "India",
        state: {
            StateName: "Raipur",
            CityName: "Chhattisgarh",
            house: "K-14, Rajdhani Vihar Kachna"
        }
    },

    hello: function () {
        console.log(
            `${this.name} says hello to everyone. She resides in ${this.address.state.house}, ${this.address.state.CityName}, ${this.address.state.StateName}, ${this.address.country}`
        );
    }
};

studentData.hello();

console.log(
    studentData.name, "says hello to everyone. She resides in", studentData.address.state.house + ",", studentData.address.state.CityName + ",", studentData.address.state.StateName + ",", studentData.address.country);

