System.register(['aurelia-framework', 'core/data-access/electionRepository'], function (_export) {
    'use strict';

    var inject, ElectionRepository, PartyListStandingRepository;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_coreDataAccessElectionRepository) {
            ElectionRepository = _coreDataAccessElectionRepository.ElectionRepository;
        }],
        execute: function () {
            PartyListStandingRepository = (function () {
                function PartyListStandingRepository(electionRepository) {
                    _classCallCheck(this, _PartyListStandingRepository);

                    this.electionRepository = electionRepository;
                }

                _createClass(PartyListStandingRepository, [{
                    key: 'getLatestStanding',
                    value: function getLatestStanding(electionId) {
                        var measurementDate = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];

                        return this.electionRepository.getLatestElectionStanding(electionId, measurementDate).then(this._electionStandingToListStanding.bind(this));
                    }
                }, {
                    key: '_electionStandingToListStanding',
                    value: function _electionStandingToListStanding(electionStanding) {
                        electionStanding.parties = electionStanding.parties.sort(function (party1, party2) {
                            return party2.votes - party1.votes;
                        });
                        electionStanding.parties = electionStanding.parties.map(function (party) {
                            party.votePercentage = party.votes / electionStanding.totalVotes * 100;
                            return party;
                        });

                        return electionStanding;
                    }
                }]);

                var _PartyListStandingRepository = PartyListStandingRepository;
                PartyListStandingRepository = inject(ElectionRepository)(PartyListStandingRepository) || PartyListStandingRepository;
                return PartyListStandingRepository;
            })();

            _export('PartyListStandingRepository', PartyListStandingRepository);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZ1JlcG9zaXRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQVNhLDJCQUEyQjs7Ozs7Ozs7dUNBSmhDLE1BQU07O21FQUNOLGtCQUFrQjs7O0FBR2IsdUNBQTJCO0FBRXpCLHlCQUZGLDJCQUEyQixDQUV4QixrQkFBa0IsRUFBRTs7O0FBQzVCLHdCQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7aUJBQ2hEOzs2QkFKUSwyQkFBMkI7OzJCQU1uQiwyQkFBQyxVQUFVLEVBQWdDOzRCQUE5QixlQUFlLHlEQUFHLElBQUksSUFBSSxFQUFFOztBQUN0RCwrQkFBTyxJQUFJLENBQUMsa0JBQWtCLENBQ2xCLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FDdEQsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDckU7OzsyQkFFOEIseUNBQUMsZ0JBQWdCLEVBQUU7QUFDOUMsd0NBQWdCLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTttQ0FBSyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO3lCQUFBLENBQUUsQ0FBQztBQUMzRyx3Q0FBZ0IsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUM3RCxpQ0FBSyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdkUsbUNBQU8sS0FBSyxDQUFDO3lCQUNoQixDQUFDLENBQUM7O0FBRUgsK0JBQU8sZ0JBQWdCLENBQUM7cUJBQzNCOzs7bURBcEJRLDJCQUEyQjtBQUEzQiwyQ0FBMkIsR0FEdkMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQ2QsMkJBQTJCLEtBQTNCLDJCQUEyQjt1QkFBM0IsMkJBQTJCIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZ1JlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBSZXBvc2l0b3J5IGltcGxlbWVudGVkLCBzbyB3ZSBjYW4gc3dpdGNoIGJldHdlZW4gSW5kZXhlZGRiIGFuZCBSRVNUIHNvbHV0aW9uXHJcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHVzZXMgSW5kZXhlZGRiXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFbGVjdGlvblJlcG9zaXRvcnl9IGZyb20gJ2NvcmUvZGF0YS1hY2Nlc3MvZWxlY3Rpb25SZXBvc2l0b3J5JztcclxuXHJcbkBpbmplY3QoRWxlY3Rpb25SZXBvc2l0b3J5KVxyXG5leHBvcnQgY2xhc3MgUGFydHlMaXN0U3RhbmRpbmdSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVjdGlvblJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLmVsZWN0aW9uUmVwb3NpdG9yeSA9IGVsZWN0aW9uUmVwb3NpdG9yeTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGF0ZXN0U3RhbmRpbmcoZWxlY3Rpb25JZCwgbWVhc3VyZW1lbnREYXRlID0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZWN0aW9uUmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgLmdldExhdGVzdEVsZWN0aW9uU3RhbmRpbmcoZWxlY3Rpb25JZCwgbWVhc3VyZW1lbnREYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4odGhpcy5fZWxlY3Rpb25TdGFuZGluZ1RvTGlzdFN0YW5kaW5nLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfZWxlY3Rpb25TdGFuZGluZ1RvTGlzdFN0YW5kaW5nKGVsZWN0aW9uU3RhbmRpbmcpIHtcclxuICAgICAgICBlbGVjdGlvblN0YW5kaW5nLnBhcnRpZXMgPSBlbGVjdGlvblN0YW5kaW5nLnBhcnRpZXMuc29ydCgocGFydHkxLCBwYXJ0eTIpID0+IHBhcnR5Mi52b3RlcyAtIHBhcnR5MS52b3RlcyApO1xyXG4gICAgICAgIGVsZWN0aW9uU3RhbmRpbmcucGFydGllcyA9IGVsZWN0aW9uU3RhbmRpbmcucGFydGllcy5tYXAocGFydHkgPT4ge1xyXG4gICAgICAgICAgICBwYXJ0eS52b3RlUGVyY2VudGFnZSA9IHBhcnR5LnZvdGVzIC8gZWxlY3Rpb25TdGFuZGluZy50b3RhbFZvdGVzICogMTAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZWN0aW9uU3RhbmRpbmc7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=