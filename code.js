function dijkstra(graph, sourceNode) {
    dist = {};
    vNum = 0
    vert = ''
    const marked = new Set
    for (const v in graph){  //O(n)
        if(v == sourceNode)
            dist[v] = 0;
        else
            dist[v] = Infinity;
        vNum++
    }
    while (marked.size < vNum){ //O(n) * O(n) + O(m) = O(n^2 + m)
        v = null
        minDist = Infinity
        for (vert in dist)
            if(!marked.has(vert) && dist[vert] < minDist){
                v = vert
                minDist = dist[vert]
            }
        if (v === null) {
            break;
        }

        marked.add(v)

        for(edge of graph[v]){
            const {vertex: w, weight} = edge
            dist[w] = Math.min(dist[w], dist[v] + weight)
        }
    }   
    return dist;
}

module.exports = { dijkstra };