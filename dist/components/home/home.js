System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
    'use strict';

    var inject, Router, Home;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            Home = (function () {
                function Home(router) {
                    _classCallCheck(this, _Home);

                    this.router = router;
                }

                _createClass(Home, [{
                    key: 'startGame',
                    value: function startGame() {
                        this.router.navigate('quiz');
                    }
                }]);

                var _Home = Home;
                Home = inject(Router)(Home) || Home;
                return Home;
            })();

            _export('Home', Home);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3QkFJYSxJQUFJOzs7Ozs7Ozt1Q0FKVCxNQUFNOztvQ0FDTixNQUFNOzs7QUFHRCxnQkFBSTtBQUVGLHlCQUZGLElBQUksQ0FFRCxNQUFNLEVBQUU7OztBQUNoQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7aUJBQ3hCOzs2QkFKUSxJQUFJOzsyQkFNSixxQkFBRztBQUNSLDRCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDaEM7Ozs0QkFSUSxJQUFJO0FBQUosb0JBQUksR0FEaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNGLElBQUksS0FBSixJQUFJO3VCQUFKLElBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuQGluamVjdChSb3V0ZXIpXHJcbmV4cG9ydCBjbGFzcyBIb21lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdxdWl6Jyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=