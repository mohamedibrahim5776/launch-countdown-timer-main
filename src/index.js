let days = document.querySelector('.days .num span') 
let hours = document.querySelector('.hours .num span') 
let minutes  = document.querySelector('.minutes .num span') 
let seconds = document.querySelector('.seconds .num span') 
let dateEnd = new Date("jun 17, 2023 23:59:59").getTime();
// console.log(dateEnd)
let count = setInterval(() => {
    let dateNow = new Date().getTime()
    let dateDown = dateEnd - dateNow
    let day = Math.floor(dateDown / (1000 * 60 * 60 * 24))
    days.innerHTML = day
    let hour = Math.floor(dateDown % (1000 * 60 * 60 * 24) /(1000 * 60 * 60) )
    hours.innerHTML = hour
    let minute = Math.floor(dateDown % (1000 * 60 * 60) / (1000 * 60))
    minutes.innerHTML = minute
    let second = Math.floor(dateDown % (1000 * 60) / 1000)
    seconds.innerHTML = second
    if (dateDown < 0) {
        clearInterval(count)
    }
}, 1000);