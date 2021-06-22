
var XLSX = require('xlsx');
const tutorialModel = require('./app/models/tutorial.model');
var workbook = XLSX.readFile('D:/Data.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

for (var item of xlData) {
    //const myObjStr = JSON.stringify(item)
    //console.log(item)
    console.log(item)
    // console.log(myObjStr)
    //  const a = JSON.parse(myObjStr)
    //  console.log(a);
    // for (let key in item) {
    //     if (item.hasOwnProperty(key)) {
    //         if(key==="Name"){
    //            //console.log(item[key])
    //             var name = item[key];
    //             console.log(name)
    //         }
    //         // if(key==="Email"){
    //         //    //console.log(item[key])
    //         //     var email = item[key];
    //         //     console.log(email)
    //         // }
    //         // if(key==="Address"){
    //         //    //console.log(item[key])
    //         //     var address = item[key];
    //         //     console.log(address)
    //         // }
    //     }
    //   }

}

// var data = new google.visualization.DataTable();
// data.addColumn('string', 'Topping');
// data.addColumn('number', 'Slices');
// data.addRows(result);
// var fs = require("fs");

// console.log("Chuan bi lay thong tin File hien tai!");
// fs.stat('D:/Data.xlsx', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("Lay thong tin File thanh cong!");
   
//    // Kiem tra kieu file
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });

// xlData.then((rows) => {
//     rows.forEach((col)=>{
//             col.forEach((data)=>{
//               console.log(data);
//               console.log(typeof data);
//         })
//     })
//     })

//  var student_obj = JSON.parse(xlData);
//  console.log(student_obj);

// const xlsxFile = require('read-excel-file/node');
 
// xlsxFile('D:/Data.xlsx', { sheet: 'Sheet1' }).then((rows) => {
// for (i in rows){
//         for (j in rows[i]){
//             console.log(rows[i][j]);
//         }
//     }
// })