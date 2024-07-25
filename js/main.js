// 70. Berilgan objectdagi barcha string qiymatlarni toping va birlashtiring.

function concatStrings(obj1) {
    let result = '';

    function recurse(current) {
        for (let key in current) {
            if (typeof current[key] === 'object' && current[key] !== null) {
                recurse(current[key]);
            } else if (typeof current[key] === 'string') {
                result += current[key];
            }
        }
    }

    recurse(obj1);
    return result;
}

const obj = {
    a: "Hello",
    b: {
        c: " ",
        d: {
            e: "World",
            f: {
                g: "!"
            }
        }
    }
};

console.log(concatStrings(obj1)); // Output: "Hello World!"



//  71. Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.


function sortByLength(s) {
    let arr = s.split(" ")
    arr.sort((a ,b) => a.length - b.length)
    return arr
}

// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"



// 72. Berilgan objectdagi barcha raqamli qiymatlarni toping va ro'yxat (array) sifatida qaytaring.


function findNumbers(obj) {
    // Code here
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]


// 73. Berilgan stringdagi eng uzun so'zni toping.

function longestWord(s) {
    let arr = s.split(" ")
    arr.sort((a,b) => b.length - a.length)
    return arr[0]
}

// Test case
// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"




// 74. Berilgan stringdagi barcha kichik harflarni katta harflarga aylantiring va teskari tartibda qaytaring.


function reverseUpperCase(s) {
    return s.toUpperCase().split("").reverse().join("")
}
// Test case
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"


// 75. Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.

function extractNumbers(s) {
    let arr = s.split(' ')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] > 0) {
            res.push(+arr[i])
        }
    }
    return res
}

// Test case
// console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
// console.log(extractNumbers("123 Main St.")); // Output: [123]


// 76. Berilgan objectdagi barcha qiymatlarning turlarini toping va ro'yxat (array) sifatida qaytaring.

function valueTypes(obj) {
    // Code here
}

// Test case
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 3.14,
//         f: null,
//         g: {
//             h: undefined,
//             i: [1, 2, 3]
//         }
//     }
// };
// console.log(valueTypes(obj));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]


// 77. Berilgan objectdagi barcha kalitlarni ularning qiymatlari bilan almashtiring. Agar qiymatlari takrorlansa, oxirgi qiymatni qabul qiling.


function invertObject(obj) {
    // Code here
}

// Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }


// 78. Berilgan string palindrom ekanligini tekshiring. (Palindrom - o'qilganda orqa tomondan ham bir xil bo'lgan so'z yoki ibora).


function isPalindrome(s) {
    let str = s.toLowerCase().replaceAll(',', "").split(" ").join("")
    let reveseStr = str.split("").reverse().join('')
    if (str === reveseStr) {
        return true
    } else {
        return false
    }
}
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false



// 79. Berilgan objectdagi barcha raqamli qiymatlarning yig'indisini hisoblang.

function sumNumbers(obj) {
    // Code here
}

// Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(sumNumbers(obj)); // Output: 10




// 80. Berilgan stringni so'zlarga ajratib, har bir so'zning bosh harfini katta qiling va qayta birlashtiring.


function capitalizeWords(s) {
    let arr = s.split(" ");
    let result = arr.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1);
    });
    return result.join(" ");
}

// Test case
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"

