```js
// Verifica se o texto digitado pode ser o nome original,
// considerando que algumas letras podem ter sido pressionadas por mais tempo.
// As letras precisam aparecer na mesma ordem e nenhuma letra do nome pode faltar.
```


function longPressedName(name, typed) {
    let i = 0
    let j = 0

    while (j < typed.length) {
        if (typed.length < name.length) {
            return false
        }
        if (name[i] === typed[j]) {
            i++
            j++
        } else if (i > 0 && typed[j] === name[i - 1]) {
            j++
        } else {
            return false
        }
    }

    return i === name.length
}

console.log(longPressedName("alex", "aalee"))