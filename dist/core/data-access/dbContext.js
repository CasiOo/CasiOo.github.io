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

                    this.startUpDate = new Date();
                    this.db = new Dexie('ElectionDatabase');
                    this.db.version(1).stores(schemaDefinition);

                    this.db.on('populate', this._populateData.bind(this));
                    this.db.open();
                }

                _createClass(DbContext, [{
                    key: '_populateData',
                    value: function _populateData() {
                        var startUpDate = this.startUpDate;
                        var db = this.db;
                        addElections();
                        addElectionParties();
                        addCandidates();
                        addElectionStandings();
                        console.log('Populate data complete');

                        function addElections() {
                            var start = startUpDate;
                            var end = new Date(start);
                            end.setFullYear(end.getFullYear() + 1);

                            db.elections.add({
                                period: {
                                    start: start.getTime(),
                                    end: end.getTime()
                                },
                                title: 'Folketingsvalg 2015'
                            });
                        }

                        function addElectionParties() {
                            db.electionParties.add({ electionId: 1, name: 'Venstre', shortName: 'Venstre', letter: 'V', color: '#234263' });
                            db.electionParties.add({ electionId: 1, name: 'Socialdemokraterne', shortName: 'Soc.dem.', letter: 'A', color: '#b32722' });
                            db.electionParties.add({ electionId: 1, name: 'Dansk Folkeparti', shortName: 'DF', letter: 'O', color: '#f5d040' });
                            db.electionParties.add({ electionId: 1, name: 'Enhedslisten', shortName: 'Enhl.', letter: 'Ø', color: '#ef801a' });
                            db.electionParties.add({ electionId: 1, name: 'Liberal Alliance', shortName: 'Lib. Al.', letter: 'I', color: '#22c8d1' });
                            db.electionParties.add({ electionId: 1, name: 'Kristendemokraterne', shortName: 'Krist.dem.', letter: 'K', color: '#8e8a76' });
                        }

                        function addCandidates() {
                            db.candidates.add({ electionId: 1, partyId: 1, name: 'Lars Løkke Rasmussen', shortName: 'Lars Løkke', isTopCandidate: true });
                            db.candidates.add({ electionId: 1, partyId: 2, name: 'Helle Thorning-Schmidt', shortName: 'Helle Thorning', isTopCandidate: true });
                            db.candidates.add({ electionId: 1, partyId: 3, name: 'Kristian Thulesen Dahl', shortName: 'Kristian Thulesen', isTopCandidate: true });
                            db.candidates.add({ electionId: 1, partyId: 4, name: 'Johanne Schmidt-Nielsen', shortName: 'Johanne Schmidt', isTopCandidate: true });
                            db.candidates.add({ electionId: 1, partyId: 5, name: 'Anders Samuelsen', shortName: 'Anders Samuelsen', isTopCandidate: true });
                            db.candidates.add({ electionId: 1, partyId: 6, name: 'Stig Grenov', shortName: 'Stig Grenov', isTopCandidate: true });
                        }

                        function addElectionStandings() {
                            var measurementDate = startUpDate;

                            db.electionStandings.add({
                                electionId: 1,
                                measurementDate: measurementDate.getTime(),
                                parties: [{ id: 1, votes: 100000 }, { id: 2, votes: 150000 }, { id: 3, votes: 140000 }, { id: 4, votes: 40000 }, { id: 5, votes: 35000 }, { id: 6, votes: 10000 }],
                                candidates: [{ id: 1, votes: 100000 }, { id: 2, votes: 150000 }, { id: 3, votes: 140000 }, { id: 4, votes: 40000 }, { id: 5, votes: 35000 }, { id: 6, votes: 5000 }]
                            });
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0YS1hY2Nlc3MvZGJDb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5Q0FLYSxTQUFTOzs7Ozs7Ozt1Q0FMZCxNQUFNOzs7Ozs7O0FBS0QscUJBQVM7QUFFUCx5QkFGRixTQUFTLENBRU4sZ0JBQWdCLEVBQUU7OztBQUUxQix3QkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzlCLHdCQUFJLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDeEMsd0JBQUksQ0FBQyxFQUFFLENBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNWLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUc5Qix3QkFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEQsd0JBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2xCOzs2QkFiUSxTQUFTOzsyQkFlTCx5QkFBRztBQUNaLDRCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ25DLDRCQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ2pCLG9DQUFZLEVBQUUsQ0FBQztBQUNmLDBDQUFrQixFQUFFLENBQUM7QUFDckIscUNBQWEsRUFBRSxDQUFDO0FBQ2hCLDRDQUFvQixFQUFFLENBQUM7QUFDdkIsK0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs7QUFFdEMsaUNBQVMsWUFBWSxHQUFHO0FBQ3BCLGdDQUFJLEtBQUssR0FBRyxXQUFXLENBQUM7QUFDeEIsZ0NBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLCtCQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFD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RUFDeEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRyxJQUFJLEVBQUUsQ0FDMUI7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOO3FCQUNKOzs7aUNBdEZRLFNBQVM7QUFBVCx5QkFBUyxHQURyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDWixTQUFTLEtBQVQsU0FBUzt1QkFBVCxTQUFTIiwiZmlsZSI6ImNvcmUvZGF0YS1hY2Nlc3MvZGJDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcclxuaW1wb3J0IHNjaGVtYURlZmluaXRpb24gZnJvbSAnY29yZS9kYXRhLWFjY2Vzcy9lbGVjdGlvbi1zY2hlbWEuMS5qc29uISc7XHJcblxyXG5AaW5qZWN0KHNjaGVtYURlZmluaXRpb24pXHJcbmV4cG9ydCBjbGFzcyBEYkNvbnRleHQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihzY2hlbWFEZWZpbml0aW9uKSB7XHJcbiAgICAgICAgLy8gT25seSB1c2VkIHdoZW4gd2UncmUgcG9wdWxhdGluZyBkYXRhXHJcbiAgICAgICAgdGhpcy5zdGFydFVwRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kYiA9IG5ldyBEZXhpZSgnRWxlY3Rpb25EYXRhYmFzZScpOyBcclxuICAgICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAgIC52ZXJzaW9uKDEpXHJcbiAgICAgICAgICAgIC5zdG9yZXMoc2NoZW1hRGVmaW5pdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGRhdGFiYXNlIHdpdGggc29tZSBzdGFydC11cCBkYXRhXHJcbiAgICAgICAgdGhpcy5kYi5vbigncG9wdWxhdGUnLCB0aGlzLl9wb3B1bGF0ZURhdGEuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5kYi5vcGVuKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9wb3B1bGF0ZURhdGEoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VXBEYXRlID0gdGhpcy5zdGFydFVwRGF0ZTtcclxuICAgICAgICB2YXIgZGIgPSB0aGlzLmRiO1xyXG4gICAgICAgIGFkZEVsZWN0aW9ucygpO1xyXG4gICAgICAgIGFkZEVsZWN0aW9uUGFydGllcygpO1xyXG4gICAgICAgIGFkZENhbmRpZGF0ZXMoKTtcclxuICAgICAgICBhZGRFbGVjdGlvblN0YW5kaW5ncygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQb3B1bGF0ZSBkYXRhIGNvbXBsZXRlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkRWxlY3Rpb25zKCkge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBzdGFydFVwRGF0ZTtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IG5ldyBEYXRlKHN0YXJ0KTtcclxuICAgICAgICAgICAgZW5kLnNldEZ1bGxZZWFyKGVuZC5nZXRGdWxsWWVhcigpICsgMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYi5lbGVjdGlvbnMuYWRkKHsgXHJcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogZW5kLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRm9sa2V0aW5nc3ZhbGcgMjAxNSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZWN0aW9uUGFydGllcygpIHtcclxuICAgICAgICAgICAgZGIuZWxlY3Rpb25QYXJ0aWVzLmFkZCh7IGVsZWN0aW9uSWQ6IDEsIG5hbWU6ICdWZW5zdHJlJywgc2hvcnROYW1lOiAnVmVuc3RyZScsIGxldHRlcjogJ1YnLCBjb2xvcjogJyMyMzQyNjMnIH0pO1xyXG4gICAgICAgICAgICBkYi5lbGVjdGlvblBhcnRpZXMuYWRkKHsgZWxlY3Rpb25JZDogMSwgbmFtZTogJ1NvY2lhbGRlbW9rcmF0ZXJuZScsIHNob3J0TmFtZTogJ1NvYy5kZW0uJywgbGV0dGVyOiAnQScsIGNvbG9yOiAnI2IzMjcyMicgfSk7XHJcbiAgICAgICAgICAgIGRiLmVsZWN0aW9uUGFydGllcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBuYW1lOiAnRGFuc2sgRm9sa2VwYXJ0aScsIHNob3J0TmFtZTogJ0RGJywgbGV0dGVyOiAnTycsIGNvbG9yOiAnI2Y1ZDA0MCcgfSk7XHJcbiAgICAgICAgICAgIGRiLmVsZWN0aW9uUGFydGllcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBuYW1lOiAnRW5oZWRzbGlzdGVuJywgc2hvcnROYW1lOiAnRW5obC4nLCBsZXR0ZXI6ICfDmCcsIGNvbG9yOiAnI2VmODAxYScgfSk7XHJcbiAgICAgICAgICAgIGRiLmVsZWN0aW9uUGFydGllcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBuYW1lOiAnTGliZXJhbCBBbGxpYW5jZScsIHNob3J0TmFtZTogJ0xpYi4gQWwuJywgbGV0dGVyOiAnSScsIGNvbG9yOiAnIzIyYzhkMScgfSk7XHJcbiAgICAgICAgICAgIGRiLmVsZWN0aW9uUGFydGllcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBuYW1lOiAnS3Jpc3RlbmRlbW9rcmF0ZXJuZScsIHNob3J0TmFtZTogJ0tyaXN0LmRlbS4nLCBsZXR0ZXI6ICdLJywgY29sb3I6ICcjOGU4YTc2JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQ2FuZGlkYXRlcygpIHtcclxuICAgICAgICAgICAgZGIuY2FuZGlkYXRlcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBwYXJ0eUlkOiAxLCBuYW1lOiAnTGFycyBMw7hra2UgUmFzbXVzc2VuJywgc2hvcnROYW1lOiAnTGFycyBMw7hra2UnLCBpc1RvcENhbmRpZGF0ZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgZGIuY2FuZGlkYXRlcy5hZGQoeyBlbGVjdGlvbklkOiAxLCBwYXJ0eUlkOiAyLCBuYW1lOiAnSGVsbGUgVGhvcm5pbmctU2NobWlkdCcsIHNob3J0TmFtZTogJ0hlbGxlIFRob3JuaW5nJywgaXNUb3BDYW5kaWRhdGU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRiLmNhbmRpZGF0ZXMuYWRkKHsgZWxlY3Rpb25JZDogMSwgcGFydHlJZDogMywgbmFtZTogJ0tyaXN0aWFuIFRodWxlc2VuIERhaGwnLCBzaG9ydE5hbWU6ICdLcmlzdGlhbiBUaHVsZXNlbicsIGlzVG9wQ2FuZGlkYXRlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkYi5jYW5kaWRhdGVzLmFkZCh7IGVsZWN0aW9uSWQ6IDEsIHBhcnR5SWQ6IDQsIG5hbWU6ICdKb2hhbm5lIFNjaG1pZHQtTmllbHNlbicsIHNob3J0TmFtZTogJ0pvaGFubmUgU2NobWlkdCcsIGlzVG9wQ2FuZGlkYXRlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkYi5jYW5kaWRhdGVzLmFkZCh7IGVsZWN0aW9uSWQ6IDEsIHBhcnR5SWQ6IDUsIG5hbWU6ICdBbmRlcnMgU2FtdWVsc2VuJywgc2hvcnROYW1lOiAnQW5kZXJzIFNhbXVlbHNlbicsIGlzVG9wQ2FuZGlkYXRlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkYi5jYW5kaWRhdGVzLmFkZCh7IGVsZWN0aW9uSWQ6IDEsIHBhcnR5SWQ6IDYsIG5hbWU6ICdTdGlnIEdyZW5vdicsIHNob3J0TmFtZTogJ1N0aWcgR3Jlbm92JywgaXNUb3BDYW5kaWRhdGU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVsZWN0aW9uU3RhbmRpbmdzKCkge1xyXG4gICAgICAgICAgICB2YXIgbWVhc3VyZW1lbnREYXRlID0gc3RhcnRVcERhdGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYi5lbGVjdGlvblN0YW5kaW5ncy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgZWxlY3Rpb25JZDogMSxcclxuICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50RGF0ZTogbWVhc3VyZW1lbnREYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHBhcnRpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAxLCB2b3RlczogMTAwMDAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogMiwgdm90ZXM6IDE1MDAwMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IDMsIHZvdGVzOiAxNDAwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA0LCB2b3RlczogNDAwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA1LCB2b3RlczogMzUwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA2LCB2b3RlczogIDEwMDAwIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geyBpZDogMSwgdm90ZXM6IDY4NTE4OCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgaWQ6IDIsIHZvdGVzOiA5MjQ5NDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7IGlkOiAzLCB2b3RlczogNzQxNzQ2IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geyBpZDogNCwgdm90ZXM6IDI3NDQ2MyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgaWQ6IDUsIHZvdGVzOiAyNjUxMjkgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7IGlkOiA2LCB2b3RlczogIDI5MDc3IH1cclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiAxLCB2b3RlczogMTAwMDAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogMiwgdm90ZXM6IDE1MDAwMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWQ6IDMsIHZvdGVzOiAxNDAwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA0LCB2b3RlczogNDAwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA1LCB2b3RlczogMzUwMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGlkOiA2LCB2b3RlczogIDUwMDAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=