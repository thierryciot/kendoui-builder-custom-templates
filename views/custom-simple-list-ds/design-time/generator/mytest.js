(function(module) {
    'use strict';

    // This class is for been able to invoke the augmentModel function from index.js and debug it from VSC
    class MyTest {
        constructor() {
           this.test();
        }

        test() {
            // copied from meta data definition for the view C:\dev2\apps\TestCustomViews-KUIBV3\meta\modules\CustomViews.json
            // we want to find the name of the data source to use in dataprovider metadata and retrieve field definition from there.
            // (IoT.json)
            const metaModel =
                {
                    "authorization": {
                        "allowedRoles": []
                    },
                    "dataProvider": "IoT",
                    "dataSource": "Buildings",
                    "events": {
                        "hideEventHandler": "onHide",
                        "initEventHandler": "onInit",
                        "showEventHandler": "onShow"
                    },
                    "label": "Simple List DS",
                    "name": "SimpleListDS",
                    "schemaVersion": "1.0",
                    "title": "List",
                    "type": "view",
                    "uniqueID": "d730bc8b-bb54-4d27-b001-1bb9b99f3b03",
                    "viewType": "custom-simple-list-ds"
                };

            const kuib = require('./index');

            kuib.augmentModel(metaModel);

            // assert things on updated metaModel
            // TBD
            console.log(`${metaModel.fields.length}`)
        }
    }

    module.exports = new MyTest();
})(module);
