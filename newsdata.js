const api_key = "pub_69486c6c023a3d777623ee4f50e89f6a59251";
const url = "https://newsdata.io/api/1/latest";


//https://newsdata.io/api/1/latest?apikey=pub_69486c6c023a3d777623ee4f50e89f6a59251&q=pizza

// 검색폼에서 쿼리(q) 입력하면, 이 문자열을 전달해서 newdata.io 에서 GET 요청하고,
// 응답받은 결과값을 UI에 결합해서 화면에 렌더링 -> 뉴스 앱/ 뉴스 웹 +부트스트랩 (반응형)


// 1.DOM 탐색
const newsForm = document.querySelector("#news_form");

newsForm.addEventListener("submit", function(e){
    e.preventDefault();
    let query = document.querySelector("#keyword");
    // 사용자가 입력하는 검색어를 찾아서 콘솔에 출력
    if (query.value == "") {
        alert("검색어를 입력해야 합니다.");
        query.focus();
        return; //함수 종료
    }

    fetchNews(query.value);
});

async function fetchNews(keyword){
    const req_url = `${url}?apikey=${api_key}&q=${keyword}`;
    const jsondata = await fetch(req_url);
    console.log(jsondata);
}