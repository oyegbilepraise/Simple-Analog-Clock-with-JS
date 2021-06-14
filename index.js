setInterval (setClock, 1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand =document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const myDate = new Date()
    const secs = myDate.getSeconds() / 60
    const min = (secs + myDate.getMinutes()) / 60
    const hour = (min + myDate.getHours()) / 12
    setRotation(secondHand, secs)
    setRotation(minuteHand, min)
    setRotation(hourHand, hour)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()