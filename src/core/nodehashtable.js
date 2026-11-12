// ----- CLASS TEMPLATE -----

/**
 * Custom hash table for nodes (affected areas) with key = node ID, value = node.
 *
 * Constraints:
 *      - Do not use JS Map, Set or any builtin objects for storage. Usa array of buckets
 *      - Must handle collisions
 *
 * Example:
 *      const table = new NodeHashTable(31);
 *      table.insert(node);
 *      table.get(0); // -> valid AreaNode object
 *      table.get(1); // -> undefined
 */
export class NodeHashTable {
    /**
     * @param {number} [capacity=31] - initial number of buckets, prime number recommended.
     */
    constructor(capacity = 31) {
        // TODO
        throw new Error("NodeHashTable constructor: not implemented");
    }
    
    /**
     * Hash function. Write own hsah function (most probably) and do not use a library.
     * @param {number} key - ID of node.
     * @returns {number} integer bucket index in [0, capacity - 1].
     */
    hash(key) {
        // TODO
        throw new Error("NodeHashTable.hash: not implemented");
    }

    /**
     * Inserts a node into the hash table.
     * If a node with the same ID already exists, it overwrites its value.
     * @param {import("./areanode").Node} - the node to insert.
     * @returns {void}
     */
    insert(node) {
        // TODO
        throw new Error("NodeHashTable.insert: not implemented");
    }

    /**
     * @param {number} key - ID of node to check.
     * @returns {boolean} true of node exists in hash table, false otherwise.
     */
    has(key) {
        // TODO
        throw new Error("NodeHashTable.has: not implemented");
    }

    /**
     * @param {number} - ID of node to remove in hash table.
     * @returns {boolean} true if key existed and was removed, false otherwise.
     */
    remove(key) {
        // TODO
        throw new Error("NodeHashTable.remove: not implemented");
    }

    /**
     * @returns {number} number of stored nodes.
     */
    size() {
        // TODO
        throw new Error("NodeHashTable.size: not implemented");
    }

    // other relevant methods
}

// ----- HELPER FUNCTION TEMPLATE -----

/**
 * Builds the node hash table with the given graph's nodes.
 * @param {import("./graph.js").Graph} graph
 * @param {number} [capacity=31]
 * @returns {NodeHashTable}
 */
export function buildNodeTable(graph, capacity = 31) {
    // TODO
    throw new Error("buildNodeTabl: not implemented");
}
