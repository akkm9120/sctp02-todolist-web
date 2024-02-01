

function createTodos(todos,name,urgency){   
    const newtask = {
        "id": Math.floor(Math.random()*100000),
        "name": name,
        "urgency": urgency,
        "done": false
    }
    todos.push(newtask);
}
///////////////////////////////////////////////////////////////////////
function updateTodo(todos,id, newName , newUrgency){
    let wantedTodo = null;
    for(let todo of todos){
        if(todo.id == id){
            wantedTodo=todo;
            break;
        }
    }
    wantedTodo.name = newName;
    wantedTodo.urgency= newUrgency;
}
/////////////////////////////////////////////////////////////////////////////
function deleteTodos(todos,delid){
    //we need to find idnex of todo in array
    let wantedIndex = null; 
    for(let i=0; i<todos.length; i++){
        if(delid == todos[i].id){
            wantedIndex=i;
            break;
        }
    }
    todos.splice(wantedIndex,1)
}
///////////////////////////////////////////////////////////////////////////////
