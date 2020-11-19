
const graph = [
    [0,1,2,0],
    [0,0,2,7],
    [0,0,0,3],
    [0,0,0,0]

]

const bfs = (graph, startVertex) => {
    const vertices = [0,1,2,3];
    const adjList = [];
    const color = initializaColor(vertices);
    const queue = new Queue();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while(!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < array.length; i++) {
            const w = neighbors[i];
            if(color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances,
        predecessors,
    }

}