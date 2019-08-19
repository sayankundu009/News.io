//Using NEWS API....
//API KEY = 6c11a9dcc37449faa17fe15c4ebe377c

let content = document.getElementById('news-content');

let fetchNews = categoryName => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${categoryName}&apiKey=6c11a9dcc37449faa17fe15c4ebe377c`;

  let req = new Request(url);
  fetch(req)
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      display_news(data.articles);
    });
  content.innerHTML = '';
};

let display_news = news => {
  console.log(news);
  news.forEach(article => {
    if (article.author != null) {
      content.innerHTML += `<div class="card mb-3">
                                <img
                                    class="card-img-top"
                                    src="${article.urlToImage}"
                                    alt="image not available"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <p class="card-text">
                                        ${article.content}
                                       
                                    </p>
                                    <a href="${article.url}" class="btn btn-primary mb-2">Read More</a>
                                    <p class="card-text">
                                    <small class="text-muted">
                                  
                                    </small>
                                    </p>
                                </div>
                                </div>`;
    }
  });

  show();
};

let show = () => {
  document.querySelector('body').style.display = 'block';
};

let getElementById = x => {
  return document.getElementById(x);
};
