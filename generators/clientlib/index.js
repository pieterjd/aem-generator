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
                name: "name",
                message: "The name of the clientlib",
                default: this.appname // Default to current folder name
            },
            {
                type: "input",
                name: "categories",
                message: "The categories of the clientlib, separated by commas"
            },
            {
                type: "input",
                name: "dependencies",
                message: "The dependencies of the clientlib, separated by commas"
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
            this.templatePath('.content.xml'),
            this.destinationPath(this.answers.name+'/.content.xml'),
            {
                'clientlibName': this.answers.name,
                'dependencies': this.answers.dependencies,
                'categories': this.answers.categories
            }
        );
        this.fs.copy(
            this.templatePath('js.txt'),
            this.destinationPath(this.answers.name+'/js.txt')
        );
        this.fs.copyTpl(
            this.templatePath('js/hello.js'),
            this.destinationPath(this.answers.name+'/js/hello.js'),
            {
                'clientlibName': this.answers.name
            }
        );
    }
};

