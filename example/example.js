import {fibgen, iter} from "../lib/index.js";
const gen = fibgen();
(async () => {
  const { value: result } = await iter(gen, 5000).next();
  console.log('final result', result);
})();