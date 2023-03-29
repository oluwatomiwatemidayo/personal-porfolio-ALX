const body = document.querySelector('body');

/////////////////////////////////////////////////////////////
//////////////////// HEADER COMPONENTS //////////////////////
/////////////////////////////////////////////////////////////

const header = document.createElement('header');
body.appendChild(header);

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
header.appendChild(headerContainer);

const headerImgContainer = document.createElement('div');
headerImgContainer.classList.add('header-img-container');
headerContainer.appendChild(headerImgContainer);

const headerImg = document.createElement('img');
headerImg.src = './images/profile-pic-wide.jpg';
headerImg.classList.add('header-img');
headerImgContainer.appendChild(headerImg);

const headerText = document.createElement('div');
headerText.append('Oluwatomiwa Ogundowole');
headerText.classList.add('header-text');
headerImgContainer.appendChild(headerText);

const aboutMeContainer = document.createElement('div');
aboutMeContainer.classList.add('about-me-container');
headerContainer.appendChild(aboutMeContainer);

const aboutMeTitle = document.createElement('h1');
aboutMeTitle.classList.add('section-title');
aboutMeTitle.append('About me');
aboutMeContainer.appendChild(aboutMeTitle);

const aboutMeText = document.createElement('div');
aboutMeText.classList.add('about-me-text');
aboutMeText.append(
	'A Software Enginnering student at ALX, living in Lagos Nigeria.'
);
aboutMeContainer.appendChild(aboutMeText);

const aboutMeFooter = document.createElement('div');
aboutMeFooter.classList.add('about-me-footer');
aboutMeContainer.appendChild(aboutMeFooter);

const aboutMeGithub = document.createElement('a');
aboutMeGithub.setAttribute('href', 'https://github.com');
aboutMeGithub.setAttribute('target', '_blank');
aboutMeGithub.classList.add('about-me-svg');
aboutMeGithub.classList.add('about-me-github');
aboutMeFooter.appendChild(aboutMeGithub);

const aboutMeLinkedin = document.createElement('a');
aboutMeLinkedin.setAttribute(
	'href',
	'https://www.linkedin.com'
);
aboutMeLinkedin.setAttribute('target', '_blank');
aboutMeLinkedin.classList.add('about-me-svg');
aboutMeLinkedin.classList.add('about-me-linkedin');
aboutMeFooter.appendChild(aboutMeLinkedin);

const aboutMeTwitter = document.createElement('a');
aboutMeTwitter.setAttribute('href', 'https://www.twitter.com');
aboutMeTwitter.setAttribute('target', '_blank');
aboutMeTwitter.classList.add('about-me-svg');
aboutMeTwitter.classList.add('about-me-twitter');
aboutMeFooter.appendChild(aboutMeTwitter);

/////////////////////////////////////////////////////////////
//////////////////// MAIN COMPONENTS ////////////////////////
/////////////////////////////////////////////////////////////

const main = document.createElement('main');
body.appendChild(main);

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
main.appendChild(mainContainer);

const myProjectsTitle = document.createElement('h1');
myProjectsTitle.classList.add('section-title');
myProjectsTitle.append('My work');
mainContainer.appendChild(myProjectsTitle);

const projectList = document.createElement('ul');
projectList.classList.add('project-list');
mainContainer.appendChild(projectList);

/////////////////////////////////////////////////////////////
///////////////// CALCULATOR PROJECT ////////////////////////
/////////////////////////////////////////////////////////////

let calcProject = document.createElement('li');
calcProject.classList.add('project-container');
projectList.appendChild(calcProject);

const calcProjectScreenshot = document.createElement('div');
calcProjectScreenshot.classList.add('project-screenshot');
calcProjectScreenshot.classList.add('calculator-screenshot');
calcProject.appendChild(calcProjectScreenshot);

const calcProjectDescContainer = document.createElement('div');
calcProjectDescContainer.classList.add('project-desc-container');
calcProject.appendChild(calcProjectDescContainer);

const calcProjectHeader = document.createElement('div');
calcProjectHeader.classList.add('project-header');
calcProjectDescContainer.appendChild(calcProjectHeader);

const calcProjectTitle = document.createElement('h3');
calcProjectTitle.append('Calculator');
calcProjectHeader.appendChild(calcProjectTitle);

