// ----- HELPER CLASS TEMPLATES  -----

/**
 * Helper class for Dijkstra's algorithm result.
 */
export class DijkstraResult {
	/**
	 * I don't know if we should make our own Map or not (???).
	 * @param {Object} data
	 * @param {Map<number, number>} data.distances - nodeId -> shortest total weight form source (unreachable nodes: Infinity, source: 0).
	 * @param {Map<number, number>} data.previous - nodeId -> previous nodeId on the shortest path (sources and unreachable nodes: null).
	 */
	constructor({ distances, previous }) {
		this.distances = distances;
		this.previous = previous;
	}
}

// ----- FUNCTION TEMPLATES -----

/*
 * Dijkstra's algorithm.
 *
 * Example:
 *		// edges: 0-1 (4), 0-2 (1), 2-1 (2)
 *		dijkstra(graph, 0);
 *		// -> { distances: {0:0, 1:3, 2:1}, previous: {0:null, 1:2, 2:0} }
 *
 * Constraints:
 *		- do not mutate graph.
 *		- use min-priority-queue/heap (possibly write own) for O(E log V).
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
