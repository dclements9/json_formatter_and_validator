const inputField = document.querySelector('#input');

inputButton.addEventListener('click', function() {
    let result = ''

    try {
      if (JSON.parse(inputField.value)){      
      let jsonPrint = JSON.stringify(JSON.parse(inputField.value),null,2); 
        result = jsonPrint;
      }
    }catch(error){
      if (error){
        result = sanitizeError(error);
      }
    }
    //Outputs result to resultPre on page (Pre = Preformatted)
      document.getElementById("resultPre").innerHTML = result;
  });

  function sanitizeError(error){
    const failedGif = document.getElementById("resultPre").innerHTML = 
    error + '</br>' + '</br>' +'<img src="https://media.giphy.com/media/HNEmXQz7A0lDq/giphy.gif"/>';

    return failedGif;
  }