// ----- HELPER CLASS TEMPLATES -----

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

/**
 * Helper class for Kruskal's algorithm MST result.
 */
export class MSTResult {
    /**
     * @param {Object} data
     * @param {import("/.graph.js").Edge[]} data.edges - edges in the MST.
     * @param {number} data.totalWeight - sum of edge weights in `edges`.
     */
    constructor({ edges, totalWeight }) {
        this.edges = edges;
        this.totalWeight = totalWeight;
    }
}

// ----- FUNCTION TEMPLATE -----

/**
 * Performs Kruskal's MST algorithm on aleady rescued/visited nodes.
 * Only edges whose both endpoints are in `nodeIds` are considered.
 * Parameters can be changed as long as it outputs a valid MST.
 *
 * Example:
 *      rescued = new Set({0, 2, 1}); // edges 0-1 (4), 0-2 (1), 2-1 (2)
 *      kruskal(graph, rescued, 0) // -> { edges: [{from:0, to:2, weight:1}, {from:2, to:1, weight:2}], totalWeight = 3 }
 *
 * @param {import("./graph.js").Graph} graph
 * @param {Set<number>} nodeIds - IDs of the rescued/visited nodes.
 * @returns {MSTResult}
 */
export function kruskal(graph, nodeIds) {
    // TODO
    throw new Error("kruskal: not implemented");
}
