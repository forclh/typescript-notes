// 定义记分牌类
class ScorePanel {
  // 记录分数和等级
  score = 0
  level = 1
  // 分数和等级的元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 限制等级
  maxLevel: number
  // 设置一个变量表示多少分升一级
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector('#score')!;
    this.levelEle = document.querySelector('#level')!;
    this.maxLevel = maxLevel
    this.upScore = upScore
  }


  // 设置加分方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    // 每十分升一级
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  // 设置升级方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }


}
// 测试代码
// const scorePanel = new ScorePanel();

// for (let i = 0; i < 200; i++) {
//   scorePanel.addScore();
// }

export default ScorePanel;