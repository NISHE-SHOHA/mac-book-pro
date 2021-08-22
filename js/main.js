//memory section
document.getElementById('btn-memory1').addEventListener('click', function(){
   
   freeCost('extra-memory');
});

document.getElementById('btn-memory2').addEventListener('click', function(){

productCost('extra-memory', '16gb')
});

// storage section 
document.getElementById('btn-storage1').addEventListener('click', function(){
    
    freeCost('storage-price');
});

document.getElementById('btn-storage2').addEventListener('click', function(){
    
    productCost('storage-price', '512gb')
});

document.getElementById('btn-storage3').addEventListener('click', function(){
    
    productCost('storage-price', '1TB')
});

//delivery section 
document.getElementById('delivery-charge1').addEventListener('click', function(){
    freeCost('charge');
});

document.getElementById('delivery-charge2').addEventListener('click', function(){
    
    productCost('charge')
});

const totalPrice = document.getElementById('total-price');
 const totalPriceValue = parseInt(totalPrice.innerText);
const mainTotalPrice = document.getElementById('main-total-price');
const mainTotalPriceValue = parseInt( mainTotalPrice.innerText);

function freeCost(itemType){
    const cost = document.getElementById(itemType);
    cost.innerText = 0;
    updateTotal();
};


function productCost(productType, costType) {
    const productCost = document.getElementById(productType);
    if(costType == '512gb'){
        productCost.innerText = 100;
    }
    else if(costType == '1TB' || costType == '16gb'){
        productCost.innerText = 180;
    }
    else{
        productCost.innerText = 20;
    }
   
   updateTotal();
};

function updateTotal(){
    const memoryPrice = document.getElementById('extra-memory');
    const memoryPriceValue = parseInt(memoryPrice.innerText);
    const storagePriceValue = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCostValue = parseInt(document.getElementById('charge').innerText);
    
    totalPrice.innerText = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;

    mainTotalPrice.innerText = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;
};


document.getElementById('promo-btn').addEventListener('click', function(){
    const pomoCode = document.getElementById('promo-code').value
    usePomoCode(pomoCode);
 });

function usePomoCode(pomoCode){
    const memoryPrice = document.getElementById('extra-memory');
    const memoryPriceValue = parseInt(memoryPrice.innerText);
    const storagePriceValue = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCostValue = parseInt(document.getElementById('charge').innerText);

    if(pomoCode == 'stevekaku' ){
    const mainPrice = totalPriceValue + memoryPriceValue + storagePriceValue + deliveryCostValue;

        mainTotalPrice.innerText = mainPrice - (25 / 100) * mainPrice;
    }
    else{
        alert('you enter a wrong pomo code');
    }

 
   
    
};


