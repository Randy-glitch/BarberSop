
const cortes = [{
    medium: {
        corte: 250,
        afeitada: 250,
        cerquillo: 100,
        cejas: 150
    },
    hard: {
        barbaCorte: 450,
        facial: 250,
        lavado: 250
    },
    boys: {
        corte: 150,
        cero: 200
    }

}]

const menu = document.querySelector(".menuBoys")
const menuHard = document.querySelector(".menuHard")
const menuMedium = document.querySelector(".menuMedium")
const options = document.querySelector(".options")

cortes.map(e => {
    menu.innerHTML = `

        <ol class="list-group-item">Corte: <strong>${e.boys.corte}</strong></ol>
        <ol class="list-group-item">Cero Graduada: <strong>${e.boys.cero}</strong></ol>
    
    `
});
cortes.map(e => {
    menuHard.innerHTML = `

        <ol class="list-group-item">Barba/Corte:  <strong>${e.hard.barbaCorte}</strong></ol>
        <ol class="list-group-item">Facial:  <strong>${e.hard.facial}</strong></ol>
        <ol class="list-group-item">Lavado:  <strong>${e.hard.lavado}</strong></ol>
    
    `
});
cortes.map(e => {
    menuMedium.innerHTML = `

        <ol class="list-group-item">Cejas:  <strong>${e.medium.cejas}</strong></ol>
        <ol class="list-group-item">Cerquillo:  <strong>${e.medium.cerquillo}</strong></ol>
        <ol class="list-group-item">Corte Normal:  <strong>${e.medium.corte}</strong></ol>
        <ol class="list-group-item">Afeitada:  <strong>${e.medium.afeitada}</strong></ol>
    
    `
});

cortes.map(e => {
    options.innerHTML = `
    <div class="form-check">
    <input class="${e.boys.corte}" type="checkbox" value="" id="flexCheckDefault" >
    <label class="form-check-label" for="flexCheckDefault">
        Corte: <strong>${e.boys.corte}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.boys.cero}" type="checkbox" value="" id="flexCheckDefault1" >
    <label class="form-check-label" for="flexCheckDefault1">
        Cero Graduada: <strong>${e.boys.cero}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.hard.barbaCorte}" type="checkbox" value="" id="flexCheckDefault2" >
    <label class="form-check-label" for="flexCheckDefault2">
    Barba/Corte:  <strong>${e.hard.barbaCorte}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.hard.facial}" type="checkbox" value="" id="flexCheckDefault3" >
    <label class="form-check-label" for="flexCheckDefault3">
        Facial:  <strong>${e.hard.facial}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.hard.lavado}" type="checkbox" value="" id="flexCheckDefault4" >
    <label class="form-check-label" for="flexCheckDefault4">
        Lavado:  <strong>${e.hard.lavado}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.medium.cejas}" type="checkbox" value="" id="flexCheckDefault5" >
    <label class="form-check-label" for="flexCheckDefault5">
        Cejas:  <strong>${e.medium.cejas}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.medium.cerquillo}" type="checkbox" value="" id="flexCheckDefault6" >
    <label class="form-check-label" for="flexCheckDefault6">
        Cerquillo:  <strong>${e.medium.cerquillo}</strong>
    </label>
    </div>
    <div class="form-check">
    <input class="${e.medium.corte}" type="checkbox" value="" id="flexCheckDefault7" >
    <label class="box form-check-label" for="flexCheckDefault7">
        Corte Normal:  <strong>${e.medium.corte}</strong>
    </label>
    </div>
    <div class="form-check" id="flexCheckDefault8">
        <input class="${e.medium.afeitada} text-success" type="checkbox"  value="" id="flexCheckDefault8 "> 
        Afeitada:  <strong class="flexCheckDefault8">${e.medium.afeitada}</strong>
        <input->
       
    </div>
    `
});


var lista1 =[]
// const div = document.querySelector(".options div")
// const elem = div.querySelectorAll('input:checked')



// $("input").on("change", function () {
    //     if ($(this).prop("checked")){
        
        //         $(this).addClass(className);
        
        
        //     }
    
// });

function sum() {
    const checc = document.querySelectorAll(".options input:checked")
    var lista = []
    checc.forEach(e => {
        
        $(checc).parents('.form-check').css({
            color: "green",
            backgroundColor: '#BFF3B5 ',
            borderRadius: '3rem'
            
        })
        
        lista.push(e.attributes[0].nodeValue);
        lista1=lista
        

    })
    let sum = 0;

    for (let i = 0; i < lista1.length; i++) {
        sum += parseInt(lista1[i]);
    }

    const sumatoria = document.querySelector("#exampleModalLabel")
    sumatoria.innerHTML = `<h3>Total: <strong class="text-success">${sum}</strong>RD$</h3>`

    
    
}
    
function pruebaDivAPdf() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('.modal')[0];

    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };

    pdf.fromHTML(
        source, 
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, 
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            pdf.save('Precio.pdf');
        }, margins
    );
}