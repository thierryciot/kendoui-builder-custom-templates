(function (module) {
    'use strict';

    class Generator {
        augmentModel(metaModel, metaPath) {
            // We augment an existing property
            metaModel.greeting = '<i style="color: blue;" class="fa fa-globe"></i>&nbsp;' + metaModel.greeting;
            console.log("Trace: in angular generator: metaModel.greeting: " + metaModel.generatedAt);

            // We add an additional property.
            metaModel.generatedAt = new Date().toLocaleDateString("en-US");
            console.log("Trace: in angular generator: metaModel.generatedAt: " + metaModel.generatedAt);
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

        getViewChildComponents(view) {
        }

        extendViewContext(context) {
        }
    }

    module.exports = () => {
        return new Generator();
    };
})(module);