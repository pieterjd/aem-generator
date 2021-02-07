# yeo-generator

Generators for the AEM reactor. Goals is to generate code that is compliant with the styleguides and code convention that is agreed on.

Currently it has generators for 

* AEM component
* AEM clientlib
* Log configuration
* AEM page
* Osgi service - WORK IN PROGRESS

## Installation

* clone the git repo
* run ``npm install``
* run ``npm link``

## Usage
### Component
* go to the folder where all your components are located
* run ``yo aem:component``
* answer the questions
### Clientlib
* go to the folder where all your clientlibs are located
* run ``yo aem:clientlib``
* answer the questions
You now have a newly created subfolder with the name of the component, and it contains a simple HTL render script and dialog.
### AEM Page
This one is a bit different - as you want to generate a lot of pages at once, this generator now expects arguments and will not have interactive input.

It expects the AEM core components are installed, as the page uses their container, title and text component.

Example call:

``yo aem:page ipsum app/template/content app/component/page``
### Osgi service
Work in progress - still need to find out how to include the package you want the files to reside in. Now the files get generated in the current folder, you still have to move them manually to the correct package.
