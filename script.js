async function main(){

    let todos = await loadTasks();
    console.log(todos);
}
main();

document.querySelector(".btnSave").addEventListener("click",()=>{
    saveTasks();
    loadTasks();
})