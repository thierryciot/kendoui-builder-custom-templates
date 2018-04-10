(function(module) {
    'use strict';
    // Right now there is no direct access to the generator output.
    // However, if you start KUIB from the command line, you will be able to see console messages.
    // console.log("Trace: in design time generator" );

    module.exports = {
        augmentModel: function(inMemoryMetaModel, metafolderPath) {
            // Greeting is defined as it comes from meta\modules\myModuleName.json
            console.log("Trace: in design time generator: inMemoryMetaModel.greeting: " + inMemoryMetaModel.greeting);
            // version comes from options is not yet defined
            console.log("Trace: in design time generator: inMemoryMetaModel.version: " + inMemoryMetaModel.version);

            // now we add an additional property.
            inMemoryMetaModel.generatedAt = new Date().toLocaleDateString("en-US");
            console.log("Trace: in design time generator: inMemoryMetaModel.generatedAt: " + inMemoryMetaModel.generatedAt);
        }
    };
})(module);
