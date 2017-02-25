
var allTags = [];

function addTag() {
  // Check it the input if empty
  if ($("#tagInput").val() != ""){
    // create a container for new row
    var newCon = document.createElement("div");

    // create a div to denote the actual item
    var newTag = document.createElement("div");
    // change newTag's text to be same as user input
    newTag.innerHTML = $("input[name=tag]").val();
    // add a class to use Materialize class
    $(newTag).addClass("waves-effect waves-light btn");
    // append the item into the container
    $(newCon).append(newTag);

    // create a div for the delete button
    var box = document.createElement('div');
    box.innerHTML = "X";
    // add a class to use Materialize styling
    $(box).addClass("btn-floating waves-effect waves-light red");
    // append the delete button to the container
    $(newCon).append(box);
    // add a class to allow for CSS
    $(newCon).addClass("tags");

    // add the container to the page
    $("input").before(newCon);
    // push the input value into our array
    allTags.push($("input[name=tag]").val())
    $("input").val("");

    // we need to create an onclick event for the new button
    $(box).on("click", function(){
      // get the index for the deleted item
      var index = allTags.indexOf($(this).prev().html());
      // remove the element in the index from array
      allTags.splice(index, 1);
      // remove the container from our html
      $(this).parent().remove();
    })
  } else {
    alert("Input cannot be empty or null.")
  }
}



