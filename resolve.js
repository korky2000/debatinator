function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generatePolicy() {
    var prefix = [
        "TH should", "TH ought to", "The USFG should", "The USFG ought to"
        
    ];
    var body = [
        "increase minimum wage to $20 an hour", "abolish student loans", "regulate big tech's influence on privacy", "decrease minimum wage",
        "impose a wage cap for professional sports", "legalize all drugs", "fund the police", "defund the police", "give reperations to African Americans",
        "increase the scope of the patriot act", "increase conservation efforts in areas affected by chemical disasters", "institute UBI",
        "codify Roe v Way into law", "increase the frequency of gun buyback programs", "ban Red Dye 40 in foods", "increase funding for arts programs",
        "university education should be free", "should fund research into ketamine treatments for depression", "legalize recreational marijuana",
        "abolish for profit prisons","ban cosmetic surgery","permit the use of performance enhancing drugs in professional sports"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
}
function generateValues() {
    var prefix = [
        "TH believes that", "TH thinks", 

    ];
    var value1 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts", "abortion rights", "security", "eliminating student debt", "free college", "social security",
        "for profit prisons","opioid oversodes"
        
    ];

    var qualifier = [
        "is/are more important than", "is/are less important than", "trumps"

    ];

    var value2 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts","security","expansion","corperate expansion","the death penalty"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " "+ (qualifier[getRandomInt(0, qualifier.length)]) + " "+ (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
}
function generateFact() {
    var prefix = [
        "TH believes that", "TH thinks",

    ];
    var value1 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts", "free university education", "eliminating student debt", "legalizing drugs", "medical marijuana legalization",
        "ketamine treatments for treatment resistant depression", "legalization of recreational marijuana use", "opioid harm reduction",
        "opioid addiction"

    ];


    var value2 = [
        "benificial","unimportant","necessary","unnecessary","important"
    ];
    var importance = [
        "for economic development", "for the good of society", "for human rights", "for national security", "for economic policy",
        "for international policy","for social development","for the betterment of society", "for the advancement of the American people"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
}
function genPolicy() {
    var resolutionSelect = document.getElementById('resolve');
    var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
    console.log(resolutionValue);
    if (resolutionValue == 'policy') {
        generatePolicy();
    }
}
function genFact() {
    var resolutionSelect = document.getElementById('resolve');
    var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
    console.log(resolutionValue);
    if (resolutionValue == 'fact') {
        generateFact();
    }
}
        function genValue() {
            var resolutionSelect = document.getElementById('resolve');
            var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
            console.log(resolutionValue);
            if (resolutionValue == 'value') {
                generateValues();
            }
        }
    function generateRoom() {
        genPolicy();
        genFact();
        genValue();

    }
