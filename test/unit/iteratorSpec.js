describe('pascalprecht.iterator', function () {

  beforeEach(module('pascalprecht.iterator'));

  it('should have a $iterator factory', function () {
    inject(function ($iterator) {
      expect($iterator).toBeDefined();
    });
  });

  describe('$iterator', function () {

    it('should be function', function () {
      inject(function ($iterator) {
        expect(typeof $iterator).toBe('function');
      });
    });

    it('should throw error if given aggregate is not an array', function () {
      inject(function ($iterator) {
        expect(function () {
          $iterator(5);
        }).toThrow('Couldn\'t create Iterator, aggregate is not an array!');
      });
    });

    it('should return instances with iterator interface', function () {
      inject(function ($iterator) {
        var it = $iterator([3,4,5]);

        expect(it.next).toBeDefined();
        expect(it.hasNext).toBeDefined();
        expect(it.rewind).toBeDefined();
        expect(it.current).toBeDefined();
      });
    });

    describe('#next()', function () {

      var iterator;

      beforeEach(inject(function ($iterator) {
        iterator = $iterator([2,3,4]);
      }));

      afterEach(function () {
        iterator.rewind();
      });

      it('should be function', function () {
        expect(typeof iterator.next).toBe('function');
      });

      it('should return next element', function () {
        expect(iterator.current()).toBe(2);
        expect(iterator.next()).toBe(3);
        expect(iterator.next()).toBe(4);
      });

      it('should return null hasn\'t next', function () {
        expect(iterator.next()).toBe(3);
        expect(iterator.next()).toBe(4);
        expect(iterator.next()).toBe(null);
      });
    });

    describe('#hasNext()', function () {

      var iterator;

      beforeEach(inject(function ($iterator) {
        iterator = $iterator([2,3,4]);
      }));

      afterEach(function () {
        iterator.rewind();
      });

      it('should be function', function () {
        expect(typeof iterator.hasNext).toBe('function');
      });

      it('should return true as long as has next', function () {
        expect(iterator.hasNext()).toBe(true);
        iterator.next();
        expect(iterator.hasNext()).toBe(true);
      });

      it('should return false if hasn\'t next', function () {
        expect(iterator.hasNext()).toBe(true);
        iterator.next();
        expect(iterator.hasNext()).toBe(true);
        iterator.next();
        expect(iterator.hasNext()).toBe(false);
      });
    });

    describe('#rewind()', function () {

      var iterator;

      beforeEach(inject(function ($iterator) {
        iterator = $iterator([2,3,4]);
      }));

      afterEach(function () {
        iterator.rewind();
      });

      it('should be function', function () {
        expect(typeof iterator.rewind).toBe('function');
      });

      it('should reset iterator index', function () {
        iterator.next();
        iterator.next();
        expect(iterator.current()).toBe(4);
        iterator.rewind();
        expect(iterator.current()).toBe(2);
      });
    });

    describe('#current()', function () {
 
      var iterator;

      beforeEach(inject(function ($iterator) {
        iterator = $iterator([2,3,4]);
      }));

      afterEach(function () {
        iterator.rewind();
      });

      it('should be function', function () {
        expect(typeof iterator.current).toBe('function');
      });

      it('should return current element', function () {
        expect(iterator.current()).toBe(2);
        iterator.next();
        expect(iterator.current()).toBe(3);
        iterator.next();
        expect(iterator.current()).toBe(4);
      });
    });
  });
});
