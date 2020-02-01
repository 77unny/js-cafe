const a = 'a1';
const b = 'bb2';

const token = value => {
    const regexp = /(?=\d)/g;
    const [a, b] = value.split(/(?=\d)/g);
    console.log('a => ', a);
    console.log('b => ', b);
    return a, b;
};

token(b);
