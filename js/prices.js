//PRICES VARIABLES

let STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 155;
let STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 160;
let STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 180;
let STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 190;

let NO_STUDENT_PRICE_INTERIOR = 250;
let NO_STUDENT_PRICE_EXTERIOR = 270;

let ANIMATION_IMAGE_PER_SECOND = 60;

let IMAGE_360 = 350;
let IMAGE_360_PREVIOUS_YES = 130;

let VR_EXPERIENCE = 300
let VR_EXPERIENCE_PREVIOUS_YES = 200; 

//VARIABLE FOR OTHER COUNTRIES

const USER_COUNTRY = "UY";

fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {
	console.log(json)

if (json.country === "UY" || json.country === "AR" || json.country === "BR" || json.country === "CL" || json.country === "PE" || json.country === "PY" || json.country === "PY" || json.country === "VE" ){		
		console.log("Estoy en Uruguay");

		
	}
	else {
		STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 200;
		STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 210;
		STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE = 250;
		STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE = 270;
		console.log(json.country);
	}
});


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




//----------------------------
//INTERIOR PRICES
function interiorPrices(amount, experiences, timeline, slider){
	timeline = document.getElementById('timeline').value;
	slider = document.getElementById('interior-slider');
	amount = interiorCount();
	let prices = 0
	experiences = document.getElementById("experience").value
	console.log(experiences)

	//NOSTUDENTES
	if(slider.value == "1" && studentYesOrNo == "no"){
		prices = NO_STUDENT_PRICE_EXTERIOR*0.95*amount;
		if(timeline == "rush"){
			prices =  NO_STUDENT_PRICE_EXTERIOR*0.95*amount*1.05;
		}
	}

	if(slider.value == "2" && studentYesOrNo == "no"){
		prices = NO_STUDENT_PRICE_INTERIOR*amount;
		if(timeline == "rush"){
			prices =  NO_STUDENT_PRICE_INTERIOR*amount*1.05;
		}
	}

	if(slider.value == "3" && studentYesOrNo == "no"){
		prices = NO_STUDENT_PRICE_INTERIOR*1.1*amount;
		if(timeline == "rush"){
			prices =  NO_STUDENT_PRICE_INTERIOR*amount*1.1*1.06;
		}
	}
	//light experience
	if(experiences == "light-experience" && slider.value == "1"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}
	if(experiences == "light-experience" && slider.value == "2"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	if(experiences == "light-experience" && slider.value == "3"){
		prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*1.1*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.1*1.06;
		}
	}
	//Full experience
	else if(experiences == "full-experience" && slider.value == "1"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slider.value == "2"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.05;
		}
	}

	else if(experiences == "full-experience" && slider.value == "3"){
		prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*1.11*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_INDOOR_RENDERING_UNIT_PRICE*amount*1.11*1.06;
		}
	}
	
	
	return prices;
}

//EXTERIOR PRICES
function exteriorPrices(amount, experiences, timeline, slide){
	timeline = document.getElementById('timeline').value;
	slide = document.getElementById('exterior-slider');
	amount = exteriorCount();
	let prices = 0
	experiences = document.getElementById("experience").value;
	console.log(experiences)
//NOSTUDENTES
	if(slide.value == "1" && studentYesOrNo == "no"){
			prices = NO_STUDENT_PRICE_EXTERIOR*0.95*amount;
		if(timeline == "rush"){
				prices =  NO_STUDENT_PRICE_EXTERIOR*0.95*amount*1.05;
		}
	}
	
	if(slide.value == "2" && studentYesOrNo == "no"){
			prices = NO_STUDENT_PRICE_EXTERIOR*amount;
		if(timeline == "rush"){
				prices =  NO_STUDENT_PRICE_EXTERIOR*amount*1.05;
		}
	}
	
	if(slide.value == "3" && studentYesOrNo == "no"){
			prices = NO_STUDENT_PRICE_EXTERIOR*1.1*amount;
		if(timeline == "rush"){
				prices =  NO_STUDENT_PRICE_EXTERIOR*amount*1.1*1.06;
		}
	}
//light experience
	if(experiences == "light-experience" && slide.value == "1"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.07;
		}
	}
	if(experiences == "light-experience" && slide.value == "2"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.08;
		}
	}

	if(experiences == "light-experience" && slide.value == "3"){
		prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*1.1*amount
		if(timeline == "rush"){
			prices = STUDENT_LIGHT_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.1*1.1;
		}
	}
//Full experience
	else if(experiences == "full-experience" && slide.value == "1"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*0.95*amount*1.07;
		}
	}

	else if(experiences == "full-experience" && slide.value == "2"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.08;
		}
	}

	else if(experiences == "full-experience" && slide.value == "3"){
		prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*1.11*amount;
		if(timeline == "rush"){
			prices = STUDENT_FULL_EXPERIENCE_OUTDOOR_RENDERING_UNIT_PRICE*amount*1.11*1.1;
		}
	}
	
	
	return prices;
}

