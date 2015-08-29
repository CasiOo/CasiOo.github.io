System.register(['aurelia-framework', 'core/vote-standing/voteStandingScheduler'], function (_export) {
    'use strict';

    var inject, VoteStandingScheduler, SchedulingConfig, VoteStandingStore;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_coreVoteStandingVoteStandingScheduler) {
            VoteStandingScheduler = _coreVoteStandingVoteStandingScheduler.VoteStandingScheduler;
            SchedulingConfig = _coreVoteStandingVoteStandingScheduler.SchedulingConfig;
        }],
        execute: function () {
            VoteStandingStore = (function () {
                function VoteStandingStore(voteStandingScheduler, schedulerConfig) {
                    _classCallCheck(this, _VoteStandingStore);

                    this._latestVoteStanding = {
                        topPoliticans: [{
                            id: 1,
                            firstName: 'Lars',
                            fullName: 'Lars Løkke Rasmussen',
                            partyColor: '#005392',
                            votePercentage: '80%'
                        }, {
                            id: 2,
                            firstName: 'Helle',
                            fullName: 'Helle Thorning',
                            partyColor: '#f04d46',
                            votePercentage: '50%'
                        }]
                    };
                    voteStandingScheduler.addUpdateListener(this.onSchedulerUpdate);
                    voteStandingScheduler.startScheduling(schedulerConfig);
                }

                _createClass(VoteStandingStore, [{
                    key: 'onSchedulerUpdate',
                    value: function onSchedulerUpdate(voteStanding) {
                        console.log('Scheduler update!');
                        this._latestVoteStanding = voteStanding;
                    }
                }, {
                    key: 'latestVoteStanding',
                    get: function get() {
                        return this._latestVoteStanding;
                    }
                }]);

                var _VoteStandingStore = VoteStandingStore;
                VoteStandingStore = inject(VoteStandingScheduler, SchedulingConfig)(VoteStandingStore) || VoteStandingStore;
                return VoteStandingStore;
            })();

            _export('VoteStandingStore', VoteStandingStore);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdm90ZS1zdGFuZGluZy92b3RlU3RhbmRpbmdTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eURBSWEsaUJBQWlCOzs7Ozs7Ozt1Q0FKdEIsTUFBTTs7MkVBQ04scUJBQXFCO3NFQUFFLGdCQUFnQjs7O0FBR2xDLDZCQUFpQjtBQUVmLHlCQUZGLGlCQUFpQixDQUVkLHFCQUFxQixFQUFFLGVBQWUsRUFBRTs7O0FBRWhELHdCQUFJLENBQUMsbUJBQW1CLEdBQUc7QUFDdkIscUNBQWEsRUFBRSxDQUNYO0FBQ0ksOEJBQUUsRUFBRSxDQUFDO0FBQ0wscUNBQVMsRUFBRSxNQUFNO0FBQ2pCLG9DQUFRLEVBQUUsc0JBQXNCO0FBQ2hDLHNDQUFVLEVBQUUsU0FBUztBQUNyQiwwQ0FBYyxFQUFFLEtBQUs7eUJBQ3hCLEVBQ0Q7QUFDSSw4QkFBRSxFQUFFLENBQUM7QUFDTCxxQ0FBUyxFQUFFLE9BQU87QUFDbEIsb0NBQVEsRUFBRSxnQkFBZ0I7QUFDMUIsc0NBQVUsRUFBRSxTQUFTO0FBQ3JCLDBDQUFjLEVBQUUsS0FBSzt5QkFDeEIsQ0FDSjtxQkFDSixDQUFDO0FBQ0YseUNBQXFCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEUseUNBQXFCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUMxRDs7NkJBeEJRLGlCQUFpQjs7MkJBMEJULDJCQUFDLFlBQVksRUFBRTtBQUM1QiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2pDLDRCQUFJLENBQUMsbUJBQW1CLEdBQUcsWUFBWSxDQUFDO3FCQUUzQzs7O3lCQUVxQixlQUFHO0FBQ3JCLCtCQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztxQkFDbkM7Ozt5Q0FsQ1EsaUJBQWlCO0FBQWpCLGlDQUFpQixHQUQ3QixNQUFNLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUMsQ0FDbkMsaUJBQWlCLEtBQWpCLGlCQUFpQjt1QkFBakIsaUJBQWlCIiwiZmlsZSI6ImNvcmUvdm90ZS1zdGFuZGluZy92b3RlU3RhbmRpbmdTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Vm90ZVN0YW5kaW5nU2NoZWR1bGVyLCBTY2hlZHVsaW5nQ29uZmlnfSBmcm9tICdjb3JlL3ZvdGUtc3RhbmRpbmcvdm90ZVN0YW5kaW5nU2NoZWR1bGVyJztcclxuXHJcbkBpbmplY3QoVm90ZVN0YW5kaW5nU2NoZWR1bGVyLCBTY2hlZHVsaW5nQ29uZmlnKVxyXG5leHBvcnQgY2xhc3MgVm90ZVN0YW5kaW5nU3RvcmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZvdGVTdGFuZGluZ1NjaGVkdWxlciwgc2NoZWR1bGVyQ29uZmlnKSB7XHJcbiAgICAgICAgLy90aGlzLl9sYXRlc3RWb3RlU3RhbmRpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xhdGVzdFZvdGVTdGFuZGluZyA9IHtcclxuICAgICAgICAgICAgdG9wUG9saXRpY2FuczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0xhcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiAnTGFycyBMw7hra2UgUmFzbXVzc2VuJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0eUNvbG9yOiAnIzAwNTM5MicsXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZVBlcmNlbnRhZ2U6ICc4MCUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0hlbGxlJyxcclxuICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZTogJ0hlbGxlIFRob3JuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0eUNvbG9yOiAnI2YwNGQ0NicsXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZVBlcmNlbnRhZ2U6ICc1MCUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZvdGVTdGFuZGluZ1NjaGVkdWxlci5hZGRVcGRhdGVMaXN0ZW5lcih0aGlzLm9uU2NoZWR1bGVyVXBkYXRlKTtcclxuICAgICAgICB2b3RlU3RhbmRpbmdTY2hlZHVsZXIuc3RhcnRTY2hlZHVsaW5nKHNjaGVkdWxlckNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY2hlZHVsZXJVcGRhdGUodm90ZVN0YW5kaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NjaGVkdWxlciB1cGRhdGUhJyk7XHJcbiAgICAgICAgdGhpcy5fbGF0ZXN0Vm90ZVN0YW5kaW5nID0gdm90ZVN0YW5kaW5nO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXRlc3RWb3RlU3RhbmRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhdGVzdFZvdGVTdGFuZGluZztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==