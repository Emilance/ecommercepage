 //selector
 var prev= document.querySelector('#prev');
 var next =document.querySelector('#next');
 var productContainer= document.getElementById('productsContainer')

 
 next.addEventListener('click',  ()=>{
     productContainer.scrollLeft +=200;
 })

 prev.addEventListener('click',  ()=>{
    productContainer.scrollLeft -= 200;
})