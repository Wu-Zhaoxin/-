function animate(obj, target, callback) {
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if(callback) {
            //     callback()
            // }
            callback && callback();
        }
            obj.style.left = obj.offsetLeft + step + 'px';
    
    }, 20)
}

// function animate(obj, target, callback) {
//     obj.timer = setInterval(function() {
//         var step = (target - obj.offsetLeft) / 10;  // 缓动公式
//         if(obj.offsetLeft == target) {
//             clearInterval(obj.timer);
//             if(callback) {
//                 callback()
//             }
//         }
//         else if (obj.offsetLeft > target) {
//             obj.style.left = obj.offsetLeft + step + 'px';
//         }
//         else if (obj.offsetLeft < target) {
//             obj.style.left = obj.offsetLeft + step + 'px';
//         }  
    
//     }, 20)
// }