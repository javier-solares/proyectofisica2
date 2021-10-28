function startTime() {
    // las  variables que nos proporcionaran los datos como la hora, minutos etc.

    var today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        date = today.getDate(),
        day = today.getDay(),
        month = today.getMonth();

    // operadores ternarios esto nos ayudara a mostrar la hora solo del 1 al 12
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;

    // las horas y minutos a una funcion que crearemos mas adelante
    hours = checkTime(hours);
    minutes = checkTime(minutes);

    //primero para los dias y meses crearemos un arreglo esto por que la funcion que nos debuelve
    //los dias y meses nos los debuelbe en numero
    var dia = ["Domingo", " Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"],
        mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    //haora solo imprimimos los datos
    var hr = document.getElementById('time').innerHTML = hours + ":" + minutes,
        dt = document.getElementById('date').innerHTML = dia[day] + ", " + date + " De " + mes[month];

    //esta funcion hara que escript se ejecute constantemente
    var time = setTimeout(function() {
        startTime();
    }, 500);



}
//solo falta crear la funcion que nos diga si tine uno o dos dijitos
//esto para que si solo tiene uno le agrege u  cero a la izquierda
function checkTime(e) {
    if (e < 10) {
        e = "0" + e;
    }
    return e;
}