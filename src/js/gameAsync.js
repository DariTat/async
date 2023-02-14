import json from './parser';
import read from './reader';

export default async function load(){
  try {
    const response = await read();
    const data = await json(response);
    console.log(data);
  } catch(e) {
    console.log(e);
  }  
};
