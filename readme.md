Integrantes: Brayam Monge - Valeria Acuña

Project with Webpack, ESLint, and Prettier
This is a sample project that utilizes Webpack, ESLint, and Prettier to manage dependencies, maintain clean and consistent code, and bundle files for production.

Requirements
Make sure you have Node.js installed on your computer before proceeding.

Installation
Clone this repository to your local machine or download it as a ZIP file.

Open a terminal in the project folder.

cd project-name
Install project dependencies using npm.

`npm install`
Usage

Production
To generate optimized files for production, run the following command:

npm run build
The bundled files will be generated in the dist/ folder.

ESLint
ESLint is configured to ensure that the code remains clean and follows coding best practices. You can check ESLint issues by running the following command:

for config use
 `npx eslint --init`

for use 

` npx eslint src/`

Prettier
Prettier takes care of automatic code formatting to maintain style consistency. Execute Prettier with the following command:

`npx prettier . --write`
Project Structure

project-name/
|- dist/ (automatically generated)
|- src/
| |- index.js (main application file)
|
|- webpack.config.js (Webpack configuration file)
|- .eslintrc.js (ESLint configuration file)
|- .prettierrc (Prettier configuration file)
|- package.json (Node.js dependencies file)
|- README.md (this file)

To start working on this proyect ussing webpack
`npx run start`

to see the changes in the project use

`npm run build`
