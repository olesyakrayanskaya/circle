const time: number = 20000;
const step: number = 1;

function outNum(num: number, elem: string): void {
  let e: HTMLElement | undefined = document.querySelector(elem);
  let n: number = Number(e.innerHTML);
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n === num) {
      clearInterval(interval);
    }
    e.innerHTML = n.toString();
  }, t);
}

outNum(2050, ".start");
