System.register(['aurelia-framework', 'core/data-access/dbContext', 'core/data-access/electionStandingBuilder'], function (_export) {
    'use strict';

    var inject, DbContext, ElectionStandingBuilder, ElectionRepository;

    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_coreDataAccessDbContext) {
            DbContext = _coreDataAccessDbContext.DbContext;
        }, function (_coreDataAccessElectionStandingBuilder) {
            ElectionStandingBuilder = _coreDataAccessElectionStandingBuilder.ElectionStandingBuilder;
        }],
        execute: function () {
            ElectionRepository = (function () {
                function ElectionRepository(dbContext, electionStandingBuilder) {
                    _classCallCheck(this, _ElectionRepository);

                    this.db = dbContext.db;
                    this.electionStandingBuilder = electionStandingBuilder;
                }

                _createClass(ElectionRepository, [{
                    key: 'getElections',
                    value: function getElections() {
                        return this.db.elections.toArray();
                    }
                }, {
                    key: 'getCandidates',
                    value: function getCandidates(electionId) {
                        return this.db.candidates.where('electionId').equals(electionId).toArray();
                    }
                }, {
                    key: 'getParties',
                    value: function getParties(electionId) {
                        return this.db.electionParties.where('electionId').equals(electionId).toArray();
                    }
                }, {
                    key: 'getCurrentElection',
                    value: function getCurrentElection() {}
                }, {
                    key: 'getLatestElectionStanding',
                    value: function getLatestElectionStanding(electionId) {
                        var _this = this;

                        var measurementDate = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];

                        var measurementTime = measurementDate.getTime();
                        var candidatesPromise = this.getCandidates(electionId);
                        var partiesPromise = this.getParties(electionId);
                        var standingPromise = this.db.electionStandings.where('measurementDate').belowOrEqual(measurementDate).and(function (standing) {
                            return standing.electionId === electionId;
                        }).last();

                        return Promise.all([candidatesPromise, partiesPromise, standingPromise]).then(function (values) {
                            var _values = _slicedToArray(values, 3);

                            var candidates = _values[0];
                            var parties = _values[1];
                            var standing = _values[2];

                            return _this.electionStandingBuilder.candidates(candidates).parties(parties).standing(standing).build();
                        });
                    }
                }, {
                    key: 'addElectionStanding',
                    value: function addElectionStanding(standing) {
                        return this.db.electionStandings.add(standing);
                    }
                }]);

                var _ElectionRepository = ElectionRepository;
                ElectionRepository = inject(DbContext, ElectionStandingBuilder)(ElectionRepository) || ElectionRepository;
                return ElectionRepository;
            })();

            _export('ElectionRepository', ElectionRepository);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0YS1hY2Nlc3MvZWxlY3Rpb25SZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvREFLYSxrQkFBa0I7Ozs7Ozs7Ozs7dUNBTHZCLE1BQU07O2lEQUNOLFNBQVM7OzZFQUNULHVCQUF1Qjs7O0FBR2xCLDhCQUFrQjtBQUVoQix5QkFGRixrQkFBa0IsQ0FFZixTQUFTLEVBQUUsdUJBQXVCLEVBQUU7OztBQUM1Qyx3QkFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDO0FBQ3ZCLHdCQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7aUJBQzFEOzs2QkFMUSxrQkFBa0I7OzJCQU9mLHdCQUFHO0FBQ1gsK0JBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3RDOzs7MkJBRVksdUJBQUMsVUFBVSxFQUFFO0FBQ3RCLCtCQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQzlFOzs7MkJBRVMsb0JBQUMsVUFBVSxFQUFFO0FBQ25CLCtCQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ25GOzs7MkJBRWlCLDhCQUFHLEVBRXBCOzs7MkJBR3dCLG1DQUFDLFVBQVUsRUFBZ0M7Ozs0QkFBOUIsZUFBZSx5REFBRyxJQUFJLElBQUksRUFBRTs7QUFDOUQsNEJBQUksZUFBZSxHQUFLLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNsRCw0QkFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZELDRCQUFJLGNBQWMsR0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELDRCQUFJLGVBQWUsR0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUNqQixLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQ3RELEdBQUcsQ0FBQyxVQUFBLFFBQVE7bUNBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVO3lCQUFBLENBQUMsQ0FDbkQsSUFBSSxFQUFFLENBQUM7O0FBRXZDLCtCQUFPLE9BQU8sQ0FDTCxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FDekQsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO3lEQUN3QixNQUFNOztnQ0FBdkMsVUFBVTtnQ0FBRSxPQUFPO2dDQUFFLFFBQVE7O0FBQ2xDLG1DQUFPLE1BQUssdUJBQXVCLENBQ3pCLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDdEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUNoQixRQUFRLENBQUMsUUFBUSxDQUFDLENBQ2xCLEtBQUssRUFBRSxDQUFDO3lCQUNyQixDQUFDLENBQUM7cUJBQ2Q7OzsyQkFFa0IsNkJBQUMsUUFBUSxFQUFFO0FBQzFCLCtCQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRDs7OzBDQS9DUSxrQkFBa0I7QUFBbEIsa0NBQWtCLEdBRDlCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLENBQUMsQ0FDOUIsa0JBQWtCLEtBQWxCLGtCQUFrQjt1QkFBbEIsa0JBQWtCIiwiZmlsZSI6ImNvcmUvZGF0YS1hY2Nlc3MvZWxlY3Rpb25SZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtEYkNvbnRleHR9IGZyb20gJ2NvcmUvZGF0YS1hY2Nlc3MvZGJDb250ZXh0JztcclxuaW1wb3J0IHtFbGVjdGlvblN0YW5kaW5nQnVpbGRlcn0gZnJvbSAnY29yZS9kYXRhLWFjY2Vzcy9lbGVjdGlvblN0YW5kaW5nQnVpbGRlcic7XHJcblxyXG5AaW5qZWN0KERiQ29udGV4dCwgRWxlY3Rpb25TdGFuZGluZ0J1aWxkZXIpXHJcbmV4cG9ydCBjbGFzcyBFbGVjdGlvblJlcG9zaXRvcnkge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihkYkNvbnRleHQsIGVsZWN0aW9uU3RhbmRpbmdCdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5kYiA9IGRiQ29udGV4dC5kYjtcclxuICAgICAgICB0aGlzLmVsZWN0aW9uU3RhbmRpbmdCdWlsZGVyID0gZWxlY3Rpb25TdGFuZGluZ0J1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEVsZWN0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5lbGVjdGlvbnMudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRDYW5kaWRhdGVzKGVsZWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5jYW5kaWRhdGVzLndoZXJlKCdlbGVjdGlvbklkJykuZXF1YWxzKGVsZWN0aW9uSWQpLnRvQXJyYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGFydGllcyhlbGVjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuZWxlY3Rpb25QYXJ0aWVzLndoZXJlKCdlbGVjdGlvbklkJykuZXF1YWxzKGVsZWN0aW9uSWQpLnRvQXJyYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q3VycmVudEVsZWN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTZWFyY2ggZm9yIHRoZSBsYXRlc3Qgc3RhbmRpbmcsIGVxdWFsIHRvIG9yIGJlZm9yZSBtZWFzdXJlbWVudERhdGVcclxuICAgIGdldExhdGVzdEVsZWN0aW9uU3RhbmRpbmcoZWxlY3Rpb25JZCwgbWVhc3VyZW1lbnREYXRlID0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgIGxldCBtZWFzdXJlbWVudFRpbWUgICA9IG1lYXN1cmVtZW50RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXNQcm9taXNlID0gdGhpcy5nZXRDYW5kaWRhdGVzKGVsZWN0aW9uSWQpO1xyXG4gICAgICAgIGxldCBwYXJ0aWVzUHJvbWlzZSAgICA9IHRoaXMuZ2V0UGFydGllcyhlbGVjdGlvbklkKTtcclxuICAgICAgICBsZXQgc3RhbmRpbmdQcm9taXNlICAgPSB0aGlzLmRiLmVsZWN0aW9uU3RhbmRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aGVyZSgnbWVhc3VyZW1lbnREYXRlJykuYmVsb3dPckVxdWFsKG1lYXN1cmVtZW50RGF0ZSkgLy8gU29ydHMgbmF0dXJhbGx5IG9uIHRoZSBtZWFzdXJlbWVudERhdGUgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuZChzdGFuZGluZyA9PiBzdGFuZGluZy5lbGVjdGlvbklkID09PSBlbGVjdGlvbklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFzdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAuYWxsKFtjYW5kaWRhdGVzUHJvbWlzZSwgcGFydGllc1Byb21pc2UsIHN0YW5kaW5nUHJvbWlzZV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IFtjYW5kaWRhdGVzLCBwYXJ0aWVzLCBzdGFuZGluZ10gPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3Rpb25TdGFuZGluZ0J1aWxkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FuZGlkYXRlcyhjYW5kaWRhdGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJ0aWVzKHBhcnRpZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YW5kaW5nKHN0YW5kaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idWlsZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZEVsZWN0aW9uU3RhbmRpbmcoc3RhbmRpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYi5lbGVjdGlvblN0YW5kaW5ncy5hZGQoc3RhbmRpbmcpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9