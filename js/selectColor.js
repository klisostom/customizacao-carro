const formatMoney = (value) => {
    value = Number(value);
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

if (typeof localStorage.getItem("totalTemp") !== "undefined") {
    document.getElementById("totalOnColorMode").innerHTML = formatMoney(localStorage.getItem("totalTemp"));
}

if (typeof localStorage.getItem("kmhTemp") !== "undefined") {
    document.getElementById("kmhModelR").innerHTML = localStorage.getItem("kmhTemp");
}

if (typeof localStorage.getItem("kmhTemp") !== "undefined") {
    document.getElementById("typeModelR").innerHTML = localStorage.getItem("typeTemp");
}

if (typeof localStorage.getItem("colorDescri") !== "undefined") {
    document.getElementById("colorDescription").innerHTML = localStorage.getItem("colorDescri");
}

document.getElementById("labelInitial").innerHTML = localStorage.getItem("label1");
document.getElementById("priceColorInitial").innerHTML = `Included`;

const colorBlack = () => {
    document.getElementById("imgColor").innerHTML = `<picture class="w3-mobile">
    <source media="(min-width: 1280px)" sizes="50vw" srcset="../img/color-black-200.png 200w,  				
        ../img/color-black-400.png 400w,			
        ../img/color-black-600.png 600w">
    <img src="../img/color-black.png" class="w3-image" id="color" alt="color" sizes="(min-width: 640px) 60vw, 100vw"
        srcset="../img/color-black-200.png 200w,  				
        ../img/color-black-400.png 400w,				
        ../img/color-black-600.png 600w">
    </picture>

    <div class="w3-container" style="margin-left: 10%;">
        <h4>${localStorage.getItem("label3")}</h4>
        <h6 class="w3-text-red">+${localStorage.getItem("priceColor3")}</h6>
    </div>
    `;
    let priceTemp = Number(localStorage.getItem("totalTemp"));
    priceTemp += Number(localStorage.getItem("priceColor3"));
    document.getElementById("totalOnColorMode").innerHTML = formatMoney(priceTemp);

    localStorage.setItem("totalTempColor", priceTemp);
    localStorage.setItem("corTemp", localStorage.getItem("label3"));
    localStorage.setItem("priceColorChoose", localStorage.getItem("priceColor3"));
}

const colorBlue = () => {
    document.getElementById("imgColor").innerHTML = `<picture class="w3-mobile">
    <source media="(min-width: 1280px)" sizes="50vw" srcset="../img/color-200.png 200w,  				
        ../img/color-400.png 400w,			
        ../img/color-600.png 600w">
    <img src="../img/color-black.png" class="w3-image" id="color" alt="color" sizes="(min-width: 640px) 60vw, 100vw"
        srcset="../img/color-200.png 200w,  				
        ../img/color-400.png 400w,				
        ../img/color-600.png 600w">
    </picture>

    <div class="w3-container" style="margin-left: 10%;">
        <h4>${localStorage.getItem("label2")}</h4>
        <h6 class="w3-text-red">+${localStorage.getItem("priceColor2")}</h6>
    </div>`;

    let priceTemp = Number(localStorage.getItem("totalTemp"));
    priceTemp += Number(localStorage.getItem("priceColor2"));
    document.getElementById("totalOnColorMode").innerHTML = formatMoney(priceTemp);

    localStorage.setItem("totalTempColor", priceTemp);
    localStorage.setItem("corTemp", localStorage.getItem("label2"));
    localStorage.setItem("priceColorChoose", localStorage.getItem("priceColor2"));
}

const colorRed = () => {
    document.getElementById("imgColor").innerHTML = `<picture class="w3-mobile">
    <source media="(min-width: 1280px)" sizes="50vw" srcset="../img/color-red-200.png 200w,  				
        ../img/color-red-400.png 400w,			
        ../img/color-red-600.png 600w">
    <img src="../img/color-black.png" class="w3-image" id="color" alt="color" sizes="(min-width: 640px) 60vw, 100vw"
        srcset="../img/color-red-200.png 200w,  				
        ../img/color-red-400.png 400w,				
        ../img/color-red-600.png 600w">
    </picture>
    <div class="w3-container" style="margin-left: 10%;">
        <h4>${localStorage.getItem("label1")}</h4>
        <h6 class="w3-text-red">Included</h6>
    </div>
    `;
    localStorage.setItem("corTemp", localStorage.getItem("label1"));
    localStorage.setItem("priceColorChoose", localStorage.getItem("priceColor1"));
}