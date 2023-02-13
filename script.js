"use strict";

let container = document.getElementById('container');
let createNewList = document.getElementById('newList');
let subHeading2 = document.getElementById('subHeading2');
createNewList.style.color='red';

let todoLists = []



class todoList {
    name = "";
    tasks = []
constructor(name)
{
    this.name = name;
}


newListCreation(){
// Create Template

}




fillTasks(){
    
      
        // let taskContainer = document.createElement('div');
        // taskContainer.classList.add("taskBar")
        // let taskName = document.createElement('h3');
        // let deleteTask = document.createElement('h4');
        let test = document.createElement('h1');
        test.innerText =" Test header";
        // deleteTask.innerText = "x";
        // taskName.innerText = this.name;
        
        container.appendChild(test);
        // taskContainer.appendChild(taskName);
        // taskContainer.appendChild(deleteTask);
        console.log(this.todoList);
        


        
   
}
}

createNewList.addEventListener('click', function (e)
{   


let newListItem = document.createElement('div');
newListItem.classList.add('listSideBar')
let listNameLabel = document.createElement('input');
let listName = document.createElement('p');
let acceptButton = document.createElement('button');
listName.innerText = "Enter New List Title";

// ACCEPT Button
acceptButton.classList.add('acceptButton')
acceptButton.innerText = "Accept"


// adding items 
subHeading2.appendChild(newListItem)
 newListItem.appendChild(listName);
 newListItem.appendChild(listNameLabel)
 newListItem.appendChild(acceptButton);
 listNameLabel.style.color='black';
//  newList = new todoList(listName.innerText);
// todoLists[todoLists.length]=newList;
// console.log(todoLists);2

acceptButton.addEventListener('click', function (e)
{
    listName.innerText = listNameLabel.value;
    newListItem.removeChild(acceptButton);
    newListItem.removeChild(listNameLabel);
    newListItem.classList.remove("listSideBar");
    newList = new todoList (listName.innerText);
    console.log(newList);
    newList.fillTasks();
   
}) 


  

});



