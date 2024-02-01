function main(){
 let todos = [];

 createTodos(todos,"Plant seeds","Medium");
 createTodos(todos,"clear grass near plants","High")


}

function renderTasks(todos){
    for(task of todos){
        document.querySelector("#taskList").innerHTML = document.createElement("li");
        
    }
}