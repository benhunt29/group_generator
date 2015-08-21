$(document).ready(function(){

var classArray = [
    "Allan",
    "Ben",
    "Brendan",
    "Brook",
    "Garrett",
    "Jacob",
    "James",
    "Jason S.",
    "Jason N.",
    "Kathryn",
    "Kim",
    "Kamie",
    "Katie",
    "Liz",
    "Madeleine",
    "Martha",
    "Matthew",
    "Shawn",
    "Vas",
];

var teamNames =[
    "The Borg",
    "Gaza Strip Tease",
    "Aesop was here",
    "The Closing Brackets",
    "Romulan Ale",
    "Code Monkeys",
    "Ima Prima Rhyma",
    "Winter is Coming",
    "Spoiler Alert",
    "Apple TV",
    "Temporal dead zone and errors with let",
];

//selector variable, this selects the generate group button
var $gen = $('#generateGroupButton');

//on click function looks for any click within the group size element then it defines our variable grpSize as equal to the input value selected in groupSize on html.
$gen.on('click', function(){
	var $grpSize = $('input[name=groupSize]:checked');
	var grpNum = Math.round(classArray.length / $grpSize.val());

//variable runs a couple function to make random groups
	var randGrps = generateGroups(shuffle(classArray), grpNum);
    var randTeamNames = generateGroupNames(shuffle(teamNames),$grpSize.val());
    var Groups = generateGroupObjectsArray(randGrps,randTeamNames,$grpSize.val());
    // handlebars stuff
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    $('.content').html(template(Groups));
})

});

// This is Fisher-Yates randomizer array. Thanks! Fisher-Yates!
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element!
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// The main function to generate the groups and split the main array
function generateGroups(array,grpNum){
	var i = 0;
	var j = 0;
	var groupArray = [];
	var groups = {};

    // we start at 0 to split group, and you want to go up to the group number element, and defining the window of your group size
    // i defines the starting index of the slice, you want to increment i by the grpNum
    // j is the loop number, the ending index is always equal to grpNum+grpNum*j 
	for (i = 0;i<array.length;i+=grpNum){
		
	   // this slices the group array for whatever grpNum you are trying to size	
		groupArray.push(array.slice(i,grpNum+grpNum*j));
		j++;
		};
	
    // if the last array in the group array contains 1 person it will be pushed to the previous array so no one works alone. 	
	if (groupArray[groupArray.length-1].length == 1){
		groupArray[groupArray.length-2].push(groupArray[groupArray.length-1][0]);
		groupArray.pop();
	}

	return groupArray;
}

function generateGroupNames(array, groupSize){
    var randomTeamNames =[];
    for(var i=0; i<groupSize; i++){
        randomTeamNames.push(array[i]);
    }
    return randomTeamNames;
}

function Group(name,members){
	this.name = name;
	this.members = members;
}

function generateGroupObjectsArray(groupArray,teamNames,groupNum){
	var GroupObjectsArray = [];
	for(i=0;i<groupArray.length;i++){
		GroupObjectsArray.push(new Group(teamNames[i],groupArray[i]));
	}
	return GroupObjectsArray;
}
	