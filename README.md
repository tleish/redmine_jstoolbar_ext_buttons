# Redmine jsToolbar Buttons Extension

## Summary

The Redmine jsToolbar Buttons Extension adds some additional buttons to the [Redmine](http://www.redmine.org/) wiki and text editor toolbar.  

## Requirements

This plugin requires the [Redmine jsToolbar Ext plugin](https://github.com/tleish/redmine_jstoolbar_ext) to also be installed.

## Buttons
These buttons are for convenience for inserting text.
* Insert Horizontal Rule
* Insert Link Title
* Insert Ruby Syntax Formatting
* Insert Javascript Syntax Formatting
* Textile Quick Reference

![Buttons](https://raw.githubusercontent.com/tleish/redmine_jstoolbar_ext_buttons/master/assets/images/screenshot.png)

### Button Customization
To add/remove your own buttons to the list, update the following files:
 
* plugins/redmine_jstoolbar_ext_buttons/assets/javascripts/redmine_jstoolbar_ext_buttons.js.
* plugins/redmine_jstoolbar_ext_buttons/assets/stylesheets/redmine_jstoolbar_ext_stylesheets.js.

```javascript
{
  title: 'My Button Title',
  after: 'h3', // element to place button after, in this particular case after the button with the class name '.jstb_h3'
  fn: {
    wiki: function () {
      this.encloseLineSelection('\n---\n', '', function (str) {
        if (str.length > 0) { str += '\n'; }
        return str;
      });
    }
  }
},
```

For other wiki function examples, look at the source code for the jsToolbar in the [Redmine Github Repository](https://github.com/redmine/redmine/):

* [textile.js](https://github.com/redmine/redmine/blob/master/public/javascripts/jstoolbar/textile.js "Textile")
* [markdown.js](https://github.com/redmine/redmine/blob/master/public/javascripts/jstoolbar/markdown.js "Textile")

## Installation
```
$ cd redmine/plugins
$ git clone https://github.com/tleish/redmine_jstoolbar_ext
$ git clone https://github.com/tleish/redmine_jstoolbar_ext_buttons
```

restart Redmine

## See Also:

* [Redmine jsToolbar Images Extension](https://github.com/tleish/redmine_jstoolbar_ext_images)
* [Redmine jsToolbar CodeRay Extension](https://github.com/tleish/redmine_jstoolbar_ext_coderay)