//to do
//-MORE RESOLUTIONS
//integrate arrays with mySQL database (ew php)
//Some sort of news API that integrates current events
//IPDA tab

function strikeThru() {
    const textElement = document.getElementById('random_Resolve');
    const textElement2 = document.getElementById('random_Resolve2');
    const textElement3 = document.getElementById('random_Resolve3');
    const textElement4 = document.getElementById('random_Resolve4');
    const textElement5 = document.getElementById('random_Resolve5');


    textElement.addEventListener('click', function () {

        if (textElement.style.color === 'red' ) {

            textElement.style.color = 'black';
        }
        else {
            textElement.style.color = 'red';
        }
    });
    textElement2.addEventListener('click', function () {

        if (textElement2.style.color === 'red') {

            textElement2.style.color = 'black';
        }
        else {
            textElement2.style.color = 'red';
        }
    });
    textElement3.addEventListener('click', function () {

        if (textElement3.style.color === 'red') {

            textElement3.style.color = 'black';
        }
        else {
            textElement3.style.color = 'red';
        }
    });

    textElement4.addEventListener('click', function () {

        if (textElement4.style.color === 'red') {

            textElement4.style.color = 'black';
        }
        else {
            textElement4.style.color = 'red';
        }
    });
    textElement5.addEventListener('click', function () {

        if (textElement5.style.color === 'red') {

            textElement5.style.color = 'black';
        }
        else {
            textElement5.style.color = 'red';
        }
    });


}


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
function generatePolicy5() {
    var prefix = [
        "TH should", "TH ought to", "The USFG should", "The USFG ought to"

    ];
    var body = [
        "increase minimum wage to $20 an hour", "abolish student loans", "regulate big tech's influence on privacy", "decrease minimum wage",
        "impose a wage cap for professional sports", "legalize all drugs", "fund the police", "defund the police", "give reperations to African Americans",
        "increase the scope of the patriot act", "increase conservation efforts in areas affected by chemical disasters", "institute UBI",
        "codify Roe v Way into law", "increase the frequency of gun buyback programs", "ban Red Dye 40 in foods", "increase funding for arts programs",
        "university education should be free", "should fund research into ketamine treatments for depression", "legalize recreational marijuana",
        "abolish for profit prisons", "ban cosmetic surgery", "permit the use of performance enhancing drugs in professional sports"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve2").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve3").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve4").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve5").innerHTML = name;
}
function generatePolicyMix() {
    var prefix = [
        "TH should", "TH ought to", "The USFG should", "The USFG ought to"

    ];
    var body = [
        "increase minimum wage to $20 an hour", "abolish student loans", "regulate big tech's influence on privacy", "decrease minimum wage",
        "impose a wage cap for professional sports", "legalize all drugs", "fund the police", "defund the police", "give reperations to African Americans",
        "increase the scope of the patriot act", "increase conservation efforts in areas affected by chemical disasters", "institute UBI",
        "codify Roe v Way into law", "increase the frequency of gun buyback programs", "ban Red Dye 40 in foods", "increase funding for arts programs",
        "university education should be free", "should fund research into ketamine treatments for depression", "legalize recreational marijuana",
        "abolish for profit prisons", "ban cosmetic surgery", "permit the use of performance enhancing drugs in professional sports"
    ];

  
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve4").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (body[getRandomInt(0, body.length)]);
    document.getElementById("random_Resolve5").innerHTML = name;
}
function generateValues() {
    var prefix = [
        "TH believes that", "TH thinks", 

    ];
    var value1 = [
        "big business is", "privacy is ", "profits are", "enviromental conservation is", "military strength is", "big tech is", "FDA oversite is", "human rights are",
        "workers rights are", "unionization efforts are", "abortion rights are", "security is", "eliminating student debt is", "free college is", "social security is",
        "for profit prisons are","opioid oversodes are"
        
    ];

    var qualifier = [
        "more important than", "less important than", "more valuble than","less valuble than"

    ];

    var value2 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts","security","expansion","corperate expansion","the death penalty","big pharma"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " "+ (qualifier[getRandomInt(0, qualifier.length)]) + " "+ (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
}
function generateValues5() {
    var prefix = [
        "TH believes that", "TH thinks",

    ];
    var value1 = [
        "big business is", "privacy is ", "profits are", "enviromental conservation is", "military strength is", "big tech is", "FDA oversite is", "human rights are",
        "workers rights are", "unionization efforts are", "abortion rights are", "security is", "eliminating student debt is", "free college is", "social security is",
        "for profit prisons are", "opioid oversodes are"

    ];

    var qualifier = [
        "more important than", "less important than", "more valuble than", "less valuble than"

    ];

    var value2 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts", "security", "expansion", "corperate expansion", "the death penalty", "big pharma"
    ];

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve2").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve3").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve4").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve5").innerHTML = name;
}
function generateValuesMix() {
    var prefix = [
        "TH believes that", "TH thinks",

    ];
    var value1 = [
        "big business is", "privacy is ", "profits are", "enviromental conservation is", "military strength is", "big tech is", "FDA oversite is", "human rights are",
        "workers rights are", "unionization efforts are", "abortion rights are", "security is", "eliminating student debt is", "free college is", "social security is",
        "for profit prisons are", "opioid oversodes are"

    ];

    var qualifier = [
        "more important than", "less important than", "more valuble than", "less valuble than"

    ];

    var value2 = [
        "big business", "privacy", "profits", "enviromental conservation", "military strength", "big tech", "FDA oversite", "human rights",
        "workers rights", "unionization efforts", "security", "expansion", "corperate expansion", "the death penalty", "big pharma"
    ];

    
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " " + (qualifier[getRandomInt(0, qualifier.length)]) + " " + (value2[getRandomInt(0, value2.length)]);
    document.getElementById("random_Resolve3").innerHTML = name;
   
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

function generateFact5() {
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
        "benificial", "unimportant", "necessary", "unnecessary", "important"
    ];
    var importance = [
        "for economic development", "for the good of society", "for human rights", "for national security", "for economic policy",
        "for international policy", "for social development", "for the betterment of society", "for the advancement of the American people"
    ];
   

    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve2").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve3").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve4").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve5").innerHTML = name;
}
function generateFactMix() {
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
        "benificial", "unimportant", "necessary", "unnecessary", "important"
    ];
    var importance = [
        "for economic development", "for the good of society", "for human rights", "for national security", "for economic policy",
        "for international policy", "for social development", "for the betterment of society", "for the advancement of the American people"
    ];


    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve").innerHTML = name;
    var name = capFirst(prefix[getRandomInt(0, prefix.length)]) + " " + (value1[getRandomInt(0, value1.length)]) + " is " + " " + (value2[getRandomInt(0, value2.length)]) + " " + (importance[getRandomInt(0, importance.length)]);
    document.getElementById("random_Resolve2").innerHTML = name;
}
function generateMixed() {
    generateFactMix();
    generateValuesMix();
    generatePolicyMix();
}

