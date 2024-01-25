// 导入样式，交给webpack处理
import './style/index.less'

import GameControl from './modules/GameControl'

let game = new GameControl();

// setInterval(() => {
//   console.log(game.direction);
// },1000)