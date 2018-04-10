(function (module) {
    'use strict';

    class Generator {
        augmentModel(metaModel, metaPath) {
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