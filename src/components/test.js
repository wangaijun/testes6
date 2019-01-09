class A {
    f() {
        console.log('f');
    }
}

export function my() {
    console.log('my');
}

export const a = new A()

export let b = new A()

export var c = new A()


