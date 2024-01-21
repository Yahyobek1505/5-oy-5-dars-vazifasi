import { validation, creatElements, getData } from "./functions.js";
const button = document.getElementById("button");
const Inputname = document.getElementById("Inputname");
const inputNarx = document.querySelector("#inputNarx");
const inputCategory = document.querySelector("#inputCategory");
const mainScren = document.querySelector("#mainScren");
const form = document.querySelector("#form");

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (validation(Inputname, inputNarx, inputCategory)) {
      let smartPhone = {
        id: Date.now(),
        name: Inputname.value,
        narx: inputNarx.value,
        category: inputCategory.value,
      };
      let data = getData();
      data.push(smartPhone);
      localStorage.setItem("phones", JSON.stringify(data));

      let result = creatElements(smartPhone, data.length);
      mainScren.innerHTML += result;
      form.reset();
    } else {
      console.log("validatsiyadan o'tmadi");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  let data = getData();
  data.length &&
    data.forEach((smartPhone, index) => {
      let malumot = creatElements(smartPhone, index + 1);
      mainScren.innerHTML += malumot;
    });
  let deleteButtons = document.querySelectorAll("i.delete");

  deleteButtons.length &&
    deleteButtons.forEach((delet) => {
      delet &&
        delet.addEventListener("click", function () {
          let isDeleted = confirm(
            "Rostdan ham shu ma'lumotni o'chirmoqchimisz?"
          );
          if (isDeleted) {
            let Id_Deleted = this.parentNode
              .getAttribute("delet-id")
              .substring(4);
            data = data.filter((smartPhone) => {
              return smartPhone.id != Id_Deleted;
            });
            localStorage.setItem("phones", JSON.stringify(data));
            mainScren.innerHTML = "";
            data.length &&
              data.forEach((smartPhone, index) => {
                let malumot = creatElements(smartPhone, index + 1);
                mainScren.innerHTML += malumot;
              });
          }
        });
    });
});
