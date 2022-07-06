let currentDay = moment().format("MMM Do YY")
$("#currentDay").text(currentDay);

var currentHour = moment().format("HH")
console.log(currentHour);

//color loop 1.0 that I can't quite seem to figure out ??

// for (let i = 0; i < 9; i++) {
//      if (i + 9 < currentHour) {
//         particularHour.eq(i).addClass('past');
//      } 
//      else if (i + 9 > currentHour) {
//         particularHour.eq(i).addClass('future');
//      } 
//      else {
//       particularHour.eq(i).addClass('present')
//          }
//      }; 

//color loop 2.0 that is worth a try -- makes everything green? now that I have that down, I'm going to move to the first one and play around w/ that

$(".time-block").each(function() {
    var particularHour = $('this').attr("");

    if (currentHour > particularHour) {
        $(this).addClass("past");
    }
    else if (currentHour === particularHour) {
        $(this).addClass("present");
    }
    else {
        $(this).addClass("future");
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





//localStorage ???
// saveBtnNine = function () {
//     var value10 = $('btnNine').val();
//       localStorage.setItem("event9", value9)

//      console.log(localStorage.getItem("event9")) }

//  saveBtnTen = function () {
//     var value10 = $('btnTen').val();
//       localStorage.setItem("event10", value10)

//      console.log(localStorage.getItem("event10")) }

// saveBtnEleven  = function () {
//     var value11 = $('btnEleven').val();
//     localStorage.setItem("event11", value11)

//     console.log(localStorage.getItem("event11")) }

// saveBtnTwelve = function () {
//     var value12 = $('btnTwelve').val();
//     localStorage.setItem("event12", value12)

//     console.log(localStorage.getItem("event12")) }

// saveBtnThirteen = function () {
//     var value13 = $('btnThirteen').val();
//     localStorage.setItem("event13", value13)

//     console.log(localStorage.getItem("event13")) }

// saveBtnFourteen = function () {
//     var value14 = $('btnFourteen').val();
//     localStorage.setItem("event14", value14)

//     console.log(localStorage.getItem("event14")) }

// saveBtnFifteen = function () {
//     var value15 = $('btnFifteen').val();
//     localStorage.setItem("event15", value15)

//     console.log(localStorage.getItem("event15")) }

// saveBtnSixteen = function () {
//     var value16 = $('btnSixteen').val();
//     localStorage.setItem("event16", value16)

//     console.log(localStorage.getItem("event16")) }

// saveBtnSeventeen = function () {
//     var value17 = $('btnSeventeen').val();
//     localStorage.setItem("event17", value17)

//     console.log(localStorage.getItem("event17")) }


//render 

$(window).on('load', function(){
    console.log("reloaded")

$(btnNine).attr("text",localStorage.getItem("nine"));
$(btnTen).attr("text",localStorage.getItem("ten"));
$(btnEleven).attr("text",localStorage.getItem("eleven"));
$(btnTwelve).attr("text",localStorage.getItem("twelve"));
$(btnThirteen).attr("text",localStorage.getItem("thirteen"));
$(btnFourteen).attr("text",localStorage.getItem("fourteen"));
$(btnFifteen).attr("text",localStorage.getItem("fifteen"));
$(btnSixteen).attr("text",localStorage.getItem("sixteen"));
$(btnSeventeen).attr("text",localStorage.getItem("seventeen"));

});

// Assuming I saved that correctly, as the key is my inputed text, and value corresponds w/ said text, even after reloading?
