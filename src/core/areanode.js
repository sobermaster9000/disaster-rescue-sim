// ----- TYPE DEFINITIONS -----

/** @typedef { "fire" | "flood" | "earthquake" } DisasterType */

// ----- CLASS TEMPLATE -----

/**
 * Represents one affected area (a vertex of the graph).
 * 
 * Example:
 * const node = new AreaNode({
 *      id: 3,
 *      name: "Riverside settlement",
 *      x: 69,
 *      y: 420,
 *      peopleAffected: 25,
 *      severity: 4,
 *      description: "Waist-high flood",
 *      isStart: false
 * });
 */
export class AreaNode {
    /**
     * @param {Object} data
     * @param {number} data.id - unique integer ID, used as graph key.
     * @param {number} data.x - X position in map.
     * @param {number} data.y - Y position in map.
     * @param {number} data.peopleAffected - non-negative integer.
     * @param {number} data.severity - integer from 1..5.
     * @param {string} data.description - flavor text for the pop-up.
     * @param {boolean} [data.isStart=false] - true for the single starting area.
     */
    constructor({
        id,
        x,
        y,
        peopleAffected,
        severity,
        description,
        isStart = false
    }) {
        // TODO
        throw new Error("AreaNode constructor: not implemented");
    }

    /**
     * Marks current node as rescued/visited.
     * @returns {void}
     */
    markRescued() {
        // TODO
        throw new Error("AreaNode.markRescued: not implemented");
    }

    // other relevant methods
}
