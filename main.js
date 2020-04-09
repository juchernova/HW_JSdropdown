
let arr = [
'Алушта',
'Белгород',
'Владикавказ',
'Гурзуф',
'Днепропетровск',
'Евпатория',
'Железногорск',
'Запорожье',
'Иркутск',
'Киев',
'Львов',
'Москва',
'Нижневартовск',
'Орел',
'Псков',
'Ровно',
'Симферополь',
'Томск',
'Уфа',
'Феодосия',
'Хабаровск',
'Челябинск',
'Шахты',
'Щелкино',
'Энергодар',
'Южно-Сахалинск',
'Ялта',
];


// let arrList = '';
// arr.forEach(myFunction);
// document.getElementById("myList").innerHTML = arrList;

// function myFunction(item, i, arr) {
//   arrList += '<li>' + item + '</li>';

// }
let ul = document.getElementById("myList");



let content = document.getElementById("dropdownContent");
let myDropdown = document.getElementById('myDropdown');
let searhCity = document.getElementById('search');

myDropdown.addEventListener( "click" , () => content.style.display = "block");
// searhCity.addEventListener( "click" , () => ul.style.display = "none");

// let filteredArray = arr.filter((nameCity) => {
//   return nameCity == searhCity.value;
// })

searhCity.addEventListener( 'keyup', () => {

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  let filteredArray = arr.filter((nameCity) => {
    return nameCity.toLowerCase().indexOf(searhCity.value.toLowerCase()) >= 0;
  });

  filteredArray.forEach((item, i, arr) => {
    let li = document.createElement('li');
    li.innerText = item;
    ul.append(li);
  })

})

searhCity.addEventListener( 'keyup', (event) => {
  
  if (event.code == 'Backspace') {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }   
  }
})

