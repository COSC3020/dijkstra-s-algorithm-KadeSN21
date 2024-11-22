const { dijkstra } = require('./code.js');

const graphs = [
    { // Directed
        graph: {
            'A': [{vertex:'B', weight: 12},{vertex:'C', weight: 6}],
            'B': [{vertex:'A', weight: 1},{vertex:'D', weight: 9}],
            'C': [{vertex:'A', weight: 4},{vertex:'E', weight: 9}],
            'D': [{vertex:'B', weight: 5},{vertex:'E', weight: 0}],
            'E': [{vertex:'C', weight: 3},{vertex:'D', weight: 2}]
        },
        expected: {A:0, B:12, C: 6, D: 17, E: 15}
    },
    { // Empty
        graph:{
            'A': [],
            'B': [],
            'C': []
        },
        expected: {A: 0, B: Infinity, C: Infinity}
    },
    { // Undirected
        graph: {
            'A': [{vertex:'B', weight: 2},{vertex:'C', weight: 3}],
            'B': [{vertex:'A', weight: 2},{vertex:'D', weight: 5}],
            'C': [{vertex:'A', weight: 3},{vertex:'E', weight: 3}],
            'D': [{vertex:'B', weight: 5},{vertex:'E', weight: 2}],
            'E': [{vertex:'C', weight: 3},{vertex:'D', weight: 2}]
        },
        expected: {A: 0, B: 2, C: 3, D: 7, E: 6}
    }
];

function test(graphs){
    graphs.forEach((testCase, index) => {
        const { graph, expected } = testCase;
                const result = dijkstra(graph, 'A');
        
        console.log(`Testing Graph ${index + 1}:`);
        testPassed = true;
        for (const node in expected) {
            if (result[node] !== expected[node]) {
                console.log(`Test failed for node ${node}. Expected: ${expected[node]}, Got: ${result[node]}`);
                testPassed = false;
            }
        }
    
        if (testPassed) {
            console.log(`All tests passed for Graph ${index + 1}`);
        } else {
            console.log(`Some tests failed for Graph ${index + 1}`);
        }
    });
    
}
test(graphs)
