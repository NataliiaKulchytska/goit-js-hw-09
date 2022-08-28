import Notiflix, { Notify } from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = { position, delay };
  
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
    // Fulfill
     resolve(promiseValue);
  } else {
    // Reject
    reject(promiseValue);
  }
  })
  
};

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

     let {
    elements: { delay, step, amount },
    } = e.currentTarget;
  
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  for (let position = 1; position <= amount; position += 1){
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
             Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        }, delay)
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
             Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        }, delay)
      });
    delay += step;
  }
};

