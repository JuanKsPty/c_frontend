const navbarEmailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu" );;
const linesMenuMobile = document.querySelector(".menu")
const menuMobile =document.querySelector(".mobile-menu")
const aside =document.querySelector(".product-detail")
const asideSelector = document.querySelector(".navbar-shopping-cart")

const cardsContainer = document.querySelector(".cards-container")

navbarEmailMenu.addEventListener("click",toggleEmainMenuDesktop);
linesMenuMobile.addEventListener("click",toggleMenuMobile);
asideSelector.addEventListener("click",toggleAside);

function toggleAside(){
    if(!menuMobile.classList.contains("inactive")){
    menuMobile.classList.add("inactive");
    }else if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}

function toggleEmainMenuDesktop(){
    if(!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile(){
    
    if(!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
        }
    menuMobile.classList.toggle("inactive");
}



let productList = []
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 


function renderProduct(array){
     for (product of array){
        const productCardContainer = document.createElement("div")
        productCardContainer.setAttribute("class", "product-card")

        const productCardImg = document.createElement("img")
        productCardImg.setAttribute("src", product.image)

        const productInfoCardDiv = document.createElement("div")
        productInfoCardDiv.setAttribute("class", "product-info")

        const productCardContainerDiv = document.createElement("div")

        const productCardPrice = document.createElement("p")
        productCardPrice.innerHTML = `$${product.price}`
        const productCardName = document.createElement("p")
        productCardName.innerHTML = product.name

        productCardContainerDiv.append(productCardPrice,productCardName)

        const productCardFigure = document.createElement("figure")

        const productCardImgCart =document.createElement("img")
        productCardImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        productCardFigure.append(productCardImgCart)

        productInfoCardDiv.append(productCardContainerDiv,productCardFigure)
        productCardContainer.append(productCardImg,productInfoCardDiv)

        cardsContainer.appendChild(productCardContainer)
     }  
}
renderProduct(productList)