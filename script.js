function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"; 
        deleteButton.classList.add("deleteButton"); 
        listItem.appendChild(deleteButton);

        var taskList = document.getElementById("taskList");
        taskList.appendChild(listItem);

        taskInput.value = "";

        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    }
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
