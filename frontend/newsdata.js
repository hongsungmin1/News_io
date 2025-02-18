window.addEventListener("DOMContentLoaded", function(){
    fetchNews();
})
const newsForm = document.querySelector("#news_form");
const input = document.querySelector("#keyword");
let rawData = "";
newsForm.addEventListener("submit", function(e){
    e.preventDefault();
    if (input.value == ""){
        alert("검색어를 입력하십쇼");
        input.focus();
        return;
    };
    let filteredData = rawData.filter(( v , i ) => v.title.includes(input.value));
    renderUI(filteredData);
})
function saveRawData(raw) { 
    // 전역 변수
    rawData = raw;
}
async function fetchNews() {
    const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_69486c6c023a3d777623ee4f50e89f6a59251");
    // const response = await fetch("http://localhost:3000/news");
    const news = await response.json();
    // renderUI(news);
    saveRawData(news.results); // 순수하게 News 데이터
    renderUI(news.results); // 렌더링 (데이터 + ui)
}
function renderUI(news){
    const newsDIV = document.querySelector("#news")
    let templates = [];
    for(let item of news){
        // console.log(item);
    templates.push(`
        <div class="card" style="width: 18rem;">
  <img src="${item.image_url} " class="card-img-top" alt="${item.title} ">
  <div class="card-body">
    <h5 class="card-title">${item.title} </h5>
    <p class="card-text">${item.category}</p>
    <p class="card-text">${item.description}</p>
    <p class="card-text">${item.pubDate}</p>
    <a href="${item.link}" class="btn btn-primary">새창열기</a>
  </div>
</div>
`);
let HTML = templates.join("");
newsDIV.innerHTML = HTML;
    }
}