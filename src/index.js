const inputField = document.querySelector('#input');

inputButton.addEventListener('click', function() {
    // Input Field = inputfield.value
    console.log(inputField.value);

    //let result = JSON.parse(inputField.value)
    let result = ''

    try {
      result = JSON.parse(inputField.value)
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
    return sanitizedResult;
  }