// Daftar jadwal praktek dokter
const jadwalList = {
    "Dr. Ageng Indah Afiarahma": [
        { jadwal: "Senin (09:00 - 12:00)" },
        { jadwal: "Rabu (09:00 - 12:00)" },
        { jadwal: "Jumat (09:00 - 12:00)" }
    ],
    "Dr. A'la Illiyine": [
        { jadwal: "Selasa (10:00 - 13:00)" },
        { jadwal: "Kamis (10:00 - 13:00)" }
    ],
    "Dr Fahmi Usaid Alifi, drg.": [
        { jadwal: "Senin, (08:00 - 11:00)" },
        { jadwal: "Kamis (08:00 - 11:00)" }
    ],
    "Dr. Annisa Fitria Sari, drg.": [
        { jadwal: "Rabu (12:00 - 15:00)" },
        { jadwal: "Jumat (12:00 - 15:00)" }
    ],
    "Dr. Agus Ferdiansyah, dr.SpA.": [
        { jadwal: "Senin (08:00 - 11:00)" },
        { jadwal: "Rabu (08:00 - 11:00)" },
        { jadwal: "Jumat (08:00 - 11:00)" }
    ],
    "Dr. Hartantyo Kusumua, dr.SpA.,M.ked.": [
        { jadwal: "Selasa (10:00 - 13:00)" },
        { jadwal: "kamis (10:00 - 13:00)" }
    ],
    "Dr. Bambang Tuharijanto, dr.SpM.": [
        { jadwal: "Senin (09.00 - 12:00)" },
        { jadwal: "Jumat (09:00 - 12:00)" }
    ],
    "Dr. Dwita Permatasari, dr.SpM,M.Ked.Klin": [
        { jadwal: "Selasa(11:00 - 14:00)" },
        { jadwal: "Rabu (11:00 - 14:00)" }
    ],
    "Dr. Kurniati, dr,SpKK": [
        { jadwal: "Senin (10:00 - 13:00)" },
        { jadwal: "Rabu (10:00 - 13:00)" }
    ],
    "Dr. Zulkarnain Jazid, dr. SpKK": [
        { jadwal: "Kamis (12:00 - 15:00)" },
        { jadwal: "Jumat (12:00 - 15:00)" }
    ],
    "Dr. Endang Puspitowati, SpTHT": [
        { jadwal: "Senin (15:00 - 17:00)" },
        { jadwal: "Rabu (15:00 - 17:00)" }
    ],
    "Dr. Subandji Sadeli, MARS, SpTHT": [
        { jadwal: "Senin (08:00 - 11:00)" },
        { jadwal: "Jumat (08:00 - 11:00)" }
    ],
    "Dr. Hendi Eko, sp.BM": [
        { jadwal: "Selasa (16:00 - 19:00)" },
        { jadwal: "Jumat (16:00 - 19:00)" }
    ],
    "Dr. Okky Prasetyo, sp.BM": [
        { jadwal: "Sabtu (07:00 - 10:00)" },
    ],
    "Dr Caesar Ayudi, sp.PD": [
        { jadwal: "Senin (12:00 - 16:00)" },
        { jadwal: "Rabu (12:00 - 16:00)" }
    ],
    "Dr. Bram Swadika, SpOT": [
        { jadwal: "Senin (10:00 - 13:00)" },
        { jadwal: "Rabu (10:00 - 13:00)" }
    ],
    "Dr. Ferdiansyah, SpoT": [
        { jadwal: "Kamis (12:00 - 15:00)" },
        { jadwal: "Jumat (12:00 - 15:00)" }
    ],
    "Dr. Jusuf Effendi, SpS": [
        { jadwal: "Senin (10:00 - 13:00)" },
        { jadwal: "Rabu (10:00 - 13:00)" }
    ],
    "Dr. Sumartono, SpN": [
        { jadwal: "Kamis (12.00 - 15:00)" },
        { jadwal: "Jumat (12:00 - 15:00)" }
    ],
    "Dr. Husnul Ghaib, M.Kes.,SpB(k)": [
        { jadwal: "Senin (10:00 - 13:00)" },
        { jadwal: "Rabu (10:00 - 13:00)" }
    ],
    "Dr. Iskandar Ali, SpB(k)": [
        { jadwal: "Kamis (12:00 - 15:00)" },
        { jadwal: "Jumat (12:00 - 15:00)" }
    ],
    "Dr. Kudiarto, Sp.P": [
        { jadwal: "Senin (18:00 - 20:00)" },
        { jadwal: "Rabu (18:00 - 20:00)" }
    ],
    "Dr. Farah Fatmawati, Sp.P": [
        { jadwal: "Kamis (18:00 - 20:00)" },
        { jadwal: "Jumat (18:00 - 20:00)" }
    ],
};

// Event listener untuk pilihan jadwal
document.getElementById('jadwal').addEventListener('change', function() {
    const poli = document.getElementById('dokter').value;
    const dokterNama = this.value;
    const jadwalInput = document.getElementById('jadwal');
    
    // Tampilkan jadwal praktek dokter
    console.log(dokterNama)
    console.log(jadwal)
    if (dokterNama && jadwal) {
        const jadwal = JadwalList[poli].find(jadwal => jadwal === jadwal);
        if (jadwal) {
            jadwalInput.value = dokter.jadwal;
        }
    }
});

