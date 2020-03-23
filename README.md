# Donovan Lo Resume website
## User Centric Frontend Development Milestone Project

---

## Context
This project involves writing custom HTML5 and CSS3 code to create a personal portfolio site for myself of at least 3 pages to  include:

* Tell about educational history and work experience.
* Tell about skills and any other relevant competencies and interests.
* Provide basic personal information and contact information for recruiters.
* Showcase portfolio of projects so far (nice-to-have)
(in-lieu of links to real projects that I'd build later, I'll be including links to other's project at this stage)

External user’s goal: The site's users are recruiters considering to hire the applicant.

Site owner's goal: Present self in best light and get hired.

## Demo

A live website can be found here https://www.donovanlo.sg/

---
---

# Defining the Project (Strategy, Scope)

The purpose of creating this website is to aid me in the process of getting a job. As a mid-life career changer, I need a resume website highlighting my knowledge and experience to help me stand out from other candidates. It will even be better if any hiring managers tumbles upon my website find me suitable for filling a position in their company.

# Strategy

## Identifying External Users

The primary purpose of this resume website is the get myself hired, therefore, the website should be 'talking' to the person who can make or influence the decision to hire me. They may be business owners, HR managers, depart heads and recruitment agencies (hereafter known as "recruiters")

## Identifying External Users' Goals

The recruiters' goal is to hire a right candidate for a position. 

As such, they will have to play detective, to decide whether the applicants are worth their time, which may last from hours to days, to be interviewed.

    EU1. find out as much detail as possible about the applicants 
    EU2. to decide whether the applicant is qualified
    EU3. to find out whether the applicant has the required skills
    EU4. to see the portfolio of the applicant (if any)
    EU5. to find out how to contact the applicant
    EU6. to print out document to support their decisions when presenting to the decision makers.

They will only have a short span of time due to the overwhelming numbers of applicants starting from the time the recruitment advertisement the job vacancy. 

If an applicant is deemed suitable for a job position, they will be looking for the applicant's contact information.

## Identifying Site Owners' Goals

My goals as the site owner is to use it to get myself hired.

As a mid-career changer, switching career to software development is a tough decision. Apart from the usual negative stereotyping and discrimination against middle and old age people, there is the competition of the agile youngsters freshly graduated from the colleague equipped with the latest programming knowledge. #1

The site should: 

    SG1. Be easily accessible regardless of the device visitor is using.
    SG2. Provide an online version of the resume as well as a downloadable one.
    SG3. Serve as a vehicle of communicating things I will like to convey, which I may not even have a chance to, on a traditional resume.
    SG4. Provide opportunities to showcase my relevant skills from past working experience
    SG5. Allow the recruiter to get a glimpse of my character and personalities to determine whether I am a culture fit.
    SG6. Allow the recruiter to contact me.
    SG7. Allow me to improve my personal brand.
    SG8. Showcase my coding skills and past projects.

#1: Ageism plagues Singapore's workplace equality status (Singapore Business Review, dated 22 Oct 2019)
https://sbr.com.sg/hr-education/news/ageism-plagues-singapores-workplace-equality-status-report


## User Stories

    US1. As a recruiter, I will look at the personal bio, so I can know about the site owner. (EU1)
    US2. As a recruiter, I will look the education level of the applicant, so that I can know whether the applicant is qualified. (EU2)
    US3. As a recruiter, I will look for skills or keywords, so that I can know whether the site owners process the skills necessary for the position. (EU3)
    US4. As a recruiter, I will look at the previous working experience, so that I can know about the site owner capabilities as well as whether he is interested in the position and the reasons. (EU4)
    US5. As a recruiter, I will look for contact details, so that I can get in touch with the site owner. (EU5)
    US6. As a recruiter, I will look for a downloadable resume, so that I can print a hard copy of it. (EU6)
    US7. As a recruiter, I will look at the testimonials (if any) from people the site owner has worked with, so that I can validate what the site owner claims.
    US8. As a recruiter, I will look for the site owner's motivator (if any), so that I can know what drives the site owner and whether he is suitable for the position.
    US9. As a recruiter, I will look for portfolio (if any) of the recent work to validate his claims of the skills he has.

# Scope

## Functional Requirement

### Mandatory (FM)

    FM1. Allow download of resume (US6) (SG2)
    FM2. Responsive design (SG1)
    FM3. Online Contact Form (SG6)
    FM4. Use semantic HTML to enhance readability of codes (SG8)
    FM5. HTML codes to be validated (SG8)
    FM6. Personal domain name directing to this project site (SG7)
    FM7. At least 3 pages, or (if using a single scrolling page), at least 3 separate page areas. [Project requirement]
    FM8. Incorporate a main navigation menu and structured layout using Bootstrap [Project requirement]

### Optional (FM)

    FM1. Comply to Web Content Accessibility Guidelines (SG8)
    FM2. Readability (Flesch Reading East Test = 60, Flesch-Kincaid Grade Level Score = 8) (with exception of technical terms) (SG8)
    FM3. Allow sending of short messages via web interface (e.g. WhatsApp) (SG8)
    FM4. SEO Optimized (SG8)

## Content Requirement

### Mandatory (CM)

    CM1. Personal Bio section (US1) (SG5) 
    CM2. Education section (US2) (SG2)
    CM3. Skills section (US3) (SG2)
    CM4. Working experience section(US4) (SG2)
    CM5. Contact section (US5) (SG6)
    CM6. Downloadable resume (US6) (SG2)
    CM7. Relevant skills (SG4) (SG2)
    CM8. Project Portfolio (US9) (SG8)

### Optional (CO)

    CO1. Testimonials section (US7)
    CO2. Motivators section (US8)
    CO3. Photograph (SG5)
    CO4. Logo (SG7)
    CO5. Tagline (SG7)
    CO6. Value Proposition (SG3)
    CO7. Interest (SG3)
    CO8. Result of Personality Tests (e.g. Myers & Briggs) (SG3)
    CO9. Memberships  (SG3)
    C10. Volunteering Experience (SG3)

# Developing the Site Structure and Organize Information (Structure)

## Information Architecture

### Content Inventory (CI)

Information required on the website to fulfil the content requirements.

Information available on the traditional resume:

    CI1. Objective
    CI2. Past working experience (CM4)
    CI3. Education (CM2)
    CI4. Skills (CM3)
    CI5. Certificates
    CI6. Volunteering experience (CO10)
    CI7. Contact details (CM5)

Information requiring copywriting

    CI8. Intro/Bio (CM1)
    CI9. Motivator (CO2)
    CI10. Interest (CO7)
    CI11. Testimonials (CO1)
    CI12. Relevant Skills (CM7)
    CI13. Value Proposition (CO6)

Information to be compiled

    CI14. Keysword for previous job matching job in the new sector (CM3) (CM7)
    CI15. Project (title, description and thumbnail) (CM8)
    CI16. Result of Personality Tests (e.g. Myers & Briggs) (CO8)
    CI17. Memberships (CO8)

Image required

    CI18. High resolution photo to be displayed as heo image (CO3)
    CI19. Thumbnails to be used to represent individual project (CM8)
    CI20. Personal Logo (CO4)

Documents

    CI21. A printable resume in pdf format (CM6)


### Content Structure (CS)

The content will be regroup into a sequential structure.

Home Page > Resume Page > Portfolio Page

<img src="https://www.donovanlo.sg/readme/readme-cs.png" style="margin: 0;">
    

1. Home:
    * It starts with a home page with a hero image introducing me. Things that are not found in traditional resume.
    * It allow visitor a glimpse of my character and personality and understand me a little better.
1. Resume: 
    * The next page present the information visitor expected to see on a resume.
    * The layout should be suitable for career changer. It should be effective in showing transferrable skills and experience. It will also contain a link for the visitor to download a pdf copy of the resume. The format of the pdf copy should be similar in layout with the 'resume' page.
1.  Portfolio
    * For visitor to look for more evidence of my skills, the projects are presented in the third page.
    * It contains the names, descriptions, github hyperlinks of the current and past projects. Having a page dedicated to the projects allows the growth of the listing without affecting the layout of the other pages.


Exception - Contact

* The call for action of the site is to get the recruiter to contact me.
* So the Contact section is embedded into the footer of every page .
* It provide different means to get in touch with me as well as a contact form.
* The visitor can easily drop me a mail without needing to go out of the site to their email application to do so.


The principles of choices are taken into account. The content is organised into 3 pages.
The system applies the labelling system by using short single words (Home, Resume and Portfolio) which can easily recognised by the visitor.

Applying the principles of front doors, the users should be able to identify where they are in the site regardless of which page they landed. 
There will also be a navigation system for the visitor to jump to specific section should they decided to.

The principle of growth is considered when the projects are all group under the portfolio page. It will be easy to expand this section without affect the overall structure or other parts of the designs.
If there's a need for another sections or break one of these pages into two, it can be easily done

### Interaction Design

1.  Learnability
    1. Different navigation are position are location familiar to a web surfer, and throughout the website to enhance familiarity and consistency. (FM8)
        1. Logo that leads back to the home page
        1. Main navigation at the top
        1. Pagination is included to help visitor identify which part of the site they are at
        1. Navigation system in the form of site map allowing visitor to view all the sections at a glance
    1. Symbols will be used to indicate there's a link to the working project to increase the predictability. 
    1. Domain name access instead of memorising the long URL (FM6)
    1. Every project in the portfolio are encapsulated in the same card layout for familiarity
            
1.  Understandability
    1. Content are group into logical order with short one word title easily understandable (FM7)
    1. Readability (Flesch Reading East Test = 60, Flesch-Kincaid Grade Level Score = 8) (with exception of technical terms)  (FO2)
1. Operability
    1. The visitor should be able to easily download the resume without encountering any issues. (FM1)
    1. Provide a working contact form to allow visitor to send an email to me and response with a positive feedback upon successful submission. (FM3)
    1. Allow users to use a text messaging system with web interface familiar to them (FO3)
1. Attractiveness
    1. Responsive design to take into consideration how it looks when on viewed on a desktop browsers as well as smaller screens like mobile phone. The layout will change to cater for different size of the device. (FM2)
    1. Utilisation of negative space between different sections and components of the page to increase readability
1.  Usabiltiy compliance
    1. Semantic HTML to enhance code readability (FM4)
    1. Rearrangement of the component  (FM5)
    1. Comply to Web Content Accessibility Guidelines  (FO1)
    1. Optimize the website for search engine (FO4)

# Developing Page Structure and Orgaize Interactions (Skeleton)

## Interface Design

Each page will include three parts - header, main and footer. 

Header and footer include sections that will be repeated all the pages to improve predictability and consistency.

Header will include a logo (CI20) and the main navigation. 

Footer will include a page navigation, contact section and a site navigation (CI7)

The main content section will display content related to the page.

<img src="https://www.donovanlo.sg/readme/readme-id.png" style="margin: 0;">


## Site Map

<img src="https://www.donovanlo.sg/readme/readme-sitemap.png" style="margin: 0;">

### Home Page
* High resolution photo to be displayed as hero image (CI18)
* Intro/Bio (CI8)
* Value Proposition (CI13)
* Motivator (CI9)
* Interest (CI10)
* Testimonials (CI11)
* Memberships (CI17)
* Result of Personality Tests (e.g. Myers & Briggs) (CI16)

### Resume Page
* Objective (CI1)
* Relevant Skills (CI12)
* Past working experience (CI2)
* Education (CI3)
* Skills (CI4)
* Certificates (CI5) 
* Volunteering experience (CI6) 
* A printable resume in pdf format CM6)
* Keywords for previous job matching job in the new sector  (CI14)

