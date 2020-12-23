# golly-pelican-theme

Pelican theme for the the Golly website.

The Pelican theme consists of all elements of the UI that are common to
all pages of the Golly UI.

## Installation

To install the theme:

```
git clone <this repo>

# If theme is not installed, install it
pelican-themes -i golly-pelican-theme

# If theme is installed, update it
pelican-themes -U golly-pelican-theme
```

## Usage

To use this Pelican theme, set the theme to `golly-pelican-theme`
in `pelican.conf`.

```
THEME = 'golly-pelican-theme'
```

## Files

To customize the navbar, edit the file `templates/_includes/navbar.html`.


## Templates

### Minilife

minilife is a small Game of Life player that can be embedded on pages.
There are a few different ways to use it.

**To use the minilife template on a Pelican page:**

First include the JS needed to run minilife:

```
{% block javascript %}
<script type="text/javascript" src="{{ SITEURL }}/theme/js/json-sans-eval.js"></script>
<script type="text/javascript" src="{{ SITEURL }}/theme/js/minilife_core.js"></script>
<script type="text/javascript" src="{{ SITEURL }}/theme/js/minilife.js"></script>
{% endblock %}
```

Now include the minilife template using Jinja include:

```
{% include "minilife.html" %}
```

This will automatically load the minilife player.

Note that this method is only used for convenience.
In practice the miniplayer is only included on the
landing page, which uses the below approach.

**To include the minilife template by hand:**

The landing page of Golly needs to include the minilife
player on the page, but only sometimes. The landing page
defines a `<template></template>` tag set that contains this:

```
<template>
  {% include "minilife.html" %}
</template>
```

Javascript is used to dynamically add a `<script>` tag to
load `minilife_core.js`. This forces `MiniGOL.init()` to be
called manually, hence the split into the two files
`minilife.js` and `minilife_core.js`.

Here is how to do that in JS:

```js
// Create script tag
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', this.baseUrl + '/theme/js/' + jsfiles[j]);

// Append to body
body.append(script);

// Once the script has finished loading,
// manually initialize the minilife GOL.
script.onload = () => {
  MiniGOL.init();
}
```

