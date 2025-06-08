const url="https://api.api-ninjas.com/v1/quotes";
const key="P94eqI+3u9D3ppG+iib0ng==82xqwZrODcYXG0O1";


        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const newQuoteBtn = document.getElementById('new-quote');
        const favoriteBtn = document.getElementById('favorite-quote');
        const quoteContainer = document.querySelector('.quote-container');
        const categories = document.querySelectorAll('.category');

        function callQuote(){
                    
const requestOptions = {
    method: 'GET',
    headers: {
        'X-Api-Key': key,
    },
};

fetch(url,requestOptions).then(response =>{
    if (!response.ok){
        throw  new Error('Network response is not ok');
    }
    return response.json();
})
    .then(data => {
        quoteText.textContent = JSON.stringify(data, null, 2);
        const quotes=data;
        console.log(quotes);
    })
    .catch(error =>{
        console.error("Error:",error)
    });

        }


        // Track current category
        let currentCategory = 'all';
        
        // Display a random quote
        function displayRandomQuote() {
            
            const filteredQuotes = currentCategory === 'all' 
                ? quotes 
                : quotes.filter(quote => quote.category === currentCategory);
            
            // Get a random quote from filtered list
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            const randomQuote = filteredQuotes[randomIndex];
            
            // Remove fade-in class and re-add it to restart animation
            quoteContainer.classList.remove('fade-in');
            
            // Trigger reflow to restart animation
            void quoteContainer.offsetWidth;
            
            // Add the class back
            quoteContainer.classList.add('fade-in');
            
            // Update the quote text and author
            quoteText.textContent = randomQuote.text;
            quoteAuthor.textContent = `— ${randomQuote.author}`;
        }
        


        // Event listeners
        newQuoteBtn.addEventListener('click', displayRandomQuote);
        
        


        // Category selection
        categories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                categories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Update current category
                currentCategory = this.getAttribute('data-category');
                
                // Display a new quote from the selected category
                displayRandomQuote();
            });
        });
        

        // Initialize with a random quote
        displayRandomQuote();
