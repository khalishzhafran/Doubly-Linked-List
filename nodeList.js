class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new LinkedList(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else [this.tail.next, node.prev, this.tail] = [node, this.tail, node];

        this.length++;
        return node;
    }

    insertAtIndex(data, index) {
        if (index > this.length || index < 0) return null;

        let node = new LinkedList(data);
        let current = this.head;
        let count = 0;
        if (index === 0) [node.next, current.prev, this.head] = [current, node, node];
        else {
            while (count < index - 1) {
                current = current.next;
                count++;
            }

            if (index === this.length) [current.next, node.prev, this.tail] = [node, current, node];
            else [node.next, current.next.prev, node.prev, current.next] = [current.next, node, current, node];
        }
        this.length++;
        return current.data;
    }

    removeAt(index) {
        if (index > this.length - 1 || index < 0) return null;

        let current = this.head;
        let count = 0;
        while (current != null) {
            if (count === index) {
                let prev = current.prev;
                let next = current.next;

                if (prev) prev.next = next;
                else this.head = next;

                if (next) next.prev = prev;
                else this.tail = prev;

                break;
            }
            current = current.next;
            count++;
        }
        this.length--;
        return current.data;
    }

    print() {
        if (this.head) {
            let current = this.head;
            while (current != null) {
                console.log(current.data);
                current = current.next;
            }
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
