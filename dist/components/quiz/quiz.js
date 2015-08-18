System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
    'use strict';

    var inject, Router, Quiz;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            Quiz = (function () {
                function Quiz(router) {
                    _classCallCheck(this, _Quiz);

                    this.router = router;
                }

                _createClass(Quiz, [{
                    key: 'onSubmitAnswerClick',
                    value: function onSubmitAnswerClick() {}
                }, {
                    key: 'activate',
                    value: function activate() {
                        console.log('active');
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        componentHandler.upgradeDom();
                    }
                }]);

                var _Quiz = Quiz;
                Quiz = inject(Router)(Quiz) || Quiz;
                return Quiz;
            })();

            _export('Quiz', Quiz);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVpei9xdWl6LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3QkFJYSxJQUFJOzs7Ozs7Ozt1Q0FKVCxNQUFNOztvQ0FDTixNQUFNOzs7QUFHRCxnQkFBSTtBQUVGLHlCQUZGLElBQUksQ0FFRCxNQUFNLEVBQUU7OztBQUNoQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7aUJBQ3hCOzs2QkFKUSxJQUFJOzsyQkFNTSwrQkFBRyxFQUVyQjs7OzJCQUVPLG9CQUFHO0FBQ1AsK0JBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3pCOzs7MkJBRU8sb0JBQUc7QUFFUCx3Q0FBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDakM7Ozs0QkFqQlEsSUFBSTtBQUFKLG9CQUFJLEdBRGhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixJQUFJLEtBQUosSUFBSTt1QkFBSixJQUFJIiwiZmlsZSI6ImNvbXBvbmVudHMvcXVpei9xdWl6LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbkBpbmplY3QoUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgUXVpeiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXRBbnN3ZXJDbGljaygpIHtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIG91ciBjb21wb25lbnRzIHdpdGggTURMXHJcbiAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRG9tKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=