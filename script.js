"use strict";
const freeChoiceBtn = document.getElementById("free-choice");
const paidChoiceBtn = document.getElementById("paid-choice");
const freeInputFields = document.querySelectorAll(".free-fare");
const paidInputFields = document.querySelectorAll(".paid-fare");
const selfDriverBtn = document.getElementById("self-drive");
const paidDriverBtn = document.getElementById("paid-driver");
const driverDetails = document.querySelectorAll(".driver-details");
const successPopup = document.getElementById("successPopup");
const cotravellerContainer = document.querySelector(".cotravellerContainer");
const guardianContainer = document.querySelector(".guardianContainer");
const cotravellerWrapper = document.querySelector(".cotravellerWrapper");
const guardianForm = document.querySelector(".guardianForm");
const guardianWrapper = document.querySelector(".guardianWrapper");
const addMoreCotravellerBtn = document.getElementById("addMoreCotravellerBtn");
const addMoreGuardianBtn = document.getElementById("addMoreGuardianBtn");
const genderBtn = document.getElementById("gender");
const modeOfTransportBtn = document.getElementById("transport-mode");
const vehicleTransport = document.querySelector(".vehicleTransport");
const trainTransport = document.querySelector(".trainTransport");
const withGuardianBtn = document.getElementById("with-guardian");
const withoutGuardianBtn = document.getElementById("without-guardian");
const resetBtn = document.getElementById("resetBtn");
const resubmitBtn = document.getElementById('resubmitBtn')
const inputTypeNumber = document.querySelectorAll('input[type="number"]')
const guardianSelectContainer = document.querySelector('.guardianSelectContainer')



inputTypeNumber.forEach((element) => {
  element.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    e.target.value = value;
  });
});


function showFreeChoice() {
  freeInputFields.forEach((element) => {
    element.classList.remove("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = false;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = false;
    });
  });
  paidInputFields.forEach((element) => {
    element.classList.add("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = true;
    });
  });
}
function showPaidChoice() {
  freeInputFields.forEach((element) => {
    element.classList.add("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = true;
    });
  });

  paidInputFields.forEach((element) => {
    element.classList.remove("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = false;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = false;
    });
  });
}

function showSelfDriver() {
  driverDetails.forEach((element) => {
    element.classList.remove("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = false;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = false;
    });
  });
}
function hideSelfDriver() {
  driverDetails.forEach((element) => {
    element.classList.add("d-none");
    element.querySelectorAll("input").forEach((input) => {
      input.disabled = true;
    });
    element.querySelectorAll("select").forEach((select) => {
      select.disabled = true;
    });
  });
}

function closeSuccessPopup() {
  successPopup.classList.add("d-none");
}

function showSuccessPopup() {
  successPopup.classList.remove("d-none");
}

if (freeChoiceBtn.checked) {
  showFreeChoice();
} else if (paidChoiceBtn.checked) {
  showPaidChoice();
}

genderBtn.addEventListener("change", (event) => {
  if (event.target.value === "male") {
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add("d-none");
    guardianForm.querySelectorAll("input").forEach((element) => {
      element.disabled = true;
    });
    guardianForm.querySelectorAll("select").forEach((element) => {
      element.disabled = true;
    });
  } else if (event.target.value === "transgender") {
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add("d-none");
    guardianForm.querySelectorAll("input").forEach((element) => {
      element.disabled = true;
    });
    guardianForm.querySelectorAll("select").forEach((element) => {
      element.disabled = true;
    });
  } else if (event.target.value === "female") {
    guardianSelectContainer.classList.remove('d-none')


    if (withGuardianBtn.checked === true) {
      guardianContainer.classList.remove("d-none");
      guardianForm.classList.remove("d-none");
      guardianForm.querySelectorAll("input").forEach((element) => {
        element.disabled = false;
      });
      guardianForm.querySelectorAll("select").forEach((element) => {
        element.disabled = false;
      });
    } else if (withoutGuardianBtn.checked === true) {
      guardianContainer.classList.add("d-none");
      guardianForm.classList.add("d-none");

      guardianForm.querySelectorAll("input").forEach((element) => {
        element.disabled = false;
      });
      guardianForm.querySelectorAll("select").forEach((element) => {
        element.disabled = false;
      });
    }
        if(paidChoiceBtn.checked){
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add('d-none')
            guardianForm.querySelectorAll("input").forEach((element) => {
        element.disabled = true;
      });
      guardianForm.querySelectorAll("select").forEach((element) => {
        element.disabled = true;
      });
    }
  }
});

