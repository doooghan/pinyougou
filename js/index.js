window.addEventListener('load', function(){

    let focus = this.document.querySelector('.focus')
    let focusWidth = focus.offsetWidth
// 鼠标经过显示隐藏按钮
// focus.addEventListener('mouseenter', function () {
//     arrow_l.style.display = 'block';
//     arrow_r.style.display = 'block';
//     clearInterval(timer);
//     timer = null; // 清除定时器变量 
// });
    
    let ul = focus.querySelector('ul')
    let ol = focus.querySelector('.circle')
    for (let i = 0; i < ul.children.length; i++){
        let li = this.document.createElement('li')
        ol.appendChild(li)

        li.addEventListener('click', function(){
            for(let j = 0; j < ol.children.length; j++){
                ol.children[j].className = ''
                ul.children[i].className = ''
            }
            this.className = 'current'
            // console.log(-i * focusWidth)
            animate(ul, -i * focusWidth)
        })
    }

    ol.children[0].className = 'current';

    let circle = 0
    let num = 0
    let flag = true;
    let arrow_l = this.document.querySelector('.arrow_l')
    let arrow_r = this.document.querySelector('.arrow_r')
    arrow_r.addEventListener('click', function(){
        if (flag){
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = '0';
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;  // 打开节流阀
            });

            circle++;
            if (circle == ol.children.length){
                circle = 0;
            }
            circleChange()
        }
    })

    function circleChange(){
        for(let i = 0; i < ol.children.length; i++){
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    }
    // for(let i = 0; i <  ol.children.length; i++){
    //     if (circle > 4){
    //         circle = 0
    //     }
    //     circleChange()
    //     circle++
    // }
})