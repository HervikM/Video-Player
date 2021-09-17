const video  = document.querySelector("#video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const adelantar = document.querySelector("#forward")
const retroceder = document.querySelector("#backward")
const progreso = document.querySelector("#rango")
const volumen = document.querySelector("#volumen")


play.addEventListener('click', handlePlay = () =>{
    video.play()
    play.hidden= true
    pause.hidden = false
  
})

pause.addEventListener('click', handlePause = () =>{
    video.pause()
    play.hidden= false
    pause.hidden = true
})

adelantar.addEventListener('click', handleForward = () =>{
    video.currentTime += 10
})

retroceder.addEventListener('click' , handleBackward = () =>{
    video.currentTime -= 10
    
})


video.addEventListener('loadedmetadata', loadrango = () => { 
    progreso.max = video.duration
    
})
video.addEventListener('timeupdate',handleTimeUpdate = () => { progreso.value = video.currentTime
    console.log(video.currentTime)  
     if(video.currentTime == video.duration ){
        play.hidden= false
        pause.hidden = true
     }
})


progreso.addEventListener('input', handleInput = () => { 
    video.currentTime = progreso.value 
})

volumen.addEventListener('change', vol = (ev) =>{
    video.volume = ev.target.value;
}, true)

console.log(video.duration)
console.log(video.currentTime)  
