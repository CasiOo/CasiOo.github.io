System.register(['normalize.css', 'bootstrap', 'bootstrap/css/bootstrap.css!', 'google/material-design-lite'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_normalizeCss) {}, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}, function (_googleMaterialDesignLite) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Quiz - jstogether';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: false }, { route: ['quiz'], name: 'quiz', moduleId: 'components/quiz/quiz', nav: false }, { route: ['result'], name: 'result', moduleId: 'components/result/result', nav: false }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFLYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQ3RGLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUMvRSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FDckYsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBVlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAuY3NzISc7XHJcbmltcG9ydCAnZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1saXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XHJcbiAgICBjb25maWcudGl0bGUgPSAnUXVpeiAtIGpzdG9nZXRoZXInO1xyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2NvbXBvbmVudHMvaG9tZS9ob21lJywgbmF2OiBmYWxzZSB9LFxyXG5cdCAgeyByb3V0ZTogWydxdWl6J10sIG5hbWU6ICdxdWl6JywgbW9kdWxlSWQ6ICdjb21wb25lbnRzL3F1aXovcXVpeicsIG5hdjogZmFsc2UgfSxcclxuXHQgIHsgcm91dGU6IFsncmVzdWx0J10sIG5hbWU6ICdyZXN1bHQnLCBtb2R1bGVJZDogJ2NvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdCcsIG5hdjogZmFsc2UgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9