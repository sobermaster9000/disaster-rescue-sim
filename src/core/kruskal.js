// ----- HELPER CLASS TEMPLATE -----

/**
 * Disjoint Set Union (Union-Find) helper class for Kruskal's Algorithm
 */
export class DisjointSet {
    /**
     * @param {number[]} ids - all node IDs to place in their own singleton set.
     */
    constructor(ids) {
        // TODO
        throw new Error("DisjointSet constructor: not implemented");
    }

    /**
     * @param {number} id - ID of queried node.
     * @returns {number} representative ID of the set containing `id`.
     */
    find(id) {
        // TODO
        throw new Error("DisjointSet.find: not implemented");
    }

    /**
     * Merges the sets containing nodes with ID `a` and ID `b`.
     * @param {number} a
     * @param {number} b
     * @returns {boolean} true if they were in different sets (merged), false if already in the same set (would form cycle).
     */
    union(a, b) {
        // TODO
        throw new Error("DisjointSet.union: not implemented");
    }
}

// ----- FUNCTION TEMPLATE -----

/**
 * Performs Kruskal's MST algorithm on aleady rescued/visited nodes.
 * Only edges whose both endpoints are in `nodeIds` are considered.
 *
 * Example:
 *      rescued = new Set({0, 2, 1}); // edges 0-1 (4), 0-2 (1), 2-1 (2)
 *      kruskal(graph, rescued, 0) // -> { edges: [{from:0, to:2, weight:1}, {from:2, to:1, weight:2}], totalWeight = 3 }
 *
 * @param {import("./graph.js").Graph} graph
 * @param {Set<number>} nodeIds - IDs of the rescued/visited nodes.
 * @returns {import("./prim.js").MSTResult}
 */
export function kruskal(graph, nodeIds) {
    // TODO
    throw new Error("kruskal: not implemented");
}
