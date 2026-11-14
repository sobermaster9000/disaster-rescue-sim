import { AreaNode } from "./areanode.js"
import { AreaNodeHashTable } from "./areanodehashtable.js"

// ----- HELPER CLASS DEFINITIONS -----

/**
 * One undirected, weighted edge.
 * Weight = distance of the path.
 */
export class Edge {
    /**
     * @param {Object} data
     * @param {number} data.fromId - ID of one endpoint.
     * @param {number} data.toId - ID of the other endpoint.
     * @param {number} data.weight - positive distance of path.
     */
    constructor({ fromId, toId, weight }) {
        this.fromId = fromId;
        this.toId = toId;
        this.weight = weight;
    }
}

/** One entry in an adjacency list */
export class Neighbor {
    /**
     * @param {Object} data
     * @param {number} data.nodeId - ID of the adjacent node.
     * @param {number} data.weight - weight of the edge to that node.
     */
    constructor({ nodeId, weight }) {
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
    /**
     * Creates an empty graph.
     * @param {number} [capacity=100] - maximum capacity of nodes in the graph.
     */
    constructor(capacity = 100) {
        this.nodes = new AreaNodeHashTable();
        this.capacity = capacity;

        this.adjacency = new Array(capacity);
        for(let i = 0; i < capacity; i++) {
            this.adjacency[i] = new Array();
        }

        this.edges = new Array();
    }

    /**
     * Adds a node to the graph.
     * ID of given node must be less than the capacity.
     * @param {import("./areanode.js").AreaNode} node
     * @returns {void}
     * @throws if a node with the same ID already exists, or if `node.id` >= `this.nodeCapacity`.
     */
    addNode(node) {
        if(this.nodes.has(node.id)) {
            throw new Error("Graph.addNode: node already exists");
        }
        
        if(node.id >= this.capacity) {
            throw new Error("Graph.addNode: given node ID >= this.nodeCapacity");
        }

        this.nodes.insert(node);
    }

    /**
     * Adds an undirected edge to existing nodes in the graph.
     * IDs of given nodes must be less than the capacity.
     * @param {number} fromId - a node with this ID must already be added to the graph.
     * @param {number} toId - a node with this ID must also already be added to the graph.
     * @param {number} weight - must be > 0.
     * @returns {void}
     * @throws if either node doesn't exist, or edge already exists, or if any given node ID >= `this.nodeCapacity`.
     */
    addEdge(fromId, toId, weight) {
        // check if node IDs are valid
        if(fromId >= this.capacity) {
            throw new Error("Graph.addEdge: fromId >= this.nodeCapacity");
        }

        if(toId >= this.capacity) {
            throw new Error("Graph.addEdge: toId >= this.nodeCapacity");
        }

        // check if nodes exist in graph
        if(!this.nodes.has(fromId)) {
            throw new Error("Graph.addEdge: node with fromId not in graph");
        }
        
        if(!this.nodes.has(toId)) {
            throw new Error("Graph.addEdge: node with toId not in graph");
        }

        // check if an edge already exists
        if(this.adjacency[fromId].some(ele => { return ele.nodeId === toId; }) ||
            this.adjacency[toId].some(ele => { return ele.nodeId === fromId; })) {
            throw new Error("Graph.addEdge: edge between nodes already exists");
        }
        
        // add edge to graph
        this.edges.push(new Edge({ fromId: fromId, toId: toId, weight: weight }));
        this.adjacency[fromId].push(new Neighbor({ nodeId: toId, weight: weight }));
        this.adjacency[toId].push(new Neighbor({ nodeId: fromId, weight: weight }));
    }

    /**
     * Gets node with corresponding ID.
     * Returns `undefined` if the queried node does not exist.
     * @param {number} id - ID of the node to get.
     * @returns {import("./areanode.js").AreaNode | undefined}
     */
    getNode(id) {
        return this.nodes.get(id);
    }

    /**
     * @returns {import("./areanode.js").AreaNode[]}
     */
    getNodes() {
        let nodes = new Array();

        // populate nodes array
        this.nodes.hashTable.forEach(ele => {
            let currentNode = ele.head;
            while(currentNode) {
                nodes.push(currentNode.value);
                currentNode = currentNode.next;
            }
        });

        return nodes;
    }

    /**
     * Returns an array of adjacent nodes to the given node with ID, empty list of node doesn't exist.
     * @param {number} id
     * @returns {Neighbor[]} nodes adjacent to node with given ID.
     * @throws if id >= `this.capacity`
     */
    getNeighbors(id) {
        // check if ID is valid
        if(id >= this.capacity) {
            throw new Error("Graph.getNeighbors: id >= this.capacity");
        }

        // if node exists
        if(!this.nodes.has(id)) {
            return new Array();
        }
        
        return this.adjacency[id];
    }

    /**
     * @returns {Edge[]} - every edge exactly once (not once per direction).
     */
    getEdges() {
        return this.edges;
    }

    /**
     * @param {fromId}
     * @param {toId}
     * @returns {number | null} the edge weight, else null of unreachable.
     * @throws if either node with respective IDs doesn't exist.
     */
    getEdgeWeight(fromId, toId) {
        // check if node IDs are valid
        if(fromId >= this.capacity) {
            throw new Error("Graph.getEdgeWeight: fromId >= this.capacity");
        }

        if(toId >= this.capacity) {
            throw new Error("Graph.getEdgeWeight: toId >= this.capacity");
        }

        // check if nodes exist in graph
        if(!this.nodes.has(fromId)) {
            throw new Error("Graph.addEdge: node with fromId not in graph");
        }
        
        if(!this.nodes.has(toId)) {
            throw new Error("Graph.addEdge: node with toId not in graph");
        }

        // get edge weight
        for(const edge of this.edges) {
            if(edge.fromId === fromId && edge.toId === toId ||
                edge.fromId === toId && edge.toId === fromId) {
                return edge.weight;
            }
        }

        // fallback
        return null;
    }

    /**
     * @returns {number} count of nodes in graph.
     */
    getNodeCount() {
        return this.nodes.size;
    }

    /**
     * @returns {number} count of (undirected) edges.
     */
    getEdgeCount() {
        return this.edges.length;
    }
}
