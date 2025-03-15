document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  // Create and append additional input fields dynamically
  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.id = "task-user";
  userInput.placeholder = "Enter User";

  const durationInput = document.createElement("input");
  durationInput.type = "number";
  durationInput.id = "task-duration";
  durationInput.placeholder = "Duration (mins)";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "task-due-date";

  // Priority dropdown
  const prioritySelect = document.createElement("select");
  prioritySelect.id = "task-priority";
  ["High", "Medium", "Low"].forEach(priority => {
    const option = document.createElement("option");
    option.value = priority.toLowerCase();
    option.innerText = priority;
    prioritySelect.appendChild(option);
  });

  // Append new fields to the form
  form.appendChild(userInput);
  form.appendChild(durationInput);
  form.appendChild(dueDateInput);
  form.appendChild(prioritySelect);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const taskText = document.querySelector("#new-task-description").value.trim();
    const user = userInput.value.trim();
    const duration = durationInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === "" || user === "" || duration === "" || dueDate === "") {
      alert("All fields must be filled!");
      return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${taskText}</strong> - Assigned to: <em>${user}</em> | Duration: ${duration} mins | Due: ${dueDate}`;

    // Assign priority color
    const priority = prioritySelect.value;
    if (priority === "high") {
      listItem.style.color = "red";
    } else if (priority === "medium") {
      listItem.style.color = "orange";
    } else {
      listItem.style.color = "green";
    }

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });

    // Append delete button to task
    listItem.appendChild(deleteButton);

    // Append the task to the task list
    taskList.appendChild(listItem);

    // Clear input fields after submission
    document.querySelector("#new-task-description").value = "";
    userInput.value = "";
    durationInput.value = "";
    dueDateInput.value = "";
  });
});

  
