// Assignment 1 | Talita Urban Silva | COMP1073 Client-Side JavaScript

// Initialize the speech synthesis interface from the browser's SpeechSynthesis API
var synth = window.speechSynthesis;

// This variable will store the text that we want to be spoken
var textToSpeak = '';

// Get a reference to the HTML element where the generated text will be displayed
var generatedText = document.getElementById('generatedText');

// Arrays holding different categories of words to build fun sentences
var nouns1 = ['The turkey', 'Dad', 'Mom', 'The dog', 'The cat'];
var verbs = ['sit on', 'eat', 'dance with', 'see', 'does not like'];
var adjectives = ['a quick', 'a lazy', 'a happy', 'a stinky', 'a angry'];
var nouns2 = ['monkey', 'fish', 'elephant', 'goat', 'bug'];
var places = ['on the moon', 'on the chair', 'at the house', 'in the zoo', 'on the beach'];

// Add a click event listener to the 'Pick a Noun' button
document.querySelector('#nouns1Button').addEventListener('click', function() {
	// Select a random noun from the nouns1 array
	var randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
	// Add the selected noun to the textToSpeak string
	textToSpeak += randomNoun1 + ' ';
	// Update the displayed text with the new textToSpeak content
	updateGeneratedText();
});

// Add a click event listener to the 'Pick a Verb' button
document.querySelector('#verbsButton').addEventListener('click', function() {
	// Select a random verb from the verbs array
	var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
	// Add the selected verb to the textToSpeak string
	textToSpeak += randomVerb + ' ';
	// Update the displayed text with the new textToSpeak content
	updateGeneratedText();
});

// Add a click event listener to the 'Pick an Adjective' button
document.querySelector('#adjButton').addEventListener('click', function() {
	// Select a random adjective from the adjectives array
	var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	// Add the selected adjective to the textToSpeak string
	textToSpeak += randomAdjective + ' ';
	// Update the displayed text with the new textToSpeak content
	updateGeneratedText();
});

// Add a click event listener to the 'Pick Another Noun' button
document.querySelector('#nouns2Button').addEventListener('click', function() {
	// Select a random noun from the nouns2 array
	var randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
	// Add the selected noun to the textToSpeak string
	textToSpeak += randomNoun2 + ' ';
	// Update the displayed text with the new textToSpeak content
	updateGeneratedText();
});

// Add a click event listener to the 'Pick a Place' button
document.querySelector('#placesButton').addEventListener('click', function() {
	// Select a random place from the places array
	var randomPlace = places[Math.floor(Math.random() * places.length)];
	// Add the selected place to the textToSpeak string, and end it with a period
	textToSpeak += randomPlace;
	// Update the displayed text with the new textToSpeak content
	updateGeneratedText();
});

// Add a click event listener to the 'Speak' button
document.querySelector('#speakButton').addEventListener('click', function() {
	// Invoke the speakNow function to read the text aloud
	speakNow(textToSpeak);
});

// Add a click event listener to the 'Reset' button
document.querySelector('#resetButton').addEventListener('click', function() {
	// Clear the textToSpeak variable
	textToSpeak = '';
	// Update the displayed text to reflect the reset
	updateGeneratedText();
});

// Function to update the text content of the generatedText element
function updateGeneratedText() {
	generatedText.textContent = textToSpeak;
}

// Function to display the initial list of words in each category
function displayWords() {
	display('#nouns1List', nouns1);
	display('#verbsList', verbs);
	display('#adjectivesList', adjectives);
	display('#nouns2List', nouns2);
	display('#placesList', places);
}

// Helper function to populate a given HTML element with a list of words
function display(elementId, array) {
	var element = document.querySelector(elementId);
	element.innerHTML = ''; // Clear any existing content
	array.forEach(function(item) {
		var li = document.createElement('li');
		li.textContent = item;
		element.appendChild(li); // Add each word as a list item
	});
}

// Call displayWords to initialize the word lists when the page loads
displayWords();

// Function to speak the provided text string using the SpeechSynthesis API
function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis); // Perform the speech synthesis
}



