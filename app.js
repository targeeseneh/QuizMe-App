const question_database = [
    {
      text: "Which attribute is used to specify the location of an external CSS file?",
      options: ["href", "src", "class", "style"],
      answer: "href"
    },
    {
      text: "Which tag is used to define an HTML link?",
      options: ["link", "a", "href", "url"],
      answer: "a"
    },
    {
      text: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyper Technical Markup Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
        text: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Text Markup Language', 'Hyper Transfer Markup Language'],
        answer: 'HyperText Markup Language'
    },
        
    {
        text: 'Which HTML tag is used to define an image?',
        options: ['image', 'img', 'picture', 'imgsrc'],
        answer: 'img'
    },
        
    {
        text: 'What is the correct HTML element for the largest heading?',
        options: ['h6', 'heading', 'h1', 'head'],
        answer: 'h1'
    },
        
    {
        text: 'Which attribute is used to specify the URL of the linked resource in HTML?',
        options: ['src', 'url', 'link', 'href'],
        answer: 'href'
    },
        
    {
        text: 'What is the correct HTML element for creating a checkbox?',
        options: ['input type="check"', 'checkbox', 'input type="checkbox"', 'check'],
        answer: 'input type="checkbox"'
    },
        
    {
        text: 'Which HTML element is used to define the footer for a section or page?',
        options: ['footer', 'end', 'bottom', 'foot'],
        answer: 'footer'
    },
        
    {
        text: 'What is the purpose of the alt attribute in an <img> tag?',
        options: ['It defines alternative text for the image', 'It sets the alignment of the image', 'It controls the image size', 'It specifies the image source'],
        answer: 'It defines alternative text for the image'
    },
        
    {
        text: 'Which HTML element is used to define a table row?',
        options: ['td', 'row', 'th', 'tr'],
        answer: 'tr'
    },
        
    {
        text: 'In HTML, which character entity is used to represent a non-breaking space?',
        options: ['&nbsp;', '&nonbreak;', '&space;', '&nbspace;'],
        answer: '&nbsp;'
    },
        
    {
        text: 'What is the correct HTML element for playing video files?',
        options: ['movie', 'video', 'media', 'play'],
        answer: 'video'
    },  
        
    {
        text: 'What does CSS stand for?',
        options: ['Cascade Styling Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
        answer: 'Cascading Style Sheets'
    },
        
    {
        text: 'Which CSS property is used to control the text size of an element?',
        options: ['font-size', 'text-size', 'text-style', 'font-style'],
        answer: 'font-size'
    },
        
    {
        text: 'In CSS, what is the default value of the position property?',
        options: ['absolute', 'relative', 'static', 'fixed'],
        answer: 'static'
    },
        
    {
        text: 'Which CSS property is used to add shadows to an element?',
        options: ['box-shadow', 'text-shadow', 'shadow', 'element-shadow'],
        answer: 'box-shadow'
    },
        
    {
        text: 'Which CSS property is used to control the spacing between lines of text?',
        options: ['line-spacing', 'text-spacing', 'line-height', 'font-spacing'],
        answer: 'line-height'
    },
        
    {
        text: 'Which CSS selector selects elements with a specific class?',
        options: ['.', '#', ':', '*'],
        answer: '.'
    },
        
    {
        text: 'What is the correct CSS syntax for targeting an element by its ID?',
        options: ['id', 'name', 'class', 'tag'],
        answer: '#'
    },
        
    {
        text: 'Which CSS property is used to make text bold?',
        options: ['font-style', 'text-style', 'font-weight', 'text-weight'],
        answer: 'font-weight'
    },
        
    {
        text: 'Which CSS property is used to control the background color of an element?',
        options: ['color', 'background-color', 'bg-color', 'bgcolor'],
        answer: 'background-color'
    },
        
    {
        text: 'What is the purpose of the CSS box-sizing property?',
        options: ['To control the visibility of an element', 'To specify the margin of an element', 'To include padding and border in the elements total width and height', 'To hide an element from the layout'],
        answer: 'To include padding and border in the elements total width and height'
    },  
        
    {
        text: 'What is JavaScript?',
        options: ['A programming language', 'A markup language', 'A scripting language', 'A styling language'],
        answer: 'A scripting language'
    },
        
    {
        text: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'let', 'const', 'variable'],
        answer: 'var'
    },
        
    {
        text: 'What is the result of the expression 2 + "2" in JavaScript?',
        options: ['4', '22', '2', 'Error'],
        answer: '22'
    },
        
    {
        text: 'Which JavaScript method is used to remove the last element from an array?',
        options: ['pop()', 'remove()', 'slice()', 'splice()'],
        answer: 'pop()'
    },
        
    {
        text: 'What is the purpose of the isNaN() function in JavaScript?',
        options: ['To check if a value is an array', 'To check if a value is a number', 'To check if a value is a string', 'To check if a value is NaN (Not-a-Number)'],
        answer: 'To check if a value is NaN (Not-a-Number)'
    },
        
    {
        text: 'What is the correct JavaScript syntax to change the content of an HTML element?',
        options: ['document.getElementById("element").innerHTML = "new content";', 'element.innerHTML = "new content";', 'document.innerHTML = "new content";', 'element.content = "new content";'],
        answer: 'document.getElementById("element").innerHTML = "new content";'
    },
        
    {
        text: 'Which operator is used to concatenate strings in JavaScript?',
        options: ['&', '+', '-', '*'],
        answer: '+'
    },
        
    {
        text: 'What is the purpose of the setTimeout() function in JavaScript?',
        options: ['To delay the execution of a function', 'To repeat the execution of a function at regular intervals', 'To clear a timeout', 'To stop the execution of a function'],
        answer: 'To delay the execution of a function'
    },
        
    {
        text: 'Which JavaScript method is used to convert a string to lowercase?',
        options: ['toLowerCase()', 'toLower()', 'lowercase()', 'convertToLower()'],
        answer: 'toLowerCase()'
    },
        
    {
        text: 'What is the difference between == and === operators in JavaScript?',
        options: ['== performs type coercion, while === does not', '== compares values, while === compares both values and types', '== is used for equality checks, while === is used for assignment', '== and === are interchangeable and have the same behavior'],
        answer: '== compares values, while === compares both values and types'
    },
          
    {
        text: 'What is Python?',
        options: ['A programming language', 'A markup language', 'A scripting language', 'A styling language'],
        answer: 'A programming language'
    },
        
    {
        text: 'Which keyword is used to declare a function in Python?',
        options: ['def', 'fun', 'function', 'define'],
        answer: 'def'
    },
        
    {
        text: 'What is the result of the expression 2 + 2 in Python?',
        options: ['4', '22', '2', 'Error'],
        answer: '4'
    },
        
    {
        text: 'Which Python method is used to remove the last element from a list?',
        options: ['pop()', 'remove()', 'slice()', 'append()'],
        answer: 'pop()'
    },
        
    {
        text: 'What is the purpose of the len() function in Python?',
        options: ['To check if a value is an integer', 'To check if a value is a string', 'To check the length of a string, list, or tuple', 'To convert a value to lowercase'],
        answer: 'To check the length of a string, list, or tuple'
    },
        
    {
        text: 'What is the correct Python syntax to print "Hello, World!"?',
        options: ['console.log("Hello, World!");', 'print("Hello, World!")', 'echo "Hello, World!"', 'printf("Hello, World!")'],
        answer: 'print("Hello, World!")'
    },
        
    {
        text: 'Which operator is used to concatenate strings in Python?',
        options: ['&', '+', '-', '*'],
        answer: '+'
    },
        
    {
        text: 'What is the purpose of the range() function in Python?',
        options: ['To generate a sequence of numbers', 'To iterate over a list', 'To check if a value is within a range', 'To reverse a list'],
        answer: 'To generate a sequence of numbers'
    },
        
    {
        text: 'Which Python method is used to convert a string to uppercase?',
        options: ['toUpper()', 'toUpperCase()', 'upper()', 'convertToUpper()'],
        answer: 'upper()'
    },
        
    {
        text: 'What is the difference between a list and a tuple in Python?',
        options: ['A list is mutable, while a tuple is immutable', 'A list can store any type of data, while a tuple can only store homogeneous data types', 'A list is ordered, while a tuple is unordered', 'There is no difference between a list and a tuple in Python'],
        answer: 'A list is mutable, while a tuple is immutable'
    }
            
  ];

  let question_index = 0;
  let selectedOption = null;
  let score = 0;
  let timer;
  let minutes = 20;
  let seconds = 0;
  let userAnswers = new Array(question_database.length).fill(null);

  // Display question
  const html_question = document.getElementById("question");
  const html_options = document.getElementById("options");

  function displayQuestion() {
    const current_question = question_database[question_index];
    html_question.innerHTML = current_question.text;

    // Display options
    let opt = "";
    for (let i = 0; i < current_question.options.length; i++) {
      opt += `<li onclick="checkAnswer(event)">${current_question.options[i]}</li>`;
    }
    html_options.innerHTML = `<ol type='a'>${opt}</ol>`;
    selectedOption = null; // Reset selected option for each question

    if (question_index === 0) {
      document.getElementById("previous").disabled = true;
    } else {
      document.getElementById("previous").disabled = false;
    }

    if (question_index === question_database.length - 1) {
      document.getElementById("next").disabled = true;
    } else {
      document.getElementById("next").disabled = false;
    }
  }

  function next() {
    if (question_index < question_database.length - 1) {
      question_index++;
      displayQuestion();
    }
  }

  function previous() {
    if (question_index > 0) {
      question_index--;
      displayQuestion();
    }
    if (question_index === 0) {
      document.getElementById("previous").disabled = true;
    }

    // Display previously selected option
    const previousOption = userAnswers[question_index];
    if (previousOption) {
      const options = document.querySelectorAll("#options li");
      options.forEach(option => {
        if (option.innerHTML === previousOption) {
          option.style.background = "yellow";
          selectedOption = option;
        }
      });
    }
  }

  function checkAnswer(e) {
    if (selectedOption !== null) {
      // User has already selected an option, prevent selecting another one
      return;
    }

    selectedOption = e.target;
    if (e.target.innerHTML == question_database[question_index].answer) {
      // Correct answer
      e.target.style.background = "green";
      score++;
    } else {
      // Incorrect answer
      e.target.style.background = "red";
    }

    userAnswers[question_index] = selectedOption.innerHTML; // Store user's selected option

    if (checkQuizCompletion()) {
      clearInterval(timer); // Stop the timer
      disableButtons(); // Disable next and previous buttons
    }
  }

  function checkQuizCompletion() {
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === null) {
        return false;
      }
    }
    return true;
  }

  function showResult() {
    document.getElementById("score").innerHTML = "Score: " + score;
  }

  function restart() {
    question_index = 0;
    score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("previous").disabled = true;
    document.getElementById("next").disabled = false;
    displayQuestion();
    clearInterval(timer);
    minutes = 20;
    seconds = 0;
    startTimer();

    // Reset user answers for each question
    userAnswers = new Array(question_database.length).fill(null);
  }

  function startTimer() {
    timer = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const timerElement = document.querySelector(".timer");
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      disableButtons();
      return;
    }
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    timerElement.textContent = `Time: ${formattedMinutes}:${formattedSeconds}`;
  }

  function disableButtons() {
    document.getElementById("previous").disabled = true;
    document.getElementById("next").disabled = true;
  }

  displayQuestion();
  startTimer();
  
  