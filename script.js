"use strict";

let container = document.getElementById('container');
let newList = document.getElementById('newList');
let subHeading2 = document.getElementById('subHeading2');
newList.style.color='red';

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
    let newList = document.createElement('div');
     newList.innerText = "New Project";
     subHeading2.appendChild(newList);

});



