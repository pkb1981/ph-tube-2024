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
        <button class="btn btn-neutral btn-sm capitalize">${category.category}</button >
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
        <div class="relative">
        <figure><img src="${model.thumbnail}" alt="models" />
        </figure>
        <div class="absolute bottom-1 right-1 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-semibold bg-slate-600 rounded-sm">
        <p>${model.others.posted_date}</p>
        </div>
        </div>
                <div class="card-body">
                <div class="flex gap-2">
                <image src="${model.authors[0].profile_picture}" class="h-10 w-10 rounded-full" alt="images"/>
                <h1 class="font-medium">${model.title}</h1>
                </div>
                
                       
                    <div class="flex justify-center items-center gap-2">
                    <h2 class="text-sm text-center">${model.authors[0].profile_name}</h2>
                    <p>${model?.authors[0]?.verified}</p>
                    </div>
                    <p>${model.others.views} views</p>
                    
                </div>
        `;
        allModelContainer.appendChild(newModelDiv);
    });
}
loadAllModel();