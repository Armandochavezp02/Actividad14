const comprarCasco = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Se ha comprado el casco exitosamente")
        },1000)
    })
}

const comprarGuantes = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Se han comprado los guantes exitosamente")
        },2000)
    })
}

const paseoBici = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Paseo en la bici")
        },8000)
    })
}

const realizarAcciones = async () =>{
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const bici = await paseoBici();
    return([casco,guantes,bici]);
}

realizarAcciones()
    .then(res => console.log(res));