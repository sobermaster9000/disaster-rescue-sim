// ----- TYPE DEFINITIONS -----

/**
 * @typedef {Object} DijkstraResult
 * @property {Map<number, number>} distances - nodeId -> shortest total weight from source (unreachable nodes: Infinity, source: 0).
 * @property {Map<number, number>} previous - nodeId -> previous nodeId on the shortest path (source and unreachable nodes: null).
 */

// ----- FUNCTION TEMPLATES -----

/*
 * Dijkstra's algorithm.
 *
 * Example:
 *      // edges: 0-1 (4), 0-2 (1), 2-1 (2)
 *      dijkstra(graph, 0);
 *      // -> { distances: {0:0, 1:3, 2:1}, previous: {0:null, 1:2, 2:0} }
 *
 * Constraints:
 *      - do not mutate graph.
 *      - use min-priority-queue/heap (possibly write own) for O(E log V).
 *
 * @param {import("./graph.js").Graph} graph
 * @param {number} sourceId - ID of the starting node (the user's current area).
 * @returns {DijkstraResult}
 */
export function dijkstra(graph, sourceId) {
    // TODO
    throw new Error("dijkstra: not implemented");
}

// other relevant (possibly helper) functions
