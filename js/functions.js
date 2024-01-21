function validation(Inputname, inputNarx, inputCategory) {
  if (!Inputname.value) {
    alert("Name is empty!");
    Inputname.focus();
    return false;
  }
  if (Inputname.value.trim().length < 3) {
    alert("Name length must be more than 3 character!");
    Inputname.focus();
    return false;
  }
  if (!inputNarx.value) {
    alert("Cost is empty!");
    inputNarx.focus();
    return false;
  }
  if (!Number(inputNarx.value)) {
    alert("Cost must be number!");
    inputNarx.focus();
    return false;
  }
  if (!inputCategory.value) {
    alert("Category is empty!");
    inputCategory.focus();
    return false;
  }

  return true;
}

function creatElements(smartPhone, index) {
  return ` <tr>
  <td>${index}</td>
  <td>${smartPhone.name}</td>
  <td>${smartPhone.narx}</td>
  <td>${smartPhone.category}</td>
  <td delet-id = 'del_${smartPhone.id}'>  
   <i class="fa-solid fa-pen-to-square edit"></i>
   <i class="fa-solid fa-trash ml-3 delete">
   </i></td>
 </tr>`;
 }

 function getData() {
  let data = [];
  if (localStorage.getItem('phones')) {
    data = JSON.parse(localStorage.getItem('phones'))
  }
  return data;

}

export { validation, creatElements, getData };
