//make a function  to fetch the api data
const categoryHandle = async()=>{
 const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
 const data=  await res.json();
 //  show the category dynamically 
 const tabContainer =  document.getElementById('tab-container')
 data.data .forEach(category => {
    console.log(category)
    const  div = document.createElement('div');
    div.innerHTML = ` <a class="tab  ">${category.category}</a> `;
    tabContainer.appendChild(div);
 });

}
categoryHandle();

