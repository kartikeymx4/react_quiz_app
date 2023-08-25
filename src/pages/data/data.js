const quizzes = [
    {
        id: 1,
        title: 'HTML Quiz',
        thumbnail: 'https://th.bing.com/th/id/R.7a6bb506ff30852720b60ea3c272b004?rik=Vyjr6fEokuYs6A&riu=http%3a%2f%2fpcanytime.co.nz%2fassets%2fimages%2fsite%2fhtml5.png&ehk=IqEZ47SDhdS4bk%2fgXNvgVR6h8ohpKM1AwzT%2frqmy%2bcw%3d&risl=&pid=ImgRaw&r=0',
        questions: [
            'What does the abbreviation HTML stand for?',
            'How many sizes of headers are available in HTML by default?',
            'What is the smallest header in HTML by default?',
        ],
        options: [
            ['HyperText Markup Language.', 'HighText Markup Language.', 'Hypertext markdown Language.'],
            ['5', '1', '6'],
            ['h1', 'h6', 'h7'],
        ],
        correctOptions: [0, 2, 1] 
    },
    {
        id: 2,
        title: 'CSS Quiz',
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-512.png',
        questions: [
            'What does CSS stand for?',
            'Which property is used to change the background color of an element?',
            'What does the "C" in CSS refer to?'
        ],
        options: [
            ['Computer Styled Sections', 'Creative Style Sheets', 'Cascading Style Sheets'],
            ['background-color', 'color', 'text-color'],
            ['Cascading', 'Colorful', 'Creative']
        ],
        correctOptions: [2, 0, 0]
    },
    {
        id: 3,
        title: 'JS Quiz',
        thumbnail: 'https://openclipart.org/image/800px/272343',
        questions: [
            'What does the acronym "JS" stand for?',
            'Which keyword is used to declare a variable in JavaScript?',
            'Which function is used to add a new element to the end of an array?'
        ],
        options: [
            ['Java Source', 'JavaScript', 'JustScript'],
            ['var', 'let', 'variable'],
            ['push()', 'add()', 'insert()']
        ],
        correctOptions: [1, 0, 0]
    }
];

export default quizzes;
