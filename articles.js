$(function(){
        $.get('https://content.guardianapis.com/search?q=debates',function(data){
                console.log(data)
                var articles = data.articles;
                var title = articles[0].title
                document.getElementById("article").innerHTML = title;

               })
    })
