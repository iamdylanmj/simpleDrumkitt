// taling a reference
const crash = document.getElementById("crash");
const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");




// rotate animation
const rotate = (referName) => {
    // console.log('this is the property value: ', referName.style.getPropertyValue('--animName'));
    referName.style.setProperty("--animName", "glizz");
    
    setTimeout(() => {
        referName.style.removeProperty("--animName", "glizz");
    }, 100);
    
};

// playing the sound
const playSound = (url) => {
    const sound = new Audio(url);
    sound.play();
};

// sound functions
const crashSound = () => {
    // console.log('this produces crash sound');
    rotate(crash);
    playSound('./audio_files/crash.mp3');
    
};

const kickSound = () => {
    // console.log('this produces kick sound');
    rotate(kick);
    playSound('./audio_files/kick.mp3');
    
};

const snareSound = () => {
    // console.log('this produces snare sound');
    rotate(snare);
    playSound('./audio_files/snare.mp3');
};

const tomSound = () => {
    // console.log('this produces tom sound');
    rotate(tom);
    playSound('./audio_files/tom.mp3');
};


// listening to click events
crash.addEventListener('click', crashSound);
kick.addEventListener('click', kickSound);
snare.addEventListener('click', snareSound);
tom.addEventListener('click', tomSound);

// listening to key press event
document.body.addEventListener('keyup', e => {
    
    switch(e.key) {
        case 'c':
            crashSound();
            break;
        case 'k':
            kickSound();
            break;
        case 's':
            snareSound();
            break;
        case 't':
            tomSound();
            break;
        default:
            null;            
    }
});