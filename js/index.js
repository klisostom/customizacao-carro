const modeloR = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("display").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./html/modeloR.html", true);
    xhttp.send();
}

const getJson = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const obj = JSON.parse(this.responseText);

            // Storing the prices of items of the engines in locaStorage
            setLocalStorageVPrices(obj.data.engine.items[0]["price"], obj.data.engine.items[1]["price"], obj.data.engine.items[2]["price"]);
            setLocalStorageKmh(obj.data.engine.items[0]["kwh"], obj.data.engine.items[1]["kwh"], obj.data.engine.items[2]["kwh"]);
            setLocalStorageType(obj.data.engine.items[0]["type"], obj.data.engine.items[1]["type"], obj.data.engine.items[2]["type"]);

            localStorage.setItem("totalTemp", 0);
            localStorage.setItem("initialPrice", obj.data.price);
            localStorage.setItem("colorDescri", obj.data.color.description);

            // set Wheels Data
            dataToWheels(obj.data.wheels.items);
            //=== End set Wheels Data

            // set Color Data
            dataToColors(obj.data.color.items);
            //=== End set Color Data

            // Set initial price
            initialPrice(localStorage.getItem("initialPrice"));

            // type engine 1
            const type = obj.data.engine.items[0]["type"];
            const km_h = obj.data.engine.items[0]["kwh"];
            const milesRange = obj.data.engine.items[0]["range"];
            const id = obj.data.engine.items[0]["id"];

            dataToEngineOne(type, km_h, milesRange, id);
            //=== End type engine 1

            // type engine 2
            const type2 = obj.data.engine.items[1]["type"];
            const km_h2 = obj.data.engine.items[1]["kwh"];
            const milesRange2 = obj.data.engine.items[1]["range"];
            const id2 = obj.data.engine.items[1]["id"];

            dataToEngineTwo(type2, km_h2, milesRange2, id2);
            //=== End type engine 2

            // type engine 3
            const type3 = obj.data.engine.items[2]["type"];
            const km_h3 = obj.data.engine.items[2]["kwh"];
            const milesRange3 = obj.data.engine.items[2]["range"];
            const id3 = obj.data.engine.items[2]["id"];

            dataToEngineThree(type3, km_h3, milesRange3, id3);
            //=== End type engine 3

            setLocalStorageRange(milesRange, milesRange2, milesRange3);
        }
    };

    xhttp.open("GET", "./js/json/41ORKNZDU.json", true);
    xhttp.send();
}

const dataToWheels = (wheelsItems) => {
    const label1 = wheelsItems[0]["label"];
    const label2 = wheelsItems[1]["label"];
    const label3 = wheelsItems[2]["label"];

    const price2 = wheelsItems[1]["price"];
    const price3 = wheelsItems[2]["price"];

    localStorage.setItem("labelWheels1", label1);
    localStorage.setItem("labelWheels2", label2);
    localStorage.setItem("labelWheels3", label3);
    localStorage.setItem("priceWheels2", price2);
    localStorage.setItem("priceWheels3", price3);
}

const dataToColors = (colorItems) => {
    const label1 = colorItems[0]["label"];//red
    const label2 = colorItems[1]["label"];//black
    const label3 = colorItems[2]["label"];//gray

    const price1 = colorItems[0]["price"];
    const price2 = colorItems[1]["price"];
    const price3 = colorItems[2]["price"];

    localStorage.setItem("label1", label1);
    localStorage.setItem("label2", label2);
    localStorage.setItem("label3", label3);
    localStorage.setItem("priceColor1", price1);
    localStorage.setItem("priceColor2", price2);
    localStorage.setItem("priceColor3", price3);
}

const setLocalStorageKmh = (kmh1, kmh2, kmh3) => {
    localStorage.setItem("kmh1", kmh1);
    localStorage.setItem("kmh2", kmh2);
    localStorage.setItem("kmh3", kmh3);
}

const setLocalStorageType = (type1, type2, type3) => {
    localStorage.setItem("type1", type1);
    localStorage.setItem("type2", type2);
    localStorage.setItem("type3", type3);
}

const setLocalStorageRange = (range1, range2, range3) => {
    localStorage.setItem("range1", range1);
    localStorage.setItem("range2", range2);
    localStorage.setItem("range3", range3);
}


const setLocalStorageVPrices = (x, y, z) => {
    localStorage.setItem("priceTypeOne", x);
    localStorage.setItem("priceTypeTwo", y);
    localStorage.setItem("priceTypeThree", z);
}

const formatMoney = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const initialPrice = (price) => {
    if (typeof price !== 'undefined') {
        document.getElementById("total").innerHTML = formatMoney(Number(price));
    } else {
        console.log("Erro ao recuperar o preço inicial.");
    }
}

