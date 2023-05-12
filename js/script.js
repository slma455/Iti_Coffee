let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next()
{
    slides[index].classList.remove('active');
    index = (index+1)%slides.length;
    slides[index].classList.add('active');
}
function prev()
{
    slides[index].classList.remove('active');
    index = (index -1+slides.length)%slides.length;
    slides[index].classList.add('active');
}


/*top button */
var btnTop = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


/*categories*/

var products = {
    data:[
        {
            id:1,
            productName: "Expresso Coffee machine",
            catogry:"CoffeeMachine",
            price:"1500$",
            imageUrl:"machine1.jpg",
        },
        {
            id:2,
            productName:"Chocolate frappe",
            catogry:"coffee",
            price:"150$",
            imageUrl:"coffee1.jpg"
        }
        ,
        {
            id:3,
            productName:"Expresso cafe crame",
            catogry:"coffee",
            price:"200$",
            imageUrl:"coffee2.jpg"
        },
        {
            id:4,
            productName:"Matchca Greentea",
            catogry:"coffee",
            price:"300$",
            imageUrl:"coffee3.jpg"
        },
        {
            id:5,
            productName: "Lotus frappe",
            catogry:"coffee",
            price:"250$",
            imageUrl:"coffee4.jpg",
        },
        {
            id:6,
            productName: "Turkish dark roast",
            catogry:"coffee",
            price:"150$",
            imageUrl:"coffee5.jpg",
            
        },
        {
            id:7,
            productName: "Choclate frappee",
            catogry:"CoffeeDrinks",
            price:"50$",
            imageUrl:"drink1.jpg",
        },
        {
            id:8,
            productName: "Vanilla frappee",
            catogry:"CoffeeDrinks",
            price:"70$",
            imageUrl:"drink2.jpg",
        },
        {
            id:8,
            productName: "Bubble gum frappee",
            catogry:"CoffeeDrinks",
            price:"60$",
            imageUrl:"drink3.jpg",
        },
        {
            id:9,
            productName: "Jasmine citrus tea",
            catogry:"Tea",
            price:"30$",
            imageUrl:"tea1.jpg",
            
        },
        {
            id:10,
            productName: "Berry berry fruit tea",
            catogry:"Tea",
            price:"40$",
            imageUrl:"tea2.jpg",
        }
    ]
}
for( var i of products.data){
    //create card
    var card = document.createElement("div");
    //card has category
    card.classList.add("card",i.catogry,"hide");
    //image div
    var imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    var image = document.createElement("img");
    image.setAttribute("src",i.imageUrl);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    var container = document.createElement("div");
    container.classList.add("container");
    //product name
    var nme = document.createElement("h5");
    nme.classList.add("product-name");
    nme.innerText = i.productName.toUpperCase();
    container.appendChild(nme);
    //price 
    var price = document.createElement("h6");
    price.classList.add("price");
    price.innerText=i.price;
    container.appendChild(price);
    //add to cart
    var btn = document.createElement("button");
    btn.classList.add("add-to-cart");
    btn.innerText="add to cart";

   container.appendChild(btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//paramater passed from button ( paramater sama as category)
function filterProduct(value)
{
    var buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button)=>
    {
        if(value.toUpperCase() == button.innerText.toUpperCase())
        {
            button.classList.add("active-button")
        }
        else{
            button.classList.remove("active-button");
        }
    }
    )

//select all cards 
let elements = document.querySelectorAll(".card");

elements.forEach((element) => {

  if (value == "all") {
    element.classList.remove("hide");
  } else {

    if (element.classList.contains(value)) {

      element.classList.remove("hide");
    } else {

      element.classList.add("hide");
    }
  }
});
}

//Iitially display all products 
window.onload = () => {
    filterProduct("all");
}
/*add to cart*/
var notification = document.querySelector('h2');
var button = document.getElementsByClassName('add-to-cart');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(notification.getAttribute('data-count') || 0);
			notification.setAttribute('data-count', add +1);
			notification.classList.add('zero');
             console.log(add);
        }
   ) };