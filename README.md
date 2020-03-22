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
    







# Developing Page Structure and Orgaize Interactions (Skeleton)

# Designing Graphics User Interface (Surface)

