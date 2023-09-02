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
//sistema de estrellas
const numericTags = [];

    if (Array.isArray(product.tags)) {
        product.tags.forEach(tag => {
            if (!isNaN(tag)) {
                numericTags.push(parseInt(tag));
            }
        });
    }


const averageTag = numericTags.length > 0 ? numericTags.reduce((acc, tag) => acc + tag, 0) / numericTags.length : 0;
console.log(averageTag)
function getStarRating(average) {
  switch (true) {
    case (average >= 0 && average < 100):
      return "★"; // 1 Estrella
    case (average >= 100 && average < 200):
      return "★★"; // 2 Estrellas
    case (average >= 200 && average < 300):
      return "★★★"; // 3 Estrellas
    case (average >= 300 && average < 400):
      return "★★★★"; // 4 Estrellas
    case (average >= 400 && average <= 500):
      return "★★★★★"; // 5 Estrellas
    default:
      return "No Rating"; 
  }
}

// Renderiza el promedio y el número de estrellas
const starRating = getStarRating(averageTag);
//fin del sistema
              return `
              <div class="product-card">
              <div class="product-image">
                  <span class="discount-tag">50% off</span>
                  <img src="${product.featuredImage.url}" class="product-thumb" alt="">
                  <button class="card-btn">add to wishlist</button>
              </div>
              <div class="product-info">
                  <h2 class="product-brand">${product.title}</h2>
                  <span class="stars">${starRating}</span><span class="">(${averageTag})</span>
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

 
  
  
