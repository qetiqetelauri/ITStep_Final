let div = document.getElementsByTagName("div")[1]

for (let index = 0; index < Activities.length; index++) {
    let figure = document.createElement("figure")
    figure.setAttribute("class", "fig_4")
    let img = document.createElement("img")
    img.setAttribute("src", Activities[index].img)
    let figcaption = document.createElement("figcaption")
    figcaption.append(Activities[index].title)
    let button = document.createElement("button")
    button.setAttribute("onclick", "func1("+index+")")
    button.innerText = "find"
    figure.append(img)
    figure.append(figcaption)
    figure.append(button)
    div.append(figure)
}

if (localStorage.getItem("user") != null) {
    document.getElementsByClassName("home_tag_a")[0].setAttribute("href", "UserPage.html")
    document.getElementsByClassName("home_tag_a")[1].setAttribute("href", "UserPage.html")
}

function func1(index) {
    localStorage.setItem("type", "hotel")
    localStorage.setItem("place", "")
    localStorage.setItem("active", document.getElementsByTagName("figcaption")[index].innerHTML)
    window.open("Hotels.html")
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

function ShowHide() {
    for (let index = 0; index < 7; index++) {
        document.getElementsByClassName("slide_a")[index].style.display = "block"
    }
    $("#slide").slideToggle(500)
}