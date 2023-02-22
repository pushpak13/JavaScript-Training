//Creating Object
let school = {
    name: "Gurukul Vidyalaya",
    location: "Bangalore",
    established: "1950",
    20: 1000,
    address: {
        street: "Vivekananda road",
        area: "Jayanagar",
        zipcode: "560001",
    },
    displayInfo: function() {
        console.log(`${school.name} was established in ${school.established} at ${school.location}`);

    }
}
school.displayInfo();
//delete(school[20]);

console.log(school);
//console.log(school['20']);
//console.log(school.address.area);
