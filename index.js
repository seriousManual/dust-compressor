module.exports.install = function(dust) {
    var subsequentFormatCall = false;

    dust.optimizers.format = function(ctx, node) {
        if(!subsequentFormatCall) {
            subsequentFormatCall = true;

            return ['buffer', '\n'];
        }

        return null;
    };

    dust.optimizers.buffer = function(ctx, node) {
        subsequentFormatCall = false;

        node[1] = node[1].replace(/[ \t]+/g, ' ');

        return node;
    };
};