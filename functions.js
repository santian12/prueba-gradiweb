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

const sale = ( `${product.prices.max.amount}` - `${product.prices.min.amount}`) * 100;
const onsale= (sale/`${product.prices.max.amount}`)*100;
let discountTag = '';
if (onsale > 0) {
  discountTag = `<span class="discount-tag">${onsale}% off</span>`;
}

              return `
              <div class="product-card">
              <div class="product-image">
                ${discountTag}
                  <img src="${product.featuredImage.url}" class="product-thumb" alt="">
                  <button class="card-btn">add to wishlist</button>
              </div>
              <div class="product-info">
                  <h2 class="product-brand">${product.title}</h2>
                  <span class="stars">${starRating}</span><span class="tags">(${averageTag})</span>
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
 const productContainers = [...document.querySelectorAll('.product-container')];
 const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
 const preBtn = [...document.querySelectorAll('.pre-btn')];
 
 productContainers.forEach((item, i) => {
     let containerDimensions = item.getBoundingClientRect();
     let containerWidth = containerDimensions.width;
 
     nxtBtn[i].addEventListener('click', () => {
         item.scrollLeft += containerWidth;
     })
 
     preBtn[i].addEventListener('click', () => {
         item.scrollLeft -= containerWidth;
     })
 })

 
  
  
