const url = "https://gradistore-spi.herokuapp.com/products/all";
const responseDiv = document.getElementById("response");
document.addEventListener("DOMContentLoaded", function() {
    const responseDiv = document.getElementById("response");
  
    if (responseDiv) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Imprime la respuesta completa en la consola para inspección
  
          if (Array.isArray(data.products.nodes) && data.products.nodes.length > 0) {
            const products = data.products.nodes;
            const productHTML = products.map((product) => {
              return `
              <div class="product-card">
              <div class="product-image">
                  <span class="discount-tag">50% off</span>
                  <img src="${product.featuredImage.url}" class="product-thumb" alt="">
                  <button class="card-btn">add to wishlist</button>
              </div>
              <div class="product-info">
                  <h2 class="product-brand">${product.title}</h2>
                  <p class="product-short-description">${product.tags}</p>
                  <span class="price">${product.prices.max.amount} ${product.prices.max.currencyCode}</span><span class="actual-price"></span>

              </div>
          </div>
              `;
            }).join('');
  
            responseDiv.innerHTML = productHTML;
          } else {
            console.error("No se encontraron elementos para mostrar.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("El elemento con el ID 'response' no se encontró en el documento.");
    }
  });
  
  // Styles slider
 // Inicializa el carrusel 

 document.addEventListener("DOMContentLoaded", function () {
    const productContainers = document.querySelectorAll(".product-container");
    const nxtBtns = document.querySelectorAll(".nxt-btn");
    const preBtns = document.querySelectorAll(".pre-btn");
  
    function handleScroll(container, scrollAmount) {
      container.scrollLeft += scrollAmount;
    }
  
    nxtBtns.forEach((nxtBtn) => {
      nxtBtn.addEventListener("click", () => {
        const container = nxtBtn.closest(".product-container");
        if (container) {
          handleScroll(container, container.offsetWidth);
        }
      });
    });
  
    preBtns.forEach((preBtn) => {
      preBtn.addEventListener("click", () => {
        const container = preBtn.closest(".product-container");
        if (container) {
          handleScroll(container, -container.offsetWidth);
        }
      });
    });
  });

 
  
  
