const net = require('net');

const server = net.createServer();

// 监听端口
server.listen(8080, () => {
    console.log('TCP server: 127.0.0.0:8080');
});

// 监听客户端连接
server.on('connection', (socket) => {
    
    // 接收客户端发送的数据
    socket.on('data', (data) => {

        // 回传给客户端
        socket.write(data);

        // 关闭连接
        socket.end('Bye~');
    });
    
});
