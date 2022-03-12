import './main.scss'

const puffify = (param: string) => param + 'PUFF!';

const pokemon = ['iggly', 'jiggly', 'wiggly'];
const [iggly, jiggly] = pokemon;

document.body.innerHTML = puffify(jiggly);

console.log(puffify(iggly));
