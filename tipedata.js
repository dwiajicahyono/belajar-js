// TIPE DATA DASAR JAVASCRIPT

// 1. STRING - Teks
let nama = "Budi";
let alamat = 'Jakarta';
let kalimat = `Halo, nama saya ${nama}`;

console.log("=== STRING ===");
console.log(nama);
console.log(alamat);
console.log(kalimat);
console.log(typeof nama); // "string"

// 2. NUMBER - Angka
let umur = 25;
let tinggi = 175.5;
let negatif = -10;

console.log("\n=== NUMBER ===");
console.log(umur);
console.log(tinggi);
console.log(negatif);
console.log(typeof umur); // "number"

// 3. BOOLEAN - True/False
let sudahMenikah = true;
let punyaKendaraan = false;

console.log("\n=== BOOLEAN ===");
console.log(sudahMenikah);
console.log(punyaKendaraan);
console.log(typeof sudahMenikah); // "boolean"

// 4. UNDEFINED - Tidak terdefinisi
let variabelKosong;
let tidakAda = undefined;

console.log("\n=== UNDEFINED ===");
console.log(variabelKosong);
console.log(tidakAda);
console.log(typeof variabelKosong); // "undefined"

// 5. NULL - Nilai kosong yang disengaja
let data = null;

console.log("\n=== NULL ===");
console.log(data);
console.log(typeof data); // "object" (ini bug JavaScript yang terkenal)

// 6. SYMBOL - Identifier unik (ES6+)
let id = Symbol('id');
let anotherId = Symbol('id');

console.log("\n=== SYMBOL ===");
console.log(id);
console.log(anotherId);
console.log(id === anotherId); // false - setiap Symbol unik
console.log(typeof id); // "symbol"

// 7. BIGINT - Angka sangat besar (ES2020+)
let angkaBesar = 1234567890123456789012345678901234567890n;
let bigintLain = BigInt(123456789);

console.log("\n=== BIGINT ===");
console.log(angkaBesar);
console.log(bigintLain);
console.log(typeof angkaBesar); // "bigint"

// CONTOH PENGGUNAAN PRAKTIS
console.log("\n=== CONTOH PRAKTIS ===");

// Deklarasi variabel dengan tipe berbeda
let namaSiswa = "Andi";           // string
let nilaiMatematika = 85;         // number  
let lulus = nilaiMatematika >= 70; // boolean
let nilaiIPA;                     // undefined
let keterangan = null;            // null

console.log(`Nama: ${namaSiswa}`);
console.log(`Nilai: ${nilaiMatematika}`);
console.log(`Lulus: ${lulus}`);
console.log(`Nilai IPA: ${nilaiIPA}`);
console.log(`Keterangan: ${keterangan}`);

// Mengecek tipe data
console.log("\n=== MENGECEK TIPE DATA ===");
console.log(`Tipe nama: ${typeof namaSiswa}`);
console.log(`Tipe nilai: ${typeof nilaiMatematika}`);
console.log(`Tipe lulus: ${typeof lulus}`);
console.log(`Tipe nilaiIPA: ${typeof nilaiIPA}`);
console.log(`Tipe keterangan: ${typeof keterangan}`);

// Konversi tipe data
console.log("\n=== KONVERSI TIPE DATA ===");
let angkaString = "123";
let stringKeNumber = Number(angkaString);
let numberKeString = String(456);
let apapunKeBoolean = Boolean("hello");

console.log(`"123" ke number: ${stringKeNumber} (${typeof stringKeNumber})`);
console.log(`456 ke string: ${numberKeString} (${typeof numberKeString})`);
console.log(`"hello" ke boolean: ${apapunKeBoolean} (${typeof apapunKeBoolean})`);