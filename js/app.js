var search=document.getElementById('search');
search.addEventListener("keyup" ,e =>{
    var searchtext=e.target.value;
    getmovies(searchtext)
});

function getmovies(searchtext) {
  const imdbapi=`http://www.omdbapi.com/?s=${searchtext}&apikey=609e1e81`;
  window.fetch(imdbapi).then(data=>{
      data.json()
      .then(data1=>{
       var movie1=data1.Search;
      
        var output=[];
        movie1.forEach(x => {
           output +=`<div class="container">
            <section id="movies">
            <h1>${x.Title}</h1>
            
            <span class="badge badge-sucess">${x.Year}</span>
            <span class="badge badge-sucess">${x.Language}</span>
            
            <img src="${x.Poster}" class="img-poster">
            <button>go to movie</button>
            </section>
            </div>`;
            document.getElementById("template").innerHTML=output;
        })
      })
      .catch(err=>console.log(err));
 })
  .catch(err=>console.log(err))
    
}
