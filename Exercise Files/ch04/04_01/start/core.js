const path = require("path");

const { log } = require("util");

const { getHeapCodeStatistics } = require("v8");

log(getHeapCodeStatistics());

//util.log(path.basename(__filename));
//util.log(" ^ The name of the current file");