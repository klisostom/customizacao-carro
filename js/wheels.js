const formatMoney = (value) => {
    value = Number(value);
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// default
localStorage.setItem("labelChooseWheels", localStorage.getItem("labelWheels1"));

if (typeof localStorage.getItem("totalTempColor") !== "undefined") {
    const totalTemp = formatMoney(localStorage.getItem("totalTempColor"));
    document.getElementById("totalOnWheelsMode").innerHTML = totalTemp;
}

if (typeof localStorage.getItem("kmhTemp") !== "undefined") {
    document.getElementById("kmhModelR").innerHTML = localStorage.getItem("kmhTemp");
}

if (typeof localStorage.getItem("typeTemp") !== "undefined") {
    document.getElementById("typeModelR").innerHTML = localStorage.getItem("typeTemp");
}

if (typeof localStorage.getItem("labelWheels1") !== "undefined") {
    document.getElementById("label1").innerHTML = localStorage.getItem("labelWheels1");
}

if (typeof localStorage.getItem("labelWheels2") !== "undefined") {
    document.getElementById("label2").innerHTML = localStorage.getItem("labelWheels2");
}

if (typeof localStorage.getItem("labelWheels3") !== "undefined") {
    document.getElementById("label3").innerHTML = localStorage.getItem("labelWheels3");
}

if (typeof localStorage.getItem("priceWheels2") !== "undefined") {
    document.getElementById("priceWheels2").innerHTML = formatMoney(localStorage.getItem("priceWheels2"));
}

if (typeof localStorage.getItem("priceWheels3") !== "undefined") {
    document.getElementById("priceWheels3").innerHTML = formatMoney(localStorage.getItem("priceWheels3"));
}

const calcPriceWheels2 = () => {
    const priceTemp = Number(localStorage.getItem("totalTempColor"));
    const priceFinal = priceTemp + Number(localStorage.getItem("priceWheels2"));
    document.getElementById("totalOnWheelsMode").innerHTML = formatMoney(priceFinal);

    localStorage.setItem("totalTempWheels", priceFinal);
    localStorage.setItem("priceChooseWheels", localStorage.getItem("priceWheels2"));
    localStorage.setItem("labelChooseWheels", localStorage.getItem("labelWheels2"));
}

const calcPriceWheels3 = () => {
    const priceTemp = Number(localStorage.getItem("totalTempColor"));
    const priceFinal = priceTemp + Number(localStorage.getItem("priceWheels3"));
    document.getElementById("totalOnWheelsMode").innerHTML = formatMoney(priceFinal);
    localStorage.setItem("totalTempWheels", priceFinal);
    localStorage.setItem("priceChooseWheels", localStorage.getItem("priceWheels3"));
    localStorage.setItem("labelChooseWheels", localStorage.getItem("labelWheels3"));
}