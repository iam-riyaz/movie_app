async function searchMovie(){
    // 0. get a movie name
 try{
    let movie=document.querySelector("#query").value
    
    let res =await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=105a0b34&s=${movie}`)
    
    let data=await res.json()
   return data.Search
 }
 catch(err){
     console.log(err+"riyaz")
 }
}

async function main()
{
    let data= await searchMovie()
    if(data==undefined)
    {
        
        return false
    }
    appendData(data)
    console.log(data)
}

let movie_div=document.createElement("div")


movie_div.id="movies"
// document.querySelector("body").append(movie_div)
// movie_div.id="moives"



function appendData(movie){
      movie_div.innerHTML=null
    movie.map(function(item){

        var subdiv=document.createElement("div")
        subdiv.style.border="1px solid black"
        subdiv.style.backgroundColor="white"
        subdiv.style.cursor="pointer"
        
        

        let p=document.createElement("p")
        p.innerText=item.Title


        subdiv.append(p)
        movie_div.append(subdiv)
        document.querySelector("#search_div").append(movie_div)

        subdiv.addEventListener("click",myfun1)


        function myfun1(){
   
           let obj={
               photo:item.Poster,
               name:item.Title,
               year:item.Year,
               rating:((Math.random()*5.9)+4).toFixed(1)     
        }
          onClickMap(obj)
           
        }
        
    })
}

function onClickMap(obj)
{

    movie_div.innerHTML=null
    movie_div.style.border="0px"

    document.querySelector("#detaildiv").innerHTML=null

     var main_div=document.createElement("div")
     main_div.style.display="flex"
    

     var imgdiv=document.createElement("div")
     imgdiv.style.height="330px"

     var textdiv=document.createElement("div")
     textdiv.style.marginLeft="20px"

     var title=document.createElement("h4")
     title.textContent=obj.name
     var year=document.createElement("p")
     year.textContent=`year:${obj.year}`
     var rating=document.createElement("p")
     rating.textContent=`rating: ⭐${obj.rating}`
     

     textdiv.append(title,year,rating)

    var imgurl=document.createElement("img")
    imgurl.src=obj.photo
    imgurl.style.height="100%"

    imgdiv.append(imgurl)
    document.querySelector("#detaildiv").style.backgroundColor="white"

    document.querySelector("#detaildiv").append(imgdiv,textdiv)

}





// debounce
let setTimers;
function debounce(main,delay)
{
    if(setTimers)
    {
        clearTimeout(setTimers)
    }
setTimers =setTimeout(function(){
     main()},delay)
}
