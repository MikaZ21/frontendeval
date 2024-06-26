const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];
  
  
  const faqElement = document.getElementById("faq");
  
  FAQ.forEach((item, index) => {
    const questionElement = document.createElement("details");
    questionElement.classList.add("questions");
    
    if (index === 0) { // Check if it's the first item
      questionElement.setAttribute("open", ""); // Add the "open" attribute
    }
    questionElement.innerHTML = `
      <summary>${item.question}</summary>
      <p class="answers">${item.answer}</p>
    `;
    
   faqElement.appendChild(questionElement);
  });
  