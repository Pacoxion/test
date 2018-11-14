window.onload=function(){
    var topbar=document.getElementsByClassName('topBar')[0].getElementsByTagName('li');
    var roll1= document.getElementsByClassName('carousel1')[0].getElementsByTagName('img');
    var circle= document.getElementsByClassName('cicle')[0].getElementsByTagName('div');
    var roll2= document.getElementsByClassName('proCenterImg')[0].getElementsByTagName('img');
    var proli= document.getElementsByClassName('proBar')[0].getElementsByTagName('li');

    for(var i=0;i < topbar.length;i++){
        topbar[i].addEventListener('mouseenter',function(e){
            e.target.style.backgroundColor='rgb(47,90,155)';
        });
        topbar[i].addEventListener('mouseleave',function(e){
            e.target.style.backgroundColor='rgb(98,134,160)';
        });
    }
};