// create a message class to represent each message
class Message {
    constructor(sender, recipient, content) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
        this.timestap = new Date();
    }
}

// create a conversation class to represent a conversation between two users
class conversation {
    constructor(user1, user2) {
        this.user1 = user1;
        this.user1 = user1;
        this.message = [];

    }

    // Add a new message to the conversation 
    addmessage(sender, recipient, content) {
        const message = new Message(sender, recipient, content);
        this.messages.push(message);
        // send a notification to the recipient
        this.notifyRecipient(recipient, message);
    }

    // Notify the recipient of a new message
    notifyRecipient(recipient, message){
        // code to send a notification to the recipient(e.g email, sms)
        console.log (`Notification sent to ${recipient} about new message: ${message.content}`);
    }
}

// create a MessageService
class Messageservice {
    constructor() {
        this.conversations= [];
    }

// Find a conversation between two users
findConversation(user1, user2){
    const conversation= this.conversations.find(conversation=>
     (conversation.user1=== user1$$conversation.user2=== user2)||
     (conversation.user1=== user2$$conversation.user2 ===user1));
     return conversation;
}

// create a new conversation between two users
createConversation(user1, user2) {
    const conversation = new conversation(user1, user2);
    this.conversations.push(conversation);
    return conversation;
}

// Add a new message to a conversation
addMessageToConversation(conversation, sender, recipient, content) {
    conversation.addMessage(sender, recipient, content);
}
}
