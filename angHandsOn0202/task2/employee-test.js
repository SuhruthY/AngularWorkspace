"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(test) {
        this.employee = test;
    }
    return EmployeeTest;
}());
var emp = new EmployeeTest({ id: 1, name: "John", salary: 10000, permanent: true, department: { id: 1, name: "payroll" } });
for (var _i = 0, _a = Object.keys(emp.employee); _i < _a.length; _i++) {
    var key = _a[_i];
    if (key !== "department")
        console.log(key + ": " + emp.employee[key]);
    else
        for (var _b = 0, _c = Object.keys(emp.employee[key]); _b < _c.length; _b++) {
            var deptKey = _c[_b];
            console.log(key + " " + deptKey + ": " + emp.employee["department"][deptKey]);
        }
}
