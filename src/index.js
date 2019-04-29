import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Start from './Start';

import * as serviceWorker from './serviceWorker';

/*
call the  webservice as soon as the page loads (X)
more validation than just required (checkout/contact)
reset errors on the check out and contact form to non error state..
carousel doesn't rotate allways when check?/toggle does not stay checked (X)
use flex box for shop all (X)
check the checks..
SortBy should sho what is sorting by (X)
format the totals in check ouit and alert...(X)
on contact alret.. add grocery cloud (X)
add copyright symbol (X)
hover over  blocks in abouts and scale up/scale back down (X)
validate costs on checkout page
format the screen for mobile
review submital documents all (X)
clean up comments/cleanup reducer
take react from the title (X)
fix console errors (X)
remove react icon on tab (X)
filtering items resets the sort?
fixed title row in shopping cart (X)
space between shopping coart items/shopping screen (X)
toggle animation takes too long
fade in stop working - about screen
*/

/*
6.1 GOALS 
1) Create an online shopping site for WorldWideImporters grocery segment 
2) Implement the site using the web technologies and frameworks covered in the Web Front-End curriculum 
3) Follow this specification for specific requirements 
4) Site must be designed using the wireframe that is provided as part of the requirements documentation 
5) Fetch API, XMLHttpRequest or third-party library is used to pull data from the Microsoft Azure web service APIs.   
6) Integrated use of React or Angular for rendering data source into page displays 
7) Effective use of HTML 5 elements for semantic document structure 
8) Effective use of Cascading Style Sheets (CSS) for site styling that supports multiple platforms and form factors, such as mobile devices 
9) Effective use of JavaScript for interactivity, data binding, state management, and navigation as indicated in specific elements of this document pertaining to site design. 
10) See the grading rubric on the course page for details on how the project will be graded. Note that the rubric is the list of elements that will be used to grade the project and you are required to identify each rubric element in your code as a code comment.
*/

/*
7a. CSS “must” be used to create the page design, layout, and styling. 
7b. CSS “must” exist in a separate file and not be completely inline.  Inline CSS should only be used where it is absolutely necessary. 
7c. The use of id and classes should be properly utilized to ensure an understanding of the differences between their uses. 
*/

/*
8a. As you will be required to pass the content off to a grader for review, you will need to make use of a GitHub repository.  The Orientation Course for this curriculum offered some Git tutorials and links to Git and GitHub sources. 
8b. Feel free to use a local Git repository for your own source and version control if you deem it necessary.  This is an option and not required but it provides you with experience using Git for source control, which is one the most popular source control mechanisms in the industry. 
8c. Note that by using a GitHub repository, your project files will be public and searchable.  This has advantages and disadvantages.  
8i. Advantage is that graders and potential employers will be able to view your code and project files 
8ii. Disadvantage is that other students could locate your source and copy it. 
8iii. GitHub repositories are public by nature and can only be made private if you elect to pay for a private repository or you have access to one of the educational packages where you can make private repositories. 
*/


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Start />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
