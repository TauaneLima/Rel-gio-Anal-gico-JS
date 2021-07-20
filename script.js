let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s') //para chamar os segundos
let mElement = document.querySelector('.p_m') //para chamar os minutos
let hElement = document.querySelector('.p_h') //para chamar as horas

function updateClock(){
    let now = new Date();
    let hour = now.getHours(); //é a função que pega a hora 
    let minute = now.getMinutes(); //é a função que pega os minutos
    let second = now.getSeconds(); //é a função que pega os segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; 

    //variaveis para chamar as horas os minutos e os segundos.
    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

} //função para atualizar o relogio

function fixZero(time) {
    if(time < 10){
        return '0'+time;
    }else {
        return time;
    }
}

//da pra simplicar essa função da seguinte forma: 
//return time < 10 ? `0${time}` : time;

setInterval(updateClock, 1000); 
updateClock();
//função que cria um intervalo infinito.                                 
//Vai executar a função de um em um segundo 

//Primeiro selecionamos os elementos que precisavam ser manipulados
//Segundo: Setamos um timer para que a cada um segundo faça a devida att
//Terceiro: O timer pegou o date atual, hora minuto e segundo e montamos o primeiro
//relógio digital .
//Quarto: No relógio digital fizemos a Função fixZero para quando a h,m ou s
//for menor que  0 a gente adiciona um zero para ficar padrão; 
//Quinto: Começamos o relógio análogico e precisamos calcular o
//angulo de cada um dos elementos. 
//Junto com o CSS calculamos o angulo de cada um 360 graus divido por 60s
//que vai dar a quantidade de graus para cada segundo e minutos e 
//diminuimos 90 graus para ele partir do zero.
//Já a hora dividimos por 12. 
//Definimos um style rotation para cada uma delas.