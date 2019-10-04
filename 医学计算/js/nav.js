
var O_nav = document.getElementById("nav"),
    O_sider = document.getElementById("sider"),
    O_PCsider = document.getElementById("pc_sider"),
    O_delete = document.getElementById("delete"),
    mark = false;
O_nav.onclick = function () {
    O_sider.style.display = "block";
    O_sider.style.opacity=1;
    animation(O_sider, {
        data: {
            top: 0,
        },
        option: {
            easing: 'Bounce',
            speed: 1
        }
    }, 1000);
    if (mark) {
        O_PCsider.style.display = "block";
        animation(O_PCsider, {
            data: {
                left: -400,
            },
        }, 500)

        mark = !mark;
    } else {
        O_PCsider.style.display = "none";
        animation(O_PCsider, {
            data: {
                left: -20,
            },
        }, 500)

        mark = !mark;
    }
}
O_delete.onclick = function () {
    console.log(1)
    O_sider.style.opacity=0;
    animation(O_sider, {
        data: {
            top: -800,
        },
        option: {
            easing: 'Bounce',
            speed: 1
        }
    }, 1000)
}
