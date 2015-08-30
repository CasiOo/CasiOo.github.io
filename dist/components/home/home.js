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
                    this.party1Id = 1;
                    this.party2Id = 2;
                }

                _createClass(Home, [{
                    key: 'attached',
                    value: function attached() {}
                }, {
                    key: 'onResetClick',
                    value: function onResetClick() {
                        indexedDB.deleteDatabase('ElectionDatabase');
                        location.reload();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3QkFJYSxJQUFJOzs7Ozs7Ozt1Q0FKVCxNQUFNOztvQ0FDTixNQUFNOzs7QUFHRCxnQkFBSTtBQUVGLHlCQUZGLElBQUksQ0FFRCxNQUFNLEVBQUU7OztBQUNoQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLHdCQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztpQkFDckI7OzZCQU5RLElBQUk7OzJCQVFMLG9CQUFHLEVBRVY7OzsyQkFFVyx3QkFBRztBQUNYLGlDQUFTLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDN0MsZ0NBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDckI7Ozs0QkFmUSxJQUFJO0FBQUosb0JBQUksR0FEaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNGLElBQUksS0FBSixJQUFJO3VCQUFKLElBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuQGluamVjdChSb3V0ZXIpXHJcbmV4cG9ydCBjbGFzcyBIb21lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnBhcnR5MUlkID0gMTtcclxuICAgICAgICB0aGlzLnBhcnR5MklkID0gMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblJlc2V0Q2xpY2soKSB7XHJcbiAgICAgICAgaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKCdFbGVjdGlvbkRhdGFiYXNlJyk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=