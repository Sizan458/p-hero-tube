//make a function  to fetch the api data
const categoryHandle = async()=>{
 const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
 const data=  await res.json();
 //  show the category dynamically 
 const tabContainer =  document.getElementById('tab-container')
 data.data .forEach(category => {
    const  div = document.createElement('div');
    div.innerHTML = ` <a onclick="cardsHandle('${category.category_id}')"  class="tab  ">${category.category}</a> `;
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
      const div=document.createElement('div');
   
      div.innerHTML =`
      <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
      `;
      videosContainer.appendChild(div);
   })
    
    //console.log(data.data)
}

categoryHandle();

