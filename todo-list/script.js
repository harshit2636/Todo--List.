// let to= document.querySelector(".to")
// let list=document.querySelector(".list")
        // to.addEventListener("keyup",(e)=>{
        //         if(e.key=="Enter"){
        //             addItem(this.value)
        //             this.value=""
        //         }
        // })

        // let addItem=(to) =>{
        //         let listItem =document.createElement("li")
        //         listItem.innerHTML="${}"
        //         list.appendChild(listItem)
        // }

// 
// dlt.addEventListener("click",(e)=>{

// })
// submit.addEventListener("click",(e)=>{
//         e.preventDefault()
//         let toc=to.value;
//         console.log(toc)
//         localStorage.setItem("list",JSON.stringify([toc]))
      
//         list.innerHTML=`<p>${toc}</p>`
//         list.style.color="white"
//         to.value=""
       
// })
// deleteBtn.addEventListener("click",(e)=>{
//         e.preventDefault()
//         localStorage.removeItem("list")
//         // console.log(e)
//         list.innerHTML=""
// })
let todoList=[{item:'code',dueDate:'25/11/2023'},
               {item: 'trade',dueDate:'25/11/2023',}];
display()
function addTodo(){
     let inputElem= document.querySelector('.input') ; 
     let dateElem=document.querySelector('#date');
     let todoItem=inputElem.value;
     let todoDate=dateElem.value;
     console.log(todoItem);
//      todoList.push(todoItem);
        todoList.push({item:todoItem,dueDate:todoDate})
     inputElem.value=''
     dateElem.value=''
     display();
}
function display(){
        let contElem=document.querySelector('.todoCont');
        let newHtml=''
        contElem.innerText=''
        for(let i=0; i<todoList.length; i++){
                // let item=todoList[i].item;
                // let dueDate=todoList[i].dueDate;
                let{item,dueDate}=todoList[i]
                newHtml+=`
                            <span>${item}</span>
                            <span>${dueDate}</span>
                           <button id="submit" onclick="todoList.splice(${i},1);
                           display();">Delete</button>
                        `   
                // contElem.innerText=contElem.innerText+"\n"+todoList[i]
                contElem.innerHTML=newHtml;
        }
}
// let arr=[];
// function func(){
//         let value=input.value;
//        arr=[...arr,value];
      
// let temp='';
//        console.log(arr)
//        arr.map((elem)=>{
//         temp+=`<p>${elem}</p>`
//        })
//       div.innerHTML=temp;
//      }

//      button.addEventListener("click",func)
