(function(module) {
    'use strict';

    class Generator {
        constructor(mb, pretty) {
            this.pretty = pretty;
        }

        /*
         * Adds or removes properties from a meta model
         * @param {object} metaModel - The metaModel being processed, this could be either view or ui component.
         * @param {string} metaPath - The path to the folder containing the meta information for the application.
         */
        augmentModel(metaModel, metaPath) {
            // We augment an existing property
            metaModel.greeting = '<i class="fa fa-globe"></i>&nbsp;' + metaModel.greeting;
            console.log("Trace: in AngularJS generator: metaModel.greeting: " + metaModel.generatedAt);

            // We add an additional property.
            metaModel.generatedAt = new Date().toLocaleDateString("en-US");
            console.log("Trace: in AngularJS generator: metaModel.generatedAt: " + metaModel.generatedAt);
        }

        getTranslation(view)
        {
            // provide default values for properties
            const translation = {
                label: view.label || view.name,
                title: view.title,
                greeting: view.greeting
            };

            return translation;
        }
    }

    module.exports = (mb, pretty) => {
        return new Generator(mb, pretty);
    };

    console.log("Trace: in runtime generator" );
})(module);
