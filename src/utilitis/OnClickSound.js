const OnClickSound = async (soundPath) => {
    const audio =await new Audio(soundPath);
   await audio.play().then(r => {

    }).catch(err=>{
        if(err){
            console.log(err)
        }
    });
};export default OnClickSound;