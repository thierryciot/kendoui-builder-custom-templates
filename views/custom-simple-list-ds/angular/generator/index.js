(function (module) {
    'use strict';

    // Only for KUIB V3:
    // we have config metadata for each data provider.  for every DS KUIB generates config.
    // For each DS KUIB creates a service with this config.
    // The service is kept $ds
    // The way to access the configured rest fields is to access the meta file using node js APIs for path and fs (code needs to be synchronous)
    class Generator {
        // can use augment model too.
        /*
         * Adds or removes properties from a meta model
         * @param {object} metaModel - The metaModel being processed, this could be either view or ui component.
         * @param {string} metaPath - The path to the folder containing the meta information for the application.
         */
        augmentModel(metaModel, metaPath) {
            var myList =
                [ { 'id': 1, 'name': 'test 1 (sample data from index.js augmentModel)' }
                    , { 'id': 2, 'name': 'test 2' }
                ];

            metaModel.myList4 = myList;
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