let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

var removeCartItem=document.getElementsByClassName('danger');
for(var i=0;i<removeCartItem.length;i++)
{
    var btn=removeCartItem[i];
    btn.addEventListener('click',function(event){
    var btnclicked=event.target
    btnclicked.parentElement.remove()
    TotalPrice()
    })
}
function TotalPrice()
{
    var Cartrows=document.getElementsByClassName('cart-item');
    var total=0;
    for(var i=0;i<Cartrows.length;i++)
    {
        total=total+parseFloat(Cartrows[i].getElementsByClassName('price')[0].innerText);
        console.log(total);
    }
    document.getElementsByClassName('total-amount')[0].innerText=total;
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}