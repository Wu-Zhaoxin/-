window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow_l');
    var arrow_r = document.querySelector('.arrow_r');
    var focus = document.querySelector('.focus');
    // 显示箭头
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    })

    // 动态添加li
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle')
    for(var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        ol.appendChild(li)
        // 添加属性：
        li.setAttribute('index', i);
        // 为每一个li添加事件监听：
        // li.addEventListener('click', function() {
        //     // 排他：
        //     for (var i = 0; i < ol.children.length; i++) {
        //         ol.children[i].className = '';
        //     }
        //     this.className = 'current';  
    }

    // 圆圈添加监听+移动图片
    var circle = document.querySelector('.circle')
    var all = circle.querySelectorAll('li')
    var num = 0;
    var circle = 0;
    for (var j = 0; j < all.length; j++) {
        all[j].addEventListener('click', function() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'current';
        // 移动图片：
        var index = this.getAttribute('index');
        num = circle = index;
        var focusWidth = focus.offsetWidth;
        var target = -index * focusWidth
        animate(ul, target);
    })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 箭头添加监听+移动图片
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        }
        // 带动圆圈
        circle++
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange()
    })

    arrow_l.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focus.focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });
        }
        // 带动圆圈
        circle--
        // if (circle < 0) {
        //     circle = ol.children.length-1;
        // }
        circle = circle < 0 ? ol.children.length - 1 : circle
        circleChange()
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000);
})