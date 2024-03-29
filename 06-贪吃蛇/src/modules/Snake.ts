// 定义蛇类
class Snake {
  // 蛇的容器
  element: HTMLElement
  // 定义蛇头(首个div)
  head: HTMLElement;
  // 蛇的身体（包括蛇头） HTMLCollection会自动添加新元素
  bodies: HTMLCollection

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    // this.bodies = document.querySelectorAll('#snake > div')!;  // querySelectorAll()返回NodeList获取之后就不在更新元素
    this.bodies = this.element.getElementsByTagName('div')!;  //getElementsByTagName()返回HTMLCollection
  }

  // 获取蛇头的x坐标
  get X() {
    return this.head.offsetLeft;
  }
  // 获取蛇头的y坐标
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇头的x坐标
  set X(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return;
    }

    // X值的合法范围
    if (value < 0 || value > 290) {
      // 进入判断则说明蛇撞墙了
      throw new Error("蛇撞墙了！")
    }

    // 修改x值是水平方向的修改，蛇在向右移动时，不能向左掉头，反之亦然
    // 通过判断蛇头和身体的位置是否相同判断是否掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // console.log('水平方向发生了掉头');
      // 如果发生掉头，让蛇保持原来的移动方向
      if (value > this.X) {
        // 如果新值大于旧值，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody()
    this.head.style.left = value + 'px';
    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  // 设置蛇头的y坐标
  set Y(value) {
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      // 进入判断则说明蛇撞墙了
      throw new Error("蛇撞墙了！")
    }

    // 修改y值是垂直方向的修改，蛇在向上移动时，不能向下掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    // 移动身体
    this.moveBody()
    this.head.style.top = value + 'px';
    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  // 蛇增加身体
  addBody() {
    // 向element元素末尾添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 蛇移动身体方法
  moveBody() {
    // 将后边的身体设置为前边身体的位置
    // 从后往前遍历蛇的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前一节身体位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将位置设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }

  // 判断头和身体是否相撞
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length - 1; i++) {
      let bd = (this.bodies[i] as HTMLElement);
      if (bd.offsetLeft === this.X && bd.offsetTop === this.Y) {
        // 发生相撞，游戏结束
        throw new Error('撞到自己了!');
      }
    }
  }
}

export default Snake;