//ANIMATION PRICES
function animationPrices(animationImage, seconds, slider, timeline) {
	let prices = 0;
	timeline = document.getElementById('timeline').value;
	animationImage = ANIMATION_IMAGE_PER_SECOND;
	slider = document.getElementById('animation-slider');
	seconds = document.getElementById('animation');
	
	

	if(parseInt(seconds.value) === 0 || parseInt(seconds.value) >= 10){
	
		if(slider.value == "1") {
			prices = animationImage * seconds.value*0.95;
				if(timeline == "rush"){
					prices = animationImage * seconds.value*0.95*1.2;
				}
			}

		if(slider.value == "2") {
				prices = animationImage * seconds.value;
				if(timeline == "rush"){
					prices = animationImage * seconds.value*1.3;
				}
			}

		if(slider.value == "3") {
				prices = animationImage * seconds.value *1.11;
				if(timeline == "rush"){
					prices = animationImage * seconds.value*1.11*1.5;
				}
			}
	}


	return prices
}

//360 VIZ PRICES
function visualization360(image360, amount, slider, previous){
	let prices = 0;
	slider = document.getElementById('360-slider');
	image360 = IMAGE_360;
	previous = document.getElementById("render360");
	amount = Count360Image();
		if(previous.value == "yes"){
			image360 = IMAGE_360_PREVIOUS_YES;
				if(slider.value == "1"){
					prices = image360*amount*0.95;
					if(timeline == "rush"){
							prices = image360*amount*0.95*1.07;
						}
				}
				if(slider.value == "2"){
					prices = image360*amount;
					if(timeline == "rush"){
							prices = image360*amount*1.08;
						}
				}
				if(slider.value == "3"){
					prices = image360*amount*1.11;
					if(timeline == "rush"){
							prices = image360*amount*1.11*1.1;
						}
				}


	}
		if(previous.value == "no") {
			if(slider.value == "1"){
				prices = image360*amount*0.95;
				if(timeline == "rush"){
						prices = image360*amount*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = image360*amount;
				if(timeline == "rush"){
						prices = image360*amount*1.08;
					}
			}
			if(slider.value == "3"){
				prices = image360*amount*1.11;
				if(timeline == "rush"){
						prices = image360*amount*1.11*1.1;
					}
			}
		}

		return prices
}
//VR VIZ PRICES
function visualizationVR(vr_image, movements, slider, previous, timeline){
	let prices = 0;
	timeline = document.getElementById('timeline').value;
	slider = document.getElementById('VR-slider');
	previous = document.getElementById("renderVR");
	movements = document.getElementById("movements");
	if(previous.value == "yes"){
		vr_image = VR_EXPERIENCE_PREVIOUS_YES;
		if(movements.value == "low"){
			vr_image = vr_image*3.5
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.7;
				if(timeline == "rush"){
						prices = vr_image*1.7*1.1;
					}
			}
		}

		if(movements.value == "medium"){
			vr_image = vr_image*4
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.5;
				if(timeline == "rush"){
						prices = vr_image*1.5*1.1;
					}
			}
		}

		if(movements.value == "high"){
			vr_image = vr_image*5
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.6;
				if(timeline == "rush"){
						prices = vr_image*1.6*1.1;
					}
			}
		}

		if(movements.value == "real"){
			vr_image = vr_image*7
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.75;
				if(timeline == "rush"){
						prices = vr_image*1.75*1.1;
					}
			}
		}

	}

	if(previous.value == "no"){
		vr_image = VR_EXPERIENCE;


		if(movements.value == "low"){
			vr_image = vr_image*3
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.5;
				if(timeline == "rush"){
						prices = vr_image*1.5*1.1;
					}
			}
		}

		if(movements.value == "medium"){
			vr_image = vr_image*4
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.5;
				if(timeline == "rush"){
						prices = vr_image*1.5*1.1;
					}
			}
		}

		if(movements.value == "high"){
			vr_image = vr_image*5
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.6;
				if(timeline == "rush"){
						prices = vr_image*1.6*1.1;
					}
			}
		}

		if(movements.value == "real"){
			vr_image = vr_image*7
			if(slider.value == "1"){
				prices = vr_image*0.95;
				if(timeline == "rush"){
						prices = vr_image*0.95*1.07;
					}
			}
			if(slider.value == "2"){
				prices = vr_image*1.2;
				if(timeline == "rush"){
						prices = vr_image*1.08;
					}
			}
			if(slider.value == "3"){
				prices = vr_image*1.75;
				if(timeline == "rush"){
						prices = vr_image*1.75*1.1;
					}
			}
		}

	}

		return prices
}
//----------------------------



