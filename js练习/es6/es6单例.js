class Db {
  static getInstance(){
    if(!Db.instance){
      Db.instance=new Db()
    }
    return Db.instance
  }
  constructor(){
    console.log('实例化触发函数')
    this.connect()
  }
  connect(){
    console.log('连接数据库')
  }
  find(){
    console.log('连接数据库')
  }
}

const db1 = Db.getInstance();
const db2 = Db.getInstance();