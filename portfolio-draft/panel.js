var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  	acc[i].addEventListener("click", function() {
    	this.classList.toggle("active");

    	var panel = this.nextElementSibling;
    	if (panel.style.display === "block") {
      		panel.style.display = "none";
    	} 
    	else {
      		panel.style.display = "block";
    	}
  	});
} 


function cover(a) {
	if (a == 'UNC') {
		newHead = "UNC";
		newImg = "assets/unclogo.png";
		newDesc = "I was admitted to the Univeristy of North Carolina at Chapel Hill to study Library Science this August. My plan is to focus on technology support for public libraries, keeping advancements accessible to the public. I look forward to the experience and to developing this section further.";
	}
	else if (a == 'UMW') {
		newHead = "University of Mary Washington";
		newImg = "assets/umwlogo.png";
		newDesc = "I have spent the last four years studying Applied Physics and English Literature at the University of Mary Washington in Fredericksburg, VA, with a focus in astrophysics. Many of the bigger experiences I've had at this college are listed in other sections. I have taken several classes within the physics department related to data integration and usage, including Optical Astrophysics and Optics with lab. I have advanced my societal understanding with classes in English, environmental science, and sociology itself, as well as a physics seminar that discusses the social challenges and cultural biases in the sciences. My technical skills have improved with a Critical Web Design course (which you can see the results of for yourself) as well as a course in videogame design. Overall, I have had a well-rounded experience that has challenged me to think critically and make connections between all fields of study.";
	}
	else if (a == 'simpson') {
		newHead = "Simpson Library";
		newImg = "assets/simpson.jpg";
		newDesc = "While studying at UMW, I had the opportunity to work as an Access Services Assistant at the school library. My role came in three parts; the circulation desk, the library shelves, and the information desk at the Hurley Convergence Center. The circulation desk shifts were public-facing positions, general information and services about the library. The shelves involved library maintenance, from literally shelving the books to digitizing or pulling materials (books and microforms) as requested from students, faculty, or ILL services. In addition to those tasks, we often had tasks from our supervisors, including scanning for inventory, shelf-reading, shifting books, finding missing books, and creating displays or buttons. The third part was an information desk management position at a neighboring building. The Hurley Convergence Center provides study rooms with AV systems, resources for class projects in speaking, writing, and digital creation, and the information technology desk. At this desk, I provided technology equipment such as cameras and laptops, gave general troubleshooting advice, assisted in the use of the AV systems, and answered questions about the university and the building.";
	}
	else if (a == 'herndon') {
		newHead = "Herndon Fortnightly Library";
		newImg = "assets/herndon.jpg";
		newDesc = "As a high school senior, I worked at the downtown library in Herndon as a library page. This involved mostly shelving books, though I was tasked with finding missing books, performing quality checks, and processing books for withdrawal from the library or holds through a local inter-branch system. I have returned to this library most summers to volunteer, performing many of the same tasks and keeping in contact with my former supervisors and coworkers.";
	}
	else if (a == 'bagpipes') {
		newHead = "Properties of 3D Printed Bagpipes";
		newImg = "assets/bagpipes.jpg";
		newDesc = "With the Arts, Humanities, and Social Sciences Summer Institute at UMW, I continued a project from a graduating senior involving 3D printing pipes for the university's bagpipe band. Two faculty members and four students were involved in creating a functional set of bagpipes from 3D printing in five weeks. I worked with two other students in the physics department and one history major in the bagpipe band.";
	}
	else if (a == 'skynet') {
		newHead = "Skynet Optical Imaging Research";
		newImg = "assets/skynet.jpg";
		newDesc = "After taking an Observational Astrophysics course that worked closely with Skynet, I took on an independent research project to determine the cleanest image compilation and alignment setup in its partner program Afterglow. I mostly worked with additive alignment rather than mosaic, as it was the most diversely used during the class. I also attempted to find the image correction settings that would make the cleanest picture, more clearly defining celestial objects without the background noise the service sometimes provides, and a reliable method of removing ghost images.";
	}
	document.getElementById('head').innerText = newHead;
	document.getElementById('desc').innerText = newDesc;
	document.getElementById('parfait').src = newImg;
}

