
const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdown = document.querySelectorAll(".dropdown1 select");
let btn = document.querySelector(".butt");
let fromcurr = document.querySelector(".from select");
let to_Curr = document.querySelector(".to select");
let msg = document.querySelector(".mass");
for(let select of dropdown){
for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);
    if( select.name === "from" && code ==="USD"){
        newOption.selected = "selected";
    }
    else if(select.name === "to" && code ==="INR"){
        newOption.selected = "selected";
    }
}
select.addEventListener("change",(evnt) => {
updateFlag(evnt.target);
})
}
const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = newSrc;
}
btn.addEventListener( "click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 1) {
      amountValue = 1;
      amount.value = "1";
    }
    const URL = ` ${base_url}/${fromcurr.value.toLowerCase()}/${to_Curr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[ to_Curr.value.toLowerCase()];
    let finalAmount = rate * amountValue;
    msg.innerHTML = `${amountValue} ${fromcurr.value} = ${finalAmount} ${to_Curr.value}`;
    });
