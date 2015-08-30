System.register(['aurelia-framework', 'components/head-to-head/headToHeadRepository'], function (_export) {
    'use strict';

    var inject, HeadToHeadRepository, HeadToHeadService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_componentsHeadToHeadHeadToHeadRepository) {
            HeadToHeadRepository = _componentsHeadToHeadHeadToHeadRepository.HeadToHeadRepository;
        }],
        execute: function () {
            HeadToHeadService = (function () {
                function HeadToHeadService(repository) {
                    _classCallCheck(this, _HeadToHeadService);

                    this.repository = repository;
                }

                _createClass(HeadToHeadService, [{
                    key: 'getLatestStanding',
                    value: function getLatestStanding(party1Id, party2Id, electionId) {
                        return this.repository.getLatestStanding(party1Id, party2Id, electionId);
                    }
                }]);

                var _HeadToHeadService = HeadToHeadService;
                HeadToHeadService = inject(HeadToHeadRepository)(HeadToHeadService) || HeadToHeadService;
                return HeadToHeadService;
            })();

            _export('HeadToHeadService', HeadToHeadService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC10by1oZWFkL2hlYWRUb0hlYWRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzQ0FJYSxpQkFBaUI7Ozs7Ozs7O3VDQUp0QixNQUFNOzs2RUFDTixvQkFBb0I7OztBQUdmLDZCQUFpQjtBQUVmLHlCQUZGLGlCQUFpQixDQUVkLFVBQVUsRUFBRTs7O0FBQ3BCLHdCQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7OzZCQUpRLGlCQUFpQjs7MkJBTVQsMkJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDOUMsK0JBQU8sSUFBSSxDQUFDLFVBQVUsQ0FDVixpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3FCQUNqRTs7O3lDQVRRLGlCQUFpQjtBQUFqQixpQ0FBaUIsR0FEN0IsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQ2hCLGlCQUFpQixLQUFqQixpQkFBaUI7dUJBQWpCLGlCQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWQtdG8taGVhZC9oZWFkVG9IZWFkU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SGVhZFRvSGVhZFJlcG9zaXRvcnl9IGZyb20gJ2NvbXBvbmVudHMvaGVhZC10by1oZWFkL2hlYWRUb0hlYWRSZXBvc2l0b3J5JztcclxuXHJcbkBpbmplY3QoSGVhZFRvSGVhZFJlcG9zaXRvcnkpXHJcbmV4cG9ydCBjbGFzcyBIZWFkVG9IZWFkU2VydmljZSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMYXRlc3RTdGFuZGluZyhwYXJ0eTFJZCwgcGFydHkySWQsIGVsZWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAuZ2V0TGF0ZXN0U3RhbmRpbmcocGFydHkxSWQsIHBhcnR5MklkLCBlbGVjdGlvbklkKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==