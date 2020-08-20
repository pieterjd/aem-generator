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
                name: "file",
                message: "Name of the logfile without the .log extension",
            },
            {
                type: "list",
                name: "loglevel",
                message: "Loglevel?",
                choices: ['INFO','DEBUG','TRACE'],
                default: 'INFO'// Default to current folder name
            },
            {
                type: "input",
                name: "name",
                message: "Package of the classes to log, eg. com.adobe.aem.guides.wknd"
            }
        ]);

        //this.log("app name", answers.componentName);

    }
    writing(){
        this.fs.copyTpl(
            this.templatePath('logconfig.xml'),
            this.destinationPath(`org.apache.sling.commons.log.LogManager.factory.config-${this.answers.file}.xml`),
            {
                'file': this.answers.file,
                'loglevel': this.answers.loglevel,
                'name': this.answers.name
            }
        );
    }
};

