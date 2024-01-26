// 引入其他类
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

// 游戏控制类，控制其他所有类
class GameControl {
  // 定义三个属性
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
  direction: string = ''
  // 创建一个属性记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    // 游戏开始
    this.init()
  }
  // 游戏的初始化方法，调用后游戏即将开始
  init() {
    // 绑定键盘按键下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 调用run方式使蛇移动
    this.run();
  }


  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    console.log(this);
    // 修改direction的值，需要检测key的值是否合法
    this.direction = event.key;  // 需要修改this的指向
  }

  // 控制蛇移动
  run() {
    /**
     * 根据方向direction来使蛇的方向改变
     *    向上：top变小
     *    向下：top变大
     *    向左：left变大
     *    向右：left变小
     */

    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 根据方向修改X值和Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    };

    // 检查蛇是否吃到食物
    this.checkEat(X, Y);


    try {
      // 修改蛇的X和Y值(不应该同时修改x和y的值)
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      // 进入到catch说明蛇撞墙了，游戏结束，弹出提示信息
      alert((error as Error).message);
      this.isLive = false;
    }

    // 开始定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义一个方法检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    // 进入判断则吃到食物
    if (this.food.X === X && this.food.Y === Y) {
      // 改变食物位置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 增加蛇的长度
      this.snake.addBody();
    }
  }

}

export default GameControl;