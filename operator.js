// OPERATOR DASAR JAVASCRIPT

// 1. OPERATOR ARITMATIKA
console.log("=== OPERATOR ARITMATIKA ===");
let a = 10;
let b = 3;

console.log(`a = ${a}, b = ${b}`);
console.log(`Penjumlahan: ${a} + ${b} = ${a + b}`);
console.log(`Pengurangan: ${a} - ${b} = ${a - b}`);
console.log(`Perkalian: ${a} * ${b} = ${a * b}`);
console.log(`Pembagian: ${a} / ${b} = ${a / b}`);
console.log(`Sisa bagi (modulus): ${a} % ${b} = ${a % b}`);
console.log(`Pangkat: ${a} ** ${b} = ${a ** b}`);

// 2. OPERATOR PENUGASAN (ASSIGNMENT)
console.log("\n=== OPERATOR PENUGASAN ===");
let x = 5;
console.log(`x = ${x}`);

x += 3; // sama dengan x = x + 3
console.log(`x += 3 → x = ${x}`);

x -= 2; // sama dengan x = x - 2
console.log(`x -= 2 → x = ${x}`);

x *= 4; // sama dengan x = x * 4
console.log(`x *= 4 → x = ${x}`);

x /= 2; // sama dengan x = x / 2
console.log(`x /= 2 → x = ${x}`);

x %= 3; // sama dengan x = x % 3
console.log(`x %= 3 → x = ${x}`);

// 3. OPERATOR INCREMENT DAN DECREMENT
console.log("\n=== OPERATOR INCREMENT & DECREMENT ===");
let counter = 5;

console.log(`counter = ${counter}`);
console.log(`counter++ (post-increment) = ${counter++}`); // tampil dulu, baru tambah
console.log(`counter sekarang = ${counter}`);
console.log(`++counter (pre-increment) = ${++counter}`); // tambah dulu, baru tampil
console.log(`counter-- (post-decrement) = ${counter--}`); // tampil dulu, baru kurang
console.log(`counter sekarang = ${counter}`);
console.log(`--counter (pre-decrement) = ${--counter}`); // kurang dulu, baru tampil

// 4. OPERATOR PERBANDINGAN
console.log("\n=== OPERATOR PERBANDINGAN ===");
let p = 10;
let q = "10";
let r = 20;

console.log(`p = ${p} (${typeof p}), q = "${q}" (${typeof q}), r = ${r}`);
console.log(`p == q: ${p == q}`);   // sama nilai (dengan konversi tipe)
console.log(`p === q: ${p === q}`); // sama nilai dan tipe (strict equality)
console.log(`p != q: ${p != q}`);   // tidak sama nilai
console.log(`p !== q: ${p !== q}`); // tidak sama nilai atau tipe
console.log(`p > r: ${p > r}`);     // lebih besar
console.log(`p < r: ${p < r}`);     // lebih kecil
console.log(`p >= 10: ${p >= 10}`); // lebih besar atau sama dengan
console.log(`p <= 10: ${p <= 10}`); // lebih kecil atau sama dengan

// 5. OPERATOR LOGIKA
console.log("\n=== OPERATOR LOGIKA ===");
let benar = true;
let salah = false;

console.log(`benar = ${benar}, salah = ${salah}`);
console.log(`benar && salah (AND): ${benar && salah}`);
console.log(`benar || salah (OR): ${benar || salah}`);
console.log(`!benar (NOT): ${!benar}`);
console.log(`!salah (NOT): ${!salah}`);

// Contoh praktis dengan kondisi
let umur = 20;
let punyaSIM = true;

console.log(`\nUmur: ${umur}, Punya SIM: ${punyaSIM}`);
console.log(`Boleh nyetir? ${umur >= 17 && punyaSIM}`);

// 6. OPERATOR STRING
console.log("\n=== OPERATOR STRING ===");
let namaDepan = "Budi";
let namaBelakang = "Santoso";

console.log(`Nama depan: "${namaDepan}"`);
console.log(`Nama belakang: "${namaBelakang}"`);
console.log(`Nama lengkap: "${namaDepan + " " + namaBelakang}"`);

// Template literal (ES6)
console.log(`Dengan template literal: "${namaDepan} ${namaBelakang}"`);

// 7. OPERATOR TERNARY (CONDITIONAL)
console.log("\n=== OPERATOR TERNARY ===");
let nilai = 75;
let status = nilai >= 70 ? "Lulus" : "Tidak Lulus";

console.log(`Nilai: ${nilai}`);
console.log(`Status: ${status}`);

// Contoh nested ternary
let grade = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D";
console.log(`Grade: ${grade}`);

// 8. OPERATOR TYPEOF
console.log("\n=== OPERATOR TYPEOF ===");
let variabel1 = "Hello";
let variabel2 = 42;
let variabel3 = true;
let variabel4 = null;
let variabel5;

console.log(`typeof "${variabel1}": ${typeof variabel1}`);
console.log(`typeof ${variabel2}: ${typeof variabel2}`);
console.log(`typeof ${variabel3}: ${typeof variabel3}`);
console.log(`typeof ${variabel4}: ${typeof variabel4}`); // "object" - bug JavaScript
console.log(`typeof variabel5: ${typeof variabel5}`);

// 9. OPERATOR NULLISH COALESCING (??) - ES2020
console.log("\n=== OPERATOR NULLISH COALESCING (??) ===");
let data1 = null;
let data2 = undefined;
let data3 = "";
let data4 = 0;
let data5 = "Hello";

console.log(`null ?? "default": ${data1 ?? "default"}`);
console.log(`undefined ?? "default": ${data2 ?? "default"}`);
console.log(`"" ?? "default": ${data3 ?? "default"}`); // string kosong bukan null/undefined
console.log(`0 ?? "default": ${data4 ?? "default"}`);   // 0 bukan null/undefined
console.log(`"Hello" ?? "default": ${data5 ?? "default"}`);

// 10. CONTOH PRAKTIS KOMBINASI OPERATOR
console.log("\n=== CONTOH PRAKTIS ===");

// Kalkulator sederhana
function kalkulator(angka1, operator, angka2) {
    switch(operator) {
        case '+':
            return angka1 + angka2;
        case '-':
            return angka1 - angka2;
        case '*':
            return angka1 * angka2;
        case '/':
            return angka2 !== 0 ? angka1 / angka2 : "Error: Pembagian dengan nol";
        default:
            return "Operator tidak valid";
    }
}

console.log("Kalkulator sederhana:");
console.log(`15 + 5 = ${kalkulator(15, '+', 5)}`);
console.log(`15 - 5 = ${kalkulator(15, '-', 5)}`);
console.log(`15 * 5 = ${kalkulator(15, '*', 5)}`);
console.log(`15 / 5 = ${kalkulator(15, '/', 5)}`);
console.log(`15 / 0 = ${kalkulator(15, '/', 0)}`);

// Validasi input
function validasiUmur(umur) {
    return umur >= 0 && umur <= 150 && typeof umur === 'number' 
           ? "Umur valid" 
           : "Umur tidak valid";
}

console.log(`\nValidasi umur:`);
console.log(`Umur 25: ${validasiUmur(25)}`);
console.log(`Umur -5: ${validasiUmur(-5)}`);
console.log(`Umur "25": ${validasiUmur("25")}`);
console.log(`Umur 200: ${validasiUmur(200)}`);