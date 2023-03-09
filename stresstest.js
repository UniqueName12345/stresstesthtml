function StressTestEngine() {
  for (let i = 1; i <= 5; i++) {
    startStressTest(i);
  }
}

function startStressTest(level) {
  let numParagraphs, numOperations;

  switch (level) {
    case 1:
      numParagraphs = 1000;
      numOperations = 1000000;
      break;
    case 2:
      numParagraphs = 5000;
      numOperations = 5000000;
      break;
    case 3:
      numParagraphs = 10000;
      numOperations = 10000000;
      break;
    case 4:
      numParagraphs = 50000;
      numOperations = 50000000;
      break;
    case 5:
      numParagraphs = 100000;
      numOperations = 100000000;
      break;
    default:
      numParagraphs = 10000;
      numOperations = 10000000;
  }

  // Generate paragraphs with random text
  for (let i = 0; i < numParagraphs; i++) {
    const p = document.createElement("p");
    const text = document.createTextNode(Math.random().toString(36).substring(2));
    p.appendChild(text);
    document.body.appendChild(p);
  }

  // Perform a computationally intensive operation
  const startTime = performance.now();
  let result = 0;
  for (let i = 0; i < numOperations; i++) {
    result += Math.sqrt(i);
  }
  const endTime = performance.now();
  const timeTaken = endTime - startTime;

  alert(`Congratulations, your browser survived the stress test! The stress test generated ${numParagraphs} paragraphs with random text and performed ${numOperations} computationally intensive operations, which took ${timeTaken} milliseconds to complete.`);
}
