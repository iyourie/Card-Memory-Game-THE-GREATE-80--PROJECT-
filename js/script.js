let flip = document.querySelectorAll(".flip-box-inner");
let arr = [];
let no = [];

let int;

let seconds, hours, minutes;
[seconds, hours, minutes] = [0, 0, 0, 0];

document.querySelectorAll("button")[0].onclick = () => {
    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        document.querySelectorAll("span")[0].innerHTML =
            hours < 10 ? "0" + hours : ":" + hours;
        document.querySelectorAll("span")[1].innerHTML =
            minutes < 10 ? ":" + "0" + minutes : ":" + minutes;
        document.querySelectorAll("span")[2].innerHTML =
            seconds < 10 ? ":" + "0" + seconds : ":" + seconds;
    }
    int = setInterval(() => {
        timer();
    }, 1000);
};
document.querySelectorAll("button")[1].onclick = () => {
    clearInterval(int);
};

flip.forEach((x) => {
    x.onclick = () => {
        x.classList.toggle("ac");
        arr.push(x.getAttribute("id"));

        if (arr.length == 2) {
            if (
                (arr[0] == "one" && arr[1] == "four") ||
                (arr[0] == "four" && arr[1] == "one")
            ) {
                document.querySelectorAll(".one").forEach((x) => {
                    setTimeout(() => {
                        x.style.visibility = "hidden";
                        x.classList.add("f");
                        arr.length = 0;
                    }, 0.01);
                });
            } else if (
                (arr[0] == "three" && arr[1] == "two") ||
                (arr[0] == "two" && arr[1] == "three")
            ) {
                document.querySelectorAll(".two").forEach((x) => {
                    setTimeout(() => {
                        x.style.visibility = "hidden";
                        x.classList.add("f");
                        arr.length = 0;
                    }, 0.01);
                });
            }
            if (
                (arr[0] == "one" && arr[1] == "two") ||
                (arr[0] == "two" && arr[1] == "one")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[0]).classList.remove("ac");
                    document.getElementById(arr[1]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[0] == "one" && arr[1] == "three") ||
                (arr[0] == "three" && arr[1] == "one")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[0]).classList.remove("ac");
                    document.getElementById(arr[1]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[0] == "two" && arr[1] == "four") ||
                (arr[0] == "four" && arr[1] == "two")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[0]).classList.remove("ac");
                    document.getElementById(arr[1]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[0] == "four" && arr[1] == "three") ||
                (arr[0] == "three" && arr[1] == "four")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[0]).classList.remove("ac");
                    document.getElementById(arr[1]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            }
        } else if (arr.length == 4) {
            if (
                (arr[2] == "one" && arr[3] == "four") ||
                (arr[2] == "four" && arr[3] == "one")
            ) {
                document.querySelectorAll(".one").forEach((x) => {
                    setTimeout(() => {
                        x.style.visibility = "hidden";
                        x.classList.add("f");

                        arr.length = 0;
                    }, 0.01);
                });
            } else if (
                (arr[2] == "three" && arr[3] == "two") ||
                (arr[2] == "two" && arr[3] == "three")
            ) {
                document.querySelectorAll(".two").forEach((x) => {
                    setTimeout(() => {
                        x.style.visibility = "hidden";
                        x.classList.add("f");

                        arr.length = 0;
                    }, 0.01);
                });
            } else if (
                (arr[2] == "one" && arr[3] == "two") ||
                (arr[2] == "two" && arr[3] == "one")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[2]).classList.remove("ac");
                    document.getElementById(arr[3]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[2] == "one" && arr[3] == "three") ||
                (arr[2] == "three" && arr[3] == "one")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[2]).classList.remove("ac");
                    document.getElementById(arr[3]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[2] == "two" && arr[3] == "four") ||
                (arr[2] == "four" && arr[3] == "two")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[2]).classList.remove("ac");
                    document.getElementById(arr[3]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            } else if (
                (arr[2] == "four" && arr[3] == "three") ||
                (arr[2] == "three" && arr[3] == "four")
            ) {
                setTimeout(() => {
                    document.getElementById(arr[2]).classList.remove("ac");
                    document.getElementById(arr[3]).classList.remove("ac");
                    arr.length = 0;
                }, 500);
            }
        }

        document.querySelectorAll(".flip-box").forEach((x) => {
            x.onclick = () => {
                setTimeout(() => {
                    no.push(x.classList.contains("f"));
                    if (no.length == 4) {
                        if (no.every((x) => x == true)) {
                            setTimeout(() => {
                                alert(`you win !!!
 it took you ${hours < 10 ? "0" + hours : ":" + hours}${minutes < 10 ? ":" + "0" + minutes : ":" + minutes
                                    }${seconds < 10 ? ":" + "0" + seconds : ":" + seconds}`);
                                clearInterval(int);
                            }, 100);
                        } else {
                            console.log("no");
                        }
                    }
                }, 1000);
            };
        });
    };
});
