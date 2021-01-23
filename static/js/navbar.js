(function () {

  var Navbar = {

    baseApiUrl : getBaseApiUrl(),
    baseUIUrl : getBaseUIUrl(),

    init : function() {

      ///////////////////////////
      // Housekeeping

      // If we are on the articles.html page, make the tables look nice
      if (getUrlPath().endsWith("articles.html")) {
        // Make the tables fancy
        var tableTags = document.getElementsByTagName('table');
        var i;
        for (i = 0; i < tableTags.length; i++) {
          tableTags[i].classList.add('table');
        }
      }

      ///////////////////////////
      // Navbar

      // get current day/season info from API /today
      var seasonsUrl = this.baseApiUrl + '/seasons';
      fetch(seasonsUrl)
      .then(res => res.json())
      .then((seasonsApiResult) => {

        var navbarSeasonDropdown = document.getElementById('navbar-season-dropdown-menu');
        var navbarPostseasonDropdown = document.getElementById('navbar-postseason-dropdown-menu');

        for (var season0 in seasonsApiResult) {
          var sp1 = parseInt(season0) + 1;

          // Populate season drop-down
          var sdropElem = document.createElement('a');
          sdropElem.classList.add('dropdown-item');
          sdropElem.setAttribute('href', baseUIUrl + '/season.html?season=' + season0);
          sdropElem.innerHTML = 'Season ' + sp1;
          navbarSeasonDropdown.appendChild(sdropElem);

          // Populate postseason drop-down
          var pdropElem = document.createElement('a');
          pdropElem.classList.add('dropdown-item');
          pdropElem.setAttribute('href', baseUIUrl + '/postseason.html?season=' + season0);
          pdropElem.innerHTML = 'Season ' + sp1;
          navbarPostseasonDropdown.appendChild(pdropElem);

        }

      })
      .catch(err => {
        console.log(err);
        //this.error(-1);
      }); // end /seeds api call
    },

    /**
     * Register Event
     */
    registerEvent : function (element, event, handler, capture) {
      if (/msie/i.test(navigator.userAgent)) {
        element.attachEvent('on' + event, handler);
      } else {
        element.addEventListener(event, handler, capture);
      }
    },

  };

  Navbar.registerEvent(window, 'load', function () {
    Navbar.init();
  }, false);

}());
