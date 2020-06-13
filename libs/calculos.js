function somatorio(numeros){
    const sum = numeros.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return sum;
}

function media(numeros){
    const sum = somatorio(numeros);
    const media = sum / numeros.length;
    
    return media;
}

module.exports = {somatorio, media};