export class Model {
    user;
    items;

    constructor() {
        this.user = "Ömer",
        this.items = [
            new TodoItems("Spor",true),
            new TodoItems("Kitap Okumak",false),
            new TodoItems("Sinema",true),
            new TodoItems("Müzik",false),
        ]
    }
}

export class TodoItems {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}