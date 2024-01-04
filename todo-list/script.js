
      

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


