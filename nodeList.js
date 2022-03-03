class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    insertAtIndex(data, index) {
        if (index > this.length) {
            return false;
        }
        let node = new Node(data);
        let current = this.head;
        let count = 0;
        if (index === 0) {
            node.next = current;
            current.prev = node;
            this.head = node;
        } else if (index === this.length) {
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            node.next = current.next;
            current.next.prev = node;
            node.prev = current;
            current.next = node;
        }
        this.length++;
        return this;
    }

    removeAt(index) {
        if (index > this.length - 1 || index < 0) {
            return null;
        }
        let current = this.head;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
            this.head.prev = null;
        } else if (index === this.length - 1) {
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            while (count < index) {
                current = current.next;
                count++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length--;
        return current.data;
    }

    print() {
        if (this.head) {
            let current = this.head;
            while (current.next) {
                console.log(current);
                current = current.next;
            }
            console.log(current);
        }
    }
}

const nodeList = new LinkedList();
console.log(">>>>> Create Node List <<<<<");
nodeList.add(1);
nodeList.add(2);
nodeList.add(3);
nodeList.add(4);
nodeList.add(5);
nodeList.print();

console.log("\n\n============================================================");
console.log(">>>>> Insert at index 3 <<<<<");
nodeList.insertAtIndex(10, 3);
nodeList.print();

console.log("\n\n============================================================");
console.log(">>>>> Delete at index 3 <<<<<");
nodeList.removeAt(3);
nodeList.print();
