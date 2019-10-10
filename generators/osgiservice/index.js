var Generator = require('yeoman-generator');

module.exports = class GeneratorAem extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }



    async prompting(){
        this.answers = await this.prompt([
            {
                type: "input",
                name: "serviceName",
                message: "The name of the Osgi service - make sure its suffix is 'Service'",
                default: this.appname // Default to current folder name
            }
            /*,
            {
                type: "confirm",
                name: "cool",
                message: "Would you like to enable the Cool feature?"
            }
            */
        ]);

        //this.log("app name", answers.componentName);

    }
    writing(){
        this.fs.copyTpl(
            this.templatePath('service.java'),
            this.destinationPath(this.answers.serviceName+".java"),
            {'serviceName': this.answers.serviceName}
        );

        this.fs.copyTpl(
            this.templatePath('serviceImpl.java'),
            this.destinationPath(this.answers.serviceName+'Impl.java'),
            {'serviceName': this.answers.serviceName, 'className':this.answers.serviceName+'Impl' }
        );
    }
};

