document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (e) => {
    e.preventDefault()
    logTask(e.target["new-task-description"].value)
    document.querySelector("form").reset()
  })
});

function logTask(task){
  let listItem = document.createElement('li')
  listItem.innerHTML = `${task} ` 
  document.getElementById("tasks").appendChild(listItem)  
}

/* future work to try
Stretch Deliverables
Once you've got the required deliverables working, you may want to try to implement one or more of the following:

A delete function that will remove tasks from your list
A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
An additional input field (e.g. user, duration, date due)
Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

*/