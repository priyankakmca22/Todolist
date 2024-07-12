const todolist = document.getElementById("todo-list");
function addtask(){
    // Get the value of the input field
    let searchValue = document.getElementById("search").value.trim();
    
    // Check if the input is not empty
    if(search.value === ''){ 
        alert("Type ur todo");
    }
    else{
        // Create a new list item element
        let li = document.createElement("li");
        // Assign the input value to the list item
        li.textContent = searchValue;

        // Create a span element for the close button
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        // Append the list item to the todo list
        todolist.appendChild(li);
        // Clear the input field after adding the task
        document.getElementById("search").value = '';
        
        // Save the updated task list to localStorage
        saveData();
        }
    }
        // Event listener for marking tasks as completed or deleting them
        todolist.addEventListener("click", function(e){ //Click event
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                saveData();// Save the updated task list to localStorage
            }else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveData();// Save the updated task list to localStorage
            }
        });
        // Save data to localStorage
        function saveData(){
            localStorage.setItem("todolist", todolist.innerHTML);
        }
        // Load data from localStorage and display tasks
        function showTask(){
            let savedTasks = localStorage.getItem("todoList");
            if (savedTasks) {
                todolist.innerHTML = savedTasks;
            }
        }
        // Call showTask to display tasks on page load
        showTask();

