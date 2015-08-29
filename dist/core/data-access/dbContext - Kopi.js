System.register(['aurelia-framework', 'dexie', 'core/data-access/election-schema.1.json!'], function (_export) {
    'use strict';

    var inject, Dexie, schemaDefinition, DbContext;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_dexie) {
            Dexie = _dexie['default'];
        }, function (_coreDataAccessElectionSchema1Json) {
            schemaDefinition = _coreDataAccessElectionSchema1Json['default'];
        }],
        execute: function () {
            DbContext = (function () {
                function DbContext(schemaDefinition) {
                    _classCallCheck(this, _DbContext);

                    this.db = new Dexie('ElectionDatabase');
                    this.db.version(1).stores(schemaDefinition);

                    this.db.on('populate', this.populateData.bind(this));
                    this.db.open();
                }

                _createClass(DbContext, [{
                    key: 'populateData',
                    value: function populateData() {
                        var db = this.db;
                        addParties();
                        addPoliticians();
                        addElections();
                        addElectionStandings();
                        console.log('End');

                        function addParties() {
                            db.parties.add({ name: 'Venstre', shortName: 'Venstre', letter: 'V', color: '#234263' });
                            db.parties.add({ name: 'Socialdemokraterne', shortName: 'Soc.dem.', letter: 'A', color: '#b32722' });
                            db.parties.add({ name: 'Dansk Folkeparti', shortName: 'DF', letter: 'O', color: '#f5d040' });
                            db.parties.add({ name: 'Enhedslisten', shortName: 'Enhl.', letter: 'Ø', color: '#ef801a' });
                            db.parties.add({ name: 'Liberal Alliance', shortName: 'Lib. Al.', letter: 'I', color: '#22c8d1' });
                            db.parties.add({ name: 'Kristendemokraterne', shortName: 'Krist.dem.', letter: 'K', color: '#8e8a76' });
                        }

                        function addPoliticians() {
                            db.politicians.add({ partyId: 1, name: 'Lars Løkke Rasmussen', shortName: 'Lars Løkke' });
                            db.politicians.add({ partyId: 2, name: 'Helle Thorning-Schmidt', shortName: 'Helle Thorning' });
                            db.politicians.add({ partyId: 3, name: 'Kristian Thulesen Dahl', shortName: 'Kristian Thulesen' });
                            db.politicians.add({ partyId: 4, name: 'Johanne Schmidt-Nielsen', shortName: 'Johanne Schmidt' });
                            db.politicians.add({ partyId: 5, name: 'Anders Samuelsen', shortName: 'Anders Samuelsen' });
                            db.politicians.add({ partyId: 6, name: 'Stig Grenov', shortName: 'Stig Grenov' });
                        }

                        function addElections() {}

                        function addElectionStandings() {}
                    }
                }]);

                var _DbContext = DbContext;
                DbContext = inject(schemaDefinition)(DbContext) || DbContext;
                return DbContext;
            })();

            _export('DbContext', DbContext);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0YS1hY2Nlc3MvZGJDb250ZXh0IC0gS29waS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUNBS2EsU0FBUzs7Ozs7Ozs7dUNBTGQsTUFBTTs7Ozs7OztBQUtELHFCQUFTO0FBRVAseUJBRkYsU0FBUyxDQUVOLGdCQUFnQixFQUFFOzs7QUFDMUIsd0JBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUN4Qyx3QkFBSSxDQUFDLEVBQUUsQ0FDRixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRzlCLHdCQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRCx3QkFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEI7OzZCQVhRLFNBQVM7OzJCQWFOLHdCQUFHO0FBQ1gsNEJBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDakIsa0NBQVUsRUFBRSxDQUFDO0FBQ2Isc0NBQWMsRUFBRSxDQUFDO0FBQ2pCLG9DQUFZLEVBQUUsQ0FBQztBQUNmLDRDQUFvQixFQUFFLENBQUM7QUFDdkIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5CLGlDQUFTLFVBQVUsR0FBRztBQUNsQiw4QkFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN6Riw4QkFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3JHLDhCQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDN0YsOEJBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDNUYsOEJBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNuRyw4QkFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRzs7QUFFRCxpQ0FBUyxjQUFjLEdBQUc7QUFDdEIsOEJBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDMUYsOEJBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUNoRyw4QkFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBQ25HLDhCQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDbEcsOEJBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztBQUM1Riw4QkFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7eUJBQ3JGOztBQUVELGlDQUFTLFlBQVksR0FBRyxFQXlCdkI7O0FBRUQsaUNBQVMsb0JBQW9CLEdBQUcsRUFjL0I7cUJBQ0o7OztpQ0FqRlEsU0FBUztBQUFULHlCQUFTLEdBRHJCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNaLFNBQVMsS0FBVCxTQUFTO3VCQUFULFNBQVMiLCJmaWxlIjoiY29yZS9kYXRhLWFjY2Vzcy9kYkNvbnRleHQgLSBLb3BpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcclxuaW1wb3J0IHNjaGVtYURlZmluaXRpb24gZnJvbSAnY29yZS9kYXRhLWFjY2Vzcy9lbGVjdGlvbi1zY2hlbWEuMS5qc29uISc7XHJcblxyXG5AaW5qZWN0KHNjaGVtYURlZmluaXRpb24pXHJcbmV4cG9ydCBjbGFzcyBEYkNvbnRleHQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihzY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYiA9IG5ldyBEZXhpZSgnRWxlY3Rpb25EYXRhYmFzZScpOyBcclxuICAgICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAgIC52ZXJzaW9uKDEpXHJcbiAgICAgICAgICAgIC5zdG9yZXMoc2NoZW1hRGVmaW5pdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGRhdGFiYXNlIHdpdGggc29tZSBzdGFydC11cCBkYXRhXHJcbiAgICAgICAgdGhpcy5kYi5vbigncG9wdWxhdGUnLCB0aGlzLnBvcHVsYXRlRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmRiLm9wZW4oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcG9wdWxhdGVEYXRhKCkge1xyXG4gICAgICAgIHZhciBkYiA9IHRoaXMuZGI7XHJcbiAgICAgICAgYWRkUGFydGllcygpO1xyXG4gICAgICAgIGFkZFBvbGl0aWNpYW5zKCk7XHJcbiAgICAgICAgYWRkRWxlY3Rpb25zKCk7XHJcbiAgICAgICAgYWRkRWxlY3Rpb25TdGFuZGluZ3MoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW5kJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkUGFydGllcygpIHtcclxuICAgICAgICAgICAgZGIucGFydGllcy5hZGQoeyBuYW1lOiAnVmVuc3RyZScsIHNob3J0TmFtZTogJ1ZlbnN0cmUnLCBsZXR0ZXI6ICdWJywgY29sb3I6ICcjMjM0MjYzJyB9KTtcclxuICAgICAgICAgICAgZGIucGFydGllcy5hZGQoeyBuYW1lOiAnU29jaWFsZGVtb2tyYXRlcm5lJywgc2hvcnROYW1lOiAnU29jLmRlbS4nLCBsZXR0ZXI6ICdBJywgY29sb3I6ICcjYjMyNzIyJyB9KTtcclxuICAgICAgICAgICAgZGIucGFydGllcy5hZGQoeyBuYW1lOiAnRGFuc2sgRm9sa2VwYXJ0aScsIHNob3J0TmFtZTogJ0RGJywgbGV0dGVyOiAnTycsIGNvbG9yOiAnI2Y1ZDA0MCcgfSk7XHJcbiAgICAgICAgICAgIGRiLnBhcnRpZXMuYWRkKHsgbmFtZTogJ0VuaGVkc2xpc3RlbicsIHNob3J0TmFtZTogJ0VuaGwuJywgbGV0dGVyOiAnw5gnLCBjb2xvcjogJyNlZjgwMWEnIH0pO1xyXG4gICAgICAgICAgICBkYi5wYXJ0aWVzLmFkZCh7IG5hbWU6ICdMaWJlcmFsIEFsbGlhbmNlJywgc2hvcnROYW1lOiAnTGliLiBBbC4nLCBsZXR0ZXI6ICdJJywgY29sb3I6ICcjMjJjOGQxJyB9KTtcclxuICAgICAgICAgICAgZGIucGFydGllcy5hZGQoeyBuYW1lOiAnS3Jpc3RlbmRlbW9rcmF0ZXJuZScsIHNob3J0TmFtZTogJ0tyaXN0LmRlbS4nLCBsZXR0ZXI6ICdLJywgY29sb3I6ICcjOGU4YTc2JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkUG9saXRpY2lhbnMoKSB7XHJcbiAgICAgICAgICAgIGRiLnBvbGl0aWNpYW5zLmFkZCh7IHBhcnR5SWQ6IDEsIG5hbWU6ICdMYXJzIEzDuGtrZSBSYXNtdXNzZW4nLCBzaG9ydE5hbWU6ICdMYXJzIEzDuGtrZScgfSk7XHJcbiAgICAgICAgICAgIGRiLnBvbGl0aWNpYW5zLmFkZCh7IHBhcnR5SWQ6IDIsIG5hbWU6ICdIZWxsZSBUaG9ybmluZy1TY2htaWR0Jywgc2hvcnROYW1lOiAnSGVsbGUgVGhvcm5pbmcnIH0pO1xyXG4gICAgICAgICAgICBkYi5wb2xpdGljaWFucy5hZGQoeyBwYXJ0eUlkOiAzLCBuYW1lOiAnS3Jpc3RpYW4gVGh1bGVzZW4gRGFobCcsIHNob3J0TmFtZTogJ0tyaXN0aWFuIFRodWxlc2VuJyB9KTtcclxuICAgICAgICAgICAgZGIucG9saXRpY2lhbnMuYWRkKHsgcGFydHlJZDogNCwgbmFtZTogJ0pvaGFubmUgU2NobWlkdC1OaWVsc2VuJywgc2hvcnROYW1lOiAnSm9oYW5uZSBTY2htaWR0JyB9KTtcclxuICAgICAgICAgICAgZGIucG9saXRpY2lhbnMuYWRkKHsgcGFydHlJZDogNSwgbmFtZTogJ0FuZGVycyBTYW11ZWxzZW4nLCBzaG9ydE5hbWU6ICdBbmRlcnMgU2FtdWVsc2VuJyB9KTtcclxuICAgICAgICAgICAgZGIucG9saXRpY2lhbnMuYWRkKHsgcGFydHlJZDogNiwgbmFtZTogJ1N0aWcgR3Jlbm92Jywgc2hvcnROYW1lOiAnU3RpZyBHcmVub3YnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBhZGRFbGVjdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBuZXcgRGF0ZShzdGFydCk7XHJcbiAgICAgICAgICAgIGVuZC5zZXRGdWxsWWVhcihlbmQuZ2V0RnVsbFllYXIoKSArIDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGIuZWxlY3Rpb25zLmFkZCh7IFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGVuZC5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZvbGtldGluZ3N2YWxnIDIwMTUnLFxyXG4gICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgcGFydHkgaWQgYW5kIHRvcCBjYW5kaWRhdGUgaWRcclxuICAgICAgICAgICAgICAgIHBhcnRpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAxLCB0b3BDYW5kaWRhdGVJZDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IDIsIHRvcENhbmRpZGF0ZUlkOiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogMywgdG9wQ2FuZGlkYXRlSWQ6IDMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA0LCB0b3BDYW5kaWRhdGVJZDogNCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IDUsIHRvcENhbmRpZGF0ZUlkOiA1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogNiwgdG9wQ2FuZGlkYXRlSWQ6IDYgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5IG9mIGNhbmRpZGF0ZSBpZCdzXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGVzOiBbMSwgMiwgMywgNCwgNSwgNl1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZWN0aW9uU3RhbmRpbmdzKCkge1xyXG4gICAgICAgICAgICAvLyB2YXIgbWVhc3VyZW1lbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgLy8gZGIuZWxlY3Rpb25TdGFuZGluZ3MuYWRkKHtcclxuICAgICAgICAgICAgICAgIC8vIGVsZWN0aW9uSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAvLyBtZWFzdXJlbWVudERhdGU6IG1lYXN1cmVtZW50RGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICAvLyB2b3RlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogMSwgdm90ZXM6IDY4NTE4OCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogMiwgdm90ZXM6IDkyNDk0MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogMywgdm90ZXM6IDc0MTc0NiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogNCwgdm90ZXM6IDI3NDQ2MyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogNSwgdm90ZXM6IDI2NTEyOSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgcGFydHlJZDogNiwgdm90ZXM6ICAyOTA3NyB9XHJcbiAgICAgICAgICAgICAgICAvLyBdXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==