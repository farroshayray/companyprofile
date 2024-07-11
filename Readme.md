[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/cvSOEAVD) <br><br><br>
# Project Milestone 1

## Description
This project is a web application that showcases the process of building a Company Profile page. It includes different stages of development with screenshots to illustrate the progression.

## Setup Instructions
1. Clone the repository to your local machine using Git Bash. <br>
`git clone <remote repository>`
2. Make new file named `index.html` 
3. Start the development using `html 5` markup language.
<br><br><br>
## Processes

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
<br><br><br>


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
<br><br><br>


### Stage #3: Deployment
This deployment I will push to the [Git Hub](https://github.com) repository, connect it using [Netlify](https://netlify.com) and use a subdomain purchased via [Niagahoster](https://niagahoster.com) <br>
1. Push Project to Remote Repository
- open the terminal, it is recommended to use the code editor directly to make it faster
- `git status` to check what we have done or added
![Terminal](./screenshots/stage%203.1%20open%20terminal-git%20status.png)
- Add the files to be committed using `git add <file name>`
- When all files have been included with `git add` then commit using `git commit -m '<commit comment>'`
![add and commit](./screenshots/stage%203.2%20add%20and%20commit.png)
- push the origin to main branch on github repository using `git push origin main`
![push repository](./screenshots/stage%203.3%20push%20to%20github.png)
- Push Finish
2. Searching For Domain <br>
- Sign Up/ Login [Niagahoster](https://niagahoster.com)
- Click domain, and then add new domain. This section will leads you to creat new domain by typing custom domain <br>
![niagahoster domain](./screenshots/stage%203.4.1%20niaga%20hoster.png)
- if your custom domain is available, you can pay for it
- your domain is ready
3. Setting deployment
- open [Niagahoster](https://niagahoster.com) 
- manage your new domain by copying DNS Nameserver
![Copy DNS](./screenshots/stage%203.4.2%20copy%20dns%20nameserver.png)
- open and Login to [Netlify](https://netlify.com)
- click domain, and add or register domain
![register domain](./screenshots/stage%203.4.3.1%20register%20domain.png)
- paste the DNS Nameserver 
![Paste DNS](./screenshots/stage%203.4.3.2%20paste%20dns%20nameserver.png)
- make sure the domain SSL is certified
![SSL certified](./screenshots/stage%203.4.5.%20make%20sure%20SSL%20certified.png)
- the deployment process is finish, you can open on web your new domain.
<br><br><br>
## Dependencies
- fonts (Roboto)
```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
```
- maps (google map)
```html
<iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=batukuwung&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
</iframe>
<a href="https://embed-googlemap.com" title="google map">embed google map</a>
```

## Design Choices
- Chose a minimalist design to focus on content.
- Used CSS media query for responsive layout.
