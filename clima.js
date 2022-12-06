let openW = document.getElementById('openW')  
async function connectToURL(url){
    const resp = await axios.get(url);



    if(resp.status==200){
       openW.innerHTML=''
        let ClimaC = document.createElement('div')
        let icon =document.createElement('img')
        let title = document.createElement('h4')
        let ClimaD= document.createElement('div')
        let latitud = document.createElement('p')
        let longitud =document.createElement('p')
        let humedad = document.createElement('p')
        let temMax = document.createElement('p')
        let Presion = document.createElement('p')
        let titulo = document.createElement('h2')
        icon.setAttribute("src", `http://openweathermap.org/img/wn/${resp.data.weather[0].icon}.png`)
        icon.classList.add('icono')
        titulo.innerHTML = `${resp.data.name}`
        titulo.classList.add('titulo')
        title.innerHTML= `${resp.data.weather[0].description}`
        title.classList.add('titt')
        latitud.innerHTML= `Latitud: ${resp.data.coord.lat}`
        latitud.classList.add('lat')
        longitud.innerHTML= `Longitud: ${resp.data.coord.lon}`
        longitud.classList.add('lat')
        humedad.innerHTML= ` Humedad: ${resp.data.main.humidity}`
        humedad.classList.add('lat')
        temMax.innerHTML = `TemMax: ${resp.data.main.temp_max}`
        temMax.classList.add('tem')
        Presion.innerHTML = `Presion: ${resp.data.main.pressure}`
        Presion.classList.add('presion')
        openW.appendChild(ClimaC)
        ClimaC.appendChild(icon)
        ClimaC.appendChild(titulo)
        ClimaC.appendChild(title)
        ClimaC.appendChild(latitud)
        ClimaC.appendChild(longitud)
        ClimaC.appendChild(humedad)
        ClimaC.appendChild(ClimaD)
        ClimaD.appendChild(temMax)
        ClimaD.appendChild(Presion)
    }
}



function selector (select){

    if(select.value=="usulutan"){
        connectToURL(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=3dfff2f0d317f014548bc98e4f054283`)
        .catch(err => {
            console.log(err.toString())
        });
    }

    if(select.value=="san miguel"){
        connectToURL(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=3dfff2f0d317f014548bc98e4f054283`)
        .catch(err => {
            console.log(err.toString())
        });
    }
}
