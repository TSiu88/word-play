$(document).ready(function(){
  $("#form1").submit(function(event){
    var sent = $("#sent1").val();
    var arr = sent.split(' ');
    var play =[];
    var join;
    console.log(arr);
    arr.forEach(function(three){
      if (three.length >= 3){
        play.push(three);

      }  
        
    });
    play.reverse();
    join = play.join(' ');
    console.log(play);
    console.log(join);
    event.preventDefault();
    $(".play").append(join);
  
  });

});