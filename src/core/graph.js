import { AreaNode } from "./areanode.js"
import { AreaNodeHashTable } from "./areanodehashtable.js"

// ----- TYPE DEFINITIONS -----

/**
 * One undirected, weighted edge.
 * Weight = distance of the path.
 */
export class Edge {
    /**
     * @param {number} fromId - ID of one endpoint.
     * @param {number} toId - ID of the other endpoint.
     * @param {number} weight - positive distance of path.
     */
    constructor(fromId, toId, weight) {
        this.fromId = fromId;
        this.toId = toId;
        this.weight = weight;
    }
}

/** One entry in an adjacency list */
export class Neighbor {
    /**
     * @param {number} nodeId - ID of the adjacent node.
     * @param {number} weight - weight of the edge to that node.
     */
    constructor(nodeId, weight) {
        this.nodeId = nodeId;
        this.weight = weight;
    }
}

// ----- CLASS TEMPLATE -----

/**
 * Weighted, undirected graph using adjacency list.
 * Requirements: connected, >= 20 nodes, >= 20 edges
 */
export class Graph {
    /** Creates an empty graph. */
    constructor() {
        this.nodes = new AreaNodeHashTable();
        this.adjacency = new Array();
    }

    /**
     * Adds a node to the graph.
     * @param {import("./areanode.js").AreaNode} node
     * @returns {void}
     * @throws if a node with the same ID already exists.
     */
    addNode(node) {
        // TODO
        throw new Error("Graph.addNode: not implemented");
    }

    /**
     * Adds an undirected edge to existing nodes in the graph.
     * @param {number} fromId - a node with this ID must already be added to the graph.
     * @param {number} toId - a node with this ID must also already be added to the graph.
     * @param {number} weight - must be > 0.
     * @returns {void}
     * @throws if either node doesn't exist, or edge already exists.
     */
    addEdge(fromId, toId, weight) {
        // TODO
        throw new Error("Graph.addEdge: not implemented");
    }

    /**
     * Gets node with corresponding ID.
     * Returns `undefined` if the queried node does not exist.
     * @param {number} id - ID of the node to get.
     * @returns {import("./areanode.js").AreaNode | undefined}
     */
    getNode(id) {
        // TODO
        throw new Error("Graph.getNode: not implemented");
    }

    /**
     * @returns {import("./areanode.js").AreaNode[]}
     */
    getNodes() {
        // TODO
        throw new Error("Graph.getNodes: not implemented");
    }

    /**
     * Returns an array of adjacent nodes to the given node with ID, empty list of node doesn't exist.
     * @param {number} id
     * @returns {Neighbor[]} nodes adjacent to node with given ID.
     */
    getNeighbors(id) {
        // TODO
        throw new Error("Graph.getNeighbors: not implemented");
    }

    /**
     * @returns {Edge[]} - every edge exactly once (not once per direction).
     */
    getEdges() {
        // TODO
        throw new Error("Graph.getEdges: not implemented");
    }

    /**
     * @param {fromId}
     * @param {toId}
     * @returns {number | null} the edge weight, else null of unreachable.
     * @throws if either node with respective IDs doesn't exist.
     */
    getEdgeWeight(fromId, toId) {
        // TODO
        throw new Error("Graph.getEdgeWeight: not implemented");
    }

    /**
     * @returns {number} count of nodes in graph.
     */
    getNodeCount() {
        // TODO
        throw new Error("Graph.getNodeCount: not implemented");
    }

    /**
     * @returns {number} count of (undirected) edges.
     */
    getEdgeCount() {
        // TODO
        throw new Error("Graph.getEdgeCount: not implemented");
    }

    /**
     * @returns {boolean} true if every node is reachable from every other node.
     */
    isConnected() {
        // TODO
        throw new Error("Graph.isConnected: not implemented");
    }
}
