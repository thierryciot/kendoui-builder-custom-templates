(function (module) {
    'use strict';

    class Generator {
        // can use augment model too.

        getTranslation(view)
        {
            // provide default values for properties
            const translation = {
                label: view.label || view.name,
                title: view.title
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