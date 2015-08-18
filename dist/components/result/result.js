System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
    'use strict';

    var inject, Router, Result;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            Result = (function () {
                function Result(router) {
                    _classCallCheck(this, _Result);

                    this.router = router;
                }

                var _Result = Result;
                Result = inject(Router)(Result) || Result;
                return Result;
            })();

            _export('Result', Result);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzdWx0L3Jlc3VsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBSWEsTUFBTTs7Ozs7O3VDQUpYLE1BQU07O29DQUNOLE1BQU07OztBQUdELGtCQUFNO0FBRUoseUJBRkYsTUFBTSxDQUVILE1BQU0sRUFBRTs7O0FBQ2hCLHdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztpQkFDeEI7OzhCQUpRLE1BQU07QUFBTixzQkFBTSxHQURsQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsTUFBTSxLQUFOLE1BQU07dUJBQU4sTUFBTSIsImZpbGUiOiJjb21wb25lbnRzL3Jlc3VsdC9yZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuQGluamVjdChSb3V0ZXIpXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==