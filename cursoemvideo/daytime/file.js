function changeHour() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let hora = document.getElementById('hora')

    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    //let hour = 20
    
    if (hour >=0 && hour<= 12) {
        if (min >=0 && min <=9){
            hora.innerHTML = `${hour}:0${min} horas`
        } else {
            hora.innerHTML = `${hour}:${min} horas`
        }
        msg.innerHTML = `Bom dia! Tenha um ótimo trabalho`
        img.src = './img/morning-circle.png'
        document.body.style.backgroundColor = '#cdddf7'
        document.getElementById("hora").style.color = "#091545"


    } else if (hour >=13 && hour<=18){
        if (min >=0 && min <=9){
            hora.innerHTML = `${hour}:0${min} horas`
        } else {
            hora.innerHTML = `${hour}:${min} horas`
        }
        msg.innerHTML = `Boa tarde! Nada como tomar um cafezinho`
        img.src = './img/afternoon-circle.png'
        document.body.style.backgroundColor = '#ebd8a9'
        document.getElementById("hora").style.color = '#402d04'


    } else {
        if (min >=0 && min <=9){
            hora.innerHTML = `${hour}:0${min} horas`
        } else {
            hora.innerHTML = `${hour}:${min} horas`
        }
       
        msg.innerHTML = `Boa Noite! Aproveite para descansar`
        img.src = './img/night-circle.png'
        document.body.style.backgroundColor = '#402f3d'
    }

}


