// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
    return sentence.toUpperCase().indexOf("ENGLISH", 0) !== -1;
  }

// Alternate Solutions // 

function spEng(sentence) {
    let match = 'english'
    let cmp = sentence.toLowerCase()
    for (var i = 0, j = 0; i < cmp.length; i++)
        if (cmp[i] == match[j])
            j++
    return j == match.length
}

function spEng(sentence){
    const regex = /english/i;
    const founded = sentence.match(regex);
    return founded != null ? true : false;
}

// In Python // 

// import re

// def sp_eng(sentence): 
//     return bool(re.search(re.compile(r'english', re.I), sentence))

// def sp_eng(sentence): 
//     try:
//         sentence.lower().index('english')
//     except:
//         return False
//     else:
//         return True


