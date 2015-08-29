System.register(['normalize.css', 'dogfalo/materialize'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_normalizeCss) {}, function (_dogfaloMaterialize) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Vote - jstogether';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: false }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFNYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQ3BGLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVJVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1NTIGNhbiBiZSBpbXBvcnRlZCAodGhyb3VnaCBBdXJlbGlhIHJlcXVpcmUpIHRocm91Z2ggSFRNTCwgYnV0IHdlIGNob29zZSB0byBpbXBvcnQgdGhlbSBoZXJlXHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbi8vaW1wb3J0ICdib290c3RyYXAnO1xyXG4vL2ltcG9ydCAnYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzISc7XHJcbmltcG9ydCAnZG9nZmFsby9tYXRlcmlhbGl6ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ1ZvdGUgLSBqc3RvZ2V0aGVyJztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICdob21lJ10sIG5hbWU6ICdob21lJywgbW9kdWxlSWQ6ICdjb21wb25lbnRzL2hvbWUvaG9tZScsIG5hdjogZmFsc2UgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9