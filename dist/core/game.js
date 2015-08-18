System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, Game;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            Game = (function () {
                function Game() {
                    _classCallCheck(this, _Game);

                    this.score = 0;
                }

                var _Game = Game;
                Game = inject()(Game) || Game;
                return Game;
            })();

            _export('Game', Game);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZ2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBR2EsSUFBSTs7Ozs7O3VDQUhULE1BQU07OztBQUdELGdCQUFJO0FBRUYseUJBRkYsSUFBSSxHQUVDOzs7QUFDVix3QkFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2xCOzs0QkFKUSxJQUFJO0FBQUosb0JBQUksR0FEaEIsTUFBTSxFQUFFLENBQ0ksSUFBSSxLQUFKLElBQUk7dUJBQUosSUFBSSIsImZpbGUiOiJjb3JlL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==