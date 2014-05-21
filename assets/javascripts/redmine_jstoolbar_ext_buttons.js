(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;

  var web_root = RedmineWikiToolbarExt.Paths.web_root();

  var buttons = [
    // Horizontal Rule
    {
      title: 'Horizontal Rule', after: 'h3',
      fn: { wiki: function () {
        this.encloseLineSelection('\n---\n', '', function (str) {
          if (str.length > 0) str += '\n';
          return str;
        });
      }}
    },

    // Ruby
    {
      title: 'Ruby', after: 'pre',
      fn: { wiki: function () {
        this.encloseLineSelection('<pre><code class="ruby">\n', '\n</code></pre>')
      }}
    },

    // Javascript
    {
      title: 'Javascript', after: 'ruby',
      fn: { wiki: function () {
        this.encloseLineSelection('<pre><code class="javascript">\n', '\n</code></pre>')
      } }
    },

    // Link Title
    {
      title: 'Link Title', after: 'link',
      fn: { wiki: function (event) {
        var link_title = {
          textile: {beg: '"Link Title":', end: ''},
          markdown: {beg: '[Link Title](', end: ')'}
        };
        var type = RedmineWikiToolbarExt.Markup.type();
        this.encloseSelection(link_title[type].beg, link_title[type].end, function (str) {
          if (str.length == 0) str = 'link';
          return str;
        })
      }}
    },

    // Textile Quick Reference
    {
      title: 'Textile Quick Reference', after: 'help',
      fn: { wiki: function () {
        window.open(web_root + 'redmine_jstoolbar_ext_buttons/help/textile_quick.html', '', 'resizable=yes, location=no, width=500, height=640, menubar=no, status=no, scrollbars=yes')
      }}
    }
  ];

  /**
   * Draw to page
   */
  RedmineWikiToolbarExt.ToolbarElements.add(buttons);
}());