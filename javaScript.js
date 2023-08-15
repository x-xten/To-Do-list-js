let inputValue=document.getElementById("input-field");
let addBtn=document.getElementById("btn");
let listItems=document.getElementById("list-items");

addBtn.addEventListener("click",()=>{
   if(inputValue.value.length > 0){
     listItems.insertAdjacentHTML("beforeend",` <li class="item"><p>${inputValue.value}</p>
     <img src="remove.png"  ></li>`);

     inputValue.value="";
   }
})

//remove items

function remove(event){
    event.target.closest("li").remove();
    count();
}

function count(){
    let count=document.getElementById("count");
    count.innerHTML=`Your have ${listItems.children.length} list`;

                    
} 
