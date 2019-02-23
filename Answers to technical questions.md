Q1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

A1. I have spent approximately 7 to 8 hours on the coding test. If I had more time, I would add more tests to the code. In this case, there weren't any functions to test as unit tests (or perhaps I'm not aware of such, unfortunately) so I was not able to use jest for unit tests. The testing part of this coding test was heavily focusing on E2E testing where I utilized puppeteerJS to open the html file on Chromium. Using async await, I was able to test the user interface of the coding test step by step (opening the .html file, click on the input, type inside the input, click on the submit button, elements dynamically generated).

I would also make the application responsive, and I would have used the BEM method to style if I had more time. 




Q2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A2. 
  Ex1. Template literals
    const restAddress = document.createTextNode(`Address: ${item.address}`);

    Without using template literals, I would have had to write the code like below,
    const restAddress = document.createTextNode('Address:' + (item.address));

  Ex2. Arrow function ( () => {} )
    location.addEventListener('click', () => {
      ...
    });

    In this case, arrow function was used to make the code more concise, and in many other cases, arrow function is used to use (this) in scope and in managing asynchronous code.

  Ex3. querySelector 
    const restaurants = document.querySelector('.restaurants');

    Before querySelector, everything had to be grabbed by the ID (getElementById) and now querySelector being able to grab anything with CSS selector, it is now a lot less complicated to manipulate the DOM.




Q3. How would you track down a performance issue in production? Have you ever had to do this?

A3. I would take a look at the console in the developer tools and see if there are too many GET requests and try to reduce the amount of GET requests if possible. I would also go into the Network section in the developer tools to see if there are any requests being overly time consuming and I would try to reduce the amount of time it takes to load. 

I would also minify any files that can be minified if possible to reduce the time it takes to load the webpage/application. 

I have done this many times at the school where I studied coding and on my other projects, I have worked on.




Q4. How would you improve the API that you just used?

A4. I would make the 'area' more specific. As of right now, it seems that 'area' only gives information about the city and its bigger encompassing area. 

For example, 'area' of a restaurant in Toronto is, 'Toronto / SW Ontario' which will result in every restaurant searched with 'Toronto' having the same information. 

I would change the 'area' to be more specific and smaller sections such as Little Italy, North York, China town.




Q5. Please describe yourself using JSON.

{
  "name": "Eunjae Clint Lee",
  "korean-name": "이 은재"
  "age": "27 years old",
  "age-in-months": "334 months old",
  "age-in-weeks": "1454 weeks old",
  "age-in-days": "10179 days old",
  "age-in-hours": "244296 hours old",
  "language": {
    "english": "fluent",
    "korean": "fluent",
  },
  "skills": {
    "soft-skills": ["Positive Attitude", "Communication", "Self-Motivation", "Leadership", "Team-Player", "Creativity", "Flexibility", "Emotional Intelligence", "Detail Oriented", "Quick Learner"],
    "technical-skills": ["JavaScript", "React.js", "jQuery", "JSON", "HTML5", "CSS3", "Node.js", "MongoDB", "Mongoose", "Express.js", "Git", "Adobe Premiere", "Adobe After Effects", "Adobe Photoshop"]
  },
  "countries-visited": ["USA", "Finland", "Japan", "China"],
  "cat-lover": true++,
  "dog-lover": true,
  "foodie": true,
  "hobby": ["DJing", "singing", "playing guitar", "video games", "snowboarding", "longboarding"],
  "to-BMO": "Hello team BMO, thank you so much for the opportunity and I can assure you that I will be a great fit for your organization. To hear more about me and my interesting stories please feel free to call me at (416) 659 - 5557 or email me at clintlee@clintdevs.live. Thank you! -your favourite candidate Clint-"
}