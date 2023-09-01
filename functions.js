const url = "https://gradistore-spi.herokuapp.com/products/all";
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (this.readyState === 4 && this.status === 200) {
  const productos= JSON.parse(this.response)
  console.log(productos)
  } else {
    console.log("Error: " + this.statusText);
  }
});

xhr.open('GET', url);
xhr.send();
