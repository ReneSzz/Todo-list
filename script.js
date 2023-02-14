"use strict";

let container = document.getElementById('container');
let createNewList = document.getElementById('newList');
let subHeading2 = document.getElementById('subHeading2');
createNewList.style.color='black';

let todoLists = []
let tasks = [];
class Task{
    taskTitle = "";
    constructor(text)
    {
        this.taskTitle = text;
    }
}

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
        test.innerText =this.name;
        // deleteTask.innerText = "x";
        // taskName.innerText = this.name;
        
        container.appendChild(test);
        let addNewTask = document.createElement('div');
        let newTaskText = document.createElement('p');
            newTaskText.innerText = "Add new task +"
            container.appendChild(addNewTask);
            
            let baseTask = document.createElement('div');
            baseTask.classList.add("task");
            addNewTask.appendChild(baseTask);
           baseTask.appendChild(newTaskText);
            

           
            newTaskText.addEventListener('click', function(e)
            {
                newTaskText.style.display = "none";
               
                let listNameLabel = document.createElement('input');
                let listName = document.createElement('p');
                let acceptButton = document.createElement('button');

                baseTask.appendChild(listNameLabel);
                addNewTask.appendChild(listName);
                addNewTask.appendChild(acceptButton);
                baseTask.style.backgroundColor="transparent";
                

                // ACCEPT Button
                acceptButton.classList.add('acceptButton')
                acceptButton.innerText = "Accept"
                acceptButton.addEventListener('click', function (e)
                {
                    
                    
                    let task = new Task (listNameLabel.value);
                    listName.innerText = listNameLabel.value;
                    baseTask.removeChild(listNameLabel);
                    addNewTask.removeChild(listName);
                    addNewTask.removeChild(acceptButton);
                    let newTask = document.createElement('div');
                    newTask.classList.add('task')
                    let taskName = document.createElement('h3');
                    addNewTask.appendChild(newTask);
                    taskName.innerText = listNameLabel.value;
                    task.taskTitle=listNameLabel.value;
                    newTask.appendChild(taskName);
                    todoLists[todoLists.length] = task;
                    console.log(todoLists)
                    // addNewTask.appendChild(listName);
                    
                    baseTask.style.backgroundColor="white";
                    baseTask.appendChild(newTaskText);
                    newTaskText.style.display ="block";
                
                   
                    
                    
                }) 
                
            })
        // taskContainer.appendChild(taskName);
        // taskContainer.appendChild(deleteTask);
//    storeTasks(){
    

//    }     
     
        


        
   
}
}

createNewList.addEventListener('click', function (e)
{   
    createNewList.style.display="none";
    if(container.firstChild){
    while (container.firstChild){
        container.removeChild(container.lastChild);
        }
    }




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
    
    newListItem.classList.remove("listSideBar");
    newList = new todoList (listNameLabel.value);
    listName.innerText = listNameLabel.value;
    newListItem.removeChild(acceptButton);
    newListItem.removeChild(listNameLabel);
    console.log(newList);
    newList.fillTasks();
    createNewList.style.display="block";
}) 


  

});



