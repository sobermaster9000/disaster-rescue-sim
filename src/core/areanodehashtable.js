// ----- HELPER CLASS TEMPLATE -----

/**
 * Helper linked list node for `LinkedList`
 */
export class LinkedListNode {
    /**
     * @param {*} value
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Helper linked list class for `AreaNodeHashTable`.
 * Only the minimal linked list methods required for the hash table are implemented for this class.
 */
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Appends value to the linked list.
     * @param {*} value
     * @returns {void}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        // linked list is empty
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // not empty
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * Removes a node from the linked list.
     * @param {number} [idx=-1] - default is to pop the last element, otherwise pop at specified index.
     * @returns {LinkedListNode} the popped node.
     * @throws if the provided index is out of range or if linked list is empty.
     */
    remove(idx = -1) {
        // empty linked list
        if(this.size == 0) {
            throw new Error("LinkedList.remove: linked list is empty");
        }
        
        // default behavior
        if(idx === -1) {
            idx = this.size - 1;
        }

        // index out of range
        if(idx < 0 || idx >= this.size) {
            throw new Error("LinkedList.remove: provided index out of range");
        }

        let popped = null;

        // remove at head
        if(idx === 0) {
            popped = this.head;
            this.head = this.head.next;
            this.size--;
            return popped;
        }

        // traverse until idx - 1 and remove succeeding node
        let i = 0;
        let currentNode = this.head;

        while(currentNode) {
            if(idx - 1 === i) {
                popped = currentNode.next;
                currentNode.next = currentNode.next.next;
                break;
            }

            i++;
            currentNode = currentNode.next;
        }

        this.size--;
        return popped;
    }
}

// ----- CLASS TEMPLATE -----

/**
 * Custom hash table for nodes (affected areas) with key = node ID, value = node.
 *
 * Constraints:
 *      - Do not use JS Map, Set or any builtin objects for storage. Usa array of buckets
 *      - Must handle collisions
 *
 * Example:
 *      const table = new AreaNodeHashTable(31);
 *      table.insert(node);
 *      table.get(0); // -> valid AreaNode object
 *      table.get(1); // -> undefined
 */
export class AreaNodeHashTable {
    /**
     * @param {number} [capacity=31] - initial number of buckets, prime number recommended.
     */
    constructor(capacity = 31) {
        this.size = 0;
        this.capacity = capacity;
        this.hashTable = new Array(capacity);

        for(let i = 0; i < capacity; i++) {
            this.hashTable[i] = new LinkedList();
        }
    }
    
    /**
     * Hash function. Write own hash function (most probably) and do not use a library.
     * @param {number} key - ID of node.
     * @returns {number} integer bucket index in [0, capacity - 1].
     */
    hash(key) {
        // key input is a number, but hashing implementation can be used for any type
        const keyStr = String(key);
        let result = 0

        for(let i = 0; i < keyStr.length; i++) {
            result += (keyStr.charCodeAt(i) * 17); // just a random prime number
        }

        return result;
    }

    /**
     * Inserts a node into the hash table.
     * If a node with the same ID already exists, it overwrites its value.
     * @param {import("./areanode").Node} - the node to insert.
     * @returns {void}
     */
    insert(node) {
        const idx = this.hash(node.id) % this.capacity;
        this.hashTable[idx].append(node);
        this.size++;
    }

    /**
     * @param {number} key - ID of node to check.
     * @returns {boolean} true of node exists in hash table, false otherwise.
     */
    has(key) {
        const idx = this.hash(key) % this.capacity;
        let currentNode = this.hashTable[idx].head;
        
        while(currentNode) {
            if(currentNode.value.id === key) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    /**
     * @param {number} key - ID of node to get
     * @returns {import("./areanode.js").AreaNode | undefined}
     */
    get(key) {
        if(!this.has(key)) {
            return undefined;
        }

        const idx = this.hash(key) % this.capacity;
        let currentNode = this.hashTable[idx].head;

        while(currentNode) {
            if(currentNode.value.id === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        // fallback
        return undefined;
    }


    /**
     * @param {number} - ID of node to remove in hash table.
     * @returns {boolean} true if key existed and was removed, false otherwise.
     */
    remove(key) {
        // key does not exist
        if(!this.has(key)) {
            return false;
        }

        // get index of node to delete
        const idx = this.hash(key) % this.capacity;
        let currentNode = this.hashTable[idx].head;
        let delIdx = 0;

        while(currentNode) {
            if(currentNode.id === key) {
                break;
            }

            delIdx++;
            currentNode = currentNode.next;
        }

        // attempt to remove key from hashtable linked list
        try {
            this.hashTable[idx].remove(delIdx);
            this.size--;
        } catch(error) {
            console.log("Couln't remove hash table entry:", error.message);
            return false;
        }

        return true;
    }

    /**
     * @returns {number} number of stored nodes.
     */
    size() {
        return this.size;
    }
}

// ----- HELPER FUNCTION TEMPLATE -----

/**
 * Builds the node hash table with the given graph's nodes.
 * @param {import("./graph.js").Graph} graph
 * @param {number} [capacity=31]
 * @returns {AreaNodeHashTable}
 */
export function buildNodeTable(graph, capacity = 31) {

}
