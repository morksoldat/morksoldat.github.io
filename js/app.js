// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " Nombre científico de helminto cuyas larvas alcanzan el tejido pulmonar pudiendo causar tos, crisis obstructivas y hemoptisis.", "ascaris lumbricoides"),
	new Word(1, "B", "Empieza por B:", " Entidad clínica  caracterizada por fiebre sin foco, sed orina no inflamatorio, GB >15000 y PCR >90", "bacteremia oculta"),
	new Word(2, "C", "Empieza por C:", " Agente infeccioso cuya infección in útero puede producir sordera en el niño", "citomegalovirus"),
	new Word(3, "D", "Empieza por D:", " Antimicrobiano usado en el tratamiento del acné, rosácea, infecciones por Rickettsias, brucella canis y gonorrea", "doxiciclina"),
	new Word(4, "E", "Empieza por E:", " Forma de presentación de la infección neurológica por virus herpes", "encefalitis"),
	new Word(5, "F", "Empieza por F:", " Infección cutánea por S. pyógenes caracterizada por eritema e intenso dolor con rápida progresión asociada a shock tóxico", "fasceitis necrotizante"),
	new Word(6, "G", "Empieza por G:", " Vector de Borrelia burgdorferi  y Erlichia canis ", "garrapata"),
	new Word(7, "H", "Empieza por H:", " Sindrome de activación inmune caracterizado por fiebre, citopenias, esplenomegalia, hipertrigliceridemia, hipofibrinogenemia, elevación de ferritina y alta mortalidad", "hemofagocitico"),
	new Word(8, "I", "Empieza por I:", " Antituberculoso usado tanto para tratamiento como profilaxis", "isoniazida"),
	new Word(9, "J", "Contiene la J:", " Nombre de hongo patógeno oportunista que coloniza el aparato respiratorio, antiguamente considerado parásito", "pneumocystis jirovecii"),
	new Word(10, "L", "Empieza por L:", " Especie de Candida resistente a anfotericina B", "lusitaniae"),
	new Word(11, "M", "Empieza por M:", " Síndrome caracterizado por triada fiebre, faringitis y adenopatías.", "mononucleosis infecciosa"),
	new Word(12, "N", "Empieza por N:", " Medicamento de elección para el tratamiento de enfermedad de chagas.", "nifurtimox"),
	new Word(13, "Ñ", "Contiene la Ñ:", " Nombre de enfermedad producida por Bartonella henselae.", "arañazo de gato"),
	new Word(14, "O", "Empieza por O:", " Subtipo de E. Coli causante de SHU.", "o157h7"),
	new Word(15, "P", "Empieza por P:", " Agente causal de hidrops neonatal. En preescolares se caracteriza por “el signo de la cachetada”", "parvovirus b19"),
	new Word(16, "Q", "Empieza por Q:", " Especie de Bartonella causante de endocarditis y fiebre de las trincheras", "quintana"),
	new Word(17, "R", "Empieza por R:", " Síndrome caracterizado por la triada: hipoacusia neurosensorial, cardiopatía congénita y anomalías oculares.", "rubeola congenita"),
	new Word(18, "S", "Empieza por S:", " Nombre de microorganismo portador del gen AMPc.", "serratia marcescens"),
	new Word(19, "T", "Empieza por T:", " Infección que causa eosinofilia en niños y es transmitida por perros", "toxocara canis"),
	new Word(20, "U", "Empieza por U:", " País con alto índice de SAMR en Latinoamérica.", "uruguay"),
	new Word(21, "V", "Empieza por V:", " Medicamento utilizado para el tratamiento de citomegalovirus congénito.", "valganciclovir"),
	new Word(22, "X", "Empieza por X:", " Hallazgo que puede aparecer en el LCR en las encefalitis herpéticas.", "xantocromia"),
	new Word(23, "Y", "Contiene la Y:", " Agente causal de la Peste bubónica.", "yersinia pestis"),
	new Word(24, "Z", "Contiene la Z:", " Tratamiento antiviral profiláctico utilizado para prevención de transmisión vertical en recién nacidos.", "zidovudina")
];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
}

var remainingWords = 25;

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	if (userAnswer == words[pos].word.toLowerCase()) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

	} else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
	}
	remainingWords--;
	$("js--score").html(remainingWords);

	return count++;
}

function pasapalabra(pos) {
	var w = words.splice(pos, 1)[0];
	words.push(w);

}

function continuePlaying() {
	if (count != 25) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

var seconds;
var temp;

function countdown() {
	seconds = $("#js--timer").html();
	seconds = parseInt(seconds, 10);
	if (seconds == 1) {
		temp = $("#js--timer");
		temp.innerHTML = 0;
		endGame();
		return;
	}
	seconds--;
	temp = $("#js--timer");
	temp.html(seconds);
	timeoutMyOswego = setTimeout(countdown, 1000);
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Fin de partida!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	return "Has conseguido un total de " + counter + " aciertos.";
}


// Main Program
// ----------------------------------------------------------------------------- */

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
	pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "17") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	endGame();
});
