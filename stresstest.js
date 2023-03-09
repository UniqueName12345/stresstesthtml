function startStressTest() {
    // Generate 10000 paragraphs with random text
    for (let i = 0; i < 10000; i++) {
        const p = document.createElement("p");
        const text = document.createTextNode(Math.random().toString(36).substring(2));
        p.appendChild(text);
        document.body.appendChild(p);
    }

    // Perform a computationally intensive operation
    const startTime = performance.now();
    const iterations = 1000000000;
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i);
    }
    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    alert(`Congratulations, your browser survived the stress test! The stress test generated 10000 paragraphs with random text and performed ${iterations} computationally intensive operations, which took ${timeTaken} milliseconds to complete.`);
}