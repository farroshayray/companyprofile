# Project Milestone 1

## Description
This project is a web application that showcases the process of building a Company Profile page. It includes different stages of development with screenshots to illustrate the progression.

## Setup Instructions
1. Clone the repository to your local machine using Git Bash. <br>
`git clone <remote repository>`
2. Make new file named `index.html` 
3. Start the development using `html 5` markup language.

## Screenshots
### Stage #1: Creating HTML Content Using Semantic Elements
1. In building this website, I first created the initial code for the html:5 language initiation <br>
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farro Corp : Technology Company</title>
</head>
<body>
    
</body>
</html>
```
2. Then, create content using semantic html tags inside `<body>` tag such as `<header>`, `<nav>`, `<main>`, `<footer>` etc.
3. In this project, I use `<header>` to create Nav bar, ham button, and place a company logo
4. I use the second `<header>` to create the first sentence in the web to separate it during styling.
5. In completing this project I separated `<main>` from `<section>` because they have different functions in this content.
6. Lastly I created `<footer>` at the bottom to place various content containing additional information and other ranges that can be accessed by users


### Stage #2: Styling
1. Before starting styling I want to create styling code separately using the `index.css` file, what I need to prepare is to enter a link command to the `.css` file in the <head> tag with the command: <br>
```html
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
```
2. For beginners, I suggest using borders to help arrange the layout in the intended `.css` file, I use: <br>
```css
* {
    border-width: 0.10px;
    border-color: red;
    border-style: solid;
}
```
The CSS code produces a border display like this: <br>
![Border](./screenshots/stage%201.4%20border%20for%20easy%20layouting.png)

3. Styling Body <br>
In styling `<body>` I only styled the scrollbar and changed it to transparent. i use webkit on css. <br>
```css
body::-webkit-scrollbar {}
body::-webkit-scrollbar-track {}
body::-webkit-scrollbar-track:hover {}
body::-webkit-scrollbar-track:active {}
body::-webkit-scrollbar-thumb {}
body::-webkit-scrollbar-thumb:hover {}
body::-webkit-scrollbar-thumb:active {}
```
4. Styling Header <br>
The nav bar that I created uses `display: flex;` and to adjust the distance between items automatically with `justify-content: space-between;` so that horizontally the items will have a distance from each other and fill the full space horizontally. The nav bar will also drop automatically as the website is scrolled `position: sticky;`<br>
- Company Logo <br>
```html
<a href="#body" class="first-logo-container" title="body">
    <img src="./assets/pictures/companyLogo.png" alt="company logo" title="company log" class="first-logo">
</a>
```
- Show and Hide Container <br>
in the middle position there is some navigation that will bring up the container when the mouse pointer touches the element. In this case I used a `savascript` to make it work. embedded in the html element that will be used is a `javascript` function call, I created a function for when the mouse pointer touches and when the mouse pointer no longer touches the designated `html` element. <br>
```html
<div class="dropdown" onmouseover="showContainer1()" onmouseout="hideContainer1()">
    <p>Apps</p>
    <div>
    </div>
    <div onmouseover="this.style.display='block'" onmouseout="this.style.display='none'">
        <a>Android</a>
        <a>iOS</a>
        <a>Web</a>
        <a>Desktop</a>
    </div>
</div>
```
then in the `javascript` file I created a `function` that is ready to be called by the html file. The `function` created is `showContainer1()` when an element is touched by the pointer and an element is not touched by the pointer. <br>
```javascript
function showContainer1() {
    document.getElementById("under-nav1").style.display = "block";
}
function showContainer1() {
    document.getElementById("under-nav1").style.display = "block";
}
```
- Button and Ham Button <br>
in the right corner I created two elements that alternate based on the screen resolution or device used by the user. <br>
The Button is used when the web is opened in PC: <br>
I added an icon called "enter icon" beside the "Get Started" text. <br>
```html
<button onclick="scrollToMainContainer()" class="right-nav-button">
    <div>Get Started</div>
    <img src="./assets/pictures/icons8-enter-32.png" alt="enter icon" class="enter-button1" title="enter icon">
</button>
```
If user open the web using tablets and mobiles resolution, the button will be replaced by a Ham Button.
```html
<div class="ham-button1" onclick="toggleHamOpened()">
    <button class="ham-button">
        <div class="ham-line"></div>
        <div class="ham-line"></div>
        <div class="ham-line"></div>
    </button>
    <div class="ham-opened">
        <a href="#main-container" title="main container">Apps</a>
        <a href="#company" title="company">company</a>
        <a href="#socialmedia" title="Contact">Contact</a>
        <a href="#" title="login">login</a>
    </div>
</div>
```
How can I switch the button? <br>
Basically what is switched is the html element, at a condition of resolution, the CSS selector will be disabled, and vice versa, using `display: none;` on `.css` selector.
To adjust the responsiveness of the button I used mediaquery and set it for tablet screen resolution conditions and below <br>
```css
@media only screen and (max-width: 768px){
    .right-nav {
        display: none;
    }
    header > .nav-center {
        display: none;
    }
}
```
5. Styling Main Container
in the `<main>` container I created a layout using the `display: grid;` grid in the `.css` file. <br>
![Main Container](./screenshots/stage%202.5%20main%20container.png) <br>
This gives me a lot of flexibility when I add content to the remaining space when I'm using `grid-template-areas:` <br>
```css
.grid-container {
    display: grid;
    grid-template-areas: 
    'content1 content2 content3'
    'content1 content2 content3'
    'content1 content4 content3'
    'content1 content4 content3';
}
```
the image in the middle will disappear when we use a tablet or mobile, this is set using the `@media` mediaquery to set the responsiveness of a web display <br>
![mobile main](./screenshots/stage%202.5.a%20main%20container.png)
6. Styling Section <br>
Inside `<section>` I also use a grid for display as follows: <br>
```css
.wwd-content {
    display: grid;
    grid-template-areas: 
    'wwd1 wwd1 wwd2 wwd2'
    'wwd1 wwd1 wwd2 wwd2'
    'wwd3 wwd3 wwd4 wwd4'
    'wwd3 wwd3 wwd4 wwd4'
    'wwdx wwd5 wwd5 wwdy'
    'wwdx wwd5 wwd5 wwdy';
}
```
![section container](./screenshots/stage%202.6%20section%20container.png)
7. Styling Footer <br>
I use `display: flex` to set the layout for the footer, and I apply flex to the child of this footer with the column orientation `flex-direction: column;` <br>
![Footer Web](./screenshots/stage%202.7%20footer%20web.png) <br>
on the mobile display I changed the overall flex orientation to `flex-direction: column` to support the mobile display so that the text displayed is not too small when read <br>
![Footer Mobile](./screenshots/stage%202.7.a%20footer%20mobil.png)



### Stage #3: Deployment
This deployment I will push to the GitHub repository, connect it using Netlify and use a subdomain purchased via Niagahoster <br>
1. Push Project to Remote Repository
- open the terminal, it is recommended to use the code editor directly to make it faster
- `git status` untuk mengecheck apa saja yang sudah kita kerjakan atau kita tambahkan

![Contact Form](screenshots/contact_form.png)

## Dependencies
- fonts
- maps
- 

## Design Choices
- Chose a minimalist design to focus on content.
- Used CSS media query for responsive layout.
