// TODO: 1. Failed = Clarify errors to display for user.
//       2. Success = Pretty Print JSON 

const inputField = document.querySelector('#input');

inputButton.addEventListener('click', function() {
    // Input Field = inputfield.value
    let result = ''

    // Testing -  {"foo":1,"bar":2,"baz":[4,5,6]}
    try {
      if (JSON.parse(inputField.value)){      
      let jsonPrint = JSON.stringify(JSON.parse(inputField.value),null,2); 
      //document.getElementById("resultDiv").innerHTML = 
      result = jsonPrint;
      }
    }catch(error){
      if (error){
        console.log(error)
        result = sanitizeError(error);
      }
    }
    //Outputs result to result Div on page
      document.getElementById("resultDiv").innerHTML = result;
  });

  function sanitizeError(error){
    const sanitizedResult = "Sanitized this:" + error;
//TODO
    const failedGif = document.getElementById("resultDiv").innerHTML = 
    '<img src="https://media.giphy.com/media/HNEmXQz7A0lDq/giphy.gif"/>';
    //return sanitizedResult;
    return failedGif;
  }