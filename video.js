let videodata=JSON.parse(localStorage.getItem("video"))||[]

    
    let div=document.createElement("div")
    div.setAttribute("id","innerdiv")

    let imgdiv=document.createElement("div")
    imgdiv.setAttribute("id","imgdiv")
    let iframe=document.createElement("iframe")
    iframe.src=`https://www.youtube.com/embed/${videodata.videoId}`;
    iframe.allow="fullscreen"
    
    imgdiv.append(iframe)

    let h3=document.createElement("h3")
    h3.textContent=videodata.title
   
    div.append(imgdiv,h3)
   document.getElementById("showvideo").append(div)