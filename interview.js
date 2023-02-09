function Node(val, children){
    this.val = val;
    this.children = children;
}

/**
 * Transforms an array to a tree of nodes.
 * @param {array} array
 * @return {Node} root
 */
const getRootNode = (array)=>{
    let numNodes = array.length+1; // n = edges + 1
    let edges = new Map(); // map edges (potential children of each node)
    // create the edges emtpy (o(n))
    for (let i = 0; i < numNodes; i++) {
        edges.set(i+1, []);
    }
    // fill the edges 3 - 4 (also equals 4-3) (o(n))
    for (let i =    0; i < array.length; i++) {
        edges.get(array[i][0]).push(array[i][1])
        edges.get(array[i][1]).push(array[i][0])
    }

    // Go through the tree eliminating the visited nodes
    let visited = new Map();
    let arrNodes = [];
    //  create the array with nodes with empty Nodes and create the visited nodes (O(n))
    for (let i = 0; i < array.length+1; i++) {
        arrNodes.push(new Node(i+1, []));
        visited.set(i+1, false);
    }
    // The first node (root) is the first one and it's already visited
    let queue = [1];
    visited.set(1, true);

    // recurse the tree adding the potential children to the queue.
    while(queue.length > 0){
        let currValue = queue.shift();
        
        // Add each child (if not visited) of the current node
        edges.get(currValue).forEach(element => {
            if (!visited.get(element)){
                visited.set(element, true);
                queue.push(element);
                arrNodes[currValue-1].children.push(arrNodes[element-1]);
            }
        });
    }
    // return root
    return arrNodes[0];
}

module.exports = {getRootNode, Node};