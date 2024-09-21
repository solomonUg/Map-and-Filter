const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

  const products = document.querySelector(".products")
  const searchEl = document.querySelector("#searchField")
  
  function allProducts(items) {
    products.innerHTML = items.map((product)=>
     products.innerHTML = `
     <div class= "product" > 
     <img src= "${product.img}"   class= "product-image">
     <p>${product.name}</p>
     </div>
     `).join("")
  }

    allProducts(data)


 searchEl.addEventListener("keyup", (e)=> {
  const searchItem =  e.target.value.toLowerCase()
  if (searchItem) {
    const filteredProduct = data.filter( (eachItem) => 
       eachItem.name.toLowerCase().indexOf(searchItem) !== -1
    
    )
    allProducts(filteredProduct)
      if (filteredProduct == 0){
      products.innerHTML = "<p>No item found</p>"
        }

  } else {
    allProducts(data)
  }

})



// responsive nav section


const openNavEl = document.querySelector(".open-nav");
const navEl = document.querySelector(".nav-icon");

openNavEl.addEventListener ("click", ()=> {
  console.log("clicked");
  if (navEl.classList.contains("fa-bars")) {
    navEl.classList.replace("fa-bars" , "fa-xmark")
  } else 
  {
    navEl.classList.replace("fa-xmark", "fa-bars")
  }

})