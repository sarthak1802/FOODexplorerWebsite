var nam = document.querySelector(".name");
var img = document.querySelector(".img");
var place = document.querySelector(".state");
var para = document.querySelector(".desc");
var btnleft = document.querySelector(".btn-left");
var btnright = document.querySelector(".btn-right");
var k = -1;
var kInit = k;
var food = [
    {
    id: ++k,
    name: "Biryani",
    place: "South Asia",
    img: "biryani_650x400_51485331851.jpg",
    explain: "Biryani is a group of classic dishes dating back to the Mughal Empire. The main ingredients of biryani are rice (ideally basmati), spices, a base of meat, eggs, or vegetables, and numerous optional ingredients such as dried fruits, nuts, and yogurt."
    },
    {
        id: ++k,
        name: "Pizza",
        place: "Italy",
        img: "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
        explain: "Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."
    },
    {
        id: ++k,
        name: "Burger",
        place: "US",
        img: "https://static.fanpage.it/wp-content/uploads/sites/22/2020/03/iStock-1152247466-638x425.jpg",
        explain: "A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled."
    },
    {
        id: ++k,
        name: "Coca",
        place: "US",
        img: "https://iex-website.s3.amazonaws.com/images/github/158a844e-e787-11e5-89d1-0ba29e5bbdd2.jpg",
        explain: "The Coca-Cola Company is an American multinational beverage corporation. Best served with Pizza. Has a great taste and I am sure you will like it. Just have a sip and it will calm your entire senses. People love this beverage and you won't be an exception."
    }
];
let curr = 0;
window.addEventListener('DOMContentLoaded', function () {
    loader(curr)
});

function loader(current) {
    var item = food[current];
    nam.textContent = item.name;
    img.src = item.img;
    place.textContent = "Originated from : " + item.place;
    para.textContent = item.explain;
}

btnleft.addEventListener("click", function () {
    if (curr > (kInit + 1))
        curr--;
    loader(curr);
});
btnright.addEventListener("click", function () {
    if (curr < k)
        curr++;
    loader(curr);
});