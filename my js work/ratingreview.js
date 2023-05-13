class Reviews {
    constructor(user, rating, comment,) {
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
}

// Define a Property class to hold property data and reviews
class Property {
    constructor(name, location, price, description) {
        this.name = name;
        this.location = location;
        this.price = price;
        this.description = description;
        this.reviews = []
    }

    // Method to add a review to the property
    addReview(user, rating, comment) {
        const review = new Reviews(user, rating, comment);
        this.reviews.push(review);
    }

    // Method to calculate the average rating of the property
    getAverageRating() {
        if(this.reviews.length === 0) {
            return 0;
        }

        let totalRating = 0;
        for(let i = 0; i < this.reviews.length; i++) {
            totalRating += this.reviews[i].rating;
        }

        return totalRating / this.reviews.length;
    }

    // Method to display the property details and reviews
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Price: ${this.price}`);
        console.log(`Description: ${this.description}`);
    

    if (this.reviews.length === 0) {
        console.log('No reviews yet.');
    } else {
        console.log(`Average rating : ${this.getAverageRating().toFixed(2)}`);
        console.log('Reviews:');
        for(let i=0; i< this.reviews.length; i++) {
            const review = this.reviews[i];
            console.log(`- User: ${review.user}`);
            console.log(`  Rating:${review.rating} `);
            console.log(`  Comment:${review.comment}`);
        }
    }
    } 
}
