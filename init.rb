# encoding: utf-8
require_dependency 'redmine_jstoolbar_ext_buttons'

Redmine::Plugin.register :redmine_jstoolbar_ext_buttons do
  name 'Redmine jsToolbar Buttons Extension'
  author 'Thomas Leishman'
  description 'The Redmine JS Toolbar Buttons Extension adds an image attachments submenu to the jsToolbar.'
  version '0.2.1'
  url 'https://github.com/tleish'
  author_url 'https://github.com/tleish'
  requires_redmine_plugin :redmine_jstoolbar_ext, :version_or_higher => '0.1.0'
end
