const formatMoney = (value) => {
    value = Number(value);
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// price
document.getElementById("startingPrice").innerHTML = formatMoney(localStorage.getItem("initialPrice"));

// tipe, km and miles
const kmh = localStorage.getItem("kmhTemp");
const type = localStorage.getItem("typeTemp");
const miles = localStorage.getItem("milesTemp");

document.getElementById("kt-miles").innerHTML = `${kmh} ${type} - ${kmh}KWh - ${miles} miles range`;
document.getElementById("kt-milesPrice").innerHTML = formatMoney(localStorage.getItem("priceChoose"));


// cor corTemp
document.getElementById("cor").innerHTML = localStorage.getItem("corTemp");
document.getElementById("corPrice").innerHTML = formatMoney(localStorage.getItem("priceColorChoose"));

// Wheels
document.getElementById("wheels").innerHTML = localStorage.getItem("labelChooseWheels");
document.getElementById("wheelsPrice").innerHTML = formatMoney(localStorage.getItem("priceChooseWheels"));

const totalFinal = Number(localStorage.getItem("priceChooseWheels")) + Number(localStorage.getItem("priceColorChoose")) + Number(localStorage.getItem("priceChoose")) + Number(localStorage.getItem("initialPrice"));
document.getElementById("finalPrice").innerHTML = formatMoney(totalFinal);