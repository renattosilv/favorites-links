const navBar = document.querySelector("nav")
const linksFavorites = JSON.parse(localStorage.getItem("dbLinks")) || []

const renderLink = (id, url, title, icoName) => {
  const newLi = document.createElement("li")
  const newA = document.createElement("a")
  newA.href = url;
  newA.innerText = title;
  if(icoName){ 
    const newIco = document.createElement("ion-icon")
    newIco.name = icoName;
    newA.appendChild(newIco)
  }

  const newIcoBtn = document.createElement("ion-icon")
  newIcoBtn.name = "close-outline";
  const newButton = document.createElement("button")

  newLi.id = id;
  newButton.addEventListener("click", () => {
    deletLink(newLi.id)
  })

  newButton.appendChild(newIcoBtn)
  newLi.appendChild(newButton)
  newLi.appendChild(newA)
  navBar.appendChild(newLi)
  return;
}

const addLink = (url, title, icoName) => {
  const links = JSON.parse(localStorage.getItem("dbLinks")) || []
  links.push({url: url, title: title, icoName: icoName})
  localStorage.setItem("dbLinks", JSON.stringify(links))
  document.location.reload()
  return;
}

const deletLink = (id) => {
  const links = JSON.parse(localStorage.getItem("dbLinks")) || []
  if(links.length === 0){
    return;
  }
  document.getElementById(id).remove()
  links.splice(id, 1)
  localStorage.setItem("dbLinks", JSON.stringify(links))
  return;
}

const clearLinks = () => {
  localStorage.clear();
  document.location.reload()
  return;
}

linksFavorites.map(
  (link, linkId) => {
    if(link.icoName){
      renderLink(linkId, link.url, link.title, link.icoName)
    } else {
      renderLink(linkId, link.url, link.title)
    }
  })

// renderLink("#", "", "add")