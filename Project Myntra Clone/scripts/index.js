let bagItems=[];
onLoad()
function onLoad(){
  displayItemsOnHome()
  displayBagIcon()
}
function displayBagIcon(){
  let bagItemContElement=document.querySelector(".bag-item-count");
  bagItemContElement.innerText=bagItems.length;
  if(bagItems.length==0)
  {bagItemContElement.style.visibility='hidden'}
  else{
    bagItemContElement.style.visibility='visible'
  }
}

function addToBag(itemId){
  bagItems.push(itemId)
  displayBagIcon()
}

function displayItemsOnHome(){
let itemsContainerElement =document.querySelector(".items-container");

let innerHtml='';
items.map(item=>{ innerHtml +=
  `
  <div class="item-container">
<img class="item-image" src="${item.image}" alt="item-image">
<div class="rating">
  ${item.rating.stars}⭐ | ${item.rating.count}
</div>
<div class="company-name">${item.company}</div>
<div class="item-name">${item.item_name}</div>
<div class="price">
  <span class="current-price">${item.current_price}</span>
  <span class="original-price">${item.original_price}</span>
  <span class="discount">(${item.discount_percentage}%)OFF</span>
</div>
  <button class="btn-add-bag" onclick=addToBag(${item.id})>Add to Bag</button>
</div>
`
})

itemsContainerElement.innerHTML=innerHtml;
}
