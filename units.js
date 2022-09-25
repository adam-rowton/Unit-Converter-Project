// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const btn = document.getElementById("btn")
const input = document.getElementById("input")


const volume = document.getElementById("volume")
const length = document.getElementById("length")
const mass = document.getElementById("mass")


input.addEventListener("keyup", function() {
    setValue()
})

window.onload = setValue()

function setValue() {
    let userValue = input.value
    console.log(userValue)

    // formula equations

    const meters = (userValue / 3.281).toFixed(2)
    const feet = (userValue * 3.281).toFixed(2)

    const liters = (userValue / 0.264).toFixed(2)
    const gallons = (userValue * 0.264).toFixed(2)

    const kilos = (userValue / 2.204).toFixed(2)
    const pounds = (userValue * 2.204).toFixed(2)


    if (userValue === "") {
        userValue = 0
        length.innerHTML = `${userValue} meters = ${feet} feet | ${userValue} feet = ${meters} meters`
        volume.innerHTML = `${userValue} liters = ${gallons} gallons | ${userValue} gallons = ${liters} liters`
        mass.innerHTML = `${userValue} kilograms = ${pounds} pounds | ${userValue} pounds = ${kilos} kilograms`

    } else if (userValue == 1) {
        length.innerHTML = `${userValue} meter = ${feet} feet | ${userValue} foot = ${meters} meters`
        volume.innerHTML = `${userValue} liter = ${gallons} gallons | ${userValue} gallon = ${liters} liters`
        mass.innerHTML = `${userValue} kilogram = ${pounds} pounds | ${userValue} pound = ${kilos} kilograms`

    } else {




        // DOM manipulations

        length.innerHTML = `${userValue} meters = ${feet} feet | ${userValue} feet = ${meters} meters`
        volume.innerHTML = `${userValue} liters = ${gallons} gallons | ${userValue} gallons = ${liters} liters`
        mass.innerHTML = `${userValue} kilograms = ${pounds} pounds | ${userValue} pounds = ${kilos} kilograms`

    }
}