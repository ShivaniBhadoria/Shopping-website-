
const productList = document.querySelector('.produs');

eventListeners();

//Event listeners

function eventListeners(){
    window.addEventListener('DOMContentLoaded',() => {
        loadJSON();
    });
}

//load products items from JSON file 

function loadJSON(){
     
    fetch('clothes.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
          //console.log(product);
        html += `
           
          <div class="col-2">
               <img src="${product.imgSrc}" >
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <div class="Button">
                 <a href="">Add to Cart</a>
                </div>
        </div>

          `;
        
        });
        productList.innerHTML = html;
    
    })
}
//Products are loaded using JSON file

