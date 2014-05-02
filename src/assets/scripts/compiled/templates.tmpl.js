this["JST"] = this["JST"] || {};

this["JST"]["templates/login/LoginTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wrapperFixed wrapper-primaryImage\">\n    <div class=\"frame\">\n        <div class=\"gapTop-primary smallPanel\">\n            <div class=\"well\">\n                <form novalidate=\"novalidate\"  id=\"js-login-form\" class=\"form-horizontal\">\n                    <h2 class=\"hd hd_3 text-center\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"email\" placeholder=\"Email\" name=\"emailAddress\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"password\" placeholder=\"Password\" name=\"password\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <button id=\"js-login-btn\" type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n                    </div>\n                    <p><a href=\"#\" class=\"online-only\">Forgot your password?</a></p>\n                </form>\n            </div>\n            <!-- /well -->\n        </div>\n        <!-- /gapTop-primary -->\n    </div>\n    <!-- /frame -->\n</div>\n<!-- /wrapperBackground -->";
  return buffer;
  });

this["JST"]["templates/topbar/TopNavigationTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"frame frame_header\">\n            <h1 id=\"js-page-title\" class=\"hd-page\"></h1>\n            <a class=\"brand\" href=\"\"><i class=\"icon-logo\">The</i> App</a>\n            <div class=\"nav-collapse collapse\">\n                <div class=\"pull-right\">\n                    <ul class=\"nav pull-right\">\n                        <li>\n                            <span id=\"js-online-status\" class=\"label label-header label-success\">Online</span>\n                        </li>\n                        <li id=\"js-user-dropdown\" class=\"dropdown\">\n                            <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><span id=\"js-user-name\">Welcome</span> <b class=\"caret\"></b></a>\n                            <ul class=\"dropdown-menu\">\n                                <li>\n                                    <a id=\"js-edit-profile-link\" class=\"online-only\" href=\"\"><i  class=\"icon-edit\"></i> Edit Profile</a>\n                                </li>\n                                <li>\n                                    <a id=\"js-user-link\" class=\"online-only\" href=\"\"><i class=\"icon-user\"></i> User Administration</a>\n                                </li>\n                                <li>\n                                    <a id=\"js-dealer-link\" class=\"online-only\" href=\"\"><i class=\"icon-globe\"></i> Partner Management</a>\n                                </li>\n                                <li>\n                                    <a id=\"js-invite-link\" class=\"online-only\" href=\"\"><i class=\"icon-envelope\"></i> Invite User</a>\n                                </li>\n                                <li class=\"divider\"></li>\n                                <li>\n                                    <a id=\"js-log-off\" href=\"\"><i class=\"icon-off\"></i> Sign Out</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <!-- /nav -->\n                </div>\n                <!-- /pull-right -->\n            </div>\n            <!-- /nav-collapse -->\n        </div>\n        <!-- /container -->\n    </div>\n    <!-- /navbar-inner -->\n</div>\n<!-- /navbar -->";
  });