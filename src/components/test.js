class A {
    f() {
        console.log('f');
    }
}

export function my(p2, p1) {
    try {
        console.log('my');
    } catch (e) {
        console.log(e.message);
    }
}

export const a = new A()