modeOfTransportBtn.addEventListener("change", (event) => {
  if (event.target.value === "train") {
    vehicleTransport.classList.add("d-none");
    trainTransport.classList.remove("d-none");
    document.querySelector("#vehicle-registration").disabled = true;
    document.querySelector("#train-number").disabled = false;
  } else {
    vehicleTransport.classList.remove("d-none");
    trainTransport.classList.add("d-none");
    document.querySelector("#vehicle-registration").disabled = false;
    document.querySelector("#train-number").disabled = true;
  }
});

addMoreCotravellerBtn.addEventListener("click", () => {
  const newCotravellerForm = document.createElement("div");
  newCotravellerForm.classList.add(
    "cotravellerForm",
    "w-100",
    "d-flex",
    "gap-10px",
    "align-items-center"
  );
  newCotravellerForm.innerHTML = ` 
 <div class=" flex-column w-100 d-flex gap-1">
                                <label for="cotraveller-name-1" class="fs-15 color-medium"> Name / नाम<sup class="text-danger" ><i class="fa-solid fa-star-of-life" style="font-size: 8px; "></i></sup> : </label>
                                <input class="w-100  py-2 rounded px-2 border-medium fs-15"  minlength="3" maxlength="50" type="text" required name="cotraveller-name-1"
                                    id="cotraveller-name-1" placeholder="Enter  Name">
                            </div>
                            <div class=" flex-column w-100 d-flex gap-1">
                                <label for="cotraveller-gender-1" class="fs-15 color-medium"> Gender / लिंग<sup class="text-danger" ><i class="fa-solid fa-star-of-life" style="font-size: 8px; "></i></sup> : </label>
                                <select name="cotraveller-gender-1" id="cotraveller-gender-1" required
                                    class="w-100 py-2  dropdownContainer rounded px-2 border-medium fs-15 cursor-pointer">
                                    <option value="" selected>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="transgender">Transgender</option>
                        
                                </select>
                            </div>
                            <div class="flex-column w-100 d-flex gap-1">
                                <label for="cotraveller-mobile-1" class="fs-15 color-medium"> Mobile / मोबाइल<sup class="text-danger" ><i class="fa-solid fa-star-of-life" style="font-size: 8px; "></i></sup>: </label>
                                <input class="w-100  py-2 rounded px-2 border-medium fs-15"  minlength="10" maxlength="10" type="number" required name="cotraveller-mobile-1"
                                    id="cotraveller-mobile-1" placeholder="Enter Mobile">
                            </div>

                            <div class="delete-cotraveller-btn w-max shrink-0" style="margin-top: 26px;">
                                <span class="fs-19 text-danger cursor-pointer"><i class="fa-solid fa-trash-can"></i></span>
                            </div>
                        `;
  cotravellerWrapper.appendChild(newCotravellerForm);
});

cotravellerWrapper.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-cotraveller-btn");
  if (deleteBtn) {
    const cotravellerForm = deleteBtn.closest(".cotravellerForm");
    if (cotravellerForm) cotravellerForm.remove();
  }
});

function handleSubmit(event) {
  event.preventDefault(); // prevent page reload

  const formData = {
    username: "",
    mobileno: "",
    rollno: "",
    gender: "",
    startingPoint: "",
    endingPoint: "",
    dateOfExam: "",
    shift: "",
    travelDate: "",
    freeNeededOrNot: null,
    travelingWithGuardian: null,
    modeOfTransport: "",
    vehicleNo: "",
    selfdrive: null,
    driverName: "",
    driverAge: null,
    driverMobileNo: "",
    details: [],
  };

  formData.username = document.getElementById("name").value.trim();
  formData.mobileno = document.getElementById("mobile").value.trim();
  formData.rollno = document.getElementById("roll-no").value.trim();
  formData.gender = document.getElementById("gender").value;
  formData.startingPoint = document.getElementById("starting-point").value;
  formData.endingPoint = document.getElementById("ending-point").value;
  formData.dateOfExam = document.getElementById("exam-date").value;
  formData.shift = document.getElementById("exam-shift").value;
  formData.travelDate = document.getElementById("travel-date").value;

  const fareChoice = document.querySelector(
    'input[name="fare-choice"]:checked'
  );
  formData.freeNeededOrNot = fareChoice?.id === "free-choice" ? true : false;
  const driverOption = document.querySelector(
    'input[name="drive-option"]:checked'
  );

  if (formData.freeNeededOrNot === false) {
    formData.modeOfTransport = document
      .getElementById("transport-mode")
      .value.trim();
    const cotravellerForms =
      cotravellerWrapper.querySelectorAll(".cotravellerForm");

    cotravellerForms.forEach((form) => {
      const name = form.querySelector("#cotraveller-name-1")?.value.trim();
      const gender = form.querySelector("#cotraveller-gender-1")?.value.trim();
      const mobileno = form
        .querySelector("#cotraveller-mobile-1")
        ?.value.trim();

      formData.details.push({ name, gender, mobileno });
    });
    formData.selfdrive = driverOption?.id === "paid-driver" ? false : true;

    if (formData.modeOfTransport === "train") {
      formData.vehicleNo = document.getElementById("train-number").value.trim();
    } else {
      formData.vehicleNo = document
        .getElementById("vehicle-registration")
        .value.trim();
    }
    if (formData.selfdrive === false) {
      formData.driverName = document.getElementById("driver-name").value.trim();
      formData.driverAge = document.getElementById("driver-age").value.trim();
      formData.driverMobileNo = document
        .getElementById("driver-mobile")
        .value.trim();
    }
  }

  if (formData.gender === "female") {
    formData.travelingWithGuardian =
      document.getElementById("with-guardian").checked;
    if (formData.travelingWithGuardian ) {
      if(freeChoiceBtn.checked){

        const guardianName = document
          .getElementById("guardian-name-1")
          .value.trim();
        const guardianGender = document
          .getElementById("guardian-gender-1")
          .value.trim();
        const guardianMobile = document
          .getElementById("guardian-mobile-1")
          .value.trim();
  
        formData.details.push({
          name: guardianName,
          gender: guardianGender,
          mobileno: guardianMobile,
        });
      }
    }
  }

  console.log("Form Data:", formData);

  fetch(
    "https://cet-transport.1ayq.com/stg/api/v1/trans/data/cet",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      showSuccessPopup();

        resubmitBtn.addEventListener('click',()=>{
          location.reload()
        })
    })
    .catch((error) => {
      console.error("Error while saving form:", error);
      alert("There was an error saving your data. Please try again.");
    });
}

