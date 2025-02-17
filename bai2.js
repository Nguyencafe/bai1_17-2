//Hoàng Trung Nguyên mssv : 2180606247//

const students = require('./bai1'); // Import danh sách sinh viên từ bài 1

// Chọn một sinh viên ngẫu nhiên
const studentData = students[Math.floor(Math.random() * students.length)];
console.log("Student được chọn từ bài 1:", studentData);

// Promise 1: Random số từ 0-10, số chẵn thì resolve, số lẻ thì reject
const promise1 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 11);
  console.log(`Promise 1 - Số random: ${num}`);
  setTimeout(() => {
    if (num % 2 === 0) {
      resolve(studentData);
    } else {
      reject("Promise 1 - Dữ liệu lỗi");
    }
  }, 2000);
});

// Promise 2: Tương tự nhưng chờ 4s
const promise2 = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 11);
  console.log(`Promise 2 - Số random: ${num}`);
  setTimeout(() => {
    if (num % 2 === 0) {
      resolve(studentData);
    } else {
      reject("Promise 2 - Dữ liệu lỗi");
    }
  }, 4000);
});

// 🟢 Thực thi Promise.allSettled() để đảm bảo cả 2 promise đều chạy
Promise.allSettled([promise1, promise2])
  .then(results => {
    console.log("Promise.allSettled - Kết quả:");
    console.log(results);
    console.log("Lấy dữ liệu hoàn thành");
  });

// 🟢 Thực thi Promise.race()
Promise.race([promise1, promise2])
  .then(result => {
    console.log("Promise.race - Đã lấy được dữ liệu:", result);
  })
  .catch(error => {
    console.error("Promise.race - Lỗi:", error);
  });