//Hoàng Trung Nguyên mssv : 2180606247//
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}

// Tạo 1 mảng gồm 4 student
const students = [
    new Student('Đoàn Văn Khánh', 20, 8, 7),
    new Student('Đỗ thị huyền linh', 17, 6, 5),
    new Student('Lê Minh Trí', 19, 9, 10),
    new Student('Phạm Hổng Thảo ', 18, 7, 8)
];

// Sử dụng map để in ra xếp loại của từng sinh viên
const classifications = students.map(student => {
    const average = (student.score1 + student.score2) / 2;
    if (average >= 9) return `${student.name}: Xuất sắc`;
    if (average >= 7) return `${student.name}: Khá`;
    if (average >= 5) return `${student.name}: Trung bình`;
    return `${student.name}: Yếu`;
});

// In ra xếp loại
console.log('Xếp loại của từng sinh viên:');
console.log(classifications);

// Sử dụng reduce để tính TBC điểm của SV trong lớp
const totalScore = students.reduce((acc, student) => acc + (student.score1 + student.score2), 0);
const averageScore = totalScore / (students.length * 2); // Chia cho số điểm

console.log(`Điểm trung bình của lớp: ${averageScore.toFixed(2)}`);

// Sử dụng some để kiểm tra xem có sinh viên nào dưới 18 hay không?
const hasUnder18 = students.some(student => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? 'Có' : 'Không'}`);

// Sử dụng every để kiểm tra cả lớp có đầy đủ tên hay không?
const allHaveNames = students.every(student => student.name.trim() !== '');
console.log(`Cả lớp có đầy đủ tên hay không? ${allHaveNames ? 'Có' : 'Không'}`);