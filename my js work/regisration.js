class RentalProperty {
    constructor(name, address, type, rent) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.rent = rent;
    }

    getDescription() {
        return `${this.name} is a ${this.type} located at ${this.address} the rent is $${this.rent} 
        per month.`;
    }
}

class House extends RentalProperty{
    constructor(name, address, bedrooms, bathrooms, rent) {
        super(name, address, "house", rent);
            this.bathrooms= bathrooms;
            this.bedrooms = bedrooms;
        }

        getDescription() {
            return `${super.getDescription()} it has ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms.`;
       
    }
}

class Appartment extends RentalProperty {
    constructor(name, address, units, rent) {
        super(name, address, "apartment", rent);
        this.units = units;
    }

    getDescription() {
        return `${super.getDescription()} it has ${this.units} units available`;
    }
}

class Room extends RentalProperty {
    constructor(name, address, occupancy, rent) {
        super(name, address, "room", rent);
        this.occupancy = occupancy;
    }
    getDescription() {
        return `${super.getDescription()} it has a maximum occupancy of ${this.occupancy} people.`;
    }
}