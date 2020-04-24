const questions = {
	"A": [
		["Nombre científico de helminto cuyas larvas alcanzan el tejido pulmonar pudiendo causar tos, crisis obstructivas y hemoptisis.", ["ascaris lumbricoides", "ascaris"]],
		["Antiparasitario de elección para el tratamiento de la toxocariasis", ["albendazol", "albendazol"]],
		["Aminoglicósido de uso parenteral para el tratamiento de ITU febril o intolerancia gástrica para el tratamiento vía oral", ["amikacina", "amikacina"]],
		["Vector de la Malaria (género)", "anopheles"],
		["Vector de zika", ["aedes aegypti", "aedes"]]

		/*
			Nota de Guillermo:
			En 4 de los 5 elementos del arreglo `A` cambié el elemento de índice 1 (2º elemento) por un arreglo de dos elementos.
			Eso significa que el contenido de words[pos].word va a ser un arreglo de largo >= 1.
			Utilizar este formato para incorporar todas las posibles respuestas para cada pregunta.
		*/
	],
	"B": [
		["Entidad clínica  caracterizada por fiebre sin foco, sed orina no inflamatorio, GB >15000 y PCR >90", ["bacteremia oculta"]],
		["Agente etiológico de la tos convulsiva", ["bordetella pertussis"]],
		["Zoonosis adquirida por contacto con perros con infección del tracto genital. En el humano puede producir infección osteoarticular.", ["brucella canis", "brucella", "brucelosis"]],
		["Agente etiológico de la enfermedad de arañazo de gato", ["bartonella henselae"]],
		["Agente etiológico de la Fiebre de Oroya", ["bartonella baciliformis"]]
	],
	"C": [
		["Agente infeccioso cuya infección in útero puede producir sordera en el niño.",[ "citomegalovirus"]],
		["Hongo que produce meningitis en pacientes infectados con VIH con inmunodepresión severa.", ["crytococcus neoformans", "crytococcus"]],
		["Antibiótico de elección para el tratamiento intravenoso ambulatorio de la bacteremia oculta.", ["ceftriaxona"]],
		["Agente causal de conjuntivitis y neumonía neonatal", ["chlamydia trachomatis"]],
		["Enfermedad cuyo vector es el triatoma infestans", ["chagas"]]
	],
	"D": [
		["Enfermedad cuyo vector es el triatoma infestans.", ["doxiciclina"]],
		["Antibiótico bacteriostático usado para el tratamiento de lepra y como profilaxis de infecciones por Pneumocystis jirovecii y Toxoplasma gondii", ["dapsona"]],
		["Infección por arbovirus que causa fiebre, mialgias y trombocitopenia.", ["dengue"]],
		["Enfemredad causada por bacilo gram positivo que produce psuedomembranas faríngeas.", ["difteria"]]
	],
	"E": [
		["Forma de presentación de la infección neurológica por virus herpes.", ["encefalitis"]],
		["Macrólido usado en el tratamiento de la infección por Bordetella pertussis.", ["eritromicina"]],
		["Sindrome causado por Parvovirus B19", ["eritema infeccioso"]],
		["Enfermedad para la cual se utilizan de Criterios de Duke", ["endocarditis"]]
	],
	"F": [
		["Infección cutánea por S. pyógenes caracterizada por eritema e intenso dolor con rápida progresión asociada a shock tóxico", ["fasceitis necrotizante"]],
		["Hongo filamentoso ampliamente distribuido en el suelo y plantas que puede causar infecciones localizadas como queratitis o infecciones diseminadas en pacientes neutropénicos.", ["fusarium solanii", "fusarium"]],
		["Los criterios de Jones son utilizados para:", ["fiebre reumatica"]],
		["Nombre común de la influenza en inglés", ["flu"]]
	],
	"G": [
		["Vector de Borrelia burgdorferi  y Erlichia canis.", ["garrapatas"]],
		["Animal que transmite la bacteria Bartonella henselae a través de mordedura o lamido", ["gato"]],
		["Biomarcador utilizado para el diagnóstico de Aspergilosis.", ["galactomanano"]],
		["Especia de Candida", ["glabrata"]]
	],
	"H": [
		["Sindrome de activación inmune caracterizado por fiebre, citopenias, esplenomegalia, hipertrigliceridemia, hipofibrinogenemia, elevación de ferritina y alta mortalidad.", ["hemofagocitico"]],
		["Bacilo gram negativo asociado a úlcera péptica y a cáncer gástrico.", ["helicobacter pylori"]],
		["Agente causal de enfermedad inmunoprovenible que puede producir neumonía, meningitis o celulitis facial.", ["haemophilus influenzae"]],
		["Virus causante de Sindrome Cardiopulmonar o Sindrome Renal", ["hanta"]]
	],
	"I": [
		["Antituberculoso usado tanto para tratamiento como profilaxis.", ["isoniazida"]],
		["Parásito intestinal cuya infección en pacientes infectados con VIH traducida en diarrea de más de 1 mes de evolución se considera una Enfermedad Indicadora de SIDA.", ["isospora belli"]],
		["Antibiótico de la familia de los carbapenémico.", ["imipenem"]],
		["Tratamiento de primera línea para enfermedad de Kawasaki.", ["inmunoglobulina"]]
	],
	"J": [
		["Nombre de hongo patógeno oportunista que coloniza el aparato respiratorio, antiguamente considerado parásito.", ["pneumocystis jirovecii", "pneumocystis"]],
		["RAM severa que compromete piel, mucosas, fanéreos, intestino, pulmón de evolución grave e incluso fatal.", ["stevens johnson"]]
	],
	"K": [
		["Carbapenemasa plasmidial de rápida diseminación (siglas).", ["kpc"]],
		["Aagente infeccioso causante de infecciones osteoarticulares en niños menores de 5 años.", ["kingella kingae"]],
		["Antibiótico utilizado para microorganismos BLEE.", ["amikacina"]],
		["Enfermedad que puede causar hidrops vesicular.", ["kawasaki"]]
	],
	"L": [
		["Especie de Candida resistente a anfotericina B", ["lusitaniae"]],
		["Estado característico de los virus herpes, en la cual el genoma viral permanece dentro de las células del huésped durante toda la vida.", ["latencia"]],
		["Especia bacteriana que causa sepsis neonatal.", ["listeria monocytogenes"]],
		["Nombre sindromático de toxocara", ["larva migrans visceral"]]
	],
	"M": [
		["Síndrome caracterizado por triada fiebre, faringitis y adenopatías.", ["mononucleosis infecciosa"]],
		["Síndrome caracterizado por inflamación del músculo cardiaco. Dentro de sus causas se encuentran, enterovirus, adenovirus y parvovirus B 19.", ["miocarditis"]],
		["Agente etiológico de otitis media aguda", ["moraxella catarrhalis", "moraxella"]],
		["Complicación de la influenza", ["miositis"]]
	],
	"N": [
		["Medicamento de elección para el tratamiento de enfermedad de chagas.", ["nifurtimox"]],
		["Antibiótico utilizado para la ITU baja.", ["nitrofurantoina"]],
		["Tratamiento de Crypstosporidium", ["nitazoxanida"]],
		["Antifúngico útil en candidiasis del pañal", ["nistatina"]]
	],
	"O": [
		["Subtipo de E. Coli causante de SHU",["o157h7"]],
		["Infección fúngica de la uña", ["onicomicosis"]]
	],
	"P": [
		["Nombre de agente causal de hidrops neonatal. En preescolares se caracteriza por el signo de la cachetada.", ["parvovirus b19"]],
		["Bacilo gram negativo no fermentador", ["pseudomonas aeruginosa", "pseudomonas"]],
		["Ser vivo que vive y se nutre de otro sin aportarle ningún tipo de beneficio a este último.", ["parasito"]],
		["Enfermedad inmunoprevenible que causa aumento de volumen parotideo", ["parotiditis"]]
	],
	"Q": [
		["Especie de Bartonella causante de endocarditis y fiebre de las trincheras", ["quintana"]],
		["Término que se refiere a la presencia de células linfohematopoyéticas no propias del receptor que aparecen como resultado de un trasplante alogénico", ["quimerismo"]]
	],
	"R": [
		["Síndrome caracterizado por la triada: hipoacusia neurosensorial, cardiopatía congénita y anomalías oculares.", ["rubeola congenita", "rubeola"]],
		["Zoonosis transmitida por murciélagos.",["rabia"]],
		["Organelo celular sitio de acción de la clindamicina", ["ribosoma"]],
		["Bacteria causante de Enfermedad de Lyme.", ["rickettsia rickettsii"]]
	],
	"S": [
		["Especie bacteriana portadora del gen AMPc.", ["serratia marcescens", "serratia"]],
		["Género bacteriano bacilo gram negativo que causa infección posterior a ingerir huevos mal cocidos.", ["salmonella"]],
		["Enfermedad causada por parásito Sarcopteis scabei", ["sarna"]],
		["Enfermedad inmunoprevenible de notificación inmediata.", ["sarampion"]]
	],
	"T": [
		["Infección que causa eosinofilia en niños y es transmitida por perros.", ["toxocara canis", "toxocariasis", "toxocara"]],
		["Parásito intracelular que causa enfermedad de Chagas.", ["trypanosoma cruzi"]],
		["Vector de Enfermedad de Chagas en Chile.", ["triatoma infestans"]],
		["Medicamento inmunosupresor que aumenta el riesgo de reactivación de infecciones virales en trasplantados.", ["timoglobulina"]]
	],
	"U": [
		["País con alto índice de SAMR en Latinoamérica.", ["uruguay"]],
		["Infección de lámina intermedia del ojo, situada entre la esclerótica y la retina", ["uveitis"]]
	],
	"V": [
		["Medicamento utilizado para el tratamiento de citomegalovirus congénito.", ["valganciclovir"]],
		["Principal causa de meningitis viral.", ["enterovirus"]],
		["Bacilo gram negativo que causa infección intestinal aguda por la ingestión de alimentos o agua contaminados.", ["vbrio cholerae"]],
		["Retrovirus cuyo principal receptor molecular se encuentra en los linfocitos T CD4 (sigla).", ["vih"]]
	],
	"X": [
		["Nombre comercial de método diagnóstico molecular para diagnóstico de Mycobacterium tuberculosis, que además identifica resistencia a rifampicina.", ["genexpert", "gene expert"]]
	],
	"Y": [
		["Agente causal de la Peste bubónica.", ["yersinia pestis"]],
		["Levadura en inglés", ["yeast"]]
	],
	"Z": [
		["Tratamiento antiviral profiláctico utilizado para prevención de transmisión vertical en recién nacidos.", ["zidovudina"]],
		["Arbovirus que puede producir microcefália congénita", ["zika"]]
	]
}
const questions_array = Object.entries(questions)

