// Note- Remember every function needs to be called. Start by figuring out where
// the function needs to be called and call it! Then, build out the functions.
// Don't move on to the next function until you have the one you're currently working
// on is functional and tested! Run your code often and use help-queue on road blocks!

// save reference to important DOM elements

// handle displaying the time
function displayTime() {

}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {

}

// Takes an array of projects and saves them in localStorage.
function saveProjectsToStorage(projects) {

}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page

  // get projects from localStorage

  // loop through each project and create a row

    // get date/time for start of today

    // Create row and columns for project

    // Save the index of the project as a data-* attribute on the button. This
    // will be used when removing the project from the array.

    // add class to row by comparing project date to today's date

    // append elements to DOM to display them

  }

// Removes a project from local storage and prints the project data
function handleDeleteProject() {

  // remove project from the array

  // print projects
}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {

  // If this function isn't working as you expect, what is something
  // that can be added to the event?

  // read user input from the form
 // note- you don't need to trim select input
  // note- yyyy-mm-dd format

  // add project to local storage

  // print project data

  // clear the form inputs

}


// Use jQuery event delegation to listen for clicks on dynamically added delete
// buttons.