const dataToEngineThree = (type3, km_h3, milesRange3, id3) => {
    const xType = document.getElementsByClassName("type3");
    for (let index = 0, len = xType.length; index < len; index++) {
        xType[index].innerHTML = type3;
    }

    const xKM_H = document.getElementsByClassName("km_h3");
    for (let index = 0, len = xKM_H.length; index < len; index++) {
        xKM_H[index].innerHTML = km_h3;
    }

    document.getElementById("milesRange3").innerHTML = milesRange3;

    const radioBox = document.querySelector("#escolhaTypeThree");
    radioBox.setAttribute("value", id3);


}

const dataToEngineTwo = (type2, km_h2, milesRange2, id2) => {
    const xType = document.getElementsByClassName("type2");
    for (let index = 0, len = xType.length; index < len; index++) {
        xType[index].innerHTML = type2;
    }

    const xKM_H = document.getElementsByClassName("km_h2");
    for (let index = 0, len = xKM_H.length; index < len; index++) {
        xKM_H[index].innerHTML = km_h2;
    }

    document.getElementById("milesRange2").innerHTML = milesRange2;

    const radioBox = document.querySelector("#escolhaTypeTwo");
    radioBox.setAttribute("value", id2);
}

// setting engine one
const dataToEngineOne = (type, km_h, milesRange, id) => {
    const xType = document.getElementsByClassName("type");
    for (let index = 0, len = xType.length; index < len; index++) {
        xType[index].innerHTML = type;
    }

    const xKM_H = document.getElementsByClassName("km_h");
    for (let index = 0, len = xKM_H.length; index < len; index++) {
        xKM_H[index].innerHTML = km_h;
    }

    document.getElementById("milesRange").innerHTML = milesRange;

    const radioBox = document.querySelector("#escolhaTypeOne");
    radioBox.setAttribute("value", id);
}

const calcPriceTypeThree = () => {
    const x = document.getElementById("escolhaTypeThree").checked;

    if (x === true) {
        const price = Number(localStorage.getItem('priceTypeThree'));
        const finalValue = 63000 + price;
        document.getElementById("total").innerHTML = formatMoney(finalValue);
        document.getElementById("feedbackPrice3").innerHTML = `<span class="w3-text-red" >+$${price}</span>`;
        localStorage.setItem("totalTemp", finalValue);
        localStorage.setItem("kmhTemp", localStorage.getItem("kmh3"));
        localStorage.setItem("typeTemp", localStorage.getItem("type3"));
        localStorage.setItem("milesTemp", localStorage.getItem("range3"));
        localStorage.setItem("priceChoose", price);

        // Altering the bottom of Model R
        document.getElementById("kmhModelR").innerHTML = localStorage.getItem("kmh3");
        document.getElementById("typeModelR").innerHTML = localStorage.getItem("type3");

        setTimeout(function () {
            document.getElementById("feedbackPrice3").innerHTML = ``;
        }, 1500);
    }
}

const calcPriceTypeTwo = () => {
    const x = document.getElementById("escolhaTypeTwo").checked;

    if (x === true) {
        const price = Number(localStorage.getItem('priceTypeTwo'));
        const finalValue = 63000 + price;
        document.getElementById("total").innerHTML = formatMoney(finalValue);
        document.getElementById("feedbackPrice2").innerHTML = `<span class="w3-text-red" >+$${price}</span>`;
        localStorage.setItem("totalTemp", finalValue);
        localStorage.setItem("kmhTemp", localStorage.getItem("kmh2"));
        localStorage.setItem("typeTemp", localStorage.getItem("type2"));
        localStorage.setItem("milesTemp", localStorage.getItem("range2"));
        localStorage.setItem("priceChoose", price);

        // Altering the bottom of Model R
        document.getElementById("kmhModelR").innerHTML = localStorage.getItem("kmh2");
        document.getElementById("typeModelR").innerHTML = localStorage.getItem("type2");

        setTimeout(function () {
            document.getElementById("feedbackPrice2").innerHTML = ``;
        }, 1500);
    }
}

const calcPriceTypeOne = () => {
    const x = document.getElementById("escolhaTypeOne").checked;

    if (x === true) {
        const price = Number(localStorage.getItem('priceTypeOne'));
        const finalValue = 63000 + price;
        document.getElementById("total").innerHTML = formatMoney(finalValue);
        localStorage.setItem("kmhTemp", localStorage.getItem("kmh1"));
        localStorage.setItem("typeTemp", localStorage.getItem("type1"));
        localStorage.setItem("milesTemp", localStorage.getItem("range1"));
        localStorage.setItem("priceChoose", price);

        // Altering the bottom of Model R
        document.getElementById("kmhModelR").innerHTML = localStorage.getItem("kmh1");
        document.getElementById("typeModelR").innerHTML = localStorage.getItem("type1");
    }
}