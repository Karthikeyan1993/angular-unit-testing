# Angular Unit Testing Notes

- describe(string, function) functions take a title and a function containing one or more specs and are also known as a suite or test suite.

- it(string, function) functions take a title and a function containing one or more expectations and are also known as specs.

- expect(actual) functions take a value, called an actual. An expect function is typically used alongside a matcher function. Together they return a boolean value that depicts the passing or failing of a spec.

- Matcher functions take a value that represents the expected value. A matcher function is chained alongside an expect function. Together they return a boolean value that depicts the passing or failing of a spec. Some examples of matchers are toBeTruthy(), toEqual(), and toContain().

- expect(array).toContain(member);
- expect(fn).toThrow(string);
- expect(fn).toThrowError(string);
- expect(instance).toBe(instance);
- expect(mixed).toBeDefined();
- expect(mixed).toBeFalsy();
- expect(mixed).toBeNull();
- expect(mixed).toBeTruthy();
- expect(mixed).toBeUndefined();
- expect(mixed).toEqual(mixed);
- expect(mixed).toMatch(pattern);
- expect(number).toBeCloseTo(number, decimalPlaces);
- expect(number).toBeGreaterThan(number);
- expect(number).toBeLessThan(number);
- expect(number).toBeNaN();
- expect(spy).toHaveBeenCalled();
- expect(spy).toHaveBeenCalledTimes(number);
- expect(spy).toHaveBeenCalledWith(...arguments);

# beforeAll
This function is called once, before all the specs in a test suite (describe function) are run.

# afterAll
This function is called once after all the specs in a test suite are finished.

# beforeEach
This function is called before each test specification (it function) is run.

# afterEach
This function is called after each test specification is run.


# https://medium.com/@shashankvivek.7/testing-a-component-with-stub-services-and-spies-in-jasmine-1428d4242a49

# Testing component by isolating it from external dependencies such as services and using :
- useClass
# Getting to know spies and how it can prove to be a helpful tool for Unit Testing. We’ll be using below spies whose details can be found on Jasmine page :
- spyOn
- toHaveBeenCalled
- toHaveBeenCalledWith
- and.callThrough
- and.returnValue