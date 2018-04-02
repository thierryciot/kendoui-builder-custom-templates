(function(module) {
    'use strict';
    const path = require('path');
    module.exports = {
        // Note: when changing this, need to restart kuib as it appears results are cached.
        augmentModel: function(metaModel) {

            // We add the data source fields to the metamodel so they can be used in templates

            const fs = require('fs');
            const pathToDataProviderFile = path.join(__dirname,'..','..','..','..','..',`./meta/dataProviders/${metaModel.dataProvider}.json`);

            // For troubleshooting/debugging -> used it to output value in template
            metaModel.dirName = __dirname;
            metaModel.dirName2 = pathToDataProviderFile;

            const contents = fs.readFileSync(pathToDataProviderFile);
            const dataProvider = JSON.parse(contents);
            const dataSource = dataProvider.children.find(dataSource => dataSource.name === metaModel.dataSource);
            metaModel.myDataSrcFields = dataSource['fields']; // We give it a very unique name so that it's easy to find in code

            const sampleData =
                [ { 'id': 1, 'name': 'Sample data test 1 (from augmentModel)' }
                , { 'id': 2, 'name': 'Sample data test 2' }
                ];
            metaModel.sampleData = sampleData;
            metaModel.myRestFields = ["field1", "field2"];
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
