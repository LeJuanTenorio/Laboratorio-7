const container = document.getElementById('container');

const createPost = (name, message, imageURL)=>{
    let img = `<img src="${imageURL}">`;
    let h1 = `<h1>${name}</h1>`;
    let p = `<p>${message}</p>`;
    return `<div class="container1">${img} ${h1} ${p}</div>`;
}


for(let i=1 ; i<=826 ; i++){
    let add = createPost(
        `Character ${i}`,
        `Esta es mi publicacion numero ${i}. Esta es una prueba de generación de texto`,
        `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`
    );
    container.innerHTML += add;
}