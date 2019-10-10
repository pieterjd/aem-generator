var Generator = require('yeoman-generator');

module.exports = class GeneratorAem extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
    }



    async prompting(){
        this.answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "The name of the component",
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
            this.templatePath('_cq_dialog.xml'),
            this.destinationPath('_cq_dialog.xml'),
            {'componentName': this.answers.name}
        );

        this.fs.copyTpl(
            this.templatePath('renderscript.html'),
            this.destinationPath(this.answers.name+'.html'),
            {'componentName': this.answers.name}
        );
    }
};

