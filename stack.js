class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.top = null;
    }

    add(data) {
        let node = new LinkedList(data);
        if (this.top === null) this.top = node;
        else [this.top.next, node.prev, this.top] = [node, this.top, node];
        return this;
    }

    remove() {
        if (this.top === null) return null;
        else {
            let removedNode = this.top;
            [this.top, this.top.next] = [this.top.prev, null];
            return removedNode;
        }
    }

    print() {
        if (this.top) {
            let current = this.top;
            while (current != null) {
                console.log(current.data);
                current = current.prev;
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
console.log(">>>>> Remove Node <<<<<");
nodeList.remove();
nodeList.print();
