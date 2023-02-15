"use strict";

let container = document.getElementById('container');
let createNewList = document.getElementById('newList');
let subHeading2 = document.getElementById('subHeading2');
createNewList.style.color='black';

let todoLists = []
let tasks = [];
let i = 0;
let counter = 0;
class Task{
    
    taskTitle = "";
    constructor(text)
    {
        this.taskTitle = text;
    }
}

class todoList {
    name = "";
    tasks = [];
    listNumber = 0;
    
    
constructor(name)
{
    this.name = name;
}


newListCreation(){

console.log(this);
let newListItem = document.createElement('div');
newListItem.classList.add('listSideBar')
let listNameLabel = document.createElement('input');
let listName = document.createElement('p');
let acceptButton = document.createElement('button');
listName.innerText = "Enter New List Title";
newListItem.setAttribute('listNumber', i);

i++;
console.log(i);
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
    newList.fillTasks(newListItem.getAttribute('listnumber'));
    createNewList.style.display="block";
})   



newListItem.addEventListener('click', function (e)
{
    console.log(newListItem.getAttribute('listnumber'))
    let parameter = newListItem.getAttribute('listnumber')
    console.log(parameter);
    newList.createTasks(parameter);
    // thisTodolist.createTasks();
    
})


}




fillTasks(listNumber){
    
      
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
           
            let thisTodolist = this;
           
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
                acceptButton.style.display="block";
                acceptButton.addEventListener('click', function (e)
                {
                    
                    let newTaskDiv = document.createElement('div');
                    container.appendChild(newTaskDiv)
                    container.removeChild(addNewTask);
                    newTaskDiv.classList.add('task');




                    let task = new Task (listNameLabel.value);
                    listName.innerText = listNameLabel.value;

                    baseTask.removeChild(listNameLabel);
                    addNewTask.removeChild(listName);


                    acceptButton.style.display="none";
                    let newTask = document.createElement('div');
                    newTask.classList.add('task')
                    let taskName = document.createElement('h3');
                    // newTaskDiv.appendChild(newTask);

                    taskName.innerText = listNameLabel.value;
                    task.taskTitle=listNameLabel.value;
                    newTaskDiv.appendChild(taskName);
                    let number = todoLists[listNumber].tasks.length
                    todoLists[listNumber].tasks[number] = task;
                    
                    
                    
                    
                    baseTask.style.backgroundColor="white";
                    baseTask.appendChild(newTaskText);
                    newTaskText.style.display ="block";
                    container.appendChild(addNewTask);
                    
                   
                
                
                   
                    
                    
                }) 
                
            })
        // taskContainer.appendChild(taskName);
        // taskContainer.appendChild(deleteTask);
//    storeTasks(){
    

//    }     
     
        



}

createTasks(variable){

    // if(this.tasks.length>1){
    //     while (container.firstChild){
    //         container.removeChild(container.lastChild);
    //         }
    //     }

        
   todoLists[variable].tasks.forEach(element => {
    console.log(todoLists[variable].tasks);
        let taskBase = document.createElement('div');
        taskBase.classList.add('task');
        let test = document.createElement('h4');
        test.innerText=element.taskTitle;
        container.appendChild(taskBase);
        taskBase.appendChild(test);

    });
   

  
    
//     this.tasks.forEach(element =>  {
//     console.log("suoer swag");
//     let newTaskDiv = document.createElement('div');
//     container.appendChild(newTaskDiv)
//     newTaskDiv.classList.add('task');
//     let taskName = document.createElement('h3');
//     taskName.innerText = element;
//     newTaskDiv.appendChild(taskName);
// });
// }
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
    
    let newToDoList = new todoList; 
        newToDoList.newListCreation();
        newToDoList.listNumber = counter;
        todoLists[counter]=newToDoList;
        counter++



});



