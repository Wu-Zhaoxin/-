function animate(obj, target, callback) {
    obj.timer = setInterval(function() {
        var step = (target - obj.window.pageYOffset / 10);
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.window.pageYOffset == target) {
            clearInterval(obj.timer);
            // if(callback) {
            //     callback()
            // }
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    
    }, 20)
}