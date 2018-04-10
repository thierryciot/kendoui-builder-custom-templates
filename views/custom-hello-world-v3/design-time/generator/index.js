(function(module) {
    'use strict';
    // Right now there is no direct access to the generator output.
    // console.log("Trace: in design time generator" );

    module.exports = {
        augmentModel: function(inMemoryMetaModel, metafolderPath) {
            // There is only one entry point for extension
            // you can add prop to model
            // change a prop
            // delete a prop
            // inMemoryMetaModel.generatedAt = new Date();
            const myDate = new Date();
            inMemoryMetaModel.generatedAt = myDate;
            console.log("Trace: in design time generator: inMemoryMetaModel.generatedAt: " + inMemoryMetaModel.generatedAt);
            console.log("Trace: in design time generator: inMemoryMetaModel.greeting: " + inMemoryMetaModel.greeting);
            // try {
            // }
            // catch ( e ) {
            //     console.log("ERROR in augmentModel" + e );
            // }
        }
    };
})(module);
