

const form = document.getElementById('formtext');
console.log(form);



function renderDatos(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let exteriorScope = document.createElement('span');
    let interiorScope = document.createElement('span');
    let exteriorAmount = document.createElement('span');
    let interiorAmount = document.createElement('span');
    let student = document.createElement('span');
    let experience = document.createElement('span');
    let timeline = document.createElement('span');
    let animationSeconds = document.createElement('span');
    let animationScope = document.createElement('span');
    let image360Amount = document.createElement('span');
    let image360Scope = document.createElement('span');
    let image360previous = document.createElement('span');
    let vrFreedom = document.createElement('span');
    let vrPrevious = document.createElement('span');
    let vrScope = document.createElement('span');
    let brochure = document.createElement('span');
    let date = document.createElement('span');
    let country = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    exteriorScope.textContent = doc.data().exteriorScope;
    interiorScope.textContent = doc.data().exteriorScope;
    interiorAmount.textContent = doc.data().interiorAmount;
    exteriorAmount.textContent = doc.data().exteriorAmount;
    experience.textContent = doc.data().experience;
    student.textContent = doc.data().student;
    timeline.textContent = doc.data().timeline;
    animationSeconds.textContent = doc.data().animationSeconds;
    animationScope.textContent = doc.data().animationScope;
    image360Amount.textContent = doc.data().image360Amount;
    image360Scope.textContent = doc.data().image360Scope;
    image360previous.textContent = doc.data().image360previous;
    vrFreedom.textContent = doc.data().vrFreedom;
    vrPrevious.textContent = doc.data().vrPrevious;
    vrScope.textContent = doc.data().vrScope;
    brochure.textContent = doc.data().brochure;
    date.textContent = doc.data().date;
    country.textContent = doc.data().country;

    li.appendChild(name);
    li.appendChild(email);


}



//getting data
db.collection('datos').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderDatos(doc)
    })
});

/////////////////////////
let today = new Date();
let date = today.getDate() + "-"+ today.getMonth()+ "-" + today.getFullYear();
/////////////////////////
let email2 = document.getElementById('emailvalid');
let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/////////////////////////
let exteriorSlide = document.getElementById('exterior-slider');
let interiorSlide = document.getElementById('interior-slider');
let interiorAmount = document.getElementById('interior');
let exteriorAmount = document.getElementById('exterior');
let experience = document.getElementById('experience');
let timeline = document.getElementById('timeline');
let animationSeconds = document.getElementById('animation');
let animationScope = document.getElementById('animation-slider');
let image360Amount = document.getElementById('360vis');
let image360Scope = document.getElementById('360-slider');
let image360previous = document.getElementById('render360');
let vrFreedom = document.getElementById('movements');
let vrPrevious = document.getElementById('renderVR');
let vrScope = document.getElementById('VR-slider');
/////////////////////////
let country = ""

fetch("https://ipinfo.io", {headers: {Accept: "application/json"}}).then(response => response.json()).then(json => {
    if (json.country !== "UY"){		
		country  = json.country
	}
	else {
		country = "UY"
	}
});

console.log(country)




//saving data

