"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENDER = void 0;
const graphql_1 = require("@nestjs/graphql");
var GENDER;
(function (GENDER) {
    GENDER["FEMALE"] = "FEMALE";
    GENDER["MALE"] = "MALE";
})(GENDER || (exports.GENDER = GENDER = {}));
(0, graphql_1.registerEnumType)(GENDER, { name: 'GENDER', description: undefined });
//# sourceMappingURL=enum.js.map