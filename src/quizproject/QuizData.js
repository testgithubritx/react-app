 const questions =[
    {
        questionText: 'What does the abbreviation HTML stand for?',
        answarOptions:[
            {answerText:'Hypertext Markup Language', isCorrect:true},
            {answerText:'Hypertexts Markup Language', isCorrect: false},
            {answerText:'High Markup Language', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'What is the smallest header in HTML by default?',
        answarOptions:[
            {answerText:'h4', isCorrect: false},
            {answerText:'h5', isCorrect: false},
            {answerText:'h6', isCorrect: true},
            {answerText:'h1', isCorrect: false},
        ],
    },
    {
        questionText: 'What are the types of lists available in HTML?',
        answarOptions:[
            {answerText:'Bulleted,Numbered Lists', isCorrect: false},
            {answerText:'Ordered,Unordered Lists', isCorrect:true},
            {answerText:'Named,Unnamed Lists', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'How to create an ordered list in HTML?',
        answarOptions:[
            {answerText:'<ul>', isCorrect: false},
            {answerText:'<ol>', isCorrect:true},
            {answerText:'<li>', isCorrect: false},
            {answerText:'<href>', isCorrect: false},
        ],
    },
    {
        questionText: 'HTML files are saved by default with the extension?',
        answarOptions:[
            {answerText:'.html', isCorrect:true},
            {answerText:'.Html', isCorrect:false},
            {answerText:'.ht', isCorrect: false},
            {answerText:'.h', isCorrect: false},
        ],
    },
    {
        questionText: 'Which of the following tag is used to insert a line-break in HTML?',
        answarOptions:[
            {answerText:'<br>', isCorrect:true},
            {answerText:'<a>', isCorrect:false},
            {answerText:'<pre>', isCorrect: false},
            {answerText:'<b>', isCorrect: false},
        ],
    },
    {
        questionText: 'Which of the following tags doesn’t require a closing tag?',
        answarOptions:[
            {answerText:'<br>', isCorrect:false},
            {answerText:'<hr>', isCorrect:false},
            {answerText:'Both A and B', isCorrect: true},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'What are the attributes used to change the size of an image?',
        answarOptions:[
            {answerText:'Width and height', isCorrect:true},
            {answerText:'Big and small', isCorrect:false},
            {answerText:'Top and bottom', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'Which attribute is used to provide a unique name to an HTML element?',
        answarOptions:[
            {answerText:'class', isCorrect:false},
            {answerText:'type', isCorrect:false},
            {answerText:'name', isCorrect: false},
            {answerText:'id', isCorrect: true},
        ],
    },
    {
        questionText: 'The correct sequence of HTML tags for starting a webpage is-',
        answarOptions:[
            {answerText:'Head,Title,HTML,Body', isCorrect:false},
            {answerText:'HTML,Head,Title,Body', isCorrect:true},
            {answerText:'HTML,Body,Title,Head', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'What is the correct syntax to write an HTML comment?',
        answarOptions:[
            {answerText:'<!--Comment-->', isCorrect:true},
            {answerText:'//Comment', isCorrect:false},
            {answerText:'#Comment', isCorrect: false},
            {answerText:'/*Comment*/', isCorrect: false},
        ],
    },
    {
        questionText: 'Which property is used to set colors in HTML?',
        answarOptions:[
            {answerText:'background-color', isCorrect:false},
            {answerText:'font-color', isCorrect:false},
            {answerText:'color', isCorrect: true},
            {answerText:'text-color', isCorrect: false},
        ],
    },
    {
        questionText: 'What are the types of unordered lists in HTML?',
        answarOptions:[
            {answerText:'Triangle,Square,disc', isCorrect:false},
            {answerText:'Circle,square,disc', isCorrect:true},
            {answerText:'Triangle,Circle,Disc', isCorrect: false},
            {answerText:'All of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'Which property is used to set border colors in HTML?',
        answarOptions:[
            {answerText:'border-color', isCorrect:false},
            {answerText:'border', isCorrect:true},
            {answerText:'Both A and B', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'Which of the following tags is used to add a row to a table in HTML?',
        answarOptions:[
            {answerText:'<tr>', isCorrect:true},
            {answerText:'<th>', isCorrect:false},
            {answerText:'<td>', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'Which of the following are examples of block-level element in HTML?',
        answarOptions:[
            {answerText:'<p>', isCorrect:false},
            {answerText:'<div>', isCorrect:false},
            {answerText:'<h1>', isCorrect: false},
            {answerText:'All of the above', isCorrect: true},
        ],
    },
    {
        questionText: 'We enclose HTML tags within?',
        answarOptions:[
            {answerText:'{}', isCorrect:false},
            {answerText:'<>', isCorrect:true},
            {answerText:'!!', isCorrect: false},
            {answerText:'None of the above', isCorrect: false},
        ],
    },
    {
        questionText: 'What is correct syntax of doctype in HTML5?',
        answarOptions:[
            {answerText:'</doctype html>', isCorrect:false},
            {answerText:'<doctype html>', isCorrect:false},
            {answerText:'<DOCTYPE html>', isCorrect: false},
            {answerText:'<!DOCTYPE html>', isCorrect: true},
        ],
    },
    {
        questionText: 'In which part of the HTML metadata is contained?',
        answarOptions:[
            {answerText:'head tag', isCorrect:true},
            {answerText:'title tag', isCorrect:false},
            {answerText:'html tag', isCorrect: false},
            {answerText:'body tag', isCorrect: false},
        ],
    },
    {
        questionText: 'Which element is used to get highlighted text in HTML5?',
        answarOptions:[
            {answerText:'<u>', isCorrect:false},
            {answerText:'<mark>', isCorrect:true},
            {answerText:'<highlight>', isCorrect: false},
            {answerText:'<b>', isCorrect: false},
        ],
    },
]
export default questions;