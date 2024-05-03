// const coding =  ["JS", "Ruby", "Java", "Python", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } ) 

const coding =  ["JS", "Ruby", "Java", "Python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } )
 coding.forEach( (item) => {
    console.log(item);
 } )


// const myCoding = [
//     {
//     languageName: "Javascript",
//     languageFileName: "JS"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]


const myCoding = [
    {
        LanguageName : "Javascript",
        LanguageFileName : "JS"
    },
    {
        LanguageName : "Java",
        LanguageFileName : "JAVA"
    },
    {
        LanguageName : "Python",
        LanguageFileName : "py"
    },
]
myCoding.forEach( (item, index) => {
    console.log(index, item.LanguageName, item.LanguageFileName)
} )