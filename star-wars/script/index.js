const mainContainer = document.getElementById("big-container");

const images = [
  "https://media.vanityfair.com/photos/56dafc6130c1a42b3fbdafb8/5:3/w_1200,h_720,c_limit/skywalker-luke.0.0.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-2dprr0_16d98939.jpeg?region=0%2C0%2C1280%2C842",
  "https://static.wikia.nocookie.net/starwars/images/1/1a/R2d2.jpg/revision/latest?cb=20090524204255",
  "https://imageio.forbes.com/specials-images/imageserve/6090f7f251c9c6c605e612fc/0x0.jpg?format=jpg&crop=3127,1759,x0,y33,safe&width=1200",
  "https://static.wikia.nocookie.net/swbloodlines/images/d/db/Leia_Organa.jpg/revision/latest?cb=20180321035634",
  "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C0%2C940%2C706",
  "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=338%2C0%2C942%2C531",
  "https://static.wikia.nocookie.net/starwars/images/6/6e/FerryAstroDroid.png/revision/latest?cb=20220227235940",
  "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F13%2FRevenge-of-the-Sith.jpg&q=60",
];

const fetchData = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const convertResponse = await response.json();
  const result = convertResponse.results;
  return result;
};

const displayData = async () => {
  let results = await fetchData();
  mainContainer.innerHTML = "";
  const list = document.createElement("div");
  list.classList.add("starwars");
  results.map((data, index) => {
    const starWars = `
           <h1 class="info">${data.name}</h1>
           <div class="details">
           <img src=${images[index]}/>
           <h3 class="info">${data.gender}</h3>
           <h5 class="info">${data.height}</h5>
           </div>
            <button id="btn" class="btn">Show More Details</button>
        `;
    const item = document.createElement("div");
    item.classList.add("item", "hidden");
    item.innerHTML = starWars;
    const btn = item.querySelector(".btn");
    btn.addEventListener("click", toggle);
    list.appendChild(item);
  });
  mainContainer.append(list);
};

displayData();

const toggle = (event) => {
  const element = event.target.closest(".item");
  element.classList.toggle("hidden");
};

// module.exports = { main }