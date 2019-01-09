class A {
    f() {
        console.log('f');
    }
}

function my() {
    console.log('my');
}

const a = new A()

let b = new A()

var c = new A()

export {a, b, c, my, a as default}


