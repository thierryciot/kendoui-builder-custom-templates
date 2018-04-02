(function(module) {
    'use strict';

    module.exports = {
        // Note: when changing this, need to restart kuib as it appears results are cached.
        augmentModel: function(metaModel) {
            const sampleData =
                [ { 'id': 1, 'name': 'Sample data test 1 (from augmentModel)' }
                , { 'id': 2, 'name': 'Sample data test 2' }
                ];
            // Only for KUIB V3:
            // we have config metadata for each data provider.  for every DS KUIB generates config.
            // For each DS KUIB creates a service with this config.
            // The service is kept $ds
            // const columns = getColumnsFromDataSource(metaModel);
            metaModel.sampleData = sampleData;
        }
        // ,
        // getTranslation: function(view) {
        //     try {
        //         console.log( `* In getTranslation for ${view.label}`);
        //     }
        //     catch ( e ) {
        //         console.log("ERROR in getTranslation" + e );
        //     }
        // }
    };
})(module);