function button(){
    
    let formInputName = document.forms["Form"]["name"]

    let formInputEmail = document.forms["Form"]["email"]

    console.log(formInputEmail)
    console.log(formInputName)

    let experienceError = document.getElementById("experienceError");
    let animation = document.getElementById("animationError");
    let timeLine = document.getElementById("timeLineError");


    let htmlContentToAppend = "";

    animation.style.display = "none";
    timeLine.style.display = "none";
    experienceError.style.display = "none";

       if((experience.value == "" && studentYesOrNo == "yes")  && window.location.hash != "#esp"){
        animation.style.display = "none";
        timeLine.style.display = "none";
        experienceError.style.display = "block";
        htmlContentToAppend = 
        `<p>Please select experience.</p>`;
    
    
     experienceError.innerHTML = htmlContentToAppend;
       }

       else if((experience.value == "" && studentYesOrNo == "yes") && window.location.hash === "#esp"){
        animation.style.display = "none";
        timeLine.style.display = "none";
        experienceError.style.display = "block";
        htmlContentToAppend = 
        `<p>Por favor seleccionar experiencia.</p>`;
    
    
     experienceError.innerHTML = htmlContentToAppend;
        }
        
       else if(email2.value.match(pattern) && experience !== "" && studentYesOrNo == "yes" && (timeline.value === "rush" || timeline.value === "standard")){ db.collection('datos').add({
            
            date: date,
            country: country,
            name: form.name.value,
            email: form.email.value,    
            exteriorslide: exteriorSlide.value,
            interiorslide: interiorSlide.value,
            interiorAmount: interiorAmount.value,
            exteriorAmount: exteriorAmount.value,
            student: studentYesOrNo,
            experience: experience.value,
            timeline: timeline.value

        })


        
        
        document.getElementById("textareaidnow").value = "Date: " + date + "\n" + "Country: " + country + "\n" + "timeline: " + timeline.value + "\n" + "Exerience: " + experience.value + "\n" + "Exterior Scope: " + exteriorSlide.value + "\n" + "InteriorScope: " + interiorSlide.value + "\n" + "Interior amount: " + interiorAmount.value + "\n" + "Exterior Amount: " +  exteriorAmount.value + "\n" + "Student: " + studentYesOrNo;
        document.getElementById("spinner-wrapper").style.display = "block"
        setTimeout(function() { document.getElementById("formtext").submit(); }, 1000);
    }

       else if(email2.value.match(pattern) && studentYesOrNo == "no" && (timeline.value === "rush" || timeline.value === "standard") && (secondsCount() == 0 || secondsCount() >= 10)){
             db.collection('datos').add({
                date: date,
                country: country,
                name: form.name.value,
                email: form.email.value,
                exteriorslide: exteriorSlide.value,
                interiorslide: interiorSlide.value,
                interiorAmount: interiorAmount.value,
                exteriorAmount: exteriorAmount.value,
                student: studentYesOrNo,
                timeline: timeline.value,
                animationSeconds: animationSeconds.value,
                animationScope: animationScope.value,
                image360Amount: image360Amount.value,
                image360Scope: image360Scope.value,
                image360previous: image360previous.value,
                vrFreedom: vrFreedom.value,
                vrPrevious: vrPrevious.value,
                vrScope: vrScope.value,
                brochure: brochureYesOrNo,
            })
         animation.style.display = "none";
            document.getElementById("textareaidnow").value = "Date: " + date + "\n" + "Country: " + country + "\n" +"timeline: " + timeline.value + "\n" + "Exterior Scope: " + exteriorSlide.value + "\n" + "InteriorScope: " + interiorSlide.value + "\n" + "Interior amount: " + interiorAmount.value + "\n" + "Exterior Amount: " +  exteriorAmount.value + "\n" + "Student: " + studentYesOrNo + "\n" + "Animation Seconds: " + animationSeconds.value  + "\n" + "Animation Scope: " + animationScope.value + "\n" + "360 amount: " + image360Amount.value + "\n" + "360 Scope: " + image360Scope.value  + "\n" + "360 previous: " + image360previous.value + "\n" + "Movement Freedom: " + vrFreedom.value + "\n" + "VR-previous: " + vrPrevious.value + "\n" + "VR-Scope: " + vrScope.value + "\n" + "Brochure: " + brochureYesOrNo;
            document.getElementById("spinner-wrapper").style.display = "block"
            setTimeout(function() { document.getElementById("formtext").submit(); }, 1000);

        }

        else if(secondsCount() > 0 && secondsCount() < 10 && window.location.hash != "#esp"){
         animation.style.display = "block";
            timeLine.style.display = "none";

            htmlContentToAppend = 
            `<p>Animation has to be 0 or more than 9 seconds.</p>`;
        
        
         animation.innerHTML = htmlContentToAppend;
           
        } else if((secondsCount() > 0 && secondsCount() < 10 && window.location.hash === "#esp")){
         animation.style.display = "block";
            timeLine.style.display = "none";

            htmlContentToAppend = 
            `<p>La animacion tiene que ser 0 o mayor a 9 segundos.</p>`;
        
        
         animation.innerHTML = htmlContentToAppend;
        }
        else if(timeline.value === "" && window.location.hash != "#esp")
        {

            timeLine.style.display = "block";
            animation.style.display = "none";
           
            htmlContentToAppend = 
            `<p>Please select timeline and complete the form.</p>`;
        
        
            timeLine.innerHTML = htmlContentToAppend;


        } else if(timeline.value === "" && window.location.hash === "#esp") {

            animation.style.display = "block";
            timeLine.style.display = "none";

            htmlContentToAppend = 
            `<p>Por favor seleccionar tiempos y completa tus datos.</p>`;
        
        
            timeLine.innerHTML = htmlContentToAppend;

        
        }

        else if((formInputName.value === "" || formInputEmail.value === "")  && window.location.hash != "#esp") {
         animation.style.display = "none";
            timeLine.style.display = "block";

            htmlContentToAppend = 
            `<p>Please select timeline and complete the form.</p>`;
        
        
            timeLine.innerHTML = htmlContentToAppend;


        } 

        else if((formInputName.value === "" || formInputEmail.value === "") && window.location.hash === "#esp") {
            animation.style.display = "none";
               timeLine.style.display = "block";
   
               htmlContentToAppend = 
               `<p>Por favor seleccionar tiempos y completa tus datos.</p>`;
           
           
               timeLine.innerHTML = htmlContentToAppend;
   
   
           } 
        
 }
 


