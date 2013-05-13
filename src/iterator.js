angular.module('pascalprecht.iterator', ['ng']);

angular.module('pascalprecht.iterator').provider('$iterator', function () {

  this.$get = function () {

    var Iterator = function (aggregate) {

      if (!angular.isArray(aggregate)) {
        throw new Error('Couldn\'t create Iterator, aggregate is not an array!');
      }

      this.aggregate = aggregate;
      this.index = 0;
      this.length = aggregate.length;
    };

    Iterator.prototype.next = function () {

      var element;

      if (!this.hasNext()) {
        return null;
      }

      this.index += 1;
      element = this.aggregate[this.index];
      return element;
    };

    Iterator.prototype.hasNext = function () {
      return this.index < this.length-1;
    };

    Iterator.prototype.rewind = function () {
      this.index = 0;
    };

    Iterator.prototype.current = function () {
      return this.aggregate[this.index];
    };

    var $iterator = function (aggregate) {
      return new Iterator(aggregate);
    };

    return $iterator;
  };
});
