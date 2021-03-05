let allItems = []
let totalPrice = 0;
let totalQuantity = 0;
let productTable = [];

let noOfGoods = document.getElementById('cart');
let increase = parseInt(noOfGoods.innerHTML);
function shopGoods(product , price){
    increase +=1;
    document.getElementById('cart').innerHTML = increase;

    info = {
        product: product,
        price : price,
        quantity : 1
    };
    for ( let i = 0 ;  i < productTable.length ; i++) {
        if (productTable[i].product == info.product) {
            let productData = {
                product : info.product,
                name : info.name,
                price: productTable[i].price += price,
                quantity : productTable[i].quantity + 1
            };
            productTable[i] = productData;
            return;
        }
           
    }
    productTable.push(info);

    for ( let i = 0 ;  i < allItems.length ; i++) {

        totalPrice +=  +allItems[i].price
        totalQuantity += +allItems[i].quantity;

   
    // To Display Total Price
    
    let priceContainer = document.getElementById("totalPrice");
    priceContainer.innerHTML = totalPrice;


       // to display quantity
       let quantContainer = document.getElementById("totalQuantity");
       quantContainer.innerHTML = totalQuantity;
   }
   let amt = document.getElementById('totalPrice').innerHTML;
   document.getElementById('amount').value= amt;
 
}


function showCart(){
    
    let info = document.getElementById('cartContainer');
    let mainPage = document.getElementById("mainPage");
    if (increase > 0){
        mainPage.classList.add('d-none')
        info.classList.remove('d-none');
    }
    for (const item of productTable) {
            
        let container = document.createElement("p");
        container.style.margin = "10px"
        container.style.padding = "10px"
        let productContent = document.createTextNode(`
           Product Name :${item.name}, Product Price :${item.price}, Product Quantity : ${item.quantity} 
        `);
        container.appendChild(productContent);
        var display = document.getElementById("cartContainerItem");
        display.appendChild(container);
  
        // return;
     }
        console.log('am here')
}