/**
2. Menampilkan ramalan cuaca kota Jakarta untuk 5 hari kedepan

1. Silakan gunakan API yang disediakan http://openweathermap.org
2. Tolong tampilkan output berupa ramalan cuaca kota Jakarta untuk 5 hari ke depan
3. Yang ditampilkan hanya 1 suhu per hari
4. Soal ini tidak membutuhkan akun berbayar.

Berikut contoh output yang kami harapkan:

Weather Forecast:
Sun, Apr 21, 2024: 30.57°C
Mon, Apr 22, 2024: 31.56°C
Tue, Apr 23, 2024: 31.84°C
Wed, Apr 24, 2024: 30.54°C
Thu, Apr 25, 2024: 31.93°C

 */

// Fungsi untuk mengonversi timestamp menjadi format tanggal yang sesuai
function formatDate(timestamp) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(timestamp * 1000);
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}

// Fungsi untuk mencetak prakiraan cuaca
async function printWeatherForecast() {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=minutely,current,hourly&lat=-6.1753942&lon=106.827183&appid=bbcf57969e78d1300a815765b7d587f0';

    try {
        console.log('Weather Forecast:')

        // Mengambil data openweather
        const response = await fetch(url);

        // Handling error fetch API
        if (!response.ok) {
            throw new Error('Error fetching data from the API');
        }

        // Tampung data response ke variable data
        const data = await response.json();

        // Filter data cuaca kota Jakarta untuk 5 hari ke depan
        data.daily.slice(1, -2).forEach(day => {
            // Konversi data date
            const formattedDate = formatDate(day.dt);
            // Tampung data max temperatur
            const maxTemperature = day.temp.max;

            // Menampilkan prakiraan cuaca
            console.log(`${formattedDate}: ${maxTemperature}°C`);
        });

    } catch (error) {
        console.error('There was a problem with your fetch operation:', error); // Menampilkan pesan error jika ada masalah dalam fetch data dari API cuaca
    }
}

// Memanggil fungsi untuk mencetak prakiraan cuaca
printWeatherForecast();
