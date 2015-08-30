System.register(['aurelia-framework', 'components/party-list-standing/partyListStandingRepository'], function (_export) {
    'use strict';

    var inject, PartyListStandingRepository, PartyListStandingService;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_componentsPartyListStandingPartyListStandingRepository) {
            PartyListStandingRepository = _componentsPartyListStandingPartyListStandingRepository.PartyListStandingRepository;
        }],
        execute: function () {
            PartyListStandingService = (function () {
                function PartyListStandingService(repository) {
                    _classCallCheck(this, _PartyListStandingService);

                    this.repository = repository;
                }

                _createClass(PartyListStandingService, [{
                    key: 'getLatestStanding',
                    value: function getLatestStanding(electionId) {
                        return this.repository.getLatestStanding(electionId);
                    }
                }]);

                var _PartyListStandingService = PartyListStandingService;
                PartyListStandingService = inject(PartyListStandingRepository)(PartyListStandingService) || PartyListStandingService;
                return PartyListStandingService;
            })();

            _export('PartyListStandingService', PartyListStandingService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZ1NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUlhLHdCQUF3Qjs7Ozs7Ozs7dUNBSjdCLE1BQU07O2tHQUNOLDJCQUEyQjs7O0FBR3RCLG9DQUF3QjtBQUV0Qix5QkFGRix3QkFBd0IsQ0FFckIsVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2lCQUNoQzs7NkJBSlEsd0JBQXdCOzsyQkFNaEIsMkJBQUMsVUFBVSxFQUFFO0FBQzFCLCtCQUFPLElBQUksQ0FBQyxVQUFVLENBQ1YsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzdDOzs7Z0RBVFEsd0JBQXdCO0FBQXhCLHdDQUF3QixHQURwQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FDdkIsd0JBQXdCLEtBQXhCLHdCQUF3Qjt1QkFBeEIsd0JBQXdCIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZ1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1BhcnR5TGlzdFN0YW5kaW5nUmVwb3NpdG9yeX0gZnJvbSAnY29tcG9uZW50cy9wYXJ0eS1saXN0LXN0YW5kaW5nL3BhcnR5TGlzdFN0YW5kaW5nUmVwb3NpdG9yeSc7XHJcblxyXG5AaW5qZWN0KFBhcnR5TGlzdFN0YW5kaW5nUmVwb3NpdG9yeSlcclxuZXhwb3J0IGNsYXNzIFBhcnR5TGlzdFN0YW5kaW5nU2VydmljZSB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMYXRlc3RTdGFuZGluZyhlbGVjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgLmdldExhdGVzdFN0YW5kaW5nKGVsZWN0aW9uSWQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9