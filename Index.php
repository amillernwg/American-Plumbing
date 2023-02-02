<?php

?>

<!DOCTYPE html>
<html>


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js" integrity="sha512-d4KkQohk+HswGs6A1d6Gak6Bb9rMWtxjOa0IiY49Q3TeFd5xAzjWXDCBW9RS7m86FQ4RzM2BdHmdJnnKRYknxw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script>
    $(document).ready(function($) {
      $('#phone2').mask("(999) 999 9999");
    });
  </script>

  <script>
    function selectAllText(input) {
      input.select();
    }

    function capitalizeFirstLetter(input) {
      input.value = input.value.substr(0, 1).toUpperCase() + input.value.substr(1);
    }
  </script>
</head>


<body>

  <form class="signup-form" id="myForm" action="login.inc.php" method="post">
    <div class="form-body">

     

      <!-- Email -->
      <div class="form-single">
        <label for="email" class="label-title">Email *</label>
        <input type="text" name="email" id="email" class="form-input" placeholder="enter your email" required="required">

      </div>

      <!-- Password and confirm password -->
    
        <div class="form-single left">
          <label for="password" class="label-title">Password *</label>
          <input type="password" name="pwd" id="password" class="form-input" placeholder="enter your password" required="required" onblur="validatePassword()">
          <div id="passwordWarning" style="display:none; color:red;">Password must contain 1 capital letter, 1 special character, and be at least 5 characters long</div>
        </div>

       
        
      

    
      
      <div class="form-footer">
        <span>* required</span>
        <button type="submit" name="submit" id="submit" class="btn">Create</button>
      </div>
  </form>
  

  

  
   <script src="js/app_source.js"></script>

</body>

</html>
