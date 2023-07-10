setTimeout(function () {
    // const username = prompt("Please enter your username:");
    // const password = prompt("Please enter your password:");
    const Room = prompt("Please enter Which ROOM you want to select from A to Z Options:");
    const selectedOptionText = "Room " + Room.toUpperCase();
  
    const username = "rpranjan11";
    const password = "Its-mine11";
    // const selectedOptionText = "Room K";
  
    const usernameField = document.getElementById("formBasicText");
    const passwordField = document.getElementById("formBasicPassword");
    const loginButton = document.querySelector("button[type='submit']");
  
    if (usernameField && passwordField && loginButton) {
      usernameField.value = username;
      usernameField.dispatchEvent(new Event("input", { bubbles: true }));
      passwordField.value = password;
      passwordField.dispatchEvent(new Event("input", { bubbles: true }));
  
      setTimeout(function () {
        loginButton.click();
        // const selectedOptionText = prompt("Please enter Which ROOM you want to select from A to Z Options:");
        setTimeout(function () {
          const selectRoom = document.querySelector(".custom_select");
          // selectRoom.click();
  
          if (selectRoom) {
            const options = selectRoom.querySelectorAll("option");
            // console.log(options);
            for (const option of options) {
              // console.log(option);
              const optionText = option.innerText.trim();
              if (optionText.includes(selectedOptionText)) {
                option.selected = true;
                selectRoom.dispatchEvent(new Event("change", { bubbles: true }));
                break;
              }
            }
            // console.log(options);
          }
  
          setTimeout(function () {
            const predictButton = document.querySelector(".predict_btn");
            const resetButton = document.querySelector(".reset_tie_btn");
  
            if (predictButton) {
              predictButton.click();
              console.log("Predict button clicked!");
            }
  
            if (resetButton) {
              // Wait for some delay before click on reset
              setTimeout(function () {
                resetButton.click();
                console.log("Reset button clicked!");
              }, 2000);
            }
          }, 2000);
        }, 2000);
      }, 2000);
    }
  }, 2000);
  