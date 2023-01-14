
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
        let taskName = document.createElement('h3');
        let deleteTask = document.createElement('h4');

        taskName.innerText = element;




        
    });
}
}
