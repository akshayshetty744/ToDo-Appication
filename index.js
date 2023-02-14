let count = document.querySelector(".count");
let arr = [];
let obj = {};

function creating() {
  // Div item
  let item = document.createElement("div");
       item.classList.add("itemdiv");

  // checkbox
  let  checkBtn = document.createElement("INPUT");
        checkBtn.setAttribute("type", "checkbox");
        checkBtn.setAttribute("value", "0");
        checkBtn.setAttribute("name", "fordCheckBox");
        checkBtn.classList.add("checkBtn");

  // creating p tag for  input value store in p tag
  let textinput = document.createElement("p");
      textinput.classList.add("textinput");

  //  Delete button
  let  deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("deleteButton");

  let top = document.querySelector(".top");

  if (event.key === "Enter" && input.value) {
        textinput.innerText = input.value;
        item.appendChild(textinput);
        item.appendChild(checkBtn);
        item.appendChild(deleteButton);

    obj = {
        value: input.value,
        status: false,
    };
        arr.push(obj);
        top.appendChild(item);

        input.value = "";
  }
}

var input = document.querySelector(".inputBox");
      input.addEventListener("keypress", function () {
      creating();

  let checkBtn = document.querySelectorAll(".checkBtn");
       count.textContent = checkBtn.length + " item left";
});

// Delete button
let deleteBtn = document.querySelector(".top");
     deleteBtn.addEventListener("click", (e) => {
  if (e.target.className == "deleteButton") {
    let parent = e.target.parentElement;
         parent.remove();
  }
});

// select items

let check = document.querySelector(".top");
check.addEventListener("change", (e, i) => {
  // Checkbox is checked..
  if (e.target.checked) {
    let val = e.target.parentElement.children[0].innerText;
    let data = arr.forEach((ele) => {
      if (val == ele.value) {
        console.log(ele.value);
        obj.status = true;
      }
    });


    // clear completed
    let checked = document.querySelectorAll(".checked");
    if (checked.length >= 0) {
      let show = document.querySelector(".Clear-Completed");
           show.style.visibility = "visible";
      // complete clear
      let clear = document.querySelector(".Clear-Completed");
           clear.addEventListener("click", () => {
        e.target.parentElement.remove();
        let checked = document.querySelectorAll(".checkBtn");
        checked.forEach((e) => {
          e.parentElement.style.display = "";
        });
      });
    }

    if (e.target.className == "checkBtn") {
      let  parent = e.target.parentElement;
            parent.childNodes[0].style.textDecoration = "line-through";
            parent.childNodes[0].style.color = "gray";
            parent.childNodes[1].classList = "checked";
      let checkBtn = document.querySelectorAll(".checkBtn");
           count.textContent = checkBtn.length + " item left";
    }
  }

  // Checkbox is Unchecked..
  else {
    let parent = e.target.parentElement;
        parent.childNodes[0].style.textDecoration = "none";
        parent.childNodes[0].style.color = "black";
        parent.childNodes[1].classList = "checkBtn";
    let checkBtn1 = document.querySelectorAll(".checkBtn");
         count.textContent = checkBtn1.length + " item left";
    // clear completed
    let checked = document.querySelectorAll(".checked");
    if (checked.length <= 0) {
      let show = document.querySelector(".Clear-Completed");
           show.style.visibility = "hidden";
    }
  }
});

// All
let All = document.querySelector(".mainDiv");
All.addEventListener("click", (e) => {
    if (e.target.className == "All") {
        e.target.style.cssText = "color:red;"
        document.querySelector(".Completed").style.cssText = "color:black ; "
        document.querySelector(".Active").style.cssText="color:black ; "
    let checkBtn = document.querySelectorAll(".checkBtn");
    checkBtn.forEach((e) => {
      e.parentElement.style.display = "";
    });
  }
});

// Active
let Active = document.querySelector(".mainDiv");
     Active.addEventListener("click", (e) => {
  let checked = document.querySelectorAll(".checked");
    if (e.target.className == "Active") {
        document.querySelector(".All").style.cssText = "color:black ; "
        document.querySelector(".Completed").style.cssText="color:black ; "
        document.querySelector(".All").style.cssText="color:black ; "
        e.target.style.cssText = "color:red;"
     checked.forEach((e) => {
      e.parentElement.style.display = "none";
    });
  } else {
     checked.forEach((e) => {
      e.parentElement.style.display = "";
    });
  }
});

// Completed
let Completed = document.querySelector(".mainDiv");
     Completed.addEventListener("click", (e) => {
    if (e.target.className == "Completed") {
        e.target.style.cssText = "color:red;"
        document.querySelector(".All").style.cssText = "color:black ; "
        document.querySelector(".Active").style.cssText="color:black ; "
    let checkBtn = document.querySelectorAll(".checkBtn");
         checkBtn.forEach((e) => {
      e.parentElement.style.display = "none";
    });
  } else {
    let checked = document.querySelectorAll(".checkBtn");
         checked.forEach((e) => {
         e.parentElement.style.display = "";
    });
  }
});

// let selectAll = document.querySelector(".mainDiv");
// selectAll.addEventListener("click", (e) => {
//   if (e.target.className == "selectAll") {
//     if (e.target.checked) {
//       let chileClass = document.querySelectorAll(".itemdiv");
//       chileClass.forEach((ele) => {
//         ele.childNodes[1].setAttribute("checked", "checked");
//       });
//     } else {
//       let chileClass = document.querySelectorAll(".itemdiv");
//       chileClass.forEach((ele) => {
//         ele.childNodes[1].removeAttr("checked");
//         console.log("false");
//       });
//     }
//   }
// });

// arr.push(obj);
// let k = document.querySelectorAll(".top");
// k.forEach((e,i) => {
//     console.log(e.children[i].children[0]);
//     // return arr == e
// })
arr.shift();
console.log(arr);