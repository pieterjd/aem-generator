# yeo-generator

Generators for the AEM reactor

Currently it has generators for 
* AEM component
* Osgi service

## Installation

* clone the git repo
* run ``npm install``
* run ``npm link``

## Usage
### Component
* go to the folder where all your components are located
* run ``yo aem:component``
* answer the questions

You now have a newly created subfolder with the name of the component, and it contains a simple HTL render script and dialog.
### Osgi service
Work in progress - still need to find out how to include the package you want the files to reside in. Now the files get generated in the current folder, you still have to move them manually to the correct package.