$(function() {
    load();
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请先输入您的待办事项哦！(●'◡'●)");
            } else {
                var local = getData();
                local.push({ title: $(this).val(), done: false});
                saveData(local);
                // 清空输入框
                $("#title").val("");
                load();
            }
        }
    })
    // 删除操作
    $("ol, ul").on("click", "a", function() {
        var data = getData();
        var index = $(this).attr("id");
        console.log(index);
        data.splice(index, 1);
        saveData(data);
        load();
    });
    // 读取本地存储
    function getData() {
        var data = localStorage.getItem("todolist");
        if(data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 正在进行和已经完成选项操作
    $("ol, ul").on("click", "input", function() {
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load();
    })
    // 保存到本地数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    // 渲染加载数据到页面
    function load() {
        var data = getData();
        $("ol, ul").empty();
        var todocount = 0;
        var donecount = 0;
        $.each(data, function(i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a href='javascript:;' id = "  + i + "> </a></li>");
                donecount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id = "  + i + "> </a></li>");
                todocount++;
            }
        })
        $("#todocount").text(todocount);
        $("#donecount").text(donecount);
    }
})