//----------------------------
//DISCOUNT IN RELATION WITH AMOUNT OF RENDERINGS
function discountAmountRenderingInteriorAndFinalPrice(amountRenderings, interiorPrice){
	interiorPrice = interiorPrices();
	amountRenderings = interiorCount() + exteriorCount();
	console.log(amountRenderings);

	if (amountRenderings === 2){
		return interiorPrice*0.96  
	} if(amountRenderings === 3) {
		return interiorPrice*0.92
	} if(amountRenderings === 4) {
		return interiorPrice*0.88
	} if(amountRenderings === 5) {
		console.log("eestoy en el 5 if")
		return interiorPrice*0.84
	} if(amountRenderings === 6) {
		return interiorPrice*0.8
	} if(amountRenderings > 6) {
		return interiorPrice*0.8
	}
	return interiorPrice;
}

function discountAmountRenderingExteriorAndFinalPrice(amountRenderings, exteriorPrice){
	exteriorPrice = exteriorPrices();
	amountRenderings = interiorCount() + exteriorCount();
	if (amountRenderings === 2){
		return exteriorPrice*0.96  
	} if(amountRenderings === 3) {
		return exteriorPrice*0.92
	} if(amountRenderings === 4) {
		return exteriorPrice*0.88
	} if(amountRenderings === 5) {
		return exteriorPrice*0.84
	} if(amountRenderings === 6) {
		return exteriorPrice*0.8
	} if(amountRenderings > 6) {
		return exteriorPrice*0.8
	}
	return exteriorPrice;
}

function discountAmountRendering360AndFinalPrice(amountRenderings, image360Price){
	image360Price = visualization360();
	amountRenderings = Count360Image();
	if (amountRenderings === 2){
		return image360Price*0.96  
	} if(amountRenderings === 3) {
		return image360Price*0.92
	} if(amountRenderings === 4) {
		return image360Price*0.88
	} if(amountRenderings === 5) {
		return image360Price*0.84
	} if(amountRenderings === 6) {
		return image360Price*0.8
	} if(amountRenderings > 6) {
		return image360Price*0.8
	}
	return image360Price;
}
//----------------------------




//----------------------------
//SHOW THE INFORMATION IN TABLE
function showPrices(){
	let experiences = tellMeExperience();
	let sumaPrecioRenders = Math.ceil(discountAmountRenderingExteriorAndFinalPrice()) + Math.ceil(discountAmountRenderingInteriorAndFinalPrice() + Math.ceil(animationPrices()) + Math.ceil(discountAmountRendering360AndFinalPrice()) + Math.ceil(visualizationVR()));
	let timeline = document.getElementById('timeline').value;

	if(timeline === "") {
		document.getElementById("tablacarrito").style.opacity = "0";
		document.getElementById("opacity-one").style.opacity = "0";
		document.getElementById("idshow").style.display="block";
		alert("No timeline select");
	}
	else if(experiences == "" && studentYesOrNo == "yes"){
		alert("No experience Select")
	}

	else if(secondsCount() > 0 && secondsCount() < 10){
		alert("Animation has to be more or equal than 10 seconds")
	}

	 else {
		let contenido = `
		<tr>
			<td>${addingImageInteriorScope()}</td>
			
			<td>`+ interiorCount()+` `+`Images`+`</td>
			<td>${Math.ceil(discountAmountRenderingInteriorAndFinalPrice()*0.9)} USD - ${Math.ceil(discountAmountRenderingInteriorAndFinalPrice()*1.2)} USD</td>
		</tr>
		<tr>
			<td>`+ addingImageExteriorScope()+`</td>
			
			<td>`+ exteriorCount()+` `+`Images`+`</td>
			<td>`+ Math.ceil(discountAmountRenderingExteriorAndFinalPrice()*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(discountAmountRenderingExteriorAndFinalPrice()*1.2)+` `+`USD` +`</td>
		</tr>
		<tr>
			<td>`+ addingImageAnimationScope()+`</td>
			
			<td>`+ secondsCount()+` `+`Seconds`+`</td>
			<td>`+ Math.ceil(animationPrices()*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(animationPrices()*1.2)+` `+`USD` +`</td>
		</tr>
		<tr>
			<td>`+ addingImage360Scope()+`</td>
			
			<td>`+ Count360Image()+` `+`Images`+`</td>
			<td>`+ Math.ceil(discountAmountRendering360AndFinalPrice()*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(discountAmountRendering360AndFinalPrice()*1.2)+` `+`USD` +`</td>
		</tr>
		<tr>
			<td>`+ addingImageVr()+`</td>
			
			<td>`+  movementsCount() +`</td>
			<td>`+ Math.ceil(visualizationVR()*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(visualizationVR()*1.2)+` `+`USD` +`</td>
		</tr>
		<tr>
			<td class="totalclass">`+ "TOTAL" + `</td>
			<td></td>
			<td>`+ Math.ceil(sumaPrecioRenders*0.9)+` `+`USD`+` `+`-`+` `+ Math.ceil(sumaPrecioRenders*1.2)+` `+`USD` +`</td>
		</tr>
			`;
		document.getElementById("tablacarrito").innerHTML = contenido;
		document.getElementById("tablacarrito").style.opacity = "1";
		document.getElementById("opacity-one").style.opacity = "1";
		//document.getElementById("idshow").style.display="none";
	}
		
}
//----------------------------

   






