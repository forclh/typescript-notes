// 定义食物类
class Food{
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // 感叹号 (!) 是非空断言操作符。
    // 它可以用于告诉 TypeScript 编译器，对于可能为 null 或 undefined 的值进行断言，即断言它一定不会是 null 或 undefined。
    this.element = document.querySelector('#food')!;
  }

  // 定义一个可以获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }
  // 定义一个可以获取食物y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物的位置
  change() {
    // 生成随机的位置
    // 食物的坐标范围为(0,0) -> (290,290), 每个坐标值为10的倍数（蛇每次移动10px）
    // [0,290]
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}

// // 测试代码
// const food = new Food();
// console.log(food.X, food.Y);

// food.change();
// console.log(food.X, food.Y);

export default Food;