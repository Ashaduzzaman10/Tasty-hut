const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("food-container");
  mealsContainer.textContent = "";

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("row");
meals = meals.slice(0, 10);
    mealDiv.innerHTML = `
          <div class="col-sm-6 mb-3 mb-sm-0" >
            <div class="card" >
              <div class="card-body">
                <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="${meal.strMealThumb}"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">
                         There are many variations of passages of available, but the majority have suffered
                        </p>
                       
                       <!-- Button trigger modal -->
               </div>
            
                      </div>
                    </div>
                  </div>
                </div>
                <p class="card-text">
                          
                          
                             <button  onclick="loadMealsDetails(${meal.idMeal})" type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
     View Details
               </button>
              
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="${meal.strMealThumb}"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">
                         There are many variations of passages of available, but the majority have suffered
                        </p>
                     
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
               <p class="card-text">
                                    <!-- Button trigger modal -->
              <button  onclick="loadMealsDetails(${meal.idMeal})" type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
              view details
              </button>  
            </div>
          </div>
    `;

    mealsContainer.appendChild(mealDiv);
  });
};

const searchMeals = () => {
  const searchText = document.getElementById("search-field").value;
  loadMeals(searchText);
  console.log(searchText);
};

const loadMealsDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};
const displayMealDetails = (meal) => {
  document.getElementById("exampleModalLabel").innerText = meal.strMeal;
  document.getElementById("modal-details").innerHTML = `
   <img class="img-thumbnail img-fluid" src="${meal.strMealThumb}" alt="" srcset="">
   <p>Category
: ${meal.strCategory}</p>
<p>Instructions : ${meal.strInstructions} </p>
<a class="btn btn-danger text-center" href="${meal.strYoutube}">youtube </a>
  `;
  console.log(meal);
};

loadMeals("fish");
