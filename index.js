const hey = document.querySelector('.hey');

const promiseHey = new Promise((resolve) => {
  hey.addEventListener('click', resolve);
});

promiseHey.then((e) => {
  console.log(e);
  let el = e.currentTarget;
  el.textContent = 'watch me!🧞‍♂️';

  setTimeout(function() {
    // 1. 2秒後に丸くする＆回転させる
    el.classList.add('circle');
  }, 1000);
});

promiseHey.then((e) => {
  console.log(e);
  el = e.currentTarget;

  setTimeout(function () {
    // 2. 0.5秒後に水色の背景を変える
    el.classList.add('cean');
  }, 1500);
});

promiseHey.then((e) => {
  console.log(e);
  el = e.currentTarget;

  setTimeout(function () {
    // 3. 0.25秒後に四角に戻す
    el.classList.remove('circle');
  }, 1750);
});

promiseHey.then((e) => {
  console.log(e);
  el = e.currentTarget;

  setTimeout(function () {
    // 4. 0.3秒後に背景色を緑にする
    el.classList.remove('cean');
    el.classList.add('green');
  }, 2050);
});

promiseHey.then((e) => {
  console.log(e);
  el = e.currentTarget;

  setTimeout(function () {
    // 5. 0.5秒後にフェードアウトする
    el.classList.add('fadeout');
  }, 2550);
});

promiseHey.catch((err) => {
  console.log('Error!', err);
});