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
                message: "The name of the component",
                default: this.appname // Default to current folder name
            },
            {
                type: "input",
                name: "group",
                message: "The group the component belongs to",
                default: "" // Default to current folder name
            }
        ]);

        //this.log("app name", answers.componentName);

    }
    writing(){
        this.fs.copyTpl(
            this.templatePath('_cq_dialog.xml'),
            this.destinationPath(this.answers.name+'/_cq_dialog/.content.xml'),
            {'componentName': this.answers.name}
        );

        this.fs.copyTpl(
            this.templatePath('renderscript.html'),
            this.destinationPath(this.answers.name+'/'+this.answers.name+'.html'),
            {'componentName': this.answers.name}
        );

        this.fs.copyTpl(
            this.templatePath('.content.xml'),
            this.destinationPath(this.answers.name+'/.content.xml'),
            {'componentName': this.answers.name,'componentGroup': this.answers.group}
        );
    }
};

