const machineSection = document.querySelector(".machine-section")
const cryptoCurrencies = document.querySelector(".crypto-currencies")
const activitiesSection = document.querySelector(".activity-cards")
import { activities, coins, machines } from "/data.js";


renderMachines()
renderCurrencies()
renderActivities()

function renderActivities() {
    let activitiesHtml = ""
    for (const activity of activities) {
        activitiesHtml += `<a href="${activity.title}.html">
                              <div class="card">
                                <i class=" card-icon ${activity.icon} ${activity.title}"></i>
                                <p>${activity.title}</p>
                              </div> 
                           </a>`
        }
activitiesSection.innerHTML = activitiesHtml
}


function renderCurrencies() {
    let cryptoHtml = ""
for (const coin of coins) {
    cryptoHtml +=
            `<div class="coin-card">
            <span class="coin-icon">
              <img src = "images/${coin.name}.png" alt="${coin.name}">
              <span class="coin-name">${coin.name}</span>
            </span>
            <span class="coin-value">${coin.value}<span class="percentage-change">${coin.percentageChange}</span></span>
           </div>`
}
cryptoCurrencies.innerHTML = cryptoHtml
}


function renderMachines() {
let html = ""  
for (const machine of machines) {
    html +=
            `<div class="machine">
                <span>HOT</span>
                <div class="machine-image">
                    <img src= ${machine.image}  alt="machine-image">
                </div>
                <div class="machine-info">
                    <h3>${machine.title}</h3>
                    <p>Net income/day <span>${machine.netIncomePerDay}</span></p>
                    <p>Total Revenue <span>${machine.totalRevenue}</span></p>
                    <p>Purchase limit <span>${machine.purchaseLimit}</span></p>
                    <p>Validity period <span>${machine.validityPeriod}</span></p>
                    <p>Computing power <span>${machine.computingPower}</span></p>
                </div>
                <div class="machine-pay">
                    <span class="machine-cost">${machine.cost}</span>
                    <button class="payment-btn">Buy</button>
                </div>
            </div>
`
}
machineSection.innerHTML = html
}


    // TIMER CODE

const timerBox = document.querySelector(".timer-box")
renderTimer()

function renderTimer() {
   let days = 0 
   let hrs = 0 
   let mins = 0
   let secs = 0

   let startTime = new Date("2025-10-04T07:00:00").getTime()

   setInterval(updateTime, 1000);

   function updateTime() {
    const now = Date.now()
    const elapsed = now - startTime

    const secs = Math.floor((elapsed / 1000) % 60)
    const mins = Math.floor((elapsed / (1000 * 60)) % 60)
    const hrs = Math.floor((elapsed / (1000 * 60 * 60)) % 24)
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24))
   
   

   let timerHtml =   `<h2>Platform is running securely</h2>
                      <div class="flexbox">
                      <span>${days} <span class="time-desc">days</span></span>
                      <span>${hrs} <span class="time-desc">hours</span></span>
                      <span>${mins} <span class="time-desc">minutes</span></span>
                      <span>${secs} <span class="time-desc">seconds</span></span>
                      </div>`
   timerBox.innerHTML = timerHtml
}
}

