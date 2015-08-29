System.register(['aurelia-framework', 'components/head-to-head/headToHeadService', 'core/election-standing/standingScheduler'], function (_export) {
    'use strict';

    var bindable, customElement, inject, HeadToHeadService, StandingScheduler, HeadToHeadStanding;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            customElement = _aureliaFramework.customElement;
            inject = _aureliaFramework.inject;
        }, function (_componentsHeadToHeadHeadToHeadService) {
            HeadToHeadService = _componentsHeadToHeadHeadToHeadService.HeadToHeadService;
        }, function (_coreElectionStandingStandingScheduler) {
            StandingScheduler = _coreElectionStandingStandingScheduler.StandingScheduler;
        }],
        execute: function () {
            HeadToHeadStanding = (function () {
                function HeadToHeadStanding(standingService, standingScheduler, schedulingConfig) {
                    _classCallCheck(this, _HeadToHeadStanding);

                    this.tmpStanding = null;
                    this.standing = null;
                    this.standingService = standingService;
                    this.standingScheduler = standingScheduler;
                    this._fetchStanding(standingScheduler.latestSyncDate).then(this._applyFetchedStanding.bind(this));

                    standingScheduler.register(this._fetchStanding.bind(this), this._applyFetchedStanding.bind(this));
                }

                _createClass(HeadToHeadStanding, [{
                    key: 'formatPercentage',
                    value: function formatPercentage(percentage) {
                        if (!this.standing) return 0;
                        return percentage.toFixed(1);
                    }
                }, {
                    key: 'votesToBarWidth',
                    value: function votesToBarWidth(votes) {
                        if (!this.standing) return 0;

                        var partyVoteTotal = this.standing.party1.votes + this.standing.party2.votes;
                        return (votes / partyVoteTotal * 100).toFixed(1);
                    }
                }, {
                    key: '_fetchStanding',
                    value: function _fetchStanding(syncDate) {
                        return this.standingService.getLatestStanding(this.party1Id, this.party2Id, this.electionId, syncDate).then(this._onStandingFetched.bind(this));
                    }
                }, {
                    key: '_onStandingFetched',
                    value: function _onStandingFetched(standing) {
                        this.tmpStanding = standing;
                    }
                }, {
                    key: '_applyFetchedStanding',
                    value: function _applyFetchedStanding() {
                        this.standing = this.tmpStanding;
                    }
                }]);

                var _HeadToHeadStanding = HeadToHeadStanding;
                HeadToHeadStanding = inject(HeadToHeadService, StandingScheduler)(HeadToHeadStanding) || HeadToHeadStanding;
                HeadToHeadStanding = customElement('head-to-head-standing')(HeadToHeadStanding) || HeadToHeadStanding;
                HeadToHeadStanding = bindable({
                    name: 'party2Id',
                    attribute: 'party2Id',
                    defaultValue: 2
                })(HeadToHeadStanding) || HeadToHeadStanding;
                HeadToHeadStanding = bindable({
                    name: 'party1Id',
                    attribute: 'party1Id',
                    defaultValue: 1
                })(HeadToHeadStanding) || HeadToHeadStanding;
                HeadToHeadStanding = bindable({
                    name: 'electionId',
                    attribute: 'electionId',
                    defaultValue: 1
                })(HeadToHeadStanding) || HeadToHeadStanding;
                return HeadToHeadStanding;
            })();

            _export('HeadToHeadStanding', HeadToHeadStanding);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC10by1oZWFkL2hlYWRUb0hlYWRTdGFuZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0VBc0JhLGtCQUFrQjs7Ozs7Ozs7eUNBdEJ2QixRQUFROzhDQUFFLGFBQWE7dUNBQUUsTUFBTTs7dUVBQy9CLGlCQUFpQjs7dUVBQ2pCLGlCQUFpQjs7O0FBb0JaLDhCQUFrQjtBQUVoQix5QkFGRixrQkFBa0IsQ0FFZixlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUU7OztBQUM5RCx3QkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHdCQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2Qyx3QkFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLHdCQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVqRCxxQ0FBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNyRzs7NkJBWFEsa0JBQWtCOzsyQkFhWCwwQkFBQyxVQUFVLEVBQUU7QUFDekIsNEJBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLCtCQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hDOzs7MkJBRWMseUJBQUMsS0FBSyxFQUFFO0FBQ25CLDRCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFN0IsNEJBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0UsK0JBQU8sQ0FBQyxLQUFLLEdBQUcsY0FBYyxHQUFHLEdBQUcsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEQ7OzsyQkFHYSx3QkFBQyxRQUFRLEVBQUU7QUFDckIsK0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FDZixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDeEQ7OzsyQkFFaUIsNEJBQUMsUUFBUSxFQUFFO0FBQ3pCLDRCQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztxQkFDL0I7OzsyQkFFb0IsaUNBQUc7QUFDcEIsNEJBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztxQkFDcEM7OzswQ0F0Q1Esa0JBQWtCO0FBQWxCLGtDQUFrQixHQUQ5QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FDaEMsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQixrQ0FBa0IsR0FGOUIsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBRTFCLGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsa0NBQWtCLEdBUDlCLFFBQVEsQ0FBQztBQUNOLHdCQUFJLEVBQUUsVUFBVTtBQUNoQiw2QkFBUyxFQUFFLFVBQVU7QUFDckIsZ0NBQVksRUFBRSxDQUFDO2lCQUNsQixDQUFDLENBR1csa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQixrQ0FBa0IsR0FaOUIsUUFBUSxDQUFDO0FBQ04sd0JBQUksRUFBRSxVQUFVO0FBQ2hCLDZCQUFTLEVBQUUsVUFBVTtBQUNyQixnQ0FBWSxFQUFFLENBQUM7aUJBQ2xCLENBQUMsQ0FRVyxrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLGtDQUFrQixHQWpCOUIsUUFBUSxDQUFDO0FBQ04sd0JBQUksRUFBRSxZQUFZO0FBQ2xCLDZCQUFTLEVBQUUsWUFBWTtBQUN2QixnQ0FBWSxFQUFFLENBQUM7aUJBQ2xCLENBQUMsQ0FhVyxrQkFBa0IsS0FBbEIsa0JBQWtCO3VCQUFsQixrQkFBa0IiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkLXRvLWhlYWQvaGVhZFRvSGVhZFN0YW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SGVhZFRvSGVhZFNlcnZpY2V9IGZyb20gJ2NvbXBvbmVudHMvaGVhZC10by1oZWFkL2hlYWRUb0hlYWRTZXJ2aWNlJztcclxuaW1wb3J0IHtTdGFuZGluZ1NjaGVkdWxlcn0gZnJvbSAnY29yZS9lbGVjdGlvbi1zdGFuZGluZy9zdGFuZGluZ1NjaGVkdWxlcic7XHJcblxyXG4vLyBUT0RPIGxlYXJuIGhvdyB0byBiaW5kIGN1c3RvbSBhdHRyaWJ1dGVzIHByb3Blcmx5Li4uLlxyXG5AYmluZGFibGUoe1xyXG4gICAgbmFtZTogJ2VsZWN0aW9uSWQnLFxyXG4gICAgYXR0cmlidXRlOiAnZWxlY3Rpb25JZCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDFcclxufSlcclxuQGJpbmRhYmxlKHtcclxuICAgIG5hbWU6ICdwYXJ0eTFJZCcsXHJcbiAgICBhdHRyaWJ1dGU6ICdwYXJ0eTFJZCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDFcclxufSlcclxuQGJpbmRhYmxlKHtcclxuICAgIG5hbWU6ICdwYXJ0eTJJZCcsXHJcbiAgICBhdHRyaWJ1dGU6ICdwYXJ0eTJJZCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IDJcclxufSlcclxuQGN1c3RvbUVsZW1lbnQoJ2hlYWQtdG8taGVhZC1zdGFuZGluZycpXHJcbkBpbmplY3QoSGVhZFRvSGVhZFNlcnZpY2UsIFN0YW5kaW5nU2NoZWR1bGVyKVxyXG5leHBvcnQgY2xhc3MgSGVhZFRvSGVhZFN0YW5kaW5nIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdGFuZGluZ1NlcnZpY2UsIHN0YW5kaW5nU2NoZWR1bGVyLCBzY2hlZHVsaW5nQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy50bXBTdGFuZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGFuZGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGFuZGluZ1NlcnZpY2UgPSBzdGFuZGluZ1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zdGFuZGluZ1NjaGVkdWxlciA9IHN0YW5kaW5nU2NoZWR1bGVyO1xyXG4gICAgICAgIHRoaXMuX2ZldGNoU3RhbmRpbmcoc3RhbmRpbmdTY2hlZHVsZXIubGF0ZXN0U3luY0RhdGUpXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuX2FwcGx5RmV0Y2hlZFN0YW5kaW5nLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBzdGFuZGluZ1NjaGVkdWxlci5yZWdpc3Rlcih0aGlzLl9mZXRjaFN0YW5kaW5nLmJpbmQodGhpcyksIHRoaXMuX2FwcGx5RmV0Y2hlZFN0YW5kaW5nLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3JtYXRQZXJjZW50YWdlKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhbmRpbmcpIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlLnRvRml4ZWQoMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZvdGVzVG9CYXJXaWR0aCh2b3Rlcykge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGFuZGluZykgcmV0dXJuIDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBhcnR5Vm90ZVRvdGFsID0gdGhpcy5zdGFuZGluZy5wYXJ0eTEudm90ZXMgKyB0aGlzLnN0YW5kaW5nLnBhcnR5Mi52b3RlcztcclxuICAgICAgICByZXR1cm4gKHZvdGVzIC8gcGFydHlWb3RlVG90YWwgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNjaGVkdWxpbmdcclxuICAgIF9mZXRjaFN0YW5kaW5nKHN5bmNEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhbmRpbmdTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAuZ2V0TGF0ZXN0U3RhbmRpbmcodGhpcy5wYXJ0eTFJZCwgdGhpcy5wYXJ0eTJJZCwgdGhpcy5lbGVjdGlvbklkLCBzeW5jRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgIC50aGVuKHRoaXMuX29uU3RhbmRpbmdGZXRjaGVkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfb25TdGFuZGluZ0ZldGNoZWQoc3RhbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnRtcFN0YW5kaW5nID0gc3RhbmRpbmc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9hcHBseUZldGNoZWRTdGFuZGluZygpIHtcclxuICAgICAgICB0aGlzLnN0YW5kaW5nID0gdGhpcy50bXBTdGFuZGluZztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==