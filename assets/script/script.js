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
    startDate = $("#date").val();
    rate = $("#monthly-rate").val().trim();

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate
    });

  });

  database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().rate);


      $("#table-body").append("<tr><td id='logged-name-" + childSnapshot.val().name + "'>" + childSnapshot.val().name +
        "</td> <td id='logged-role-"+ childSnapshot.val().role +"'>" + childSnapshot.val().role +
          "</td> <td id='logged-startDate-"+ childSnapshot.val().startDate +"'>" + childSnapshot.val().startDate +
          "</td> <td> </td> <td id='logged-rate-"+ childSnapshot.val().rate +"'>" + childSnapshot.val().rate + "</td> <td> </td> </tr>");
    
  },

  function(errorObject) {
      console.log("Errors handled: " + errorObject.code);

  });

  database.ref().orderByChild("startDate").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#logged-name-"+snapshot.val().name+"").text(snapshot.val().name);
    $("#logged-role-"+snapshot.val().role+"").text(snapshot.val().role);
    $("#logged-startDate-"+snapshot.val().startDate+"").text(snapshot.val().startDate);
    $("#logged-rate-"+snapshot.val().rate+"").text(snapshot.val().rate);
  });