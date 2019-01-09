class A {
    f() {
        try {
            console.log('f');
            this.newf()
        } catch (e) {
            console.log(e.message);
        }
        my(1,2)
    }
    newf() {
        console.log('object');
        let prj = '123'
        let url = `http://www.baidu.com${prj}`
        // this.$axios
        //     .post(url, {})
        //     .then((r) => console.log(r))
    }
}

function my(p2, p1) {
    try {
        console.log('my');
    } catch (e) {
        console.log(e.message);
    }
}

export const a = new A()


