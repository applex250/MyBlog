const fs = require("fs");

// 创建动态路由文件
fs.writeFileSync("src/pages/category/[category].astro", "// placeholder");

console.log("File created: src/pages/category/[category].astro");
