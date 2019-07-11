$(document).ready(function(){
var speed = 500;
var autoSwitched = true;
var autoSwitched_speed = 4000;

$('.slide').first().addClass('active');
$('.slide').hide();

$('.active').show();

$('#next').on('click',function(){
$('.active').removeClass('active').addClass('oldActive');
if($('.oldActive').is(':first-child')){
$('.slide').first().addClass('active');
} else   {


$('.oldActive').next().addClass('active');


}




$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);

});


$('#prev').on('click',function(){
$('.active').removeClass('active').addClass('oldActive');
if($('.oldActive').is(':last-child')){
$('.slide').first().addClass('active');
} else   {


$('.oldActive').prev().addClass('active');


}




$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);

});





if(autoSwitched == true){
setInterval(function() {

$('.active').removeClass('active').addClass('oldActive');
if($('.oldActive').is(':first-child')){
$('.slide').first().addClass('active');
} else   {


$('.oldActive').prev().addClass('active');


}




$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);


},autoSwitched_speed);

}
});
