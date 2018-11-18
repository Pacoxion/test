window.onload = function () {

    var topbar = document.getElementsByClassName('topBar')[0].getElementsByTagName('li');
    var roll1 = document.getElementsByClassName('carousel1')[0].getElementsByTagName('img');
    var circle = document.getElementsByClassName('cicle')[0].getElementsByTagName('div');
    var roll2 = document.getElementsByClassName('proCenterImg')[0].getElementsByTagName('img');
    var proli = document.getElementsByClassName('proBar')[0].getElementsByTagName('li');
    var foot = document.getElementById('foot');
    var part = document.getElementsByClassName('part')
    var about = document.getElementsByClassName('text')[0];
    var procenter = document.getElementsByClassName('proCenter')[0];

    //导航栏鼠标点击
    for (var j = 0; j < topbar.length-1; j++) {

        topbar[j].addEventListener('click', function (e) {
            for (var i = 0; i < topbar.length; i++) {
                topbar[i].removeAttribute('id', 'tobarli')
            }
            e.target.setAttribute('id', 'tobarli')
             for (var k = 0; k < part.length; k++) {
                part[k].style.display = 'none';
             }
                
            for (var k = 0; k < part.length; k++) {
                if (topbar[k].hasAttribute('id', 'tobarli')) {
                    part[k].style.display = 'block';
                }
            }
        });
    }
//其它点击
    //关于我们
about.addEventListener('click',function(e){
    for (var i = 0; i < topbar.length; i++) {
        topbar[i].removeAttribute('id', 'tobarli')
    }
    for (var k = 0; k < part.length; k++) {
        part[k].style.display = 'none';
     }
     topbar[1].setAttribute('id', 'tobarli');
     part[1].style.display = 'block';
                
})
    //产品中心
    procenter.addEventListener('click',function(e){
        for (var i = 0; i < topbar.length; i++) {
            topbar[i].removeAttribute('id', 'tobarli')
        }
        for (var k = 0; k < part.length; k++) {
            part[k].style.display = 'none';
         }
         topbar[2].setAttribute('id', 'tobarli');
         part[2].style.display = 'block';
                    
    })

    //联系我们滑动
    topbar[4].addEventListener('click', function () {

        window.scrollTo(0, foot.offsetTop);
    })

    //轮播图1
    function change1() {
        if (roll1[0].style.display == 'block') {
            roll1[0].style.display = 'none';
            roll1[1].style.display = 'block';
            circle[1].style.backgroundColor = 'rgb(117, 157, 186)';
            circle[0].style.backgroundColor = '';
        } else if (roll1[1].style.display == 'block') {
            roll1[1].style.display = 'none';
            roll1[2].style.display = 'block';
            circle[2].style.backgroundColor = 'rgb(117, 157, 186)';
            circle[1].style.backgroundColor = '';
        } else {
            roll1[2].style.display = 'none';
            roll1[0].style.display = 'block';
            circle[0].style.backgroundColor = 'rgb(117, 157, 186)';
            circle[2].style.backgroundColor = '';
        }
    };
    setInterval(change1, 3000);

    //轮播图2
    function change2() {
        var j;
        for (var i = 0; i < roll2.length; i++) {
            if (roll2[i].style.display == 'block') {
                j = i;
            }
        }
        roll2[j].style.display = 'none';
        proli[j].style.backgroundColor = 'rgb(221, 218, 218)';
        if (j == roll2.length - 1) {
            roll2[0].style.display = 'block';
            proli[0].style.backgroundColor = 'rgb(0,104,177)';
        } else {
            j += 1;
            roll2[j].style.display = 'block';
            proli[j].style.backgroundColor = 'rgb(0,104,177)';
        }
    }
    setInterval(change2, 3000);

};