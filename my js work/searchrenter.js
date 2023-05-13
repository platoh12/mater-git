class property {
    constructor(location, price, features) {
        this.location = location;
        this.type = type;
        this.price = price;
        this. features = features;
    }
}

class PropertySearch {
    constructor(properties) {
        this.properties = properties;
    }

    search(location, type, maxPrice, features) {
        let results = [];

        for(let i=0; i<this.properties.length; i++) {
            let property= this.properties[i];
            if(property.location.includes(location) &&
            property.type == type &&
            property.price <= maxPrice) {
                let matchedFeatures = true;
                for(let j=0; j<features.length; j++) {
                    if(!property.features.includes(features[j])) {
                        matchedFeatures = false;
                        break;
                    }
                }

                if(matchedFeatures) {
                    results.push(property);
                }
            }
        
        
        return results;}
    }
}

// functionality for renters to save their favorite properties
class favorite {
    constructor(renter, property) {
        this.tenter = renter;
        this.property = property;

        // Add renter to property's interested renters
        property.interestedRenters.push(renter);

        //Add property to renter's favorite properties
        renter.favoriteProperties.push(property);
    }
}

// Functionality for owners to keep in track of interested renters
class Property {
    constructor(owner, location, type, price) {
        this.owner = owner;
        this.location = location;
        this.type = type;
        this.price = price;
        this. interestedRenters = [];
    }

    addInterestedRenter(renter) {
        this.interestedRenters.push(renter);
    }
}