### Portfolio Page
* Thumbnails to be used to represent individual project (CI19)
* Project (title, description and thumbnail (CI15)

## Navigation Design

Bootstrap component will be used to make the navigation responsive.

### Logo
Logo on every page, clicking on it will bring the visitor to the Home Page.
[Bootstrap Component - Navbar]

### Main Navigation
Main Navigation is a fixed position menu at the top of every web page. The 3 pages (Home, Resume, Portfolio) are listed and they are hyperlinked to their respective pages.
[Bootstrap Component - Navbar]

### Collapsible Hamburger Mobile Menu
The top navigation will be minimised into a hamburger menu when displayed in mobile screens or other small screens. Clicking on it will display the familiar 3 choices.
[Bootstrap Component - Navbar]

### Page Navigation
This not only serves as means to navigate forward or backward in the site, it also give the visitor an indication where he is on the site.
[Bootstrap Component - Pagination]

### Footer Site Map
Navigation system in the form of site map allowing visitor to view all the sections at a glance

## Information Design

### Personal Branding

The Home Page most people will arrive at aims to create a personal branding.

* High resolution photo to be displayed as hero image (CI18)
* Intro/Bio (CI8)
* Value Proposition(CI13)
* Motivator (CI9)
* Interest (CI10)
* Testimonials(CI11)
* Memberships (CI17)
* Result of Personality Tests (e.g. Myers & Briggs) (CI16)

A logo is also created to make an impression.

### Career Changer Resume format

The layout format of the resume emphasis on transferrable skills and experience as advised by a article from Novoresume.com
https://novoresume.com/career-blog/career-change-resume

<img src="https://www.donovanlo.sg/readme/careerchangerresume.png" style="margin: 0;">

### Portfolio Page

This page used Bootstrap layout to present projects.
Each project can include a title, subtitle, a picture, a brief description and link to the actual site.

It is responsive and expandable. Inserting a new project is easy and will not need to rehash the whole page.

# Designing Graphics User Interface (Surface)

## Colour

After doing a bit of research, I decided to use blue as the theme colour.

Blue is best to show trust, honesty, reliability, intelligence, and security. These attributes make blue a perfect fit for IT resumes and when applying to non-profit organizations.

In addition to blue, I vary it's tone and added dash of magenta.

## Fonts

Sans serif fonts are used as the base for the website and the logo as they give the image of being modern, approachable, and clean.

The clean lines and sharp edges are able to render out more clearly on a screen which increases legibility for users. 

Fonts family used as the base is Open Sans (https://fonts.google.com/specimen/Open+Sans)
Headings fonts is PT Sans (https://fonts.google.com/specimen/PT+Sans)

For some decorative purpose PT Serif (https://fonts.google.com/specimen/PT+Serif) is used.

## Images

Hero image selected is a photograph of me (I am the 'product' of this website). It aims to let the user knows how the person behind the keyboard looks like. This also reduce the necessity of recruiters' imagining how antique i may look.

The background of the hero image is a combination of two pics, the connected dots (
https://www.pngwave.com/png-clip-art-ojanz) and the waves (https://www.pngwave.com/png-clip-art-cclln).

"Infinity of the mind is created by connecting the dots and going with the flow."


# Features

< To add >


# Technologies

In this project I used **HTM5** to structure the webpages and **CSS3** to style them.

I uses * **Git** * for Versioning Control System and **GitHub** for repositories.

**Gitpod**, an online IDE, is my main coding platform. I do sometimes test out codes in **Repl.it**

I use **Bootstrap 4**, including its compoents and utilities for layout.
*NavBar* is used for the main navigation, *Jumbotron* is used for displaying the hero image, *Card* is used for testimonials as well as for displaying the project and *Pagination* is used for the page navigation at the footer. *Collapse* is used to hide part of the bio.

A CSS Reset style sheet from Killer Collection of CSS Resets (https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/) is used in additional to Code Institues templates (https://github.com/Code-Institute-Org/gitpod-full-template) to start the coding. 
The template used for Readme.md is also from Code Institute (https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md)

Several Tools are also used in the coursee of development:

For drawing diagrams, 
- Draw.io (https://www.draw.io)

For validating markup,
- W3 Markup Validation Service (http://validator.w3.org/)

For checking links
- W3C Link Checker (https://validator.w3.org/checklink)

For cleaning up HTML and CSS Codes
- Dirty Markup (https://www.10bestdesign.com/dirtymarkup/)

For image editing
- Pixlr (https://pixlr.com)
- Paint.NET (https://www.getpaint.net)

For creating word cloud
- Word It Out (https://worditout.com/word-cloud/create)

For checking how it looks like on other devices
- Responsive Web Design Checker (https://responsivedesignchecker.com/)

For placeholder before real content are inserted
- Placeholder.com (http://placeholder.com)
- PlaceIMG (http://placeimg.com)
- Lorem Ipsum Generator (https://loremipsum.io/)
- Lipsum Generator (https://www.lipsum.com/)

For mindmapping
- Coggle (https://coggle.it/)

For generating codes for the gradient
- CSS Matic (https://www.cssmatic.com/)




