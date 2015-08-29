System.register(['aurelia-framework', 'core/data-access/electionRepository'], function (_export) {
    'use strict';

    var inject, ElectionRepository, HeadToHeadRepository;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_coreDataAccessElectionRepository) {
            ElectionRepository = _coreDataAccessElectionRepository.ElectionRepository;
        }],
        execute: function () {
            HeadToHeadRepository = (function () {
                function HeadToHeadRepository(electionRepository) {
                    _classCallCheck(this, _HeadToHeadRepository);

                    this.electionRepository = electionRepository;
                }

                _createClass(HeadToHeadRepository, [{
                    key: 'getLatestStanding',
                    value: function getLatestStanding(party1Id, party2Id, electionId) {
                        var measurementDate = arguments.length <= 3 || arguments[3] === undefined ? new Date() : arguments[3];

                        var self = this;
                        return this.electionRepository.getLatestElectionStanding(electionId, measurementDate).then(function (standing) {
                            return self._electionStandingToHeadToHeadStanding(party1Id, party2Id, standing);
                        });
                    }
                }, {
                    key: '_electionStandingToHeadToHeadStanding',
                    value: function _electionStandingToHeadToHeadStanding(party1Id, party2Id, electionStanding) {
                        var votesTotal = electionStanding.parties.reduce(function (value, party) {
                            return value + party.votes;
                        }, 0);
                        var party1 = electionStanding.parties.find(function (party) {
                            return party.id === party1Id;
                        });
                        var party2 = electionStanding.parties.find(function (party) {
                            return party.id === party2Id;
                        });

                        return {
                            votesTotal: votesTotal,
                            party1: {
                                votes: party1.votes,
                                votePercentage: party1.votes / votesTotal * 100,
                                color: party1.color
                            },
                            party2: {
                                votes: party2.votes,
                                votePercentage: party2.votes / votesTotal * 100,
                                color: party2.color
                            }
                        };
                    }
                }]);

                var _HeadToHeadRepository = HeadToHeadRepository;
                HeadToHeadRepository = inject(ElectionRepository)(HeadToHeadRepository) || HeadToHeadRepository;
                return HeadToHeadRepository;
            })();

            _export('HeadToHeadRepository', HeadToHeadRepository);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC10by1oZWFkL2hlYWRUb0hlYWRSZXBvc2l0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FTYSxvQkFBb0I7Ozs7Ozs7O3VDQUp6QixNQUFNOzttRUFDTixrQkFBa0I7OztBQUdiLGdDQUFvQjtBQUVsQix5QkFGRixvQkFBb0IsQ0FFakIsa0JBQWtCLEVBQUU7OztBQUM1Qix3QkFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO2lCQUNoRDs7NkJBSlEsb0JBQW9COzsyQkFNWiwyQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBZ0M7NEJBQTlCLGVBQWUseURBQUcsSUFBSSxJQUFJLEVBQUU7O0FBQzFFLDRCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsK0JBQU8sSUFBSSxDQUFDLGtCQUFrQixDQUNsQix5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQ3RELElBQUksQ0FBQyxVQUFBLFFBQVE7bUNBQUksSUFBSSxDQUFDLHFDQUFxQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO3lCQUFBLENBQUMsQ0FBQztxQkFDMUc7OzsyQkFFb0MsK0NBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtBQUN4RSw0QkFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO21DQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSzt5QkFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNGLDRCQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSzttQ0FBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVE7eUJBQUEsQ0FBQyxDQUFDO0FBQzNFLDRCQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSzttQ0FBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVE7eUJBQUEsQ0FBQyxDQUFDOztBQUUzRSwrQkFBTztBQUNILHNDQUFVLEVBQUUsVUFBVTtBQUN0QixrQ0FBTSxFQUFFO0FBQ0oscUNBQUssRUFBRSxNQUFNLENBQUMsS0FBSztBQUNuQiw4Q0FBYyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUc7QUFDL0MscUNBQUssRUFBRSxNQUFNLENBQUMsS0FBSzs2QkFDdEI7QUFDRCxrQ0FBTSxFQUFFO0FBQ0oscUNBQUssRUFBRSxNQUFNLENBQUMsS0FBSztBQUNuQiw4Q0FBYyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUc7QUFDL0MscUNBQUssRUFBRSxNQUFNLENBQUMsS0FBSzs2QkFDdEI7eUJBQ0osQ0FBQztxQkFDTDs7OzRDQS9CUSxvQkFBb0I7QUFBcEIsb0NBQW9CLEdBRGhDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUNkLG9CQUFvQixLQUFwQixvQkFBb0I7dUJBQXBCLG9CQUFvQiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWQtdG8taGVhZC9oZWFkVG9IZWFkUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFJlcG9zaXRvcnkgaW1wbGVtZW50ZWQsIHNvIHdlIGNhbiBzd2l0Y2ggYmV0d2VlbiBJbmRleGVkZGIgYW5kIFJFU1Qgc29sdXRpb25cclxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gdXNlcyBJbmRleGVkZGJcclxuICovXHJcblxyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0VsZWN0aW9uUmVwb3NpdG9yeX0gZnJvbSAnY29yZS9kYXRhLWFjY2Vzcy9lbGVjdGlvblJlcG9zaXRvcnknO1xyXG5cclxuQGluamVjdChFbGVjdGlvblJlcG9zaXRvcnkpXHJcbmV4cG9ydCBjbGFzcyBIZWFkVG9IZWFkUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlY3Rpb25SZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVjdGlvblJlcG9zaXRvcnkgPSBlbGVjdGlvblJlcG9zaXRvcnk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldExhdGVzdFN0YW5kaW5nKHBhcnR5MUlkLCBwYXJ0eTJJZCwgZWxlY3Rpb25JZCwgbWVhc3VyZW1lbnREYXRlID0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVjdGlvblJlcG9zaXRvcnlcclxuICAgICAgICAgICAgICAgICAgIC5nZXRMYXRlc3RFbGVjdGlvblN0YW5kaW5nKGVsZWN0aW9uSWQsIG1lYXN1cmVtZW50RGF0ZSlcclxuICAgICAgICAgICAgICAgICAgIC50aGVuKHN0YW5kaW5nID0+IHNlbGYuX2VsZWN0aW9uU3RhbmRpbmdUb0hlYWRUb0hlYWRTdGFuZGluZyhwYXJ0eTFJZCwgcGFydHkySWQsIHN0YW5kaW5nKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9lbGVjdGlvblN0YW5kaW5nVG9IZWFkVG9IZWFkU3RhbmRpbmcocGFydHkxSWQsIHBhcnR5MklkLCBlbGVjdGlvblN0YW5kaW5nKSB7XHJcbiAgICAgICAgbGV0IHZvdGVzVG90YWwgPSBlbGVjdGlvblN0YW5kaW5nLnBhcnRpZXMucmVkdWNlKCh2YWx1ZSwgcGFydHkpID0+IHZhbHVlICsgcGFydHkudm90ZXMsIDApO1xyXG4gICAgICAgIGxldCBwYXJ0eTEgPSBlbGVjdGlvblN0YW5kaW5nLnBhcnRpZXMuZmluZChwYXJ0eSA9PiBwYXJ0eS5pZCA9PT0gcGFydHkxSWQpO1xyXG4gICAgICAgIGxldCBwYXJ0eTIgPSBlbGVjdGlvblN0YW5kaW5nLnBhcnRpZXMuZmluZChwYXJ0eSA9PiBwYXJ0eS5pZCA9PT0gcGFydHkySWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZvdGVzVG90YWw6IHZvdGVzVG90YWwsXHJcbiAgICAgICAgICAgIHBhcnR5MToge1xyXG4gICAgICAgICAgICAgICAgdm90ZXM6IHBhcnR5MS52b3RlcyxcclxuICAgICAgICAgICAgICAgIHZvdGVQZXJjZW50YWdlOiBwYXJ0eTEudm90ZXMgLyB2b3Rlc1RvdGFsICogMTAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHBhcnR5MS5jb2xvclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYXJ0eTI6IHtcclxuICAgICAgICAgICAgICAgIHZvdGVzOiBwYXJ0eTIudm90ZXMsXHJcbiAgICAgICAgICAgICAgICB2b3RlUGVyY2VudGFnZTogcGFydHkyLnZvdGVzIC8gdm90ZXNUb3RhbCAqIDEwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBwYXJ0eTIuY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=