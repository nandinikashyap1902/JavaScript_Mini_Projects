document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.sampleapis.com/fakebank/accounts/';

    fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            var lists = data.slice(0,8)
            const container = document.querySelector(".cardInv"); // Change this if you want to append cards to a specific container
     
            lists.forEach((item) => {
                // Create HTML content for the card
                const cardHTML = `
                    <div class="card" id="card_${item.id}">
                        <p>Category: ${item.category}</p>
                        <p>Debit: ${item.debit ? item.debit : 'N/A'}</p>
                        <p>Description: ${item.description}</p>
                        <p>Transaction Date: ${item.transactionDate}</p>
                    </div>
                `;

                // Append the HTML content to the container
                container.innerHTML += cardHTML;
            });
        })
        .catch((err) => console.log(err));
});
