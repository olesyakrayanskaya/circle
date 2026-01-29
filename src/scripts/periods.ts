interface IncrementAnimVar {
  time: number;
  step: number;
}

const animVar: IncrementAnimVar = {
  time: 40000,
  step: 1
};

export function dateIncrementAnimation(num: number, e: Element): void {
  let n: number = Number(e.innerHTML);
  if (n === num) {
    return;
  }
  let t = Math.round(animVar.time / (num / animVar.step));
  if (n < num) {
    let interval = setInterval(() => {
      n = n + animVar.step;
      if (n >= num) {
        clearInterval(interval);
      }
      e.innerHTML = n.toString();
    }, t);
  } else {
    let interval = setInterval(() => {
      n = n - animVar.step;
      if (n <= num) {
        clearInterval(interval);
      }
      e.innerHTML = n.toString();
    }, t);
  }
}
