## accounts-dropbox

Dropbox Oauth2 login service for use with Meteor Auth

### Package Dependencies

* accounts-base
* accounts-oauth
* dropbox-oauth

### Usage

1. `meteor add accounts-dropbox`
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithDropbox();`

The redirect URI must be set to '${yoursiteurl}/_oauth/dropbox?'
Note the final question mark.

### Credits

* Shamelessly based on
[@yefim](https://github.com/yefim)'s LinkedIn OAuth2 login service, as well as
the core `accounts-google` and `google` packages.
