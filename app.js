// Simple client-side routing shell for Job Notification Tracker
// Routes: /, /dashboard, /saved, /digest, /settings, /proof

(function () {
  var ROUTES = {
    "/": { name: "Dashboard" },
    "/dashboard": { name: "Dashboard" },
    "/saved": { name: "Saved" },
    "/digest": { name: "Digest" },
    "/settings": { name: "Settings" },
    "/proof": { name: "Proof" },
  };

  var nav = document.querySelector(".kpb-nav");
  var navLinks = document.querySelectorAll(".kpb-nav__link");
  var toggle = document.querySelector(".kpb-nav__toggle");
  var titleEl = document.querySelector(".kpb-context__title");
  var subtitleEl = document.querySelector(".kpb-context__subtitle");

  function getRouteConfig(path) {
    if (ROUTES[path]) return ROUTES[path];
    return ROUTES["/dashboard"];
  }

  function setActiveLink(path) {
    var canonical =
      path === "/" || path === "/dashboard" ? "/dashboard" : path;

    navLinks.forEach(function (link) {
      var route = link.getAttribute("data-route");
      if (route === canonical) {
        link.classList.add("kpb-nav__link--active");
      } else {
        link.classList.remove("kpb-nav__link--active");
      }
    });
  }

  function render(path) {
    var config = getRouteConfig(path);

    if (titleEl) {
      titleEl.textContent = config.name;
    }
    if (subtitleEl) {
      subtitleEl.textContent = "This section will be built in the next step.";
    }

    setActiveLink(path);
  }

  function navigate(path, options) {
    if (options && options.push && window.history && window.history.pushState) {
      window.history.pushState({ path: path }, "", path);
    }
    render(path);
  }

  // Handle nav clicks
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetPath = link.getAttribute("data-route");
      navigate(targetPath, { push: true });

      if (nav && nav.classList.contains("kpb-nav--open")) {
        nav.classList.remove("kpb-nav--open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Handle hamburger toggle on mobile
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("kpb-nav--open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Handle browser navigation
  window.addEventListener("popstate", function (event) {
    var path =
      (event.state && event.state.path) || window.location.pathname || "/";
    render(path);
  });

  // Initial render
  document.addEventListener("DOMContentLoaded", function () {
    var initialPath = window.location.pathname || "/";
    render(initialPath);
  });
})();

