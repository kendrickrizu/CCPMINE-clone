const machineSection = document.querySelector(".machine-section")
const cryptoCurrencies = document.querySelector(".crypto-currencies")
const activitiesSection = document.querySelector(".activity-cards")

const activities = [
  {
    icon: "fa-solid fa-user-plus",
    title: "Invite"
  },
  {
    icon: "fa-solid fa-server",
    title: "Miner"
  },
  {
    icon: "fa-solid fa-gift",
    title: "Bonus"
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Exchange"
  },
  {
    icon: "fa-solid fa-ticket",
    title: "Raffle"
  },
  {
    icon: "fa-solid fa-tags",
    title: "Coupon"
  },
  {
    icon: "fa-solid fa-circle-info",
    title: "About Us"
  },
  {
    icon: "fa-solid fa-building",
    title: "Company"
  }
];


const coins = [
  {
    icon: "🪙",
    name: "BTC",
    value: 27850.12,
    percentageChange: "+1.24%"
  },
  {
    icon: "🪙",
    name: "ETH",
    value: 1820.65,
    percentageChange: "-0.87%"
  },
  {
    icon: "🪙",
    name: "DOGE",
    value: 0.065,
    percentageChange: "+2.15%"
  },
  {
    icon: "🪙",
    name: "BNB",
    value: 215.45,
    percentageChange: "+0.45%"
  },
  {
    icon: "🪙",
    name: "SOL",
    value: 24.33,
    percentageChange: "-1.12%"
  },
  {
    icon: "🪙",
    name: "XRP",
    value: 0.51,
    percentageChange: "+0.92%"
  },
  {
    icon: "🪙",
    name: "ADA",
    value: 0.27,
    percentageChange: "-0.35%"
  },
  {
    icon: "🪙",
    name: "LTC",
    value: 65.30,
    percentageChange: "+1.08%"
  }
];


const machines = [
  {
    image: "logo.png",
    title: "BTC cloud computing power m6",
    netIncomePerDay: 12,
    totalRevenue: 2400,
    purchaseLimit: 1,
    validityPeriod: "200 days",
    computingPower: 240,
    cost: "400 USD"
  },
  {
    image: "eth-logo.png",
    title: "ETH cloud computing power e3",
    netIncomePerDay: 8,
    totalRevenue: 1600,
    purchaseLimit: 2,
    validityPeriod: "180 days",
    computingPower: 180,
    cost: "300 USD"
  },
  {
    image: "ltc-logo.png",
    title: "LTC cloud computing power l9",
    netIncomePerDay: 5,
    totalRevenue: 1000,
    purchaseLimit: 3,
    validityPeriod: "150 days",
    computingPower: 120,
    cost: "200 USD"
  }
];


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
            <span class="coin-icon">${coin.icon} <span class="coin-name">${coin.name}</span></span>
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
                    <img src="logo.png"  alt="machine-image">
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




