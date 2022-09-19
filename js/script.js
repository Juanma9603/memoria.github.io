let iconos=[];
let seleccionados=[];

function cargarIcons(){
		iconos=["1","2","3","4","5"]
}

function tablero(){
    cargarIcons();
	seleccionados=[];
    let tablero=document.getElementById("tablero");
    let tarjetas=[];
    for(let i = 0; i < 10;i++){
        tarjetas.push(
            `<div class="area-tarjeta" onclick="seleccion(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara delantera">
                        <i class="fa-regular fa-circle-question"></i>                
                    </div>
                </div>
            </div>`
        )
		if(i%2==1){
			iconos.splice(0,1)
		}
    }
	tarjetas.sort(()=>Math.random()-0.5);
    tablero.innerHTML=tarjetas.join(" ");
}

function seleccion(i){
	let tarjeta=document.getElementById("tarjeta"+i);
	if(tarjeta.style.transform!="rotateY(180deg)"){
		tarjeta.style.transform="rotateY(180deg)";
		seleccionados.push(i);
	}
	if(seleccionados.length==2){
		deseleccionar(seleccionados);
		seleccionados=[];
	}
}	

function deseleccionar(seleccionados){
	setTimeout(() => {
		let t1 = document.getElementById("trasera" + seleccionados[0]);
		let t2 = document.getElementById("trasera" + seleccionados[1]);
		if (t1.innerHTML != t2.innerHTML) {
			let t1 = document.getElementById("tarjeta" + seleccionados[0]);
			let t2 = document.getElementById("tarjeta" + seleccionados[1]);
			t1.style.transform = "rotateY(0deg)";
			t2.style.transform = "rotateY(0deg)";
		}else{
			t1.style.background ="plum";
			t2.style.background ="plum";
		}
	}, 1000);

}