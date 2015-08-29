System.register(['events', 'aurelia-framework'], function (_export) {
    'use strict';

    var EventEmitter, transient, VoteStandingScheduler, SchedulingConfig;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_events) {
            EventEmitter = _events.EventEmitter;
        }, function (_aureliaFramework) {
            transient = _aureliaFramework.transient;
        }],
        execute: function () {
            VoteStandingScheduler = (function () {
                function VoteStandingScheduler(timeInterval) {
                    _classCallCheck(this, _VoteStandingScheduler);

                    this.eventEmitter = new EventEmitter();
                }

                _createClass(VoteStandingScheduler, [{
                    key: 'startScheduling',
                    value: function startScheduling(schedulingConfig) {
                        console.log('Started scheduling with timeinterval: ' + schedulingConfig.timeInterval);
                    }
                }, {
                    key: 'addUpdateListener',
                    value: function addUpdateListener(listener) {
                        this.eventEmitter.on('update', listener);
                    }
                }, {
                    key: 'removeUpdateListener',
                    value: function removeUpdateListener(listener) {
                        this.eventEmitter.off('update', listener);
                    }
                }]);

                var _VoteStandingScheduler = VoteStandingScheduler;
                VoteStandingScheduler = transient()(VoteStandingScheduler) || VoteStandingScheduler;
                return VoteStandingScheduler;
            })();

            _export('VoteStandingScheduler', VoteStandingScheduler);

            SchedulingConfig = function SchedulingConfig(timeInterval) {
                _classCallCheck(this, SchedulingConfig);

                this.timeInterval = timeInterval || 3000;
            };

            _export('SchedulingConfig', SchedulingConfig);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdm90ZS1zdGFuZGluZy92b3RlU3RhbmRpbmdTY2hlZHVsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lDQUlhLHFCQUFxQixFQW1CckIsZ0JBQWdCOzs7Ozs7OzttQ0F2QnJCLFlBQVk7OzBDQUNaLFNBQVM7OztBQUdKLGlDQUFxQjtBQUVuQix5QkFGRixxQkFBcUIsQ0FFbEIsWUFBWSxFQUFFOzs7QUFDdEIsd0JBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztpQkFDMUM7OzZCQUpRLHFCQUFxQjs7MkJBTWYseUJBQUMsZ0JBQWdCLEVBQUU7QUFDOUIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQ3pGOzs7MkJBRWdCLDJCQUFDLFFBQVEsRUFBRTtBQUN4Qiw0QkFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUM1Qzs7OzJCQUVtQiw4QkFBQyxRQUFRLEVBQUU7QUFDM0IsNEJBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDN0M7Ozs2Q0FoQlEscUJBQXFCO0FBQXJCLHFDQUFxQixHQURqQyxTQUFTLEVBQUUsQ0FDQyxxQkFBcUIsS0FBckIscUJBQXFCO3VCQUFyQixxQkFBcUI7Ozs7O0FBbUJyQiw0QkFBZ0IsR0FFZCxTQUZGLGdCQUFnQixDQUViLFlBQVksRUFBRTtzQ0FGakIsZ0JBQWdCOztBQUdyQixvQkFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDO2FBQzVDIiwiZmlsZSI6ImNvcmUvdm90ZS1zdGFuZGluZy92b3RlU3RhbmRpbmdTY2hlZHVsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcclxuaW1wb3J0IHt0cmFuc2llbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkB0cmFuc2llbnQoKVxyXG5leHBvcnQgY2xhc3MgVm90ZVN0YW5kaW5nU2NoZWR1bGVyIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IodGltZUludGVydmFsKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXJ0U2NoZWR1bGluZyhzY2hlZHVsaW5nQ29uZmlnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgc2NoZWR1bGluZyB3aXRoIHRpbWVpbnRlcnZhbDogJyArIHNjaGVkdWxpbmdDb25maWcudGltZUludGVydmFsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkVXBkYXRlTGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndXBkYXRlJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVVcGRhdGVMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9mZigndXBkYXRlJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NoZWR1bGluZ0NvbmZpZyB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHRpbWVJbnRlcnZhbCkge1xyXG4gICAgICAgIHRoaXMudGltZUludGVydmFsID0gdGltZUludGVydmFsIHx8IDMwMDA7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=