
const SearchRood = () => {
    const InputFood = document.getElementById('InputFood');
    const searchRuselt = document.getElementById("FoodBox");
    const InputFoodValue = InputFood.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${InputFoodValue}`
    fetch(url)
        .then(res => res.json())
        .then(json => ApiRead(json.meals));
    InputFood.value = ''
    searchRuselt.innerHTML=''
} 
const ApiRead =  JsonData => {
    const searchRuselt = document.getElementById("FoodBox");
    JsonData.forEach(fooddata => {
        console.log(fooddata)
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                <img src="${fooddata.strMealThumb}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${fooddata.strMeal}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <a href="${fooddata.strYoutube}" target="_blank" class="btn btn-primary">Go somewhere</a>
                </div>
        `;
        searchRuselt.appendChild(div);    
    });
}