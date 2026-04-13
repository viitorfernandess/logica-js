function canConstruct(ransomNote, magazine) {
    magazine = magazine.split('')

    for (let i = 0; i < ransomNote.length; i++) {
        let encontrou = false

        for (let j = 0; j < magazine.length; j++) {
            if (ransomNote[i] === magazine[j]) {
                magazine.splice(j, 1)
                encontrou = true
                break
            }
        }
        if (!encontrou) {
            return false
        }
    }

    return true
}

console.log(canConstruct("aa", "ab"))