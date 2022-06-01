const api="AIzaSyB6Jrgi5iZKBxnItcRhn6i8lkKT4Tu_qvA"

//  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyB4jnjbEhkBUm6ojjiD470jJY-Di99xLpg"




  // <<<<<<<<<<<<this is trending video url>>>>>>>>>>
  let homeoutput=async() => {
      try {
        let url1=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&key=${api}`
        let res1=await fetch(url1)
        let data1=await res1.json()
        
        //console.log(data1.items)
          append(data1.items)
      } catch (error) {
          console.log(error)
      } 
  }

  homeoutput()
  
// <<<<<<<<<<<<<search function onclick and async function>>>>>>>>>>
// <<<<<<<<<<<<console the data>>>>>>>>>>>>>>>>>>>
    // <<<<<<<<<<<arrow function>>>>>>>>>>>>>>
   


let search= async () =>{

   try {
        let input=document.getElementById("input").value
         let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${api}`
       
      

        let res=await fetch(url)

        let data=await res.json()

        // console.log(data)
        append(data.items)
   } catch (error) {
       console.log(error);
   }

};


let append=(data)=> {
    let box=document.getElementById("append")
    box.innerHTML=""
    // console.log(data)
    //<<<<<<<destructureing data>>>>>>>>>>>
    data.forEach(({id: {videoId}, snippet: {title}})=>{
        // console.log(videoId,title)

        let div=document.createElement("div")
        div.setAttribute("id","innerbox")

        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.allow="fullscreen"
        let h4=document.createElement("h4")
        h4.textContent=title;

        div.append(iframe,h4);

        let video={
            videoId,
            title,
        }

        div.onclick=() =>{
            playVideo(video)
        };

        box.append(div);
    })

}

let playVideo = (video) => {
    console.log(video);
    localStorage.setItem("video",JSON.stringify(video))
    window.location.href="video.html"
}


/* <iframe width="560"
 height="315"
 src="https://www.youtube.com/embed/wORb3XEojMM"
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; 
 autoplay; 
 clipboard-write; 
 encrypted-media; 
 gyroscope; 
 picture-in-picture" 
 allowfullscreen></iframe>*/