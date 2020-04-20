db.user.insert({"name":"w1","age":"22"})
db.user.insert({"name":"w2","age":"24"})
db.user.insert({"name":"a1","age":"22"})
db.user.insert({"name":"u1","age":"22"})

db.article.insert({"title":"gototravel","desc":"44"})
db.article.insert({"title":"gotoshower","desc":"33"})
db.user.find({"age":"24"})
db.article.find({"title":/go/})
db.article.find({"title":/s/})
db.article.find({"title":"gototravel"})
db.article.find({},{"title":1})
db.article.find()
let res;
function Power(base, exponent)
{
  if(base==0 && exponent!=0){
    return 0;
  }
  if(base==1){
    return 1;
  }
  if(base!=0 && exponent==0){
    for(let i=1;i<exponent;i++){
       res =base*base
    }
    return res;
  }
}