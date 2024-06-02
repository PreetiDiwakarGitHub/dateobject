// let input = document.getElementById('search');
// let button = document.getElementById('button');
// let show = document.getElementById('result');
// let image = document.getElementById('image');

// button.addEventListener('click',()=>{
//     let movieName = input.value;
//     fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=1e54f907`)
//     .then((response)=>response.json())
//     .then((data)=>{
//         if(data.response==="ture"){
//             show.innerHTML = `movie Name ${data.Title}<br>
//             Rating${data.Rating}<br>
//             Released${data.Released}<br>
//             Actors${data.Actors}<br>
//             Writer${data.Writer}<br>`;
//             image.src="";
//         }else{
//             show.innerHTML= `Error${data.Error}`;
//             image.src="";
//         }
//     })
//     .catch((error)=>{
//         show.innerHTML`Error${error.message}`;
//         image.src="";
//     });


// });


let input = document.getElementById('search');
let button = document.getElementById('button');
let show = document.getElementById('result');
let image = document.getElementById('image');

button.addEventListener('click', () => {
    let movieName = input.value;
    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=1e54f907`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.Response === "True") {
                show.innerHTML = `
                    Movie Name: ${data.Title}<br>
                    Rating: ${data.imdbRating}<br>
                    Released: ${data.Released}<br>
                    Actors: ${data.Actors}<br>
                    Writer: ${data.Writer}<br>
                `;
                image.src = data.Poster;
            } else {
                show.innerHTML = `Error: ${data.Error}`;
                image.src = "";
            }
        })
        .catch(error => {
            show.innerHTML = `Error: ${error.message}`;
            image.src = "";
        });
});

