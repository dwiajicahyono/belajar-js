// STRUKTUR KONTROL JAVASCRIPT

console.log("=== IF/ELSE STATEMENTS ===");

// 1. IF/ELSE DASAR
let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai A - Sangat Baik!");
} else {
    console.log("Perlu belajar lebih giat");
}

console.log("\n=== LOOP STATEMENTS ===");

// 2. FOR LOOP
console.log("--- FOR LOOP ---");
console.log("Menghitung 1-5:");
for (let i = 1; i <= 5; i++) {
    console.log(`Hitungan ke-${i}`);
}

// For loop dengan array
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.log("\nDaftar buah:");
for (let i = 0; i < buah.length; i++) {
    console.log(`${i + 1}. ${buah[i]}`);
}
