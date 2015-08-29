System.register(['aurelia-framework', 'core/data-access/electionRepository'], function (_export) {
    'use strict';

    var inject, ElectionRepository, StandingScheduler, SchedulingConfig;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_coreDataAccessElectionRepository) {
            ElectionRepository = _coreDataAccessElectionRepository.ElectionRepository;
        }],
        execute: function () {
            StandingScheduler = (function () {
                function StandingScheduler(electionRepository) {
                    _classCallCheck(this, _StandingScheduler);

                    this.electionRepository = electionRepository;
                    this._tickListeners = new Map();
                    this.latestSyncDate = new Date();
                }

                _createClass(StandingScheduler, [{
                    key: 'startScheduling',
                    value: function startScheduling(schedulingConfig) {
                        console.log('Started scheduling with timeinterval: ' + schedulingConfig.timeInterval);
                        this.schedulingConfig = schedulingConfig;
                        this._scheduleTick();
                    }
                }, {
                    key: 'register',
                    value: function register(fetchDataCallback, applyFetchedDataCallback) {
                        this._tickListeners.set(fetchDataCallback, applyFetchedDataCallback);
                    }
                }, {
                    key: 'unregister',
                    value: function unregister(fetchDataCallback) {
                        this._tickListeners['delete'](fetchDataCallback);
                    }
                }, {
                    key: '_tick',
                    value: function _tick() {
                        this.latestSyncDate = new Date();
                        var promises = this._fetchData();
                        Promise.all(promises).then(this._notifyApplyFetchedData.bind(this)).then(this._scheduleTick.bind(this));

                        this._updateStandings();
                    }
                }, {
                    key: '_fetchData',
                    value: function _fetchData() {
                        var _this = this;

                        var promises = [];

                        this._tickListeners.forEach(function (applyFetchedDataCallback, fetchDataCallback) {
                            promises.push(fetchDataCallback(_this.latestSyncDate));
                        });

                        return promises;
                    }
                }, {
                    key: '_notifyApplyFetchedData',
                    value: function _notifyApplyFetchedData() {
                        this._tickListeners.forEach(function (applyFetchedDataCallback, fetchDataCallback) {
                            applyFetchedDataCallback();
                        });
                    }
                }, {
                    key: '_scheduleTick',
                    value: function _scheduleTick() {
                        setTimeout(this._tick.bind(this), this.schedulingConfig.timeInterval);
                    }
                }, {
                    key: '_updateStandings',
                    value: function _updateStandings() {
                        var self = this;
                        var measurementDate = new Date();
                        this.electionRepository.getElections().then(function (elections) {
                            elections.forEach(function (election) {
                                self.electionRepository.getLatestElectionStanding(election.id).then(function (standing) {
                                    var totalVotes = standing.parties.reduce(function (value, party) {
                                        return value + party.votes;
                                    }, 0);

                                    standing.candidates.forEach(function (candidate) {
                                        var party = standing.parties.find(function (party) {
                                            return party.id === candidate.partyId;
                                        });
                                        var voteIncrease = Math.floor(Math.random() * (8000 - 1000) + 1000 * (party.votes / totalVotes));

                                        candidate.votes += voteIncrease;

                                        party.votes += voteIncrease;
                                    });

                                    return self.electionRepository.addElectionStanding({
                                        electionId: election.id,
                                        measurementDate: measurementDate,
                                        parties: standing.parties.map(function (party) {
                                            return { id: party.id, votes: party.votes };
                                        }),
                                        candidates: standing.candidates.map(function (candidate) {
                                            return { id: candidate.id, votes: candidate.votes };
                                        })
                                    });
                                });
                            });
                        });
                    }
                }]);

                var _StandingScheduler = StandingScheduler;
                StandingScheduler = inject(ElectionRepository)(StandingScheduler) || StandingScheduler;
                return StandingScheduler;
            })();

            _export('StandingScheduler', StandingScheduler);

            SchedulingConfig = function SchedulingConfig(timeInterval) {
                _classCallCheck(this, SchedulingConfig);

                this.timeInterval = timeInterval || 2500;
            };

            _export('SchedulingConfig', SchedulingConfig);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZWxlY3Rpb24tc3RhbmRpbmcvc3RhbmRpbmdTY2hlZHVsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29DQUthLGlCQUFpQixFQWdHakIsZ0JBQWdCOzs7Ozs7Ozt1Q0FwR3JCLE1BQU07O21FQUNOLGtCQUFrQjs7O0FBR2IsNkJBQWlCO0FBRWYseUJBRkYsaUJBQWlCLENBRWQsa0JBQWtCLEVBQUU7OztBQUU1Qix3QkFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLHdCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDaEMsd0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztpQkFDcEM7OzZCQVBRLGlCQUFpQjs7MkJBU1gseUJBQUMsZ0JBQWdCLEVBQUU7QUFDOUIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEYsNEJBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUN6Qyw0QkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUN4Qjs7OzJCQUVPLGtCQUFDLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFO0FBQ2xELDRCQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO3FCQUN4RTs7OzJCQUVTLG9CQUFDLGlCQUFpQixFQUFFO0FBQzFCLDRCQUFJLENBQUMsY0FBYyxVQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztxQkFDakQ7OzsyQkFFSSxpQkFBRztBQUNKLDRCQUFJLENBQUMsY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDakMsNEJBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNqQywrQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDWixJQUFJLENBQUMsSUFBSSxDQUFDLHVC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QUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO3lDQUN2RCxDQUFDO3FDQUNMLENBQUMsQ0FBQztpQ0FDakIsQ0FBQyxDQUFDOzZCQUNWLENBQUMsQ0FBQzt5QkFDTixDQUFDLENBQUM7cUJBQ1Y7Ozt5Q0E3RlEsaUJBQWlCO0FBQWpCLGlDQUFpQixHQUQ3QixNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FDZCxpQkFBaUIsS0FBakIsaUJBQWlCO3VCQUFqQixpQkFBaUI7Ozs7O0FBZ0dqQiw0QkFBZ0IsR0FFZCxTQUZGLGdCQUFnQixDQUViLFlBQVksRUFBRTtzQ0FGakIsZ0JBQWdCOztBQUdyQixvQkFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDO2FBQzVDIiwiZmlsZSI6ImNvcmUvZWxlY3Rpb24tc3RhbmRpbmcvc3RhbmRpbmdTY2hlZHVsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0VsZWN0aW9uUmVwb3NpdG9yeX0gZnJvbSAnY29yZS9kYXRhLWFjY2Vzcy9lbGVjdGlvblJlcG9zaXRvcnknO1xyXG5cclxuQGluamVjdChFbGVjdGlvblJlcG9zaXRvcnkpXHJcbmV4cG9ydCBjbGFzcyBTdGFuZGluZ1NjaGVkdWxlciB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGVsZWN0aW9uUmVwb3NpdG9yeSkge1xyXG4gICAgICAgIC8vdGhpcy5ldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5lbGVjdGlvblJlcG9zaXRvcnkgPSBlbGVjdGlvblJlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5fdGlja0xpc3RlbmVycyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmxhdGVzdFN5bmNEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnRTY2hlZHVsaW5nKHNjaGVkdWxpbmdDb25maWcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRlZCBzY2hlZHVsaW5nIHdpdGggdGltZWludGVydmFsOiAnICsgc2NoZWR1bGluZ0NvbmZpZy50aW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGluZ0NvbmZpZyA9IHNjaGVkdWxpbmdDb25maWc7XHJcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVUaWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlZ2lzdGVyKGZldGNoRGF0YUNhbGxiYWNrLCBhcHBseUZldGNoZWREYXRhQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl90aWNrTGlzdGVuZXJzLnNldChmZXRjaERhdGFDYWxsYmFjaywgYXBwbHlGZXRjaGVkRGF0YUNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdW5yZWdpc3RlcihmZXRjaERhdGFDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX3RpY2tMaXN0ZW5lcnMuZGVsZXRlKGZldGNoRGF0YUNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3RpY2soKSB7XHJcbiAgICAgICAgdGhpcy5sYXRlc3RTeW5jRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gdGhpcy5fZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLl9ub3RpZnlBcHBseUZldGNoZWREYXRhLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLl9zY2hlZHVsZVRpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLl91cGRhdGVTdGFuZGluZ3MoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX2ZldGNoRGF0YSgpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl90aWNrTGlzdGVuZXJzLmZvckVhY2goKGFwcGx5RmV0Y2hlZERhdGFDYWxsYmFjaywgZmV0Y2hEYXRhQ2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChmZXRjaERhdGFDYWxsYmFjayh0aGlzLmxhdGVzdFN5bmNEYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2VzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfbm90aWZ5QXBwbHlGZXRjaGVkRGF0YSgpIHtcclxuICAgICAgICB0aGlzLl90aWNrTGlzdGVuZXJzLmZvckVhY2goKGFwcGx5RmV0Y2hlZERhdGFDYWxsYmFjaywgZmV0Y2hEYXRhQ2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgYXBwbHlGZXRjaGVkRGF0YUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9zY2hlZHVsZVRpY2soKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLl90aWNrLmJpbmQodGhpcyksIHRoaXMuc2NoZWR1bGluZ0NvbmZpZy50aW1lSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfdXBkYXRlU3RhbmRpbmdzKCkge1xyXG4gICAgICAgIC8vIEp1c3QgZm9yIHRlc3RpbmdcclxuICAgICAgICAvLyBHZW5lcmF0ZSBzb21lIHJhbmRvbSB2b3RlIGluY3JlYXNlXHJcbiAgICAgICAgLy8gVWdseSBzcGFnaGV0dGkgY29kZSwgYnV0IHdlIGRvbid0IGNhcmUgYWJvdXQgdGhpcyBwYXJ0XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBtZWFzdXJlbWVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZWxlY3Rpb25SZXBvc2l0b3J5XHJcbiAgICAgICAgICAgIC5nZXRFbGVjdGlvbnMoKVxyXG4gICAgICAgICAgICAudGhlbihlbGVjdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25zLmZvckVhY2goZWxlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlY3Rpb25SZXBvc2l0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRMYXRlc3RFbGVjdGlvblN0YW5kaW5nKGVsZWN0aW9uLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihzdGFuZGluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxWb3RlcyA9IHN0YW5kaW5nLnBhcnRpZXMucmVkdWNlKCh2YWx1ZSwgcGFydHkpID0+IHZhbHVlICsgcGFydHkudm90ZXMsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGluZy5jYW5kaWRhdGVzLmZvckVhY2goY2FuZGlkYXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFydHkgPSBzdGFuZGluZy5wYXJ0aWVzLmZpbmQocGFydHkgPT4gcGFydHkuaWQgPT09IGNhbmRpZGF0ZS5wYXJ0eUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdm90ZUluY3JlYXNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDgwMDAgLSAxMDAwKSArIDEwMDAgKiAocGFydHkudm90ZXMgLyB0b3RhbFZvdGVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNhbmRpZGF0ZSB2b3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS52b3RlcyArPSB2b3RlSW5jcmVhc2U7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwYXJ0eSB2b3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnR5LnZvdGVzICs9IHZvdGVJbmNyZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5lbGVjdGlvblJlcG9zaXRvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEVsZWN0aW9uU3RhbmRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Rpb25JZDogZWxlY3Rpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudERhdGU6IG1lYXN1cmVtZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpZXM6IHN0YW5kaW5nLnBhcnRpZXMubWFwKHBhcnR5ID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHBhcnR5LmlkLCB2b3RlczogcGFydHkudm90ZXMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlczogc3RhbmRpbmcuY2FuZGlkYXRlcy5tYXAoY2FuZGlkYXRlID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGNhbmRpZGF0ZS5pZCwgdm90ZXM6IGNhbmRpZGF0ZS52b3RlcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NoZWR1bGluZ0NvbmZpZyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHRpbWVJbnRlcnZhbCkge1xyXG4gICAgICAgIHRoaXMudGltZUludGVydmFsID0gdGltZUludGVydmFsIHx8IDI1MDA7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=