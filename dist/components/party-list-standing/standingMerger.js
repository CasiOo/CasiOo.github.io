System.register([], function (_export) {
    'use strict';

    var StandingMerger;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            StandingMerger = (function () {
                function StandingMerger() {
                    _classCallCheck(this, StandingMerger);
                }

                _createClass(StandingMerger, [{
                    key: 'merge',
                    value: function merge(standing1, standing2) {
                        if (!standing1 || !standing2) return standing1;

                        standing1.id = standing2.id;
                        standing1.electionId = standing2.electionId;
                        standing1.measurementDate = standing2.measurementDate;

                        this._mergeParties(standing1.parties, standing2.parties);

                        this._mergeCandidates(standing1.candidates, standing2.candidates);

                        return standing1;
                    }
                }, {
                    key: '_mergeParties',
                    value: function _mergeParties(parties1, parties2) {
                        parties2.forEach(function (party2) {
                            var party1 = parties1.find(function (party) {
                                return party.id === party2.id;
                            });

                            if (party1) {
                                party1.votes = party2.votes;
                                party1.votePercentage = party2.votePercentage;
                            } else {
                                parties1.push(party2);
                            }

                            if (party2.letter === 'V') {
                                console.log('Buuh ' + party1.votes);
                            }
                        });
                    }
                }, {
                    key: '_mergeCandidates',
                    value: function _mergeCandidates(candidates1, candidates2) {
                        candidates2.forEach(function (candidate2) {
                            var candidate1 = candidates1.find(function (candidate) {
                                return candidate.id === candidate2.id;
                            });

                            if (candidate1) {
                                candidate1.votes = candidate2.votes;
                                candidate1.votePercentage = candidate2.votePercentage;
                            } else {
                                candidates1.push(candidate2);
                            }
                        });
                    }
                }]);

                return StandingMerger;
            })();

            _export('StandingMerger', StandingMerger);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9zdGFuZGluZ01lcmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFJYSxjQUFjOzs7Ozs7Ozs7QUFBZCwwQkFBYzt5QkFBZCxjQUFjOzBDQUFkLGNBQWM7Ozs2QkFBZCxjQUFjOzsyQkFFbEIsZUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO0FBQ3hCLDRCQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUN4QixPQUFPLFNBQVMsQ0FBQzs7QUFFckIsaUNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztBQUM1QixpQ0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQzVDLGlDQUFTLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7O0FBRXRELDRCQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUV6RCw0QkFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUlsRSwrQkFBTyxTQUFTLENBQUM7cUJBQ3BCOzs7MkJBRVksdUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUM5QixnQ0FBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN2QixnQ0FBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7dUNBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRTs2QkFBQSxDQUFDLENBQUM7O0FBRTVELGdDQUFJLE1BQU0sRUFBRTtBQUVSLHNDQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDNUIsc0NBQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQzs2QkFDakQsTUFDSTtBQUVELHdDQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUN6Qjs7QUFFRCxnQ0FBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtBQUN2Qix1Q0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUN2Qzt5QkFDSixDQUFDLENBQUM7cUJBQ047OzsyQkFFZSwwQkFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLG1DQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVSxFQUFJO0FBQzlCLGdDQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUzt1Q0FBSSxTQUFTLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQyxFQUFFOzZCQUFBLENBQUMsQ0FBQzs7QUFFL0UsZ0NBQUksVUFBVSxFQUFFO0FBRVosMENBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztBQUNwQywwQ0FBVSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDOzZCQUN6RCxNQUNJO0FBRUQsMkNBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NkJBQ2hDO3lCQUNKLENBQUMsQ0FBQztxQkFDTjs7O3VCQXJEUSxjQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFydHktbGlzdC1zdGFuZGluZy9zdGFuZGluZ01lcmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEpVU1QgQSBURVNUIElNUEwuIEZPUiBUUkFOU0lUSU9OUywgTk9UIENVUlJFTlRMWSBVU0VEXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YW5kaW5nTWVyZ2VyIHtcclxuICAgIFxyXG4gICAgbWVyZ2Uoc3RhbmRpbmcxLCBzdGFuZGluZzIpIHtcclxuICAgICAgICBpZiAoIXN0YW5kaW5nMSB8fCAhc3RhbmRpbmcyKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhbmRpbmcxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN0YW5kaW5nMS5pZCA9IHN0YW5kaW5nMi5pZDtcclxuICAgICAgICBzdGFuZGluZzEuZWxlY3Rpb25JZCA9IHN0YW5kaW5nMi5lbGVjdGlvbklkO1xyXG4gICAgICAgIHN0YW5kaW5nMS5tZWFzdXJlbWVudERhdGUgPSBzdGFuZGluZzIubWVhc3VyZW1lbnREYXRlO1xyXG4gICAgICAgIC8vVE9ETyByZW1vdmUgcmVtb3ZlZCBwYXJ0aWVzXHJcbiAgICAgICAgdGhpcy5fbWVyZ2VQYXJ0aWVzKHN0YW5kaW5nMS5wYXJ0aWVzLCBzdGFuZGluZzIucGFydGllcyk7XHJcbiAgICAgICAgLy9UT0RPIHJlbW92ZSByZW1vdmVkIGNhbmRpZGF0ZVxyXG4gICAgICAgIHRoaXMuX21lcmdlQ2FuZGlkYXRlcyhzdGFuZGluZzEuY2FuZGlkYXRlcywgc3RhbmRpbmcyLmNhbmRpZGF0ZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzdGFuZGluZzE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9tZXJnZVBhcnRpZXMocGFydGllczEsIHBhcnRpZXMyKSB7XHJcbiAgICAgICAgcGFydGllczIuZm9yRWFjaChwYXJ0eTIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFydHkxID0gcGFydGllczEuZmluZChwYXJ0eSA9PiBwYXJ0eS5pZCA9PT0gcGFydHkyLmlkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwYXJ0eTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwYXJ0eVxyXG4gICAgICAgICAgICAgICAgcGFydHkxLnZvdGVzID0gcGFydHkyLnZvdGVzO1xyXG4gICAgICAgICAgICAgICAgcGFydHkxLnZvdGVQZXJjZW50YWdlID0gcGFydHkyLnZvdGVQZXJjZW50YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUHVzaCBwYXJ0eVxyXG4gICAgICAgICAgICAgICAgcGFydGllczEucHVzaChwYXJ0eTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocGFydHkyLmxldHRlciA9PT0gJ1YnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnV1aCAnICsgcGFydHkxLnZvdGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfbWVyZ2VDYW5kaWRhdGVzKGNhbmRpZGF0ZXMxLCBjYW5kaWRhdGVzMikge1xyXG4gICAgICAgIGNhbmRpZGF0ZXMyLmZvckVhY2goY2FuZGlkYXRlMiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGUxID0gY2FuZGlkYXRlczEuZmluZChjYW5kaWRhdGUgPT4gY2FuZGlkYXRlLmlkID09PSBjYW5kaWRhdGUyLmlkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjYW5kaWRhdGUxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUxLnZvdGVzID0gY2FuZGlkYXRlMi52b3RlcztcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTEudm90ZVBlcmNlbnRhZ2UgPSBjYW5kaWRhdGUyLnZvdGVQZXJjZW50YWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUHVzaCBwYXJ0eVxyXG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlczEucHVzaChjYW5kaWRhdGUyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9