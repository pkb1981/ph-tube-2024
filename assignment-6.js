// model type button section loading and displaying
const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const allCategory = data.data;
    displayCategory(allCategory);
}

const displayCategory = (categories) => {
    const modelCategory = document.getElementById('model-category');
    categories.forEach(category => {
        // console.log(category);
        const modelDiv = document.createElement('div');
        modelDiv.innerHTML = `
        <button class="btn btn-neutral btn-sm capitalize ">${category.category}</button >
        `;
        modelCategory.appendChild(modelDiv);
    });
}
loadCategory();

// displaying all model API data

const loadAllModel = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const models = data.data;
    showAllModel(models);
    // console.log(allData);
}

const showAllModel = (models) => {
    // console.log(allData);
    const allModelContainer = document.getElementById('all-model-container');
    models.forEach(model => {
        console.log(model);
        const newModelDiv = document.createElement('div');
        newModelDiv.classList = `card bg-gray-100 shadow-xl`;
        newModelDiv.innerHTML = `
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        `;
        allModelContainer.appendChild(newModelDiv);
    });
}
loadAllModel();