const calcProjectLinks = document.createElement('div');
calcProjectLinks.classList.add('about-me-footer');
calcProjectHeader.appendChild(calcProjectLinks);

const calcProjectGithub = document.createElement('a');
calcProjectGithub.setAttribute(
	'href',
	'https://github.com'
);
calcProjectGithub.setAttribute('target', '_blank');
calcProjectGithub.classList.add('project-svg');
calcProjectGithub.classList.add('about-me-github');
calcProjectLinks.appendChild(calcProjectGithub);

const calcProjectLive = document.createElement('a');
calcProjectLive.setAttribute(
	'href',
	'https://github.com'
);
calcProjectLive.setAttribute('target', '_blank');
calcProjectLive.classList.add('project-svg');
calcProjectLive.classList.add('open-in-new');
calcProjectLinks.appendChild(calcProjectLive);

const calcProjectDesc = document.createElement('div');
calcProjectDesc.append(
	'An AmEx inspired calculator, built with vanilla JavaScript.'
);
calcProjectDescContainer.appendChild(calcProjectDesc);

/////////////////////////////////////////////////////////////
//////////////////// KRUSTY PROJECT /////////////////////////
/////////////////////////////////////////////////////////////

let krustyProject = document.createElement('li');
krustyProject.classList.add('project-container');
projectList.appendChild(krustyProject);

const krustyProjectScreenshot = document.createElement('div');
krustyProjectScreenshot.classList.add('project-screenshot');
krustyProjectScreenshot.classList.add('krusty-screenshot');
krustyProject.appendChild(krustyProjectScreenshot);

const krustyProjectDescContainer = document.createElement('div');
krustyProjectDescContainer.classList.add('project-desc-container');
krustyProject.appendChild(krustyProjectDescContainer);

const krustyProjectHeader = document.createElement('div');
krustyProjectHeader.classList.add('project-header');
krustyProjectDescContainer.appendChild(krustyProjectHeader);

const krustyProjectTitle = document.createElement('h3');
krustyProjectTitle.append(`Sketch-Etcher`);
krustyProjectHeader.appendChild(krustyProjectTitle);

const krustyProjectLinks = document.createElement('div');
krustyProjectLinks.classList.add('about-me-footer');
krustyProjectHeader.appendChild(krustyProjectLinks);

const krustyProjectGithub = document.createElement('a');
krustyProjectGithub.setAttribute(
	'href',
	'https://github.com/'
);
krustyProjectGithub.setAttribute('target', '_blank');
krustyProjectGithub.classList.add('project-svg');
krustyProjectGithub.classList.add('about-me-github');
krustyProjectLinks.appendChild(krustyProjectGithub);

const krustyProjectLive = document.createElement('a');
krustyProjectLive.setAttribute(
	'href',
	'https://github.com'
);
krustyProjectLive.setAttribute('target', '_blank');
krustyProjectLive.classList.add('project-svg');
krustyProjectLive.classList.add('open-in-new');
krustyProjectLinks.appendChild(krustyProjectLive);

const krustyProjectDesc = document.createElement('div');
krustyProjectDesc.append(
	`A cheap, imiation knockoff of a popular children's toy, cosigned by Krusty the Clown.`
);
krustyProjectDescContainer.appendChild(krustyProjectDesc);

/////////////////////////////////////////////////////////////
/////////////////// LIBRARY PROJECT /////////////////////////
/////////////////////////////////////////////////////////////

let libraryProject = document.createElement('li');
libraryProject.classList.add('project-container');
projectList.appendChild(libraryProject);

const libraryProjectScreenshot = document.createElement('div');
libraryProjectScreenshot.classList.add('project-screenshot');
libraryProjectScreenshot.classList.add('library-screenshot');
libraryProject.appendChild(libraryProjectScreenshot);

const libraryProjectDescContainer = document.createElement('div');
libraryProjectDescContainer.classList.add('project-desc-container');
libraryProject.appendChild(libraryProjectDescContainer);

const libraryProjectHeader = document.createElement('div');
libraryProjectHeader.classList.add('project-header');
libraryProjectDescContainer.appendChild(libraryProjectHeader);

const libraryProjectTitle = document.createElement('h3');
libraryProjectTitle.append(`Library App`);
libraryProjectHeader.appendChild(libraryProjectTitle);

