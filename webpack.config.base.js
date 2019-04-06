const port = 8888;
//不能设置0.0.0.0
// const address = '192.168.0.103';	//yarn run dev开启远程调试需要配合这个
const address = 'localhost';	//正常本机调试和编译就localhost就可以

module.exports = {
	address: address,
	port: port
};