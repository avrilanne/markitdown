var Widget = function() {

}

Widget.prototype.edit = function(input){
// call functions
var change = this.bold(input);
change = this.italics(change);
change = this.headers1(change);
change = this.headers2(change);
// debugger
return change;
};

Widget.prototype.bold = function(input){
// **
return input.replace( boldRegex,"<strong>$2</strong>");
};


Widget.prototype.italics = function(input){
// * or _
return input.replace( italicsRegex, "<em> $2 </em>");

};

Widget.prototype.headers1 = function(input){
// * or _
return input.replace( headers1Regex, "<h1> $1 </h1>");

};

Widget.prototype.headers2 = function(input){
// * or _
return input.replace( headers2Regex, "<h2> $1 </h2>");

};



var boldRegex = /(\*\*)([^\*]*)(\*\*|\z)/g
var italicsRegex = /(\*|\_)([^\*]*)(\*|\_|\z)/g
var headers1Regex = /^#(\w+.*)/g
var headers2Regex = /^##(\w+.*)/g
