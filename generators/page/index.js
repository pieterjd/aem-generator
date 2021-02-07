var Generator = require('yeoman-generator');

module.exports = class GeneratorAem extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
      this.argument("title",{type: String, required: true});
      this.argument("template",{type: String, required: true});
      this.argument("component",{type: String, required: true});
    }

    writing(){
      let folder = this.options.title.trim().replace(" ","").toLowerCase();
        this.fs.copyTpl(
            this.templatePath('.content.xml'),
            this.destinationPath(folder+'/.content.xml'),
            {'component': this.options.component,'title': this.options.title,'template': this.options.template}
        );
    }
};

