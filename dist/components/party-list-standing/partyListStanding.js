System.register(['aurelia-framework', 'components/party-list-standing/partyListStandingService', 'core/election-standing/standingScheduler'], function (_export) {
    'use strict';

    var bindable, customElement, inject, PartyListStandingService, StandingScheduler, SchedulingConfig, PartyListStanding;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            customElement = _aureliaFramework.customElement;
            inject = _aureliaFramework.inject;
        }, function (_componentsPartyListStandingPartyListStandingService) {
            PartyListStandingService = _componentsPartyListStandingPartyListStandingService.PartyListStandingService;
        }, function (_coreElectionStandingStandingScheduler) {
            StandingScheduler = _coreElectionStandingStandingScheduler.StandingScheduler;
            SchedulingConfig = _coreElectionStandingStandingScheduler.SchedulingConfig;
        }],
        execute: function () {
            PartyListStanding = (function () {
                function PartyListStanding(partyListStandingService, standingScheduler, schedulingConfig) {
                    _classCallCheck(this, _PartyListStanding);

                    this.tmpStanding = null;
                    this.standing = null;
                    this.highestVotes = 0;
                    this.partyListStandingService = partyListStandingService;
                    this.standingScheduler = standingScheduler;
                    this._fetchStanding(standingScheduler.latestSyncDate).then(this._applyFetchedStanding.bind(this));

                    standingScheduler.register(this._fetchStanding.bind(this), this._applyFetchedStanding.bind(this));

                    standingScheduler.startScheduling(schedulingConfig);
                }

                _createClass(PartyListStanding, [{
                    key: 'formatVotes',
                    value: function formatVotes(votes) {
                        return votes.toLocaleString();
                    }
                }, {
                    key: 'formatPercentage',
                    value: function formatPercentage(percentage) {
                        return percentage.toFixed(1);
                    }
                }, {
                    key: 'votesToBarWidth',
                    value: function votesToBarWidth(votes) {
                        return (votes / this.highestVotes * 100).toFixed(1);
                    }
                }, {
                    key: '_fetchStanding',
                    value: function _fetchStanding(syncDate) {
                        return this.partyListStandingService.getLatestStanding(this.electionId, syncDate).then(this._onStandingFetched.bind(this));
                    }
                }, {
                    key: '_onStandingFetched',
                    value: function _onStandingFetched(standing) {
                        this.tmpStanding = standing;
                    }
                }, {
                    key: '_applyFetchedStanding',
                    value: function _applyFetchedStanding() {
                        if (this.tmpStanding.parties.length > 0) this.highestVotes = this.tmpStanding.parties[0].votes;

                        this.standing = this.tmpStanding;
                    }
                }]);

                var _PartyListStanding = PartyListStanding;
                PartyListStanding = inject(PartyListStandingService, StandingScheduler, SchedulingConfig)(PartyListStanding) || PartyListStanding;
                PartyListStanding = customElement('party-list-standing')(PartyListStanding) || PartyListStanding;
                PartyListStanding = bindable({
                    name: 'electionId',
                    attribute: 'electionId',
                    defaultValue: 1
                })(PartyListStanding) || PartyListStanding;
                return PartyListStanding;
            })();

            _export('PartyListStanding', PartyListStanding);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0dBWWEsaUJBQWlCOzs7Ozs7Ozt5Q0FadEIsUUFBUTs4Q0FBRSxhQUFhO3VDQUFFLE1BQU07OzRGQUMvQix3QkFBd0I7O3VFQUV4QixpQkFBaUI7c0VBQUUsZ0JBQWdCOzs7QUFTOUIsNkJBQWlCO0FBRWYseUJBRkYsaUJBQWlCLENBRWQsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUU7OztBQUN2RSx3QkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHdCQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUN0Qix3QkFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0FBQ3pELHdCQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDM0Msd0JBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRWpELHFDQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRWxHLHFDQUFpQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUN2RDs7NkJBZFEsaUJBQWlCOzsyQkFnQmYscUJBQUMsS0FBSyxFQUFFO0FBQ2YsK0JBQU8sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUNqQzs7OzJCQUVlLDBCQUFDLFVBQVUsRUFBRTtBQUN6QiwrQkFBTyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoQzs7OzJCQUVjLHlCQUFDLEtBQUssRUFBRTtBQUNuQiwrQkFBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkQ7OzsyQkFHYSx3QkFBQyxRQUFRLEVBQUU7QUFDckIsK0JBQU8sSUFBSSxDQUFDLHdCQUF3QixDQUN4QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUN4RDs7OzJCQUVpQiw0QkFBQyxRQUFRLEVBQUU7QUFDekIsNEJBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3FCQUMvQjs7OzJCQUVvQixpQ0FBRztBQUNwQiw0QkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFMUQsNEJBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztxQkFDcEM7Ozt5Q0E1Q1EsaUJBQWlCO0FBQWpCLGlDQUFpQixHQUQ3QixNQUFNLENBQUMsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FDekQsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQixpQ0FBaUIsR0FGN0IsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBRXhCLGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIsaUNBQWlCLEdBUDdCLFFBQVEsQ0FBQztBQUNOLHdCQUFJLEVBQUUsWUFBWTtBQUNsQiw2QkFBUyxFQUFFLFlBQVk7QUFDdkIsZ0NBQVksRUFBRSxDQUFDO2lCQUNsQixDQUFDLENBR1csaUJBQWlCLEtBQWpCLGlCQUFpQjt1QkFBakIsaUJBQWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9wYXJ0eUxpc3RTdGFuZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1BhcnR5TGlzdFN0YW5kaW5nU2VydmljZX0gZnJvbSAnY29tcG9uZW50cy9wYXJ0eS1saXN0LXN0YW5kaW5nL3BhcnR5TGlzdFN0YW5kaW5nU2VydmljZSc7XHJcbi8vIGltcG9ydCB7U3RhbmRpbmdNZXJnZXJ9IGZyb20gJ2NvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9zdGFuZGluZ01lcmdlcic7XHJcbmltcG9ydCB7U3RhbmRpbmdTY2hlZHVsZXIsIFNjaGVkdWxpbmdDb25maWd9IGZyb20gJ2NvcmUvZWxlY3Rpb24tc3RhbmRpbmcvc3RhbmRpbmdTY2hlZHVsZXInO1xyXG5cclxuQGJpbmRhYmxlKHtcclxuICAgIG5hbWU6ICdlbGVjdGlvbklkJyxcclxuICAgIGF0dHJpYnV0ZTogJ2VsZWN0aW9uSWQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAxXHJcbn0pXHJcbkBjdXN0b21FbGVtZW50KCdwYXJ0eS1saXN0LXN0YW5kaW5nJylcclxuQGluamVjdChQYXJ0eUxpc3RTdGFuZGluZ1NlcnZpY2UsIFN0YW5kaW5nU2NoZWR1bGVyLCBTY2hlZHVsaW5nQ29uZmlnKVxyXG5leHBvcnQgY2xhc3MgUGFydHlMaXN0U3RhbmRpbmcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcnR5TGlzdFN0YW5kaW5nU2VydmljZSwgc3RhbmRpbmdTY2hlZHVsZXIsIHNjaGVkdWxpbmdDb25maWcpIHtcclxuICAgICAgICB0aGlzLnRtcFN0YW5kaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YW5kaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhpZ2hlc3RWb3RlcyA9IDA7IC8vIFVzZWQgdG8gbWFrZSB0aGUgdm90ZS1iYXIgd2lkdGhzIHJlbGF0aXZlIHRvIGVhY2ggb3RoZXJcclxuICAgICAgICB0aGlzLnBhcnR5TGlzdFN0YW5kaW5nU2VydmljZSA9IHBhcnR5TGlzdFN0YW5kaW5nU2VydmljZTtcclxuICAgICAgICB0aGlzLnN0YW5kaW5nU2NoZWR1bGVyID0gc3RhbmRpbmdTY2hlZHVsZXI7XHJcbiAgICAgICAgdGhpcy5fZmV0Y2hTdGFuZGluZyhzdGFuZGluZ1NjaGVkdWxlci5sYXRlc3RTeW5jRGF0ZSlcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5fYXBwbHlGZXRjaGVkU3RhbmRpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHN0YW5kaW5nU2NoZWR1bGVyLnJlZ2lzdGVyKHRoaXMuX2ZldGNoU3RhbmRpbmcuYmluZCh0aGlzKSwgdGhpcy5fYXBwbHlGZXRjaGVkU3RhbmRpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gVE9ETyBTdGFydCBzY2hlZHVsaW5nIG9uIGFwcCBzdGFydHVwXHJcbiAgICAgICAgc3RhbmRpbmdTY2hlZHVsZXIuc3RhcnRTY2hlZHVsaW5nKHNjaGVkdWxpbmdDb25maWcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3JtYXRWb3Rlcyh2b3Rlcykge1xyXG4gICAgICAgIHJldHVybiB2b3Rlcy50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmb3JtYXRQZXJjZW50YWdlKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICByZXR1cm4gcGVyY2VudGFnZS50b0ZpeGVkKDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2b3Rlc1RvQmFyV2lkdGgodm90ZXMpIHtcclxuICAgICAgICByZXR1cm4gKHZvdGVzIC8gdGhpcy5oaWdoZXN0Vm90ZXMgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNjaGVkdWxpbmdcclxuICAgIF9mZXRjaFN0YW5kaW5nKHN5bmNEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydHlMaXN0U3RhbmRpbmdTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAuZ2V0TGF0ZXN0U3RhbmRpbmcodGhpcy5lbGVjdGlvbklkLCBzeW5jRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgIC50aGVuKHRoaXMuX29uU3RhbmRpbmdGZXRjaGVkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfb25TdGFuZGluZ0ZldGNoZWQoc3RhbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnRtcFN0YW5kaW5nID0gc3RhbmRpbmc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9hcHBseUZldGNoZWRTdGFuZGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy50bXBTdGFuZGluZy5wYXJ0aWVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuaGlnaGVzdFZvdGVzID0gdGhpcy50bXBTdGFuZGluZy5wYXJ0aWVzWzBdLnZvdGVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhbmRpbmcgPSB0aGlzLnRtcFN0YW5kaW5nO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9