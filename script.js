document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const wrapper = document.querySelector('.card-wrapper');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <button class="info-btn">More Info</button>
          `;
                card.querySelector('.info-btn').onclick = () => showProductModal(product.id);
                wrapper.appendChild(card);
            });
        });

    document.querySelector(".modal .close").onclick = () => {
        document.getElementById("product-modal").classList.remove("show");
    };
});



function showProductModal(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            document.getElementById('modal-img').src = product.thumbnail;
            document.getElementById('modal-title').textContent = product.title;
            document.getElementById('modal-price').textContent = `Price: $${product.price}`;
            document.getElementById('modal-desc').textContent = product.description;
            document.getElementById('product-modal').classList.add('show');
        });
}

