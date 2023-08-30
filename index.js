const handleCategory=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data =await response.json();
     console.log(data.data.news_category.slice(0,3));
    const tabContainer=document.getElementById("tab-container");
    data.data.news_category.slice(0,3).forEach(category=>{
        const div=document.createElement("div");
        div.innerHTML=`
       
        <a onclick="handleLoadNews('${category.category_id}')" class="tab text-2xl">${category.category_name}</a>
       
        `
        tabContainer.appendChild(div);

    });


}

const handleLoadNews=async(categoryId)=>{
    const responsive=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data=await responsive.json();
     console.log(data.data)
    const cardContainer=document.getElementById("news-container");
    cardContainer.textContent='';
    data.data.forEach(news=>{
        const div=document.createElement("div");
        div.innerHTML=`

<div class="card bg-base-100 shadow-xl">
  <figure><img src=${news.image_url} /></figure>
  <div class="card-body">
    <h2 class="card-title">${news.title}</h2>
    <p>${news.total_view
    }</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        
        `;
        cardContainer.appendChild(div);
    })



   
}
handleCategory();