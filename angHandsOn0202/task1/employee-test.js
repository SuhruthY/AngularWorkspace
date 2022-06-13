"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(test) {
        this.employee = test;
    }
    return EmployeeTest;
}());
var emp = new EmployeeTest({ id: 1, name: "John", salary: 10000, permanent: true });
for (var _i = 0, _a = Object.keys(emp.employee); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key + ": " + emp.employee[key]);
}
