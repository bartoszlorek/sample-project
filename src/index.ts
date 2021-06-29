import {sleep} from './time';

async function welcome() {
  await sleep(1000);
  console.log('hello world');
}

welcome();
