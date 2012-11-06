# Chrome Devtools Cheatsheet

## Command Line API

**$$** - Returns an array of elements that match the given CSS selector.

**$0** - The currently-selected object in the inspector.

**$1** - The previously-selected object in the inspector.

**$n(index)** - Access to an array of last 5 inspected elements.

**dir(object)** - Prints an interactive listing of all properties of the object. This looks identical to the view that you would see in the DOM tab.

**dirxml(node)** - Prints the XML source tree of an HTML or XML element. This looks identical to the view that you would see in the HTML tab. You can click on any node to inspect it in the HTML tab.

**cd(window)** - By default, command line expressions are relative to the top-level window of the page. cd() allows you to use the window of a frame in the page instead.

**clear()** - Clears the console.

**inspect(object[, tabName])** - Inspects an object in the most suitable tab, or the tab identified by the optional argument tabName.

**keys(object)** - Returns an array containing the names of all properties of the object.

**values(object)** - Returns an array containing the values of all properties of the object.

**debug(fn)** - Adds a breakpoint on the first line of a function.

**undebug(fn)** - Removes the breakpoint on the first line of a function.

**monitor(fn)** - Turns on logging for all calls to a function.

**unmonitor(fn)** - Turns off logging for all calls to a function.

**monitorEvents(object[, types])** - Turns on logging for all events dispatched to an object. The optional argument types may specify a specific family of events to log. The most commonly used values for types are "mouse" and "key".
The full list of available types includes "composition", "contextmenu", "drag", "focus", "form", "key", "load", "mouse", "mutation", "paint", "scroll", "text", "ui", and "xul".

**unmonitorEvents(object[, types])** - Turns off logging for all events dispatched to an object.

**profile([title])** - Turns on the JavaScript profiler. The optional argument title would contain the text to be printed in the header of the profile report.

**profileEnd()** - Turns off the JavaScript profiler and prints its report.


## Console API

**console.assert(expression[, object, ...])** - Tests that an expression is true. If not, it will write a message to the console and throw an exception.

**console.clear()** - Clears the console.

**console.constructor()** -

**console.count([title])** - Writes the number of times that the line of code where count was called was executed. The optional argument title will print a message in addition to the number of the count.

**console.copy()** - Copies everything passed to it.

**console.debug(object[, object, ...])** - Writes a message to the console, including a hyperlink to the line where it was called.

**console.dir(object)** - Prints an interactive listing of all properties of the object. This looks identical to the view that you would see in the DOM tab.

**console.dirxml(node)** - Prints the XML source tree of an HTML or XML element. This looks identical to the view that you would see in the HTML tab. You can click on any node to inspect it in the HTML tab.

**console.error(object[, object, ...])** - Writes a message to the console with the visual "error" icon and color coding and a hyperlink to the line where it was called.

**console.exception(error-object[, object, ...])** - Prints an error message together with an interactive stack trace of JavaScript execution at the point where the exception occurred.

**console.group(object[, object, ...])** - Writes a message to the console and opens a nested block to indent all future messages sent to the console. Call console.groupEnd() to close the block.

**console.groupCollapsed(object[, object, ...])** - Like console.group(), but the block is initially collapsed.

**console.groupEnd()** - Closes the most recently opened block created by a call to console.group() or console.groupCollapsed().

**console.hasOwnProperty()** -

**console.info(object[, object, ...])** - Writes a message to the console with the visual "info" icon and color coding and a hyperlink to the line where it was called.

**console.isPrototypeOf()** -

**console.keys()** - Gives you the names of all the elements of an object

**console.log(object[, object, ...])** - Writes a message to the console. You may pass as many arguments as you'd like, and they will be joined together in a space-delimited line.

**console.markTimeLine()** - Replaced by timeStamp().

**console.memory()** -

**console.performance()** -

**console.performance.timing()** -

**console.performance.memory()** -

**console.performance.navigation()** -

**console.profile([title])** - Turns on the JavaScript profiler. The optional argument title would contain the text to be printed in the header of the profile report.

**console.profileEnd()** - Turns off the JavaScript profiler and prints its report.

**console.profiles()** - An array of profile objects that summarizes the data from profile()

**console.propertyIsEnumerable()** -

**console.table(data[, columns])** - Allows to log provided data using tabular layout. The method takes one required parameter that represents table like data (array of arrays or list of objects).

