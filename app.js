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
    console.log(productTable)
    

 
}


function showCart(){
    
    let info = document.getElementById('cartContainer');
    let mainPage = document.getElementById("mainPage");
    if (increase > 0){
        mainPage.classList.add('d-none')
        info.classList.remove('d-none');
        return;
    }
    for (const pros of productTable) {
        console.log(pros)
    }
    // for (const products of productTable){
    //     console.log(products.product)
    //     // let create = document.createElement('p')
    //     // let table = document.createTextNode(`
    //     //     Product Name: ${table.product}, Product Price: ${table.price} 
    //     // `);

    //     // let display = document.getElementById('cartContainer')
    //     // create.appendChild(display);
    //     // homeCart.classList.remove('d-none');
    // }
}


showCart();