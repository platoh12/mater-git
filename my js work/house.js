// Define the abstract property class
class Property {
    constructor(title, address, price){
        if(this.constructor=== property) {
            throw new TypeError(`Abstract class "property" cannot be instantioned directly`);
        }

        this.title = title;
        this.address = address;
        this.price = price;
    
    
    }

    getDetails() {
        return `${this.title} located at ${this.address} is available for ${this.price} per month.`;
    }
    

}

// Define the concrete property subclasses 
class House extends property {
    constructor(title, address, price, numBedrooms, numBathrooms) {
        super(title, address, price);
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;

    }

    getDetails() {
        return `${this.title} located at ${this.address} with ${this.numBedrooms} bedrooms and ${this.numBathrooms}
        bathrooms is available for ${this.price} per month.`;
    }
}

class Apartment extends Property {
    constructor (title, address, price, numRooms) {
        super(title, address, price);
        this.numRooms = numRooms;
    }

    getDetails() {
        return `${this.title} located at ${this.address} with ${this.numRooms} rooms is available for 
        ${this.price} per month.`;
    }
}

class Room extends Property {
    constructor (title, address, price, isFurnished) {
        super (title, address, price);
    }
    getDetails() {
        if(this.isFurnished) {
            return `${this.title} located at ${this.address} furnished is available for ${this.price}
            per month.`;
        } else {
            return `${this.title} located at ${this.address} unfurnished room is available for ${this.price}
            per month.`;
        }
    }
}