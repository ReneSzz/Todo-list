let container = document.getElementById('container')



class todoList {
    name = "";
    tasks = []
constructor(name)
{
    this.name = name;
}

fillTasks(){
    this.tasks.forEach(element => {
      
       


        
    });
}
}

let taskContainer = document.createElement('div');
taskContainer.classList.add("taskBar")
let taskName = document.createElement('h3');
let deleteTask = document.createElement('h4');

deleteTask.innerText = "x";
taskName.innerText = "swag";

container.appendChild(taskContainer);
taskContainer.appendChild(taskName);
taskContainer.appendChild(deleteTask);




