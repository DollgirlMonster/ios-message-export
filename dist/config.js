"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var smsFileName = '3d0d7e5fb2ce288813306e4d4636395e047a3d28';
var contactsFileName = '31bb7ba8914766d4ba40d6dfb6113c8b614be442';
var outputFileName = 'result';
exports.rootPath = path.resolve(__dirname, '../');
exports.dataSetPath = path.resolve(exports.rootPath, 'dataset');
exports.smsPath = path.resolve(exports.dataSetPath, smsFileName);
exports.contactsPath = path.resolve(exports.dataSetPath, contactsFileName);
exports.outputExcelPath = path.resolve(exports.rootPath, 'output', outputFileName + ".csv");
exports.outputJsonPath = path.resolve(exports.rootPath, 'output', outputFileName + ".json");
exports.mapHandleContactFileName = 'map-handle-contact';
