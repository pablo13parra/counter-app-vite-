

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try {

        const apiKey = '7PCvT6PRylrxa9VjCozwREjDY6CSjj0k';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        //console.log(data);
        const { url } = data.images.original;
        console.log(url);
        return data;
    } catch (error) {
        return error;
    }



}


//getImagen();



