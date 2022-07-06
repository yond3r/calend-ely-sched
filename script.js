// all times, from 09 to 17, listed out
// blocks 9 to 11 blocked out with grey
// @ 13, the intended item is red
// from 14 on to 17, the times are green
// ability to store data, and change data within each line -- so a functional calendar, lol

let currentDay = moment().format("MMM Do YY")
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH")
console.log(currentHour);

/*var atNine = moment({hour: 9}).format("h")
console.log(atNine)

var atTen = moment({hour: 10}).format("h")
console.log(atTen)

var atEleven = moment({hour: 11}).format("h")
console.log(atEleven)

var atTwelve = moment({hour: 12}).format("h")
console.log(atTwelve)

var atThirteen = moment({hour: 13}).format("h")
console.log(atThirteen)

var atFourteen = moment({hour: 14}).format("h")
console.log(atFourteen)

var atFifteen = moment({hour: 15}).format("h")
console.log(atFifteen)

var atSixteen = moment({hour: 16}).format("h")
console.log(atSixteen)

var atSeventeen = moment({hour: 17}).format("h")
console.log(atSeventeen) */

// for loops/if else statements for time
// function calendarHours(9) {
//     if (9 < currentHour)
//         return "past";
    
//     } else if (9 === currentHour) {
//         return "present";

//     } else {
//         return "future"


//color loop 1.0 that I can't quite seem to figure out ??
// for (let i = 0; i < 9; i++) {
//      var container = $('this').attr("i+9");
//      if (i + 9 < currentHour) {
//          $(this).addClass("past")

//      } 
//      else if (i + 9 > currentHour) {
//         $(this).addClass("future")

//      } 
//      else {
//         $(this).addClass("present")
//          }
//      }; 

//color loop 2.0 that is worth a try -- makes everything green? now that I have that down, I'm going to move to the first one and play around w/ that

$(".time-block").each(function() {
    var particularHour = $('this').attr("id");

    if (currentHour > particularHour) {
        $(this).addClass("past")
    }
    else if (currentHour === particularHour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
});

//global
var btnNine = $('#saveBtnNine');
var btnTen = $('#saveBtnTen');
var btnEleven = $('#saveBtnEleven');
var btnTwelve = $('#saveBtnTwelve');
var btnThirteen = $('#saveBtnThirteen');
var btnFourteen = $('#saveBtnFourteen');
var btnFifteen = $('#saveBtnFifteen');
var btnSixteen = $('#saveBtnSixteen');
var btnSeventeen = $('#saveBtnSeventeen');

var textArea9 = $("#textArea9");
var textArea10 = $("#textArea10");
var textArea11 = $("#textArea11");
var textArea12 = $("#textArea12");
var textArea13 = $("#textArea13");
var textArea14 = $("#textArea14");
var textArea15 = $("#textArea15");
var textArea16 = $("#textArea16");
var textArea17 = $("#textArea17");

//buttons
// btnNine.on('click', saveBtnNine);
// btnTen.on('click', saveBtnTen);
// btnEleven.on('click', saveBtnEleven);
// btnTwelve.on('click', saveBtnTwelve);
// btnThirteen.on('click', saveBtnThirteen);
// btnFourteen.on('click', saveBtnFourteen);
// btnFifteen.on('click', saveBtnFifteen);
// btnSixteen.on('click', saveBtnSixteen);
// btnSeventeen.on('click', saveBtnSeventeen);

//on-clicks
(btnNine).on("click", function(e) {
e.preventDefault();
let item = $(textArea9).val();
    console.log(item);
    localStorage.setItem("nine", item);
});

(btnTen).on("click", function(e) {
e.preventDefault();
let item = $(textArea10).val();
    console.log(item);
    localStorage.setItem("ten", item);
});

(btnEleven).on("click", function(e) {
e.preventDefault();
let item = $(textArea11).val();
    console.log(item);
    localStorage.setItem("eleven", item);
});

(btnTwelve).on("click", function(e) {
e.preventDefault();
let item = $(textArea12).val();
    console.log(item);
    localStorage.setItem("twelve", item);
});

(btnThirteen).on("click", function(e) {
e.preventDefault();
let item = $(textArea13).val();
    console.log(item);
    localStorage.setItem("thirteen", item);
});

(btnFourteen).on("click", function(e) {
e.preventDefault();
let item = $(textArea14).val();
    console.log(item);
    localStorage.setItem("fourteen", item);
});

(btnFifteen).on("click", function(e) {
e.preventDefault();
let item = $(textArea15).val();
    console.log(item);
    localStorage.setItem("fifteen", item);
});

(btnSixteen).on("click", function(e) {
e.preventDefault();
let item = $(textArea16).val();
    console.log(item);
    localStorage.setItem("sixteen", item);
});

(btnSeventeen).on("click", function(e) {
e.preventDefault();
let item = $(textArea17).val();
    console.log(item);
    localStorage.setItem("seventeen", item);
});





//localStorage

 saveBtnTen = function () {
    var value10 = $('btnTen').val();
      localStorage.setItem("event10", value10)

     console.log(localStorage.getItem("event10")) }

// saveBtnEleven  = function () {
//     var value11 = $('atEleven').val();
//     localStorage.setItem("event11", value11)

//     console.log(localStorage.getItem("event11")) }

// saveBtnTwelve = function () {
//     var value12 = $('atTwelve').val();
//     localStorage.setItem("event12", value12)

//     console.log(localStorage.getItem("event12")) }

// saveBtnThirteen = function () {
//     var value13 = $('atThirteen').val();
//     localStorage.setItem("event13", value13)

//     console.log(localStorage.getItem("event13")) }

// saveBtnFourteen = function () {
//     var value14 = $('atFourteen').val();
//     localStorage.setItem("event14", value14)

//     console.log(localStorage.getItem("event14")) }

// saveBtnFifteen = function () {
//     var value15 = $('atFifteen').val();
//     localStorage.setItem("event15", value15)

//     console.log(localStorage.getItem("event15")) }

// saveBtnSixteen = function () {
//     var value16 = $('atSixteen').val();
//     localStorage.setItem("event16", value16)

//     console.log(localStorage.getItem("event16")) }

// saveBtnSeventeen = function () {
//     var value17 = $('atSeventeen').val();
//     localStorage.setItem("event17", value17)

//     console.log(localStorage.getItem("event17")) }

// $(window).on('load', function(){
//     console.log("reloaded")

// $('atNine').attr("placeholder text",localStorage.getItem("event9"));
// $('atTen').attr("placeholder text",localStorage.getItem("event10"));
// $('atEleven').attr("placeholder text",localStorage.getItem("event11"));
// $('atTwelve').attr("placeholder text",localStorage.getItem("event12"));
// $('atThirteen').attr("placeholder text",localStorage.getItem("event13"));
// $('atFourteen').attr("placeholder text",localStorage.getItem("event14"));
// $('atFifteen').attr("placeholder text",localStorage.getItem("event15"));
// $('atSixteen').attr("placeholder text",localStorage.getItem("event16"));
// $('atSeventeen').attr("placeholder text",localStorage.getItem("event17"));

// });