freeChoiceBtn.addEventListener("change",()=>{
showFreeChoice()
    guardianContainer.classList.remove('d-none')
    guardianSelectContainer.classList.remove('d-none')
      guardianForm.querySelectorAll("input").forEach((element) => {
    element.disabled = false;
  });
  guardianForm.querySelectorAll("select").forEach((element) => {
    element.disabled = false;
  });

  if(gender.value === 'male'){
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add('d-none')

  }
  else if(gender.value === 'transgender'){
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add('d-none')

  }
  else if(gender.value === ''){
    guardianContainer.classList.add('d-none')
    guardianSelectContainer.classList.add('d-none')
  }
  else if(withoutGuardianBtn.checked === true){
    guardianContainer.classList.add('d-none')
      guardianForm.querySelectorAll("input").forEach((element) => {
    element.disabled = true;
  });
  guardianForm.querySelectorAll("select").forEach((element) => {
    element.disabled = true;
  });
  }

} );
paidChoiceBtn.addEventListener("change", () => {
  showPaidChoice();

  if(selfDriverBtn.checked){
    hideSelfDriver();
  }
  else{
    showSelfDriver()
  }

    if(gender.value === 'male'){
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add('d-none')

  }
  else if(gender.value === 'transgender'){
    guardianSelectContainer.classList.add('d-none')
    guardianContainer.classList.add('d-none')

  }
  else if(gender.value === ''){
    guardianContainer.classList.add('d-none')
    guardianSelectContainer.classList.add('d-none')
  }

  else{
    guardianContainer.classList.add('d-none')
    guardianSelectContainer.classList.add('d-none')
      guardianForm.querySelectorAll("input").forEach((element) => {
    element.disabled = true;
  });
  guardianForm.querySelectorAll("select").forEach((element) => {
    element.disabled = true;
  });
  }
  vehicleTransport.classList.remove("d-none");
  trainTransport.classList.add("d-none");
  document.querySelector("#vehicle-registration").disabled = false;
  document.querySelector("#train-number").disabled = true;


});

resetBtn.addEventListener("click", () => {
  location.reload();
});



selfDriverBtn.addEventListener("change", hideSelfDriver);
paidDriverBtn.addEventListener("change", showSelfDriver);

withoutGuardianBtn.addEventListener("change", () => {
  guardianForm.classList.add("d-none");
    guardianContainer.classList.add('d-none')

  guardianForm.querySelectorAll("input").forEach((element) => {
    element.disabled = true;
  });
  guardianForm.querySelectorAll("select").forEach((element) => {
    element.disabled = true;
  });
});

withGuardianBtn.addEventListener("change", () => {
    guardianContainer.classList.remove('d-none')
  guardianForm.classList.remove("d-none");

  guardianForm.querySelectorAll("input").forEach((element) => {
    element.disabled = false;
  });
  guardianForm.querySelectorAll("select").forEach((element) => {
    element.disabled = false;
  });
});
