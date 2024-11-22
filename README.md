# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Initializing distances itterates over $n$ verticies for a graph with $n$ verticies, This gives us $O(n)$. The first for loop that actually calculates the shortest path and updates the distances is within a while loop that both itterate $n$ times. So this would give us $O(n^2)$, however, there is a second for loop in this while loop that itterates over all $m$ edges within the graph, so the overall complexity of this implementation is $O(n^2 + m)$.

Help: I looked at aerick-321's test code to get a better idea of what was expected from the tests, then implemented my own function. I also watched this video to deepen my understanding of Dijkstra's Algorithm: https://www.youtube.com/watch?v=_lHSawdgXpI. ChatGPT helped me implement the test on GitHub action functionality.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”


