import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let time = 0;
const handleTimeupdate = (ev) => {
    time = ev.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};
player.on('timeupdate', throttle(handleTimeupdate, 1000));
if(localStorage.getItem("videoplayer-current-time")){
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

}


