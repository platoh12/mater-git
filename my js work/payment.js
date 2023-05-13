class PaymentGateway{
    constructor() {
        if(this.constructor === PaymentGateway) {
            throw new TypeError(`Abstract class "PaymentGateway" cannot be instantioned directly`);
        }
    }

    initiatePayment() {
        throw new Error(`Method "initiatePayment()" must be implemented`);
    }

    verifyPayment() {
        throw new Error (`Method "verifyPayment()" must be implemented`);
    }
}

class BankPaymentGateway extends PaymentGateway {
    constructor(){
        super();
    }

    initiatePayment(amount) {
        // code to initiate payment via bank
    }

    verifyPayment(transactionId){
        // code to verifyPayment via bank
    }
    
}

class MobilePaymentGateway extends Paymentgateway {
    constructor () {
        super();
    }

    initiatePayment(amount) {
        // code to initiate payment via mobile money 
    }

    verifyPayment(transaction) {
        // code to verify payment via mobile money
    }
}

class PaymentProcessor {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    processPayment(amount) {
        const transactionId = this.paymentGateway.initiatePayment(amount);
        const paymentStatus = this. paymentStatus.verifyPayment(transactionId);
        return paymentStatus;
    }
}