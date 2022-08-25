import { writeFile } from "node:fs";

const content = "Questo sarà il contenuto del file message.txt";

writeFile("message.txt", content, (error) => {
  if (error) {
    console.error(error);
    return;
  }
});
