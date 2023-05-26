function filter() {    
    window.open("Hotels.html")
    localStorage.setItem("type", document.getElementsByTagName("select")[0].value)
    localStorage.setItem("place", document.getElementsByTagName("input")[0].value)
    localStorage.setItem("active", document.getElementsByTagName("select")[1].value)
    window.close("home.html")
    window.close("UserPage.html")
}

function funcOpen(e){
    if (e == 0) {
        localStorage.setItem("type", "hotel")
    } else {
        localStorage.setItem("type", "restaurant")
    }
    localStorage.setItem("place", "")
    localStorage.setItem("active", "")
    window.open("Hotels.html")
    window.close("home.html")
    window.close("UserPage.html")
}

function func2(index) {
    if (index == 0) {
        window.open("Hotels.html")
        localStorage.setItem("type", "")
        localStorage.setItem("place", "")
        localStorage.setItem("active", "")
    }else if (index == 1) {
        window.open("Trips.html")
    }else {
        window.open("Activities.html")
    }
    window.close("home.html")
    window.close("UserPage.html")
}

function ShowHide() {
    for (let index = 0; index < 7; index++) {
        document.getElementsByTagName("a")[index].style.display = "block"
    }
    $("#slide").slideToggle(500)
}