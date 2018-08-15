 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB4UxJjjLcILIWDjjWrqLmqzvk0Z-Zmh6g",
    authDomain: "timesheet-project-61422.firebaseapp.com",
    databaseURL: "https://timesheet-project-61422.firebaseio.com",
    projectId: "timesheet-project-61422",
    storageBucket: "timesheet-project-61422.appspot.com",
    messagingSenderId: "1002444242633"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = 01/01/1999;
var rate = 0;

$("#form-submit").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#employee-name").val().trim();
    role = $("#employee-role").val().trim();
    startDate = $("#date").val().trim();
    rate = $("#monthly-rate").val().trim();

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate
    });

  });