//SNACK 1:

//Ottieni il titolo di un post con una Promise.
//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise 
//che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

/* const getPostTitle = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(obj => resolve(obj.title))
        .catch(reject)
    })
}

getPostTitle(6)
.then(obj => console.log(obj))
.catch(error => console.error(error))
 */

//SNACK 2:
//Crea la funzione lanciaDado() che restituisce una Promise che, 
//dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, 
//il dado si "incastra" e la Promise va in reject.

const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const errore = Math.random();

            if (errore < 0.2) {
                reject("Il dado si è incastrato");
            } else {
                const result = Math.floor(Math.random() * 6) + 1; // numero tra 1 e 6
                resolve(result);
            }
        }, 1000)
    })
}

lanciaDado()
    .then(obj => console.log(obj))
    .catch(error => console.error(error))