**console.time([name])** - Creates a new timer under the given name. Call console.timeEnd(name) with the same name to stop the timer and print the time elapsed..

**console.endTime()** - Stops a timer created by a call to console.time(name) and writes the time elapsed.

**console.timeStamp()** -

**console.toLocaleString()** -

**console.toString()** -

**console.trace()** - Prints an interactive stack trace of JavaScript execution at the point where it is called.

**console.valueOf()** -

**console.values()** - Gives you all the values of those elements

**console.warn(object[, object, ...])** - Writes a message to the console with the visual "warning" icon and color coding and a hyperlink to the line where it was called.

**window.onerror** -


## Other Cool Stuff

**XMLHTTPRequest logging** - Right click on console and select to turn on so you can view the XHR log

**Preserve Log** -

[JavaScript Console Power User](http://www.youtube.com/watch?v=4mf_yNLlgic)

[Chrome Devtools](http://code.google.com/chrome/devtools/)

[Chrome Shortcuts](http://www.google.com/support/chrome/bin/static.py?page=guide.cs&guide=25799&topic=28650&)

## Other Commands

**Chrome disable-javascript** - Disable JavaScript from command line

**-disable-images** - Disable images

**-disable-java** - Disable Java

**-disable-plugins** - Disable plugins

**-disable-popup-blocking** - Disable popup blocking

**-start-maximized** - Start Chrome fullscreen



**For example:**
"C:\Documents and Settings\%username%\Local Settings\Application Data\Google\Chrome" -disable-javascript


## Shortcuts to open Google Chrome features

**Ctrl + Shift + C** - Open developer tools with Inspect Element mode on

**Ctrl + Shift + J** - Launch the JS debugger

**Ctrl + Shift + N** - Open a new window in incognito mode

**Ctrl + B** - Toggle bookmarks bar on and off

**Ctrl + H** - View the History page

**Ctrl + J** - View the Downloads page

**Shift + Esc** - View the Task manager

**Backspace, Alt + ←** - Go to the previous page in your browsing history for the tab

**Shift + Backspace, Alt + →** - Go to the next page in your browsing history for the tab

**Ctrl + K, Ctrl + E** - Places a '?' in the address bar. Type a search term after the '?' to perform a search using your default search engine.

**F6, Ctrl + L, Alt + D** - Highlight content in the web address area


## about:pages

**about:about** - Displays all the chrome://chrome-urls

**about:stats** - Display page statistics

**about:memory** - Display memory usage in a multi-process browser

**about:plugins** - Display installed plug-ins

**about:histograms** - Display connection times

**about:dns** - Display DNS information

**about:cache** - Display cached web pages

**about:network** - Display a menu for various network monitoring and testing

**view-cache:stats** - Display cached documents

**chrome-resource:/favicon/** - Display the binary data for a PNG file

**chrome-resource:/new-tab/** - A template for the empty tab page

**about:version** - Display information about the browser


## Chrome URLs

**chrome://chrome-urls** == about:about

**chrome://appcache-internals** -

**chrome://blob-internals** -

**chrome://bookmarks** -

**chrome://cache** -

**chrome://crashes** -

**chrome://credits** -

**chrome://dns** -

**chrome://downloads** -

**chrome://extensions** -

**chrome://flags** -

**chrome://flash** -

**chrome://gpu-internals** -

**chrome://histograms** -

**chrome://history** -

**chrome://ipc** -

**chrome://media-internals** -

**chrome://memory** -

**chrome://net-internals** -

**chrome://view-http-cache** -

**chrome://newtab** -

**chrome://plugins** -

**chrome://print** -

**chrome://quota-internals** -

**chrome://sessions** - Information about current sessions and magic lists

**chrome://settings** -

**chrome://stats** -

**chrome://sync-internals** -

**chrome://tcmalloc** -

**chrome://terms** -

**chrome://tracing** -

**chrome://version** -

**chrome://workers** - This panel shows information about HTML5 shared web workers.

**chrome://conflicts** -


### For Debug

The following pages are for debugging purposes only. Because they crash or hang the renderer, they're not linked directly; you can type them into the address bar if you need them.

**chrome://crash/** -

**chrome://kill/** -

**chrome://hang/** -

**chrome://shorthang/** -

**chrome://gpuclean** -

**chrome://gpucrash** -

**chrome://gpuhang** -
