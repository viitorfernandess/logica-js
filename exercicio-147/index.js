

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, millis)
    })
}

// Teste
let t = Date.now();

sleep(1000).then(() => {
    console.log(Date.now() - t);
})