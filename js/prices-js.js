

//----------------------------
//VARIABLE FOR CHANGETOGGLE
let clicked = false;
let studentYesOrNo = "no"
let brochureYesOrNo = "no"
function changeToggleDisabledEnabled() {
	studentYesOrNo = clicked ? "no" : "yes";
	document.getElementById("experience").disabled = clicked;
	

	if (clicked) {
		console.log("Im not student");
		document.getElementById("experience").value = "no student";
		console.log(document.getElementById("experience").value);
		document.getElementsByClassName("allNoStudentFactor")[0].style.display = "block";
		document.getElementsByClassName("experience-select")[0].style.display = "none";
		document.getElementsByClassName("jsExperience")[0].style.display = "none";
	} else{
		console.log("Im student");
		document.getElementsByClassName("experience-select")[0].style.display = "flex";
		document.getElementsByClassName("jsExperience")[0].style.display = "block";
		document.getElementsByClassName("allNoStudentFactor")[0].style.display = "none";
		

	}

	clicked = !clicked;

	return studentYesOrNo;
}

function changeToggleDisabledEnabled2() {

	brochureYesOrNo = clicked ? "no" : "yes";
	if (clicked) {
		console.log("Im dont want brochure");
		
	} else{
		console.log("Im want brochure");

	}

	clicked = !clicked;
	console.log(brochureYesOrNo)
	return brochureYesOrNo;
}
//----------------------------



//----------------------------
//ADDING PARAGRAPH EXPERIENCE STUDENT
function addingParagraphOnExperience() {
	let experiences = document.getElementById("experience");
	let htmlContentToAppend = "";

	if (experiences.value == "light-experience" && window.location.hash !== "#esp"){
		
				htmlContentToAppend = `
				<p>This experience will give freedoom to the 3d artist to design the image.
				Reducing contact to an initial meeting and a camera viewpoint correction prior to rendering.
				After this, the final image is rendered, post-produced and sent. This does not affect the quality of the work, 
				it just speeds up the work process. In this experience you have to bring us the 3D model and adjust it to our requierement. If you want to find out more about this workflow please download the following file. 
			</p>
			<a href="pdf/Workflow_for_students-light.pdf" download="Workflow for students-light"  target="_blank">
                                        <button type="button"> English version - light  </button> </a>
				`
			}

	if (experiences.value == "light-experience" && window.location.hash === "#esp"){
		
				htmlContentToAppend = `
				<p>El contepto de este workflow es dejar libertad a los artistas 3d para diseñar la imagen. 
				Teniendo un contacto reducido a una instancia de reunión inicial y una instancia de corrección del punto de vista previo al renderizado. 
				Esto no implica en absoluto una pérdida de calidad en la imagen obtenida, simplemente agiliza el proceso de producción. En esta experiencia tienes que brindarnos el modelo 3D y ajsutarlo a nuestros estándares. 
				Si buscas saber más de este workflow, por favor descarga el archivo a continuación. 
			</p>
			<a href="pdf/Proceso_de_trabajo_Estudiantes-simple.pdf" download="Proceso de trabajo Estudiantes-simple"  target="_blank">
                                            <button type="button"> Versión en español - Simple </button> </a>
				`
			}
	if (experiences.value == "full-experience" && window.location.hash !== "#esp"){
				
				htmlContentToAppend = `
				<p>This experience is based on a greater bond between the team and you, generating correction instances, in which it is possible to make changes 
				(material textures, lights and equipment) on images already rendered, having more control of the image. 
				If you want to find out more about this workflow please download the following file. (The experience doesn't include the 3D model)
				
			</p>
			<a href="pdf/Workflow_for_students-full.pdf" download="Workflow for students-full"  target="_blank">
                                        <button type="button"> English version - Full </button> </a>
				`
			}


	if (experiences.value == "full-experience" && window.location.hash === "#esp"){
				
				htmlContentToAppend = `
				<p>El concepto de este workflow se basa en un mayor vínculo entre el equipo y ustedes, generando una instancia de corrección, 
				en las que es posible hacer cambios (texturas materiales, luces y equipamiento) sobre imágenes ya renderizadas, 
				teniendo un mayor control de las mismas. Si buscas saber más de este workflow, por favor descarga el archivo a continuación. (La experiencia no incluye el modelado 3D)
				
			</p>
			<a href="pdf/Proceso_de_trabajo_Estudiantes-total.pdf" download="Proceso de trabajo Estudiantes-total"  target="_blank">
                                            <button type="button"> Versión en español - Total  </button> </a>
				`
			}
	document.getElementById("jsExperienceid").innerHTML = htmlContentToAppend;
};
//----------------------------



