class Owner {
    constructor (name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.properties = properties;
        this.notification = [];
    }

    addProperty(property) {
        this.properties.push(property);
    }

removeProperty(property) {
    const index = this.properties.indexOf(property);
    if(index>-1) {
        this.properties.splice(index,1);
    }
}

updateProperty(proerty, updates) {
    Object.asssign(property, updates);
}

viewProperty(property) {
    // code to view property details
}

uploadPhoto(property, photo) {
    property.photos.push(photo);
}

viewNotification() {
    // code to view notifications
}

sendNotification(notification) {
    this.notifications.push(notification);
}

deleteNotification(notification) {
    const index = this.notifications.indexOf(notification);
    if(index>-1) {
        this.notifications.splice(index,1);
    }
}
}

class Property {
    constructor(owner, address, description, price) {
        this.owner = owner;
        this.address = address;
        this.description = description;
        this.price = price;
        this.photo = [];
        this.renters = [];
    }

    addRenter(renter) {
        this.renters.push(renter);
    }

    removeRenter(renter) {
        const index = this.renters.indexOf(renter);
        if(index>-1) {
            this.renters.splice(inde,1)
        }
    }

    viewRenters() {
        // code to view renters
    }
}