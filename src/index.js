document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  // change the id of the submit input 
  const a = document.querySelector('input')
  a.setAttribute('id', 'submit_input')
  
  // event listener to the submit
  
  form.addEventListener( 'submit', (e) => {
  
  e.preventDefault()// return the form to default 
  // callback function to capture the txt
  addItemToDoList(e.target.submit_input.value)
  form.reset()
  
  }

  )

});

function addItemToDoList(addedItems){
  //create the list of items
  let li = document.createElement('li')
  li.textContent = addedItems

  document.querySelector("#tasks").appendChild(li)


}

