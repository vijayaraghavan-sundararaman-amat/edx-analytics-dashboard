require('sass/style-application.scss');
require('sass/themes/open-edx.scss');

require([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap-sass',
    'bootstrap-accessibility-plugin',
    'vendor/domReady',
    'load/init-page',
    'js/application-main'
], function() {
    'use strict';
});
