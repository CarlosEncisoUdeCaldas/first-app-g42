const myPromise = new Promise( ( resolve, rejectd ) => {
    let control = true;
    if(control){
        resolve();
    }else{
        rejectd();
    }
})

myPromise
.then( () => console.log('Promesa resuelta') )
.catch( () => console.log('Promesa rechazada') )