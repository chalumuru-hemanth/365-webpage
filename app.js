function  filter() {
    var filtervalue,input,poster,title; 
    input = document.getElementById("searchbar");
    filtervalue = input.ariaValueMax.toUpperCase();
    poster = document.getElementsByClassName("media-carousel-movies");
    title =  document.getElementsByClassName("movie-title");

    for(i=0;i<movie-title.length;i++){
        var a = movie-title[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexof(filtervalue) > -1){
            title[i].getElementsByClassName.display = "none";
        }else{
            title[i].style.display="none";
        }
    }
}