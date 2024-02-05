
const BIN_ID = "65c05882dc74654018a05f69"  ;
const base_URL= "https://api.jsonbin.io/v3/b";
const MASTER_KEY = "$2a$10$JW0IiZb7G0Zz2VbHsYNoW.SjITUv.wcScj6VdQgYlqvjt/FjlUk5q";

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
async function loadTasks(){
    const respone = await axios.get(`${base_URL}/${BIN_ID}/latest`);
    return respone.data.record;
    
}

async function saveTasks(todos){
    await axios.put(`${base_URL}/${BIN_ID}`,todos,{
        'Content-Type':"application/json", //inform json bin that we are sending json file
    'X-Master-Key': MASTER_KEY}) //master key
    return respone.data
} 