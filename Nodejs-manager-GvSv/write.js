// Requiring module
const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('D:/Test.xlsx')
  
// Sample data set
let student_data = [{
    Name:'Amitha',
    Age:21,
    Branch:'EC',
    Marks:80
},
{
    Name:'Amitha',
    Age:21,
    Branch:'EC',
    Marks:80
}]
  
const ws = reader.utils.json_to_sheet(student_data)
  
reader.utils.book_append_sheet(file,ws,"Sheet4")
  
// Writing to our file
reader.writeFile(file,'D:/Test.xlsx')