const words = questions_array.map(function (v, index) {
	var selected = v[1][Math.floor(Math.random() * v[1].length)]
	return createWord(index, v[0], selected[0], selected[1])
})

// Variables
// -----------------------------------------------------------------------------

// var words = [
// 	new Word(0, "A", "Empieza por A:", " Nombre científico de helminto cuyas larvas alcanzan el tejido pulmonar pudiendo causar tos, crisis obstructivas y hemoptisis.", "ascaris lumbricoides"),
// 	new Word(1, "B", "Empieza por B:", " Entidad clínica  caracterizada por fiebre sin foco, sed orina no inflamatorio, GB >15000 y PCR >90", "bacteremia oculta"),
// 	new Word(2, "C", "Empieza por C:", " Agente infeccioso cuya infección in útero puede producir sordera en el niño", "citomegalovirus"),
// 	new Word(3, "D", "Empieza por D:", " Antimicrobiano usado en el tratamiento del acné, rosácea, infecciones por Rickettsias, brucella canis y gonorrea", "doxiciclina"),
// 	new Word(4, "E", "Empieza por E:", " Forma de presentación de la infección neurológica por virus herpes", "encefalitis"),
// 	new Word(5, "F", "Empieza por F:", " Infección cutánea por S. pyógenes caracterizada por eritema e intenso dolor con rápida progresión asociada a shock tóxico", "fasceitis necrotizante"),
// 	new Word(6, "G", "Empieza por G:", " Vector de Borrelia burgdorferi  y Erlichia canis ", "garrapata"),
// 	new Word(7, "H", "Empieza por H:", " Sindrome de activación inmune caracterizado por fiebre, citopenias, esplenomegalia, hipertrigliceridemia, hipofibrinogenemia, elevación de ferritina y alta mortalidad", "hemofagocitico"),
// 	new Word(8, "I", "Empieza por I:", " Antituberculoso usado tanto para tratamiento como profilaxis", "isoniazida"),
// 	new Word(9, "J", "Contiene la J:", " Nombre de hongo patógeno oportunista que coloniza el aparato respiratorio, antiguamente considerado parásito", "pneumocystis jirovecii"),
// 	new Word(10, "L", "Empieza por L:", " Especie de Candida resistente a anfotericina B", "lusitaniae"),
// 	new Word(11, "M", "Empieza por M:", " Síndrome caracterizado por triada fiebre, faringitis y adenopatías.", "mononucleosis infecciosa"),
// 	new Word(12, "N", "Empieza por N:", " Medicamento de elección para el tratamiento de enfermedad de chagas.", "nifurtimox"),
// 	new Word(13, "Ñ", "Contiene la Ñ:", " Nombre de enfermedad producida por Bartonella henselae.", "arañazo de gato"),
// 	new Word(14, "O", "Empieza por O:", " Subtipo de E. Coli causante de SHU.", "o157h7"),
// 	new Word(15, "P", "Empieza por P:", " Agente causal de hidrops neonatal. En preescolares se caracteriza por “el signo de la cachetada”", "parvovirus b19"),
// 	new Word(16, "Q", "Empieza por Q:", " Especie de Bartonella causante de endocarditis y fiebre de las trincheras", "quintana"),
// 	new Word(17, "R", "Empieza por R:", " Síndrome caracterizado por la triada: hipoacusia neurosensorial, cardiopatía congénita y anomalías oculares.", "rubeola congenita"),
// 	new Word(18, "S", "Empieza por S:", " Nombre de microorganismo portador del gen AMPc.", "serratia marcescens"),
// 	new Word(19, "T", "Empieza por T:", " Infección que causa eosinofilia en niños y es transmitida por perros", "toxocara canis"),
// 	new Word(20, "U", "Empieza por U:", " País con alto índice de SAMR en Latinoamérica.", "uruguay"),
// 	new Word(21, "V", "Empieza por V:", " Medicamento utilizado para el tratamiento de citomegalovirus congénito.", "valganciclovir"),
// 	new Word(22, "X", "Empieza por X:", " Hallazgo que puede aparecer en el LCR en las encefalitis herpéticas.", "xantocromia"),
// 	new Word(23, "Y", "Contiene la Y:", " Agente causal de la Peste bubónica.", "yersinia pestis"),
// 	new Word(24, "Z", "Contiene la Z:", " Tratamiento antiviral profiláctico utilizado para prevención de transmisión vertical en recién nacidos.", "zidovudina")
// ];

