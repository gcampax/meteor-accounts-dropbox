Accounts.oauth.registerService('dropbox');

if (Meteor.isClient) {
    Meteor.loginWithDropbox = function(options, callback) {
        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        DropboxOAuth.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.dropbox'],
        forOtherUsers: ['services.dropbox.id']
    });
}
