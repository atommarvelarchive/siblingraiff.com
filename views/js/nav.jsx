/** @jsx React.DOM */

var navbar = React.createClass({
  render: function() {
    return (    
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="/">atommarvel</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li><a href="/"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>    
    );
  }
});

React.renderComponent(
  <navbar />,
  document.getElementById('navbar')
);
