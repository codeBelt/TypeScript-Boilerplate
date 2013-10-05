 How the Build Process Works
==================================================================
    The build process is centered around use of the `grunt` task runner (http://gruntjs.com).
    If you don't currently have grunt installed, refer to the section `Installing grunt`
    
    The tasks that grunt runs is specified in /_build/Gruntfile.js. You can easily add additional tasks specific to your project by editing this file.

==================================================================
 How to Perform a Build
==================================================================

    1. Change to the /_build directory (where Gruntfile.js is located)
    2. On the command line, run the following command: grunt dev

==================================================================
 Installing grunt
==================================================================

    1. Install Node.js (This is required in order to run grunt).
       * Download and install node.js from http://nodejs.org
       
    2. Install grunt command line interface (CLI)
       * On the command line, run the following command: npm install grunt-cli -g

    3. Install grunt packages
       * Change to the /_build directory (where package.json is located)
       * On the command line, run the following command: npm install
       * It take several minutes to completely download the dependencies. 
       * If this works successfully, a /_build/node_modules directory will be created. These files do not need to be redistributed.

   If you have issues installing, please see the following tutorials:
       * http://www.codebelt.com/javascript/install-grunt-js-on-windows/
       * http://www.codebelt.com/javascript/install-grunt-js-on-a-mac/