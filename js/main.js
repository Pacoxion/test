window.onload = function () {

    var topbar = document.getElementsByClassName('topBar')[0].getElementsByTagName('li');
    var roll1 = document.getElementsByClassName('carousel1')[0].getElementsByTagName('img');
    var circle = document.getElementsByClassName('cicle')[0].getElementsByTagName('div');
    var roll2 = document.getElementsByClassName('proCenterImg')[0].getElementsByTagName('img');
    var proli = document.getElementsByClassName('proBar')[0].getElementsByTagName('li');
    var foot = document.getElementById('foot');
    var part = document.getElementsByClassName('part')

    //导航栏鼠标滑过
    for (var i = 0; i < topbar.length; i++) {
        topbar[i].addEventListener('mouseenter', function (e) {
            //e.target.style.backgroundColor = 'rgb(47,90,155)';
            e.target.setAttribute('id', 'tobarli');
        });
        topbar[i].addEventListener('mouseleave', function (e) {
            // e.target.style.backgroundColor = 'rgb(98,134,160)';
            e.target.removeAttribute('id', 'tobarli');
        });
    }
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