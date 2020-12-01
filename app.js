const express = require('express');
const path = require('path');
const app = express();

// 静态资源配置
app.use(express.static(path.join(__dirname)))

app.listen(3000, function() {
    console.log('服务器创建成功');
});