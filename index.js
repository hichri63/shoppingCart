// class : unit-price
// id : total-price
// class : item-count
let total = 0;

function updateCount(e){
    const target = e.target; // dom element
    const classList = target.classList; // fa-minus-circle or fa-plus-circle
    const parent = target.parentElement;

    const itemCountElement = parent.querySelector('.item-count');

    const itemCount = parseInt(itemCountElement.textContent);
    const unitPrice = parent.querySelector('.unit-price').textContent;
    
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.textContent);

    

    
    


    if(classList.contains('fa-plus-circle')){
        // Logic for plus action
        const count =  itemCount + 1;
        itemCountElement.textContent = count;
         total = total + parseInt(unitPrice) ;
        totalPriceElement.textContent = total;
        
    }else if(classList.contains('fa-minus-circle')){
        // logic for minus action
        if(itemCountElement.textContent !=0) {
        const count =  itemCount - 1;
        itemCountElement.textContent = count;
        total = total - parseInt(unitPrice);
        totalPriceElement.textContent = total;}


    }
    else{
        // Do nothing
        //
    }

    


}
let deleteButtons = document.querySelectorAll(".fa-window-close");

for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', function(){
        deleteButtons[i].parentElement.remove()
    })
}
let heartButtons = document.querySelectorAll(".fa-heart");
 for (let i = 0; i < heartButtons.length; i++){
     heartButtons[i].addEventListener('click', function(){
         heartButtons[i].classList.toggle("red");
     })
 }
