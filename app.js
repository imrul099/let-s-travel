const alBtn = document.getElementsByClassName('add-btn');
let count = 0;

for(const btn of alBtn){
    btn.addEventListener('click', function(event){
        count = count +1;

        const placeName = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        //console.log(price);
        const selecetContainer = document.getElementById('place-container');
        
        const newLi = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;


        newLi.appendChild(p)
        newLi.appendChild(p2);
        


        const budget = document.getElementById('budget').innerText;
        const convertBudget = parseInt(budget);
        if(convertBudget - parseInt(price)<0){
            alert('low budger: earn more');
            return;
        }

        document.getElementById('budget').innerText = convertBudget - parseInt(price);

         event.target.parentNode.parentNode.style.backgroundColor = 'gray'


        selecetContainer.appendChild(newLi);

        // const totalCost = document.getElementById('total-cost').innerText;
        // const convertTotalCost = parseInt(totalCost);
        // const convertPrice = parseInt(price);
        // const sum = convertTotalCost + convertPrice;
        getTotalCost('total-cost', parseInt(price));
        

        //document.getElementById('total-cost').innerText = convertTotalCost + convertPrice;



        // const grandTotal = document.getElementById('grand-total').innerText;
        // const convertGrand = parseInt(grandTotal);
        // const grandSum = convertGrand + convertPrice;
        // setInnerText('grand-total', grandSum);
        getGrandTotal('grand-total', parseInt(price))

        
        
       setInnerText('badge-count', count);           
    })
}


function getTotalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    const parseElement = parseInt(totalCost) + parseInt(value);
    setInnerText('total-cost', parseElement);
}




function getGrandTotal(catagory){

    const totalCost = document.getElementById('total-cost').innerText;
    const parseElement = parseInt(totalCost);

    if(catagory === 'bus'){
        setInnerText('grand-total', parseElement + 100);
    }
    else if(catagory === 'train'){
        setInnerText('grand-total', parseElement - 200)
    }
    else if(catagory === 'flight'){
        setInnerText('grand-total', parseElement + 500);
    }else{
        setInnerText('grand-total', parseElement);
    }

}





function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


