let para_head = document.querySelector("#head");
let bton_se = document.querySelector("#bton");
let url = "https://cat-fact.herokuapp.com/facts";

const get_fact = async () => {
    console.log("loading data...");
    let response = await fetch(url);
    let data = await response.json();
    para_head.innerText = data[2].text;
};

bton_se.addEventListener("click",get_fact);
/*  or
function get_fact(){
fetch(url).then( (response) => {
    return response.json();
}).then( (data) => {
    console.log(data);
    para_head.innerText = data[1].text;
}
)};
*/