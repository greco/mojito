/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('GenURLMojit', function(Y) {
  Y.mojito.controller = {
    init: function(config) {
      this.config = config;
    },
    index: function(actionContext) {
      var url = actionContext.url.make('mymojit', 'contactus', '');
      actionContext.done({contactus_url: url});
    },
    contactus: function(actionContext) {
      var currentTime = actionContext.intl.formatDate(new Date());
      actionContext.done({currentTime: currentTime});
    }
  };
}, '0.0.1', {requires: ['mojito-intl-addon']});
