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
        console.log(category);
        const modelDiv = document.createElement('div');
        modelDiv.innerHTML = `
        <button class="btn btn-neutral btn-sm capitalize ">${category.category}</button >
        
    `;
        modelCategory.appendChild(modelDiv);
    });
}
loadCategory();
