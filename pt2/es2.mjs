function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((file1data) => console.log(file1data))
  .then(() => luckyDraw("Caroline "))
  .then((file2data) => console.log(file2data))
  .then(() => luckyDraw("Sabrina"))
  .then((file3data) => console.log(file3data))
  .catch((error) => console.log(error));
