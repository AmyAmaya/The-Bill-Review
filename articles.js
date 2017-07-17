$(function(){
        $.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=8420d7a4983e43c7bcf0430d63413c0b&articles[4].title="america"',function(data){
                console.log(data)
                var articles = data.articles;
                var title = articles[0].title
                document.getElementById("article").innerHTML = title;

               })
    })
