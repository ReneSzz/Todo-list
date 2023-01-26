"use strict";

let container = document.getElementById('container');
let newList = document.getElementById('newList');
let subHeading2 = document.getElementById('subHeading2');
newList.style.color='red';

let todoLists = []



class todoList {
    name = "";
    tasks = []
constructor(name)
{
    this.name = name;
}

fillTasks(){
    this.tasks.forEach(element => {
      
        let taskContainer = document.createElement('div');
        taskContainer.classList.add("taskBar")
        let taskName = document.createElement('h3');
        let deleteTask = document.createElement('h4');
        
        deleteTask.innerText = "x";
        taskName.innerText = this.name;
        
        container.appendChild(taskContainer);
        taskContainer.appendChild(taskName);
        taskContainer.appendChild(deleteTask);
        


        
    });
}
}

newList.addEventListener('click', function (e)
{   
    // Create Template
    let newListItem = document.createElement('div');
    newListItem.classList.add('listSideBar')
    let listNameLabel = document.createElement('input');
    let acceptButton = document.createElement('button');
   
    // ACCEPT Button
    acceptButton.classList.add('acceptButton')
    acceptButton.innerText = "Accept"
    
    
    // adding items 
    subHeading2.appendChild(newListItem)
     newListItem.appendChild(listNameLabel)
     newListItem.appendChild(acceptButton);
     listNameLabel.style.color='black';
    newList = new todoList(newListName.innerText);
    todoLists[todoLists.length]=newList;
    console.log(todoLists);

});