const libraryProjectLinks = document.createElement('div');
libraryProjectLinks.classList.add('about-me-footer');
libraryProjectHeader.appendChild(libraryProjectLinks);

const libraryProjectGithub = document.createElement('a');
libraryProjectGithub.setAttribute(
	'href',
	'https://github.com'
);
libraryProjectGithub.setAttribute('target', '_blank');
libraryProjectGithub.classList.add('project-svg');
libraryProjectGithub.classList.add('about-me-github');
libraryProjectLinks.appendChild(libraryProjectGithub);

const libraryProjectLive = document.createElement('a');
libraryProjectLive.setAttribute(
	'href',
	'https://github.com'
);
libraryProjectLive.setAttribute('target', '_blank');
libraryProjectLive.classList.add('project-svg');
libraryProjectLive.classList.add('open-in-new');
libraryProjectLinks.appendChild(libraryProjectLive);

const libraryProjectDesc = document.createElement('div');
libraryProjectDesc.append(
	`A simple CRUD app and a fun way to track what you're readin'.`
);
libraryProjectDescContainer.appendChild(libraryProjectDesc);

/////////////////////////////////////////////////////////////
///////////////////// FOOTER COMPONENTS /////////////////////
/////////////////////////////////////////////////////////////

const footer = document.createElement('footer');
body.appendChild(footer);

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');
footer.appendChild(footerContainer);

const footerContactContainer = document.createElement('div');
footerContactContainer.classList.add('footer-contact-container');
footerContainer.appendChild(footerContactContainer);

const contactMeTitle = document.createElement('h1');
contactMeTitle.classList.add('section-title');
contactMeTitle.classList.add('footer-text');
contactMeTitle.append('Contact me');
footerContactContainer.appendChild(contactMeTitle);

const contactMeBio = document.createElement('h2');
contactMeBio.append(
	'Please do reach out to me if you need my services.'
);
contactMeBio.classList.add('footer-text');
footerContactContainer.appendChild(contactMeBio);

const contactMeAddress = document.createElement('h2');
contactMeAddress.append('L');
contactMeAddress.classList.add('footer-text');
footerContactContainer.appendChild(contactMeAddress);

const contactMePhone = document.createElement('h2');
contactMePhone.append('805-210-0238');
contactMePhone.classList.add('footer-text');
footerContactContainer.appendChild(contactMePhone);

const contactMeEmail = document.createElement('h2');
contactMeEmail.append('henrymcgill@gmail.com');
contactMeEmail.classList.add('footer-text');
footerContactContainer.appendChild(contactMeEmail);

const footerLinks = document.createElement('div');
footerLinks.classList.add('footer-links');
footerLinks.classList.add('footer-text');
footerContactContainer.appendChild(footerLinks);

const footerGithub = document.createElement('a');
footerGithub.setAttribute('href', 'https://github.com/hankfontaine/');
footerGithub.setAttribute('target', '_blank');
footerGithub.classList.add('about-me-svg');
footerGithub.classList.add('about-me-github');
footerGithub.classList.add('footer-svg');
footerLinks.appendChild(footerGithub);

const footerLinkedin = document.createElement('a');
footerLinkedin.setAttribute(
	'href',
	'https://www.linkedin.com/in/hank-mcgill-999750184/'
);
footerLinkedin.setAttribute('target', '_blank');
footerLinkedin.classList.add('about-me-svg');
footerLinkedin.classList.add('about-me-linkedin');
footerLinkedin.classList.add('footer-svg');
footerLinks.appendChild(footerLinkedin);

const footerTwitter = document.createElement('a');
footerTwitter.setAttribute('href', 'https://www.twitter.com/hankfontaine/');
footerTwitter.setAttribute('target', '_blank');
footerTwitter.classList.add('about-me-svg');
footerTwitter.classList.add('about-me-twitter');
footerTwitter.classList.add('footer-svg');
footerLinks.appendChild(footerTwitter);

const footerImgContainer = document.createElement('div');
footerImgContainer.classList.add('header-img-container');
footerContainer.appendChild(footerImgContainer);

const footerImg = document.createElement('img');
footerImg.src = './images/profile-pic-wide.jpg';
footerImg.classList.add('header-img');
footerImgContainer.appendChild(footerImg);
