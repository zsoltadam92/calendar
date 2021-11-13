const calendar = [
  {
    year: "2021",
    month: "január",
    firstWeek: ["","","","","1","2","3"],
    secondWeek: ["4","5","6","7","8","9","10"],
    thirdWeek: ["11","12","13","14","15","16","17"],
    fourthWeek: ["18","19","20","21","22","23","24"],
    fifthWeek: ["25", "26", "27", "28", "29", "30", "31"],
    specialDays: {
      1: "Újév",
      13: "Tibor, Kata születésnap"
    },
  },
  {
    year: "2021",
    month: "február",
    firstWeek: ["1","2","3","4","5","6","7"],
    secondWeek: ["8","9","10","11","12","13","14"],
    thirdWeek: ["15","16","17","18","19","20","21"],
    fourthWeek: ["22","23","24","25","26","27","28"],
    fifthWeek: ["", "", "", "", "", "", ""],
    specialDays: {
      19: "Zuszanna névnap",
      26: "Zsolti születésnap"
    },
  },
  {
    year: "2021",
    month: "március",
    firstWeek: ["1","2","3","4","5","6","7"],
    secondWeek: ["8","9","10","11","12","13","14"],
    thirdWeek: ["15","16","17","18","19","20","21"],
    fourthWeek: ["22","23","24","25","26","27","28"],
    fifthWeek: ["29", "30", "31", "", "", "", ""],
    specialDays: {
      15: "Nemzeti ünnep",
    },
  },
  {
    year: "2021",
    month: "április",
    firstWeek: ["","","","1","2","3","4"],
    secondWeek: ["5","6","7","8","9","10","11"],
    thirdWeek: ["12","13","14","15","16","17","18"],
    fourthWeek: ["19","20","21","22","23","24","25"],
    fifthWeek: ["26", "27", "28", "29", "30", "", ""],
    specialDays: {
      10: "Zsolti névnap",
      14: "Tibor névnap"
    },
  },
]


let currentItem = 0;

window.addEventListener('DOMContentLoaded', calendarContent)

function calendarContent() {
  const item = calendar[currentItem]
  year.textContent = item.year
  month.textContent = item.month
  
  let firstWeek = document.querySelector('.first-week')
  let secondWeek = document.querySelector('.second-week')
  let thirdWeek = document.querySelector('.third-week')
  let fourthWeek = document.querySelector('.fourth-week')
  let fifthWeek = document.querySelector('.fifth-week')
  
  firstWeek.innerHTML = item.firstWeek.map(function (item) {
    return `<div class="square"><span class="number ${calendar[currentItem].specialDays[item]  ? "special-number" : ""}">${item}</span></div>`
  }).join("")

  secondWeek.innerHTML = item.secondWeek.map(function (item) {
    return `<div class="square"><span class="number ${calendar[currentItem].specialDays[item]  ? "special-number" : ""}">${item}</span></div>`
  }).join("")

  thirdWeek.innerHTML = item.thirdWeek.map(function (item) {
    return `<div class="square"><span class="number ${calendar[currentItem].specialDays[item]  ? "special-number" : ""}">${item}</span></div>`
  }).join("")

  fourthWeek.innerHTML = item.fourthWeek.map(function (item) {
    return `<div class="square"><span class="number ${calendar[currentItem].specialDays[item]  ? "special-number" : ""}">${item}</span></div>`
  }).join("")

  fifthWeek.innerHTML = item.fifthWeek.map(function (item) {
    return `<div class="square"><span class="number ${calendar[currentItem].specialDays[item]  ? "special-number" : ""}">${item}</span></div>`
  }).join("")
  
  displayModal()
}


// button events 

let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')

nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > calendar.length - 1) {
    currentItem = 0
  }
  calendarContent()
})

prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = calendar.length - 1
  }
  calendarContent()
})


// modal 
function displayModal() {
  let numbers = document.querySelectorAll('.number')
  // console.log(number)
  const closeBtn = document.querySelector('.close-btn')
  const modalOverlay = document.querySelector('.modal-overlay')
  const modalText = document.querySelector('.modal-text')

  
  numbers.forEach(function (number) {
    number.addEventListener('click', function (e) {
      modalOverlay.classList.add('open-modal')
      
      let target = e.currentTarget.innerHTML
      // console.log(calendar[currentItem].specialDays[target])
      if (calendar[currentItem].specialDays.hasOwnProperty(target)) {
        modalText.innerHTML = calendar[currentItem].specialDays[target]
      } else {
        modalText.innerHTML = ""
      }
    })
  })

  closeBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal')
  })
}