/*- Contador de visitas persistente utilizando `localStorage`.
- Botón de "Reestablecer Contador" para reiniciar el contador a cero.

## Uso (Instrucciones)

1. Abre el archivo `index.html` en tu navegador.
2. Cada vez que se recarga la página debe añadir una visita más
3. Debe persistir el número aunque se cierre el navegador
4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
5. Toda la lógica tiene que estar en `script.js`*/


let visitas = localStorage.getItem('visitas')
if (visitas === null){
    visitas = 0;
}else{
    visitas = parseInt(visitas);
}
visitas++;
const contadorVisitas = document.getElementById('contadorVisitas');
localStorage.setItem('visitas', visitas);
contadorVisitas.textContent = visitas;
const botonBorrar = document.getElementById('btnReestablecer');


function actualizarVisitas (){
    botonBorrar.addEventListener('click', () =>{
        visitas = 0;
        localStorage.setItem('visitas', visitas);
        contadorVisitas.textContent = visitas;
    })
}
actualizarVisitas();