// Daftar dokter dan jadwal praktek berdasarkan poli
const dokterList = {
    "Poli Umum": [
        { nama: "Dr. Ageng Indah Afiarahma" },
        { nama: "Dr. A'la Illiyine" }
    ],
    "Poli Gigi": [
        { nama: "Dr. M Fahmi Usaid Alifi, drg." },
        { nama: "Dr. Annisa Fitria Sari, drg." }
    ],
    "Poli Anak": [
        { nama: "Dr. Agus Ferdiansyah, dr.SpA" },
        { nama: "Dr. Hartantyo Kusumua, dr.SpA.,M.Ked" }
    ],
    "Poli Mata": [
        { nama: "Dr. Bambang Tuharijanto, dr.SpM." },
        { nama: "Dr. Dwita Permatasari, dr.SpM,M.Ked.Klin" }
    ],
    "Poli Kulit": [
        { nama: "Dr. Kurniati, dr,SpKK" },
        { nama: "Dr. Zulkarnain Jazid, dr. SpKK" }
    ],
    "Poli Spesialis THT": [
        { nama: "Dr. Endang Puspitowati, SpTHT" },
        { nama: "Dr. Subandji Sadeli, MARS, SpTHT" }
    ],
    "Poli Bedah Mulut": [
        { nama: "Dr. Hendi Eko, Sp.BM" },
        { nama: "Dr. Okky Prasetyo, Sp.BM" }
    ],
    "Poli Penyakit Dalam": [
        { nama: "Dr. Caesar Ayudi, Sp.PD" },
    ],
    "Poli Bedah Tulang": [
        { nama: "Dr. Bram Swandika, SpOT" },
        { nama: "Dr. Ferdiansyah, SpOT" }
    ],
    "Poli Spesialis Syaraf": [
        { nama: "Dr. Jusuf Effendi, SpS" },
        { nama: "Dr. Sumartono, SpN" }
    ],
    "Poli Bedah Onkologi": [
        { nama: "Dr. Husnul Ghaib, M.Kes.,SpB(k)" },
        { nama: "Dr. Iskandar Ali, SpB(k)" }
    ],
    "Poli Paru": [
        { nama: "Dr. Kudiarto, Sp.P" },
        { nama: "Dr. Farah fatmawati, Sp.P" }
    ],
};

// Event listener untuk pilihan poli
document.getElementById('poli').addEventListener('change', function() {
    const poli = this.value;
    const dokterSelect = document.getElementById('dokter');
    const jadwalInput = document.getElementById('jadwal');
    
    // Kosongkan pilihan dokter dan jadwal jika poli berubah
    dokterSelect.innerHTML = '<option value="">--Pilih Dokter--</option>';
    jadwalInput.value = '';

    // Jika poli dipilih, tampilkan dokter yang relevan
    if (poli && dokterList[poli]) {
        dokterList[poli].forEach(dokter => {
            const option = document.createElement('option');
            option.value = dokter.nama;
            option.textContent = dokter.nama;
            dokterSelect.appendChild(option);
        });
    }
});

// Event listener untuk pilihan dokter
document.getElementById('dokter').addEventListener('change', function() {
    const poli = document.getElementById('poli').value;
    const dokterNama = this.value;
    const jadwalInput = document.getElementById('jadwal');
    
    // Tampilkan jadwal praktek sesuai dengan dokter yang dipilih
    console.log(poli)
    console.log(dokterNama)
    if (poli && dokterNama) {
        const dokter = dokterList[poli].find(dokter => dokter.nama === dokterNama);
        if (dokter) {
            jadwalInput.value = dokter.jadwal;
        }
    }
});

// Event listener untuk submit form
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai input dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const kategori = document.getElementById('kategori').value;
    const poli = document.getElementById('poli').value;
    const dokter = document.getElementById('dokter').value;
    const jadwal = document.getElementById('jadwal').value;

    // Validasi sederhana
    if (name === '' || email === '' || dob === '' || address === '' ||kategori === ''|| poli === '' || dokter === '') {
        document.getElementById('message').innerHTML = "<span style='color:red;'>Semua bidang harus diisi!</span>";
        return;
    }

    // Buat objek pasien
    const pasien = {
        id: Date.now(),
        name: name,
        email: email,
        dob: dob,
        address: address,
        kategori: kategori,
        poli: poli,
        dokter: dokter,
        jadwal: jadwal,
    };

    // Simpan pasien ke localStorage
    let pasienList = localStorage.getItem('pasienList');
    if (pasienList) {
        pasienList = JSON.parse(pasienList);
    } else {
        pasienList = [];
    }

    pasienList.push(pasien);
    localStorage.setItem('pasienList', JSON.stringify(pasienList));

    // Tampilkan pesan sukses
    document.getElementById('message').innerHTML = "<span style='color:green;'>Pendaftaran berhasil!</span>";

    // Kosongkan form
    document.getElementById('registrationForm').reset();
});
