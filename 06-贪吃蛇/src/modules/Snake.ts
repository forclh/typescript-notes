// 定义蛇类
class Snake {
  // 蛇的容器
  element: HTMLElement
  // 定义蛇头(首个div)
  head: HTMLElement;
  // 蛇的身体（包括蛇头） HTMLCollection会自动添加新元素
  bodies: HTMLCollection

  constructor() {
    this.element = document.querySelector('#snake')!;
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
    this.head.style.left = value + 'px';
  }
  // 设置蛇头的y坐标
  set Y(value) {
    this.head.style.top = value + 'px';
  }

  // 蛇增加身体
  addBody() {
    // 向element元素末尾添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div><div>")
  }
}

export default Snake;