
document.getElementById('hablar').addEventListener("click",()=>{
	decir(document.getElementById("texto").value);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

/* COPY THE TEXT */

// the text
const mytxt = document.getElementById('texto'); 

// the button for the copy
const copy = document.getElementById('cp');

copy.onclick = function(){
    //'tmy' is the development for this script, that´s why that name is shown xdd

    //tmy: first step => select the text ---- \\
    mytxt.select()

    //tmy: copy the text
    document.execCommand('Copy')

    //tmy: This option is for the selection, if you want the selection color not be shown  
    mytxt.focus();

    //tmy: Show a message, so that the user knows that the action was performed
    alert('Texto copiado con éxito al portapapeles')

    //finish --->>>>
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})




