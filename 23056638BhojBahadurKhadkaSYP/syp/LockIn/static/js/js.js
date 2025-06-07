console.log("js loaded")
// Quotes data and functions
const quotesContainer = document.getElementById('quotes-container');
const loadingElement = document.getElementById('loading');

async function fetchQuotes() {
  try {
      const response = await fetch('https://api.quotable.io/quotes?limit=10');
      if (!response.ok) throw new Error("API error");

      const data = await response.json();

      // Check if results exist and are an array
      if (!data.results || !Array.isArray(data.results)) {
          throw new Error("Invalid data format");
      }

      return data.results.map(quote => ({
          text: quote.content,
          author: quote.author
      }));
  } catch (error) {
      console.error('Error fetching quotes:', error);
      showErrorMessage();
      return []; // return empty array so displayQuotes still runs
  }
}


// Display quotes in the grid
function displayQuotes(quotes) {
  loadingElement.style.display = 'none';
  
  if (quotes.length === 0) {
    return;
  }
  
  // Create HTML for each quote
  quotes.forEach((quote, index) => {
    const quoteCard = document.createElement('div');
    quoteCard.className = 'quote-card';
    quoteCard.style.animationDelay = `${index * 0.1}s`;
    
    quoteCard.innerHTML = `
      <div class="quote-header">
        <p class="quote-content">${quote.text}</p>
      </div>
      <div class="quote-body">
        <p class="quote-author">— ${quote.author || 'Unknown'}</p>
      </div>

    `;
    
    quotesContainer.appendChild(quoteCard);
  });
  
  // Show the quotes grid
  quotesContainer.style.opacity = '1';
}

// Show error message
function showErrorMessage() {
  loadingElement.innerHTML = `
    <div class="error-message">
      <p>Failed to load motivational quotes. Please try again later.</p>
      <button class="btn-outline" onclick="location.reload()">Retry</button>
    </div>
  `;
  loadingElement.style.animation = 'none';
}

// Initialize the application
async function initApp() {
  const quotes = await fetchQuotes();
  displayQuotes(quotes);
}


// Start the app when the page loads
window.addEventListener('DOMContentLoaded', initApp);