function genPolicy() {
    var amountSelect = document.getElementById('amount');
    var amountValue = amountSelect.options[amountSelect.selectedIndex].value;
    console.log(amountValue);
    var resolutionSelect = document.getElementById('resolve');
    var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
    console.log(resolutionValue);
    if (resolutionValue == 'policy' && amountValue == 'one') {
        generatePolicy();
    }
    if (resolutionValue == 'policy' && amountValue == 'five') {
        generatePolicy5();
    }
    if (resolutionValue == 'fact' && amountValue == 'ten') {
        generateFact();
    }
}
function genFact() {
    var resolutionSelect = document.getElementById('resolve');
    var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
    console.log(resolutionValue);
    var amountSelect = document.getElementById('amount');
    var amountValue = amountSelect.options[amountSelect.selectedIndex].value;
    console.log(amountValue);

    if (resolutionValue == 'fact' && amountValue == 'one') {
        generateFact();
    }
    if (resolutionValue == 'fact' && amountValue == 'five') {
        generateFact5();
    }
    if (resolutionValue == 'fact' && amountValue == 'ten') {
        generateFact();
    }
}
function genValue() {
    var amountSelect = document.getElementById('amount');
    var amountValue = amountSelect.options[amountSelect.selectedIndex].value;
    console.log(amountValue);
            var resolutionSelect = document.getElementById('resolve');
            var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
            console.log(resolutionValue);
            if (resolutionValue == 'value' && amountValue == 'one') {
                generateValues();
            }
            if (resolutionValue == 'value' && amountValue == 'five') {
                generateValues5();
            }
            if (resolutionValue == 'fact' && amountValue == 'ten') {
                generateFact();
            }
}
function genMixed() {
    var amountSelect = document.getElementById('amount');
    var amountValue = amountSelect.options[amountSelect.selectedIndex].value;
    console.log(amountValue);
    var resolutionSelect = document.getElementById('resolve');
    var resolutionValue = resolutionSelect.options[resolutionSelect.selectedIndex].value;
    console.log(resolutionValue);
    if (resolutionValue == 'mixed' && amountValue == 'one') {
        generateMixed();
    }
    if (resolutionValue == 'mixed' && amountValue == 'five') {
        generateMixed();
    }
    if (resolutionValue == 'mixed' && amountValue == 'ten') {
        generateMixed();
    }
}
function generateRoom() {
    var element = document.getElementById("clickMe");
    element.className = "clickMe";
        genPolicy();
        genFact();
    genValue();
    genMixed();
}
