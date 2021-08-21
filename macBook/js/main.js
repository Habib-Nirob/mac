// set event handler of memory
document.getElementById('memory8gb').addEventListener('click',function(){price('memory8gb')});
document.getElementById('memory16gb').addEventListener('click',function(){price('memory16gb')});

// set event handler of storage
document.getElementById('ssd256gb').addEventListener('click',function(){price('ssd256gb')});
document.getElementById('ssd512gb').addEventListener('click',function(){price('ssd512gb')});
document.getElementById('ssd1tb').addEventListener('click',function(){price('ssd1tb')});

// set event handler of charge
document.getElementById('deliveryChargeFree').addEventListener('click',function(){price('deliveryChargeFree')});
document.getElementById('deliveryCharge20').addEventListener('click',function(){price('deliveryCharge20')});

// set event handler of pomo apply
document.getElementById('pomoApply').addEventListener('click',function(){
    totalWithPomo();
});


//  a common function to set all price
function price(id){
    if(id == 'memory8gb'){
        document.getElementById('memoryCost').innerText=0;
    }else if(id == 'memory16gb'){
        document.getElementById('memoryCost').innerText=180;
    }else if(id == 'ssd256gb'){
        document.getElementById('ssdCost').innerText=0;
    }else if(id == 'ssd512gb'){
        document.getElementById('ssdCost').innerText=100;
    }else if(id == 'ssd1tb'){
        document.getElementById('ssdCost').innerText=180;
    }else if(id == 'deliveryChargeFree'){
        document.getElementById('deliveryCharge').innerText=0;
    }else if(id == 'deliveryCharge20'){
        document.getElementById('deliveryCharge').innerText=20;
    }
    totalPrice();
}

//  function for calculating total price
function totalPrice(){
    let total= 1299;
    total=total + parseFloat(document.getElementById('memoryCost').innerText)+parseFloat(document.getElementById('ssdCost').innerText)+parseFloat(document.getElementById('deliveryCharge').innerText)
    document.getElementById('totalCost').innerText=total;
    document.getElementById('updateValue').innerText=total;
}


//  function for calculating total price with promo
function totalWithPomo(){
    const pomoCode =document.getElementById('pomo').value;
    console.log(pomoCode)
    if(pomoCode=='stevekaku'){
        const value =parseFloat(document.getElementById('totalCost').innerText)
        console.log(value)
        const updateValue = value*.8
        document.getElementById('updateValue').innerText=updateValue.toFixed(2);
        document.getElementById('pomo').value='';
    }
}