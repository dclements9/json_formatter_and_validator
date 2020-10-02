// TODO: 1. Failed = Clarify errors to display for user.
//       2. Success = Pretty Print JSON 

const inputField = document.querySelector('#input');

inputButton.addEventListener('click', function() {
    // Input Field = inputfield.value
    let result = ''

    // Testing -  { "name":"Dylan", "age":31, "car":null } 
    try {
      if (JSON.parse(inputField.value)){
      result = document.getElementById("resultDiv").innerHTML = 
      '<img src="https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif"/>';
      }
    }catch(error){
      if (error){
        result = sanitizeError(error);
      }
    }
    //Outputs result to result Div on page
      document.getElementById("resultDiv").innerHTML = result
  });

  function sanitizeError(error){
    const sanitizedResult = "Sanitized this:" + error;
//TODO
    const failedGif = document.getElementById("resultDiv").innerHTML = 
    '<img src="https://media.giphy.com/media/HNEmXQz7A0lDq/giphy.gif"/>';
    //return sanitizedResult;
    return failedGif;
  }