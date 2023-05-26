let section = document.getElementsByTagName("section")[0]

let icon1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-week" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
</svg>`
let icon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"class="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>`
let icon3 = `<img src="https://img.icons8.com/?size=16&id=143&format=png" alt="">`

for (let index = 0; index < Trips.length; index++) {
    let figure = document.createElement("figure")
    figure.setAttribute("class", "fig_3")

    let img1 = document.createElement("img")
    img1.setAttribute("src", Trips[index].img)

    let div1 = document.createElement("div")

    let figcaption = document.createElement("figcaption")
    figcaption.innerHTML = "<b>"+Trips[index].title+"</b>"

    let div2 = document.createElement("div")
    div2.innerText = Trips[index].text

    let footer = document.createElement("footer")
    footer.innerHTML = icon1 + Trips[index].date + icon2 + Trips[index].account + icon3 + Trips[index].comments

    let button = document.createElement("button")
    button.innerHTML = '<a href="'+Trips[index].link+'">Explore</a>'

    div1.append(figcaption)
    div1.append(div2)
    div1.append(footer)
    div1.append(button)

    figure.append(img1)
    figure.append(div1)

    section.append(figure)
}

if (localStorage.getItem("user") != null) {
    document.getElementsByClassName("home_tag_a")[0].setAttribute("href", "UserPage.html")
    document.getElementsByClassName("home_tag_a")[1].setAttribute("href", "UserPage.html")
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