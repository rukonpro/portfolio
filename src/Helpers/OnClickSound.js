const OnClickSound = async (soundPath) => {
    const audio =await new Audio(soundPath);
   audio.volume=0.1;
   await audio.play()
       .catch(err=>{
           console.log(err)
       })
};export default OnClickSound;