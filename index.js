// calculate hr,minute,second 

function getTime(time){
    const hr=parseInt(time/3600);
    let remSecond=time%3600;
    const min=parseInt(remSecond/60);
    remSecond=remSecond%60;
    return `${hr} hour ${min}minute ${remSecond} second ago`;
};

// removing active button
const removeActiveClass=()=>{

} 


// loading categories data from API using parse and arrow function

const loadCategories=()=>{
    // console log to test function work
    // console.log('categories');
        // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    // if get the response then execute
    // .then(res=>console.log(res))
    // convert response to json data
    .then(res=>res.json())
    // now console log the data available in api
    // .then(data=>console.log(data))
    // now get the categories data by displayCategories function
    .then(data=>displayCategories(data.categories))
    // if get the error then execute
    .catch(error=>console.log(error))

};

// loading videos data from API using parse and arrow function
const loadVideos=()=>{
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    // .then(data=>console.log(data.videos))
    .then(data=>displayVideos(data.videos))
    .catch(error=>console.log(error))

};

// selecting different types of category videos from catagory API videos
const loadCategoryVideos=(id)=>{
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=>res.json())
    // active button shown
    .then(data=>{
        // remove active class for menu selection
        removeActiveClass();{
            const buttons=document.getElementsByClassName("category-btn");
            for(let btn of buttons){
                btn.classList.remove("active");
            }            
        }
        // active class using id
        const activeBtn=document.getElementById(`btn-${id}`);
        activeBtn.classList.add("active");
    displayVideos(data.category);
})
    .catch(error=>console.log(error))
};

// loading details button information from api
const loadDetails=async(videoId)=>{
    const url=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res=await fetch(url);
    const data=await res.json();
    displayDetails(data.video);
}

// showing the details button data from api

const displayDetails=(video)=>{
    const detailContainer=document.getElementById("modal-content");
    // showing video thumbnail by pressing details button
    detailContainer.innerHTML=`
    <img src="${video.thumbnail}"/>
    <p>${video.description}</p>`
    document.getElementById('customModal').showModal();

}


// creating display videos function
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById('videos');
    videoContainer.innerHTML="";

    // if no videos available then show this item
    if(videos.length==0){
        // remove the grid if no video is available so that it will in center
        videoContainer.classList.remove("grid");
        // add class styles in the no video icon
        videoContainer.innerHTML=`
        <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
            <img src="./icons/Icon.png"/>
            <h2 class="text-center text-xl font-bold">no contents here in this category</h2>
        </div>`;
        return;
    }
    else{
        // if videos available then add the grid layout for all the video item
        videoContainer.classList.add("grid");
    }

      videos.forEach(video=>{
        console.log(video);
           const card=document.createElement('div');
        //    adding classlist from daisyuI card compact card less padding first line and remove some class
        card.classList='card card-compact';
        //    adding daisyui card--compact card less padding
        // adding extra styling to the image by class by fixed 200px, height,width full, and image to full not to stretch
           card.innerHTML=`
  <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length==0?" ":`<span class="absolute text-xs right-2 bottom-2 bg-black text-white rounded p-1">${getTime(video.others.posted_date)}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
        <div>
        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
        </div>
        <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center gap-2">
         <p class="text-gray-400">${video.authors[0].profile_name}</p>
            ${video.authors[0].verified===true? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` :" "}
        </div>
        <p><button onclick="loadDetails('${video.video_id}')" class="btn  btn-sm btn-error">details</button> </p>
        </div>
  </div>
        `;
           videoContainer.append(card);
      });
};

// creating display categories function

const displayCategories=(categories)=>{
    // creating a category container where new created item will be added
    const categoryContainer=document.getElementById('categories');
    // showing data category 
    // console.log(data);
    // display data category individually
    categories.forEach(item => {
        console.log(item);
   
    // create a button container where button will be added dynamically for each item
    const buttonContainer=document.createElement("div");
    buttonContainer.innerHTML=`
            <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})"  class="btn category-btn">
                ${item.category}
            </button>
    `
    // added new created button to that category container
    categoryContainer.append(buttonContainer);
});
};
// call load categories function
loadCategories();
// call video categories function
loadVideos();