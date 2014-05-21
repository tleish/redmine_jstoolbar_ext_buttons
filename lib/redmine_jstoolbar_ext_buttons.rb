class RedmineJstoolbarExtButtonsHookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "redmine_jstoolbar_ext_buttons/redmine_jstoolbar_ext_buttons_partial"
end