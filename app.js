const start_date = document.getElementById("start-date");
const end_date = document.getElementById("end-date");
const btn_generate = document.getElementById("btn-generate");
const tableData = document.getElementById("tableRow");
const sideDishChecked = document.querySelector(".sideDishChecked");
const mainCurryChecked = document.querySelector(".mainCurryChecked");
const SoupChecked = document.querySelector(".soupChecked");
const allCkeck = document.getElementsByName("check");

let curries_arr = [
  {
    id: 1,
    name: "ကြက်သား",
    taste: "ချို",
  },
  {
    id: 2,
    name: "ကြက်ဉ",
    taste: "ချို",
  },
  {
    id: 3,
    name: "ခါကြက်ဉသုတ်",
    taste: "ချို",
  },
  {
    id: 4,
    name: "ကြက်မြစ်ကြက်သည်း",
    taste: "ချို",
  },
  {
    id: 5,
    name: "ငါး",
    taste: "ချို",
  },
  {
    id: 6,
    name: "ဝက်သား",
    taste: "ချို",
  },
  {
    id: 7,
    name: "လဘ္ဖက်သုတ်",
    taste: "ချို",
  },
  {
    id: 8,
    name: "အစုံသုတ်",
    taste: "ချို",
  },
  {
    id: 9,
    name: "ကြောက်ပွင့်သုတ်",
    taste: "ချို",
  },
  {
    id: 10,
    name: "ခရမ်းသီးသုတ်",
    taste: "ချို",
  },
];

let soup_arr = [
  {
    id: 1,
    name: "ဘူးသီးသပျွင်း",
    taste: "ချို",
  },
  {
    id: 2,
    name: "ဟင်းသီးရွက်ရည်",
    taste: "ချို",
  },
  {
    id: 3,
    name: "ပဲဟင်း",
    taste: "ချို",
  },
  {
    id: 4,
    name: "ဆွန်တန်ဟင်းရည်",
    taste: "စပ်",
  },
  {
    id: 5,
    name: "ချဉ်စပ်ဟင်းရည်",
    taste: "ချဉ်စပ်",
  },
  {
    id: 6,
    name: "ချဉ်ရည်",
    taste: "ချဉ်",
  },
  {
    id: 7,
    name: "ကြက်သားပြုတ်ဟင်းရည်",
    taste: "ချို",
  },
  {
    id: 8,
    name: "ဝက်သားပြုတ်ဟင်းရည်",
    taste: "စပ်",
  },
  {
    id: 9,
    name: "ပဲကုလားဟင်း",
    taste: "ချို",
  },
  {
    id: 10,
    name: "မကျဉ်းရွက် ဟင်းရည်",
    taste: "ချဉ်",
  },
];

let side_dish = [
  {
    id: 1,
    name: "ကန်စွန်းရွက်မှိုကြော်",
    taste: "ချို",
  },
  {
    id: 2,
    name: "ပုံးရည်ချည်းသုတ်",
    taste: "စိမ့်",
  },
  {
    id: 3,
    name: "ကန်စွန်းရွက်ကြော်",
    taste: "ချို",
  },
  {
    id: 4,
    name: "အစိမ်းကြော်",
    taste: "စပ်",
  },
  {
    id: 5,
    name: "ပဲပင်ပေါက်ကြော်",
    taste: "ချဉ်စပ်",
  },
  {
    id: 6,
    name: "အာလူးသီးချက်",
    taste: "ချဉ်",
  },
  {
    id: 7,
    name: "ငါးပိကြော်",
    taste: "စပ်",
  },
  {
    id: 8,
    name: "ငရုပ်သီးထောင်း",
    taste: "စပ်",
  },
  {
    id: 9,
    name: "ငံပြာရည်ဖျော်",
    taste: "စပ်",
  },
  {
    id: 10,
    name: "ပန်ထွေဖျော်",
    taste: "စပ်",
  },
  {
    id: 11,
    name: "ချဉ်ပေါင်ရွက်ကြော်",
    taste: "ချဉ်",
  },
  {
    id: 12,
    name: "သားရက်ချဉ်သုတ်",
    taste: "ချဉ်",
  },
  {
    id: 13,
    name: "သရက်သီးထောင်း",
    taste: "ချဉ်",
  },
];

let menuList = [];
let rowData = "";

function generateRandom(array) {
  return array[Math.floor(Math.random() * array.length)].name;
}

function displayData() {
  tableData.innerHTML = "";
  menuList.forEach((element) => {
    rowData += `
         <tr>   
             <td>${element.Id}</td>
             <td>${element.maincurry}</td>
             <td>${element.sideDish}</td>
             <td>${element.soup}</td>
        </tr>
         `;
  });
  tableData.innerHTML += rowData;
}

function generateMenu(id, sideDish, curry, soup) {
  let randomSide_dish, randomCurries, randomSoup;
  if (sideDish) {
    randomSide_dish = generateRandom(side_dish);
  } else {
    randomSide_dish = "not Selected Sied Dish";
  }
  if (curry) {
    randomCurries = generateRandom(curries_arr);
  } else {
    randomCurries = "not Selected Main Curry";
  }
  if (soup) {
    randomSoup = generateRandom(soup_arr);
  } else {
    randomSoup = "not Selected Soup";
  }
  let menu = {
    Id: id,
    maincurry: randomCurries,
    sideDish: randomSide_dish,
    soup: randomSoup,
  };
  return menu;
}

function genreratedMenu() {
  const startDateValue = new Date(start_date.value);
  const endDateValue = new Date(end_date.value);
  let menuItem;
  let id = 1;
  if (startDateValue != null || endDateValue != null) {
    for (let i = startDateValue.getDate(); i <= endDateValue.getDate(); i++) {
      if (
        !sideDishChecked.checked &&
        !mainCurryChecked.checked &&
        !SoupChecked.checked
      ) {
        menuItem = generateMenu(id, true, true, true);
      } else {
        menuItem = generateMenu(
          id,
          sideDishChecked.checked,
          mainCurryChecked.checked,
          SoupChecked.checked
        );
      }
      menuList.push(menuItem);
      id++;
    }
  } else {
    alert("Select start Date and end date ");
  }
}

btn_generate.addEventListener("click", () => {
  tableData.innerHTML = "";
  menuList = [];
  genreratedMenu();
  displayData();
});
