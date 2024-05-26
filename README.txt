Overview

Welcome to the giftMED campaign website! This website is dedicated to bridging the gap in healthcare equipment access by enabling users to sign up and support our cause. This document will guide you through the structure and functionality of the website.

## Table of Contents

1. Project Structure
2. File Descriptions
3. Instructions for Use
4. Contact Information

## 1. Project Structure

```
giftMED/
│
├── favicon/
│   └── favicon.ico
│
├── images/
│   ├── bg1.jpg
│   ├── logo10.png
│   └── asidePic.png
│
├── styles/
│   └── stylesheet.css
│
├── scripts/
│   └── myscript.js
│
├── index.html
└── README.txt

## 2. File Descriptions

HTML File

- **index.html**: The main HTML file for the sign-up page.

CSS File

- **styles/stylesheet.css**: The CSS file containing styles for the website.

JavaScript File

- **scripts/myscript.js**: The JavaScript file that handles form validation and other client-side interactions.

Images

- **images/bg1.jpg**: Background image for the sign-up page.
- **images/logo10.png**: Logo image used in the header and form.
- **images/asidePic.png**: Side image displayed on the sign-up page.

Favicon

- **favicon/favicon.ico**: The favicon for the website.

3. Instructions for Use

Accessing the Website

Open the `index.html` file in a web browser to view the sign-up page.

Sign-Up Form

The sign-up form requires users to fill in the following fields:
- **First Name**: Required
- **Last Name**: Required
- **Sex**: Required (Female, Male, Prefer not to say)
- **Contact Number**: Optional
- **Email**: Required
- **Password**: Required
- **Support Text**: Required (Why the user supports the campaign)

Form Validation

JavaScript functions are used to validate the form fields before submission:
- `checkFN()`: Validates the First Name.
- `checkLN()`: Validates the Last Name.
- `checkSex()`: Validates the Sex selection.
- `checkEmail()`: Validates the Email.
- `checkPWord()`: Validates the Password.
- `checkSupport()`: Validates the Support Text.
- `submitInput()`: Ensures all required fields are filled out correctly before allowing form submission.

### Styling

The website styling is defined in `styles/stylesheet.css`, which controls the layout, colors, and overall appearance of the website.

## 4. Contact Information

For any questions or issues regarding the website, please contact:

- Email: support@giftmed.com
- Phone: (123) 456-7890

Thank you for supporting giftMED and helping to improve healthcare equipment access!
