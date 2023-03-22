
// Bài Tập về phần  mảng
// tạo 1 mảng có 5 phần tử
// in ra màn hình từng phần tử của mảng
const fruil = ["Mangos", "Bananas", "Mangos", "Apples", "Cherries"] 
console.log(fruil); // 0 1 2 3 4
//
const fruil22 = ["Mangos", "Bananas", "Mangos", "Apples", "Cherries"] 

// đổi tên phần tử thứ 2 và thứ 3 của mảng
// tham số 1: là từ phần tử index 
//tham số 2: xóa bao nhiêu phân tử từ index
// tham số 3: thêm bao nhiêu phân tử từ index
// 
fruil22.splice(2,1,'Bike','Moto');// tại phàn tử thứ 3 thêm bike ,moto
console.log('result: ',fruil22)
// console.log(fruil.splice(2));


// delete phần tử đầu tiên, cuối cùng và giữa của mản
console.log(fruil.shift())
console.log(fruil.pop())



// thêm 1 phần tử vào đầu mảng
 console.log(fruil.unshift('pigs'));

// thêm 1 phẩn tử vào cuối mảng
 console.log(fruil.push('cats'));


// sắp xếp lại các phần tử của mảng theo bảng chữ cái abc. 
console.log(fruil.sort)

// ví dụ ["Mangos", "Bananas", "Mangos", "Apples", "Cherries"] => ["Cherries", "Apples", "Mangos", "Bananas", "Mangos"]
// Đảo ngược các phần tử trong mảng: ví dụ [3,9,4,7] => [7,4,9,3] 
let moths = [3,9,4,7]
moths.reverse()
console.log(moths)
// Cho 3 mảng. Nối 3 mảng với nhau. 
// ví dụ: 
let a = ['HTML', 'CSS']
let b = ['Javascript']
let c = ['PHP']
// Kết quả:
// ["HTML", "CSS", "Javascript", "PHP"] 
let abc=[...a,...b,...c];
console.log(abc)


















