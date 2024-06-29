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
        selecetContainer.appendChild(newLi);

        const totalCost = document.getElementById('total-cost').innerText;
        const convertTotalCost = parseInt(totalCost);
        const convertPrice = parseInt(price);
        const sum = convertTotalCost + convertPrice;

        //document.getElementById('total-cost').innerText = convertTotalCost + convertPrice;
        setInnerText('total-cost', sum);
       setInnerText('badge-count', count);           
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}