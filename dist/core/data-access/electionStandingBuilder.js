System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var transient, ElectionStandingBuilder;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            transient = _aureliaFramework.transient;
        }],
        execute: function () {
            ElectionStandingBuilder = (function () {
                function ElectionStandingBuilder() {
                    _classCallCheck(this, _ElectionStandingBuilder);
                }

                _createClass(ElectionStandingBuilder, [{
                    key: 'candidates',
                    value: function candidates(_candidates) {
                        this._candidates = _candidates;
                        return this;
                    }
                }, {
                    key: 'parties',
                    value: function parties(_parties) {
                        this._parties = _parties;
                        return this;
                    }
                }, {
                    key: 'standing',
                    value: function standing(_standing) {
                        this._standing = _standing;
                        return this;
                    }
                }, {
                    key: 'build',
                    value: function build() {
                        var partiesMap = new Map();
                        var candidatesMap = new Map();
                        this._parties.forEach(function (party) {
                            return partiesMap.set(party.id, party);
                        });
                        this._candidates.forEach(function (candidate) {
                            return candidatesMap.set(candidate.id, candidate);
                        });

                        return {
                            id: this._standing.id,
                            electionId: this._standing.electionId,
                            measurementDate: new Date(this._standing.measurementDate),
                            totalVotes: this._standing.parties.reduce(function (votes, party) {
                                return votes + party.votes;
                            }, 0),
                            parties: this._standing.parties.map(function (party) {
                                return Object.assign(party, partiesMap.get(party.id));
                            }),
                            candidates: this._standing.candidates.map(function (candidate) {
                                return Object.assign(candidate, candidatesMap.get(candidate.id));
                            })
                        };
                    }
                }]);

                var _ElectionStandingBuilder = ElectionStandingBuilder;
                ElectionStandingBuilder = transient()(ElectionStandingBuilder) || ElectionStandingBuilder;
                return ElectionStandingBuilder;
            })();

            _export('ElectionStandingBuilder', ElectionStandingBuilder);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZGF0YS1hY2Nlc3MvZWxlY3Rpb25TdGFuZGluZ0J1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21CQUdhLHVCQUF1Qjs7Ozs7Ozs7MENBSDVCLFNBQVM7OztBQUdKLG1DQUF1Qjt5QkFBdkIsdUJBQXVCOzs7OzZCQUF2Qix1QkFBdUI7OzJCQUV0QixvQkFBQyxXQUFVLEVBQUU7QUFDbkIsNEJBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVSxDQUFDO0FBQzlCLCtCQUFPLElBQUksQ0FBQztxQkFDZjs7OzJCQUVNLGlCQUFDLFFBQU8sRUFBRTtBQUNiLDRCQUFJLENBQUMsUUFBUSxHQUFHLFFBQU8sQ0FBQztBQUN4QiwrQkFBTyxJQUFJLENBQUM7cUJBQ2Y7OzsyQkFFTyxrQkFBQyxTQUFRLEVBQUU7QUFDZiw0QkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFRLENBQUM7QUFDMUIsK0JBQU8sSUFBSSxDQUFDO3FCQUNmOzs7MkJBRUksaUJBQUc7QUFDSiw0QkFBSSxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMzQiw0QkFBSSxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM5Qiw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO21DQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7eUJBQUEsQ0FBQyxDQUFDO0FBQ2hFLDRCQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7bUNBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQzt5QkFBQSxDQUFDLENBQUM7O0FBRWxGLCtCQUFPO0FBQ0gsOEJBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDckIsc0NBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7QUFDckMsMkNBQWUsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztBQUN6RCxzQ0FBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO3VDQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSzs2QkFBQSxFQUFFLENBQUMsQ0FBQztBQUNuRixtQ0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUN6Qyx1Q0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzZCQUN6RCxDQUFDO0FBQ0Ysc0NBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTLEVBQUk7QUFDbkQsdUNBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs2QkFDcEUsQ0FBQzt5QkFDTCxDQUFDO3FCQUNMOzs7K0NBbkNRLHVCQUF1QjtBQUF2Qix1Q0FBdUIsR0FEbkMsU0FBUyxFQUFFLENBQ0MsdUJBQXVCLEtBQXZCLHVCQUF1Qjt1QkFBdkIsdUJBQXVCIiwiZmlsZSI6ImNvcmUvZGF0YS1hY2Nlc3MvZWxlY3Rpb25TdGFuZGluZ0J1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RyYW5zaWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQHRyYW5zaWVudCgpXHJcbmV4cG9ydCBjbGFzcyBFbGVjdGlvblN0YW5kaW5nQnVpbGRlciB7XHJcbiAgIFxyXG4gICAgY2FuZGlkYXRlcyhjYW5kaWRhdGVzKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcGFydGllcyhwYXJ0aWVzKSB7XHJcbiAgICAgICAgdGhpcy5fcGFydGllcyA9IHBhcnRpZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgc3RhbmRpbmcoc3RhbmRpbmcpIHtcclxuICAgICAgICB0aGlzLl9zdGFuZGluZyA9IHN0YW5kaW5nO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIGxldCBwYXJ0aWVzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGxldCBjYW5kaWRhdGVzTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuX3BhcnRpZXMuZm9yRWFjaChwYXJ0eSA9PiBwYXJ0aWVzTWFwLnNldChwYXJ0eS5pZCwgcGFydHkpKTtcclxuICAgICAgICB0aGlzLl9jYW5kaWRhdGVzLmZvckVhY2goY2FuZGlkYXRlID0+IGNhbmRpZGF0ZXNNYXAuc2V0KGNhbmRpZGF0ZS5pZCwgY2FuZGlkYXRlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuX3N0YW5kaW5nLmlkLFxyXG4gICAgICAgICAgICBlbGVjdGlvbklkOiB0aGlzLl9zdGFuZGluZy5lbGVjdGlvbklkLFxyXG4gICAgICAgICAgICBtZWFzdXJlbWVudERhdGU6IG5ldyBEYXRlKHRoaXMuX3N0YW5kaW5nLm1lYXN1cmVtZW50RGF0ZSksXHJcbiAgICAgICAgICAgIHRvdGFsVm90ZXM6IHRoaXMuX3N0YW5kaW5nLnBhcnRpZXMucmVkdWNlKCh2b3RlcywgcGFydHkpID0+IHZvdGVzICsgcGFydHkudm90ZXMsIDApLFxyXG4gICAgICAgICAgICBwYXJ0aWVzOiB0aGlzLl9zdGFuZGluZy5wYXJ0aWVzLm1hcChwYXJ0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwYXJ0eSwgcGFydGllc01hcC5nZXQocGFydHkuaWQpKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhbmRpZGF0ZXM6IHRoaXMuX3N0YW5kaW5nLmNhbmRpZGF0ZXMubWFwKGNhbmRpZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihjYW5kaWRhdGUsIGNhbmRpZGF0ZXNNYXAuZ2V0KGNhbmRpZGF0ZS5pZCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=