// Functions
// -----------------------------------------------------------------------------


function createWord(num, letter, question, answer) {
	var hint;
	if (answer[0].toLowerCase() === letter.toLowerCase()) {
		hint = `Empieza por ${letter}:`;
	} else {
		hint = `Contiene ${letter}:`;
	}
	return new Word(num, letter, hint, ` ${question}`, answer)
}

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

var remainingWords = words.length;

function checkAnswer(pos) {
	/*
		Nota de Guillermo:
		Creamos una variable answerTest que asume que la respuesta es correcta.
		Iteramos todos los elementos del arreglo revisando si son iguales a userAnswer.
		Cuando son iguales salimos del loop y cambiamos answerTest a True.
		Luego evaluamos el antiguo else que se ejecutaba cuando la respuesta era incorrecta: if(!answerTest)...
	*/
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	let answerTest = false;
	for(let i = 0; i < words[pos].word.length; i++){
		if (userAnswer == words[pos].word[i].toLowerCase()) {
			words[pos].correct = true;
			$(".circle .item").eq(words[pos].idNumber).addClass("item--success");
			answerTest = true;
			break;
		}
	}
	if(!answerTest) {
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
	if (count != words.length) {
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
$("#js--new-game").click(function () {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

// Send the answer
$("#js--send").click(function () {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function (event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function () {
	pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function (event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "17") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function () {
	location.reload()
});

// End the game
$("#js--close").click(function () {
	endGame();
});
