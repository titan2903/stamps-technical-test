/**
 * 
 * 
1. Program kecil

Tolong buat satu array / list dari 1 sampai 100. Print semua angka ini dalam urutan terbalik, tetapi ada beberapa peraturan : 
1. Jangan print angka bilangan prima.
2. Ganti angka yang dapat dibagi dengan angka 3 dengan text "Foo".
3. Ganti angka yang dapat dibagi dengan angka 5 dengan text "Bar".
4. Ganti angka yang dapat dibagi dengan angka 3 dan 5 dengan text "FooBar".
5. Print angka menyamping tidak ke bawah.

Output:

Bar Foo 98  Foo Bar 94 Foo 92 91 FooBar  88 Foo 86 Bar Foo  82 Foo Bar  Foo 77 76 FooBar 74  Foo  Bar Foo 68  Foo Bar 64 Foo 62  FooBar  58 Foo 56 Bar Foo  52 Foo Bar 49 Foo  46 FooBar 44  Foo  Bar Foo 38  Foo Bar 34 Foo 32  FooBar  28 Foo 26 Bar Foo  22 Foo Bar  Foo  16 FooBar 14  Foo  Bar Foo 8  Foo  4   1

 */

// Fungsi untuk memeriksa apakah sebuah bilangan adalah bilangan prima
function isPrime(number) {
    // Jika bilangan kurang dari atau sama dengan 1, bukan bilangan prima
    if (number <= 1) return false;
    
    // Iterasi untuk mencari yang bukan bilangan prima
    // menggunakan Math.sqrt() sebagai batas atas dalam perulangan, kita dapat mengurangi jumlah iterasi yang diperlukan
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // data number di modulo 2 sama dengan 0 untuk menentukan number yang bukan bilangan prima
        if (number % i === 0) return false;
    }

    // Mengembalikan true jika bilangan tersebut bilangan prima
    return true;
}

function printNumbers() {
    // Tampung data ke dalam sebuah array
    const numbers = [];

    // Melakukan Iterasi dari 100 hingga 1
    for (let i = 100; i >= 1; i--) {
        if (isPrime(i)) { // Check jika bilangan prima true
            numbers.push(""); // Tambahkan string kosong ke dalam array
        } else if (i % 3 === 0 && i % 5 === 0) { // Check jika i modulo 3 dan i modulo 5 adalah 0, tambahkan string FooBar ke dalam array
            numbers.push("FooBar");
        } else if (i % 3 === 0) { // Check jika i modulo 3 adalah 0, tambahkan string Foo ke dalam array
            numbers.push("Foo");
        } else if (i % 5 === 0) { // Check jika i modulo 5 adalah 0, tambahkan string Bar ke dalam array
            numbers.push("Bar");
        } else { // Selain itu, tambahkan i yang valuenya berupa number ke dalam array
            numbers.push(i);
        }
    }

    // Cetak value di dalam array dan sudah diubah menjadi string, dipisahkan oleh spasi
    console.log(numbers.join(" "));
}

printNumbers()