//----------------------------
//ADDING AND CHANGIN IMAGE ON SLIDERS
function addingImageInteriorScope() {
	let slider = document.getElementById('interior-slider');
	let name = ""
	let htmlContentToAppend = "";
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Vh.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Vh.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bm.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bm.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
		htmlContentToAppend = 
		`<img  src="img/imgscope/1x1Bp.jpg" data-src="" >`;
		name = '<img  src="img/imgscope/1x1Bp.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes").innerHTML = htmlContentToAppend;
	console.log(slider.value);

	return name;
};
//----------------------------



//----------------------------
//GIVE THE EXPERIENCE SELECT
function tellMeExperience(){
	let experiences = document.getElementById("experience").value;
	if(experiences === "light-experience"){
		experiences = document.getElementById("lightexperiencetransl").textContent;
	}

	if(experiences === "full-experience"){
		experiences = document.getElementById("fullexperiencetransl").textContent;
	}
	return experiences;
}

function addingImageExteriorScope() {
	let slider = document.getElementById('exterior-slider');
	let name = "";
	let htmlContentToAppend = "";
	
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hh.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Hh.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
	
		htmlContentToAppend = `
		<img  src="img/imgscope/2x1Hza.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/2x1Hza.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes-exterior").innerHTML = htmlContentToAppend;
	return name;
};

function addingImageAnimationScope() {
	let slider = document.getElementById('animation-slider');
	let name = ""
	let htmlContentToAppend = "";
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-video.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-video.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-video2.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-video2.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
		htmlContentToAppend = 
		`<img  src="img/imgscope/1x1Bk-video3.jpg" data-src="" >`;
		name = '<img  src="img/imgscope/1x1Bk-video3.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes-animation").innerHTML = htmlContentToAppend;
	console.log(slider.value);

	return name;
};

function addingImage360Scope() {
	let slider = document.getElementById('360-slider');
	let name = ""
	let htmlContentToAppend = "";
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-360.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-360.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-3602.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-3602.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
		htmlContentToAppend = 
		`<img  src="img/imgscope/1x1Bk-3603.jpg" data-src="" >`;
		name = '<img  src="img/imgscope/1x1Bk-3603.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes-360").innerHTML = htmlContentToAppend;
	console.log(slider.value);

	return name;
};

function addingImageVr() {
	let slider = document.getElementById('VR-slider');
	let name = ""
	let htmlContentToAppend = "";
	if (slider.value == "1"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-vr.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-vr.jpg" data-src="" width="100">';
	}
	else if (slider.value == "2"){
		htmlContentToAppend = `
		<img  src="img/imgscope/1x1Bk-vr2.jpg" data-src="" >
		`;
		name = '<img  src="img/imgscope/1x1Bk-vr2.jpg" data-src="" width="100">';
	}
	else if (slider.value == "3"){
		htmlContentToAppend = 
		`<img  src="img/imgscope/1x1Bk-vr3.jpg" data-src="" >`;
		name = '<img  src="img/imgscope/1x1Bk-vr3.jpg" data-src="" width="100">';
	}
	document.getElementById("images-scopes-vr").innerHTML = htmlContentToAppend;
	console.log(slider.value);

	return name;
};
//----------------------------


//----------------------------

//RENDERINGS COUNT
function interiorCount()
{
	return parseInt(document.getElementById("interior").value);
}

function exteriorCount()
{
	return parseInt(document.getElementById("exterior").value);
}

function Count360Image()
{
	return parseInt(document.getElementById("360vis").value);
}

function secondsCount(){
	return parseInt(document.getElementById("animation").value);
}

function movementsCount(){
	let movements = document.getElementById("movements");
	let text = movements.options[movements.selectedIndex].text

	return text

}
//----------------------------



   






