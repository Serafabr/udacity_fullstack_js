const step11 = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const nextStep = 1;
        console.log('Completed step 1');
        resolve(nextStep);
      } catch (err) {
        reject()
      }
    }, 1000)
  });
}

const step22 = (step: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const nextStep = step + 1;
        console.log(`Completed step ${nextStep}`);
        resolve(nextStep);
      } catch (err) {
        reject()
      }
    }, 1000)
  });
}

const step33 = (step: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const nextStep = step + 1;
        console.log(`Completed step ${nextStep}`);
        resolve(nextStep);
      } catch (err) {
        reject()
      }
    }, 1000)
  });
}

const build = async (): Promise<void> => {
  try {
    const steps1 = await step11();
    const steps2 = await step22(steps1);
    await step33(steps2);
    console.log('Your house is done');
  } catch (err) {
    console.log('There was an error building')
  }
}

build();

// step1().then((result) => {
//   return step2(result);
// }).then((result) => {
//   return step3(result);
// }).then(() => {
//   console.log('Your house is done');
// }).catch(() => {
//   console.log('There was an error building')
// });