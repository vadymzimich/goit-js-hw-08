import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const VIDEO_PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(element => {
    localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, element.seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME));
