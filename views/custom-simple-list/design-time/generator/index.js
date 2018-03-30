(function(module) {
    'use strict';
    console.log("Trace: in design time generator" );

    module.exports = {
        // Note: when changing this, need to restart kuib as it appears results are cached.
        augmentModel: function(metaModel) {
            const sampleData =
                [ { 'id': 1, 'name': 'Sample data test 1 (from augmentModel)' }
                , { 'id': 2, 'name': 'Sample data test 2' }
                ];
            metaModel.sampleData = sampleData;
            // try {
            // }
            // catch ( e ) {
            //     console.log("ERROR in augmentModel" + e );
            // }
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
