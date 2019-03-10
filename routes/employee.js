// exports.findAll = function(req, res) {
//     db.collection('empdata', function(err, collection) {
//         collection.find().toArray(function(err, items) {
//             res.send(items);
//         });
//     });
// };
// exports.addEmp = function(req, res) {
//     var emp = req.body;
//     console.log('Adding Employee: ' + JSON.stringify(emp));
//     db.collection('empdata', function(err, collection) {
//         collection.insert(emp, {safe:true}, function(err, result) {
//             if (err) { 
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('Success: ' + JSON.stringify(result[0]));
//                 res.send(result[0]);
//             }
//         });
//     });
// }
// exports.deleteEmp = function(req, res) {
// var empToDelete = req.params.id;	
// db.collection('empdata',function(err,collection){
// collection.remove({'id':empToDelete},function(err){
// 	 res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
// })
// })
// }
// exports.updateEmp = function(req, res) {
// 	 var id = req.params.id;
//      var emp = req.body;
//   db.collection('empdata', function(err, collection) {
//         collection.update({'id':id},emp,function(err, result) {
//             if (err) { 
//                 res.send({'error':'An error has occurred'});
//             } else {
//                 console.log('Success: ' + JSON.stringify(result[0]));
//                 res.send(result[0]);
//             }
//         });
//     });
// }
// exports.findById= function (req,res) {
// var empId = req.params.id;
// db.collection('empdata',function (err,collection) {
// 	   collection.find( { id: empId } ).toArray(function(err, items) {
//             res.send(items);
//         });
	
// 	})
// }
var fs = require('fs');
exports.findAll = function(req, res) {
    fs.readFile('webapp/model/model.json','utf8',function(err, data){
      if(!err){
        res.send(data);
      }
    })
};
exports.addEmp = function(req, res) {
  var id = Number(new Date());
  //var params = {"id":id,"name":"hello","dob": "08/06/1977","gender": "Male","designation": "Consultant"};
  var params = req.body;
  fs.readFile('webapp/model/model.json',params,function(err,data){
    if(err){
        return console.log('err');
    }else{
        var person = data.toString();
        person = JSON.parse(person);
        person.ap.push(params);
        console.log(person.data);
        var str = JSON.stringify(person);
        fs.writeFile('webapp/model/model.json',str,function(err){
          if(err){
              console.error(err);
          }
          console.log('-------create success-----')
        })
    }
  });
}

//
// function writeJson(params){
//     //现将json文件读出来
//     fs.readFile('./mock/person.json',function(err,data){
//         if(err){
//             return console.error(err);
//         }
//         var person = data.toString();//将二进制的数据转换为字符串
//         person = JSON.parse(person);//将字符串转换为json对象
//         person.data.push(params);//将传来的对象push进数组对象中
//         person.total = person.data.length;//定义一下总条数，为以后的分页打基础
//         console.log(person.data);
//         var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
//         fs.writeFile('./mock/person.json',str,function(err){
//             if(err){
//                 console.error(err);
//             }
//             console.log('----------新增成功-------------');
//         })
//     })
// }






exports.deleteEmp = function(req, res) {

}
exports.updateEmp = function(req, res) {

}
exports.findById= function (req,res) {

}