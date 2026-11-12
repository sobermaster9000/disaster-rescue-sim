// ----- TYPE DEFINITIONS -----

/**
 * Shared by prim() and kruskal() for uniformity.
 * @typedef {Object} MSTResult
 * @property {import("./graph.js").Edge[]} edges - edges in the MST.
 * @property {number} totalWeight - sum of edge weights in `edges`.
 */

// ----- FUNCTION TEMPLATE -----

/**
 * Performs Prim's MST algorithm on the already rescued/visited nodes.
 * Only nodes in `nodeIds` and edges whose both endpoints are in `nodeIds` may be used.
 *
 * Example:
 *      rescued = new Set({0, 2, 1}); // edges 0-1 (4), 0-2 (1), 2-1 (2)
 *      prim(graph, rescued, 0) // -> { edges: [{from:0, to:2, weight:1}, {from:2, to:1, weight:2}], totalWeight = 3 }
 *
 * @param {Graph} graph
 * @param {Set<number>} nodeIds - IDs of the rescued/visited areas.
 * @param {number} startId - starting node, must be in `nodeIds`.
 * @returns {MSTResult}
 */
export function prim(graph, nodeIds, startId) {
    // TODO
    throw new Error("prim: not implemented");
}
