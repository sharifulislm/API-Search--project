function searchFood(){
 const searchInput = document.getElementById("search-input");
const searchText = searchInput.value;
// console.log(valueInput);
searchInput.value ='';
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
console.log(url);
fetch(url)
.then(res => res.json())
.then(data => displaySearchResult(data.meals));

}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col-4');
        div.innerHTML = `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.idMeal}</h5>
          <h6>${meal.strArea} </h6>
          <p class="card-text"> ${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>

        `
        searchResult.appendChild(div);
        
    });
}