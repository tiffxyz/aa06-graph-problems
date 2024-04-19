function getNeighbors(row, col, graph) {
    // Check top

    // Check bottom

    // Check left

    // Check right

    // Return neighbors

    // Your code here
    let neighbors = [];
    // let count = 1;
    // if (graph[row][col] !== 1) return;
    // Up
    if (row > 0) {
        if (graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
    }
    // Down
    if (row + 1 < graph.length) {
        if (graph[row + 1][col] === 1) neighbors.push([row + 1, col]);
    }
    // // Left
    if (col > 0) {
        if (graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
    }
    // // Right
    if (col + 1 < graph[row].length) {
        if (graph[row][col + 1] === 1) neighbors.push([row, col + 1]);
    }
    // // Your code here
    // console.log(neighbors);

    return neighbors;
}

function islandSize(row, col, graph) {
    // Create a visited set to store visited nodes
    let visited = new Set();
    // Create a stack, put the starting node in the stack
    let startingNode = [row, col];
    let stack = [startingNode];
    // Put the stringified starting node in visited
    visited.add(`${startingNode[0]}, ${startingNode[1]}`);
    // Initialize size to 0
    let size = 0;
    // While the stack is not empty,

    while (stack.length) {
        // Pop the first node
        let node = stack.pop();
        let [r, c] = node;
        // console.log(node);
        // DO THE THING (increment size by 1)
        if (graph[r][c] === 1) {
            size++;
        }
        // Then push all the UNVISITED neighbors on top of the stack
        let neighbors = getNeighbors(node[0], node[1], graph);

        // stack.push(neighbors);
        for (let neighbor of neighbors) {
            let stringNode = `${neighbor[0]}, ${neighbor[1]}`;
            if (!visited.has(stringNode)) {
                visited.add(stringNode);
                stack.push(neighbor);
                // console.log(stack);
            }
        }
        // and mark them as visited
        // for (let neighbor of neighbors) {
        //     visited.add(`${neighbor[0]}, ${neighbor[1]}`);
        // }
    }
    return size;
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    // return size
    // Your code here
}

module.exports = [getNeighbors, islandSize];
