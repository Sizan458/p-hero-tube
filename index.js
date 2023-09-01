//make a function  to fetch the api data
const categoryHandle = async()=>{
 const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
 const data=  await res.json();
 //  show the category dynamically 
 const tabContainer =  document.getElementById('tab-container')
 data.data .forEach(category => {
    const  div = document.createElement('div');
    div.innerHTML = ` <a id='tab-button' onclick="cardsHandle('${category.category_id}')"  class="tab  ">${category.category}</a> `;
    tabContainer.appendChild(div);
 }); 
}

// show the  category items dynamically 
const cardsHandle = async(categoryId)=>{
   const videosCard = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
   const data = await videosCard.json()
   // show the videos cards dynamically 
   const videosContainer = document.getElementById('videos-container')
      videosContainer.textContent = '' ;
      data.data.forEach(videos=>{
      // show the videos cards details dynamically
         const div=document.createElement('div');
   
      div.innerHTML =`
      <div class="card  bg-base-100 shadow-xl w-[80%] mx-auto ">
      <figure class=" md:h-[150px]   xl:w-[296px] xl:h-[150px]"  ><img src="${videos.thumbnail}" /></figure>
      <div class="card-body">
       <div class="flex gap-2 -ml-[20px]  ">
       <div>
       <img class="w-[50px] h-[50px] rounded-full" src="${videos.authors[0].profile_picture}">
       </div>
       <h2 class="mt-[10px] text-[17px] text-black">${videos.title}</h2>
       </div>
         <div class="flex gap-3 ml-[22px] ">
         <div><h2 class="  text-[17px] text-black">${videos.authors[0].profile_name}</h2></div>
         <div><span>${videos.authors[0].verified}</span></div>
         </div>
         <div class="ml-[22px]"><h2>${videos.others.views}</h2> </div>
        </div>
      </div>
    </div>
      `;
      videosContainer.appendChild(div);   
      
      
       
   })
   // data not found function
   const notFound= document.getElementById('not-found')
   if(data.data==0){
      notFound.classList.remove('hidden')
   }else{
      notFound.classList.add('hidden')
   }
   
    
}

    

categoryHandle();

// default tab function 
cardsHandle('1000');
