document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var isValid = true;
    
    var errorNama = document.getElementById('errorNama');
    var errorEmail = document.getElementById('errorEmail');
    var errorJam = document.getElementById('errorJam');
    var errorTujuan = document.getElementById('errorTujuan');
    var errorJumlahTiket = document.getElementById('errorJumlahTiket');
    
    errorNama.innerHTML = '';
    errorEmail.innerHTML = '';
    errorJam.innerHTML = '';
    errorTujuan.innerHTML = '';
    errorJumlahTiket.innerHTML = '';
    
    errorNama.style.color = 'red';
    errorEmail.style.color = 'red';
    errorJam.style.color = 'red';
    errorTujuan.style.color = 'red';
    errorJumlahTiket.style.color = 'red';
    
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jam = document.getElementById('jam').value;
    var tujuan = document.getElementById('tujuan').value;
    var jumlahTiket = document.getElementById('jumlahTiket').value;
    
    if (nama === '') {
        errorNama.innerHTML = 'Nama pelanggan harus diisi';
        isValid = false;
    } else if (nama.length >=  30) {
        errorNama.innerHTML = 'Nama pelanggan maksimal 30 karakter';
        isValid = false;
    }
    
    if (email === '') {
        errorEmail.innerHTML = 'Email harus diisi';
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorEmail.innerHTML = 'Format email tidak valid';
            isValid = false;
        }
    }
    
    if (jam === '') {
        errorJam.innerHTML = 'Jam keberangkatan harus diisi';
        isValid = false;
    } else {
        var jamPattern = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
        if (!jamPattern.test(jam)) {
            errorJam.innerHTML = 'Format jam harus 00:00 - 23:59';
            isValid = false;
        }
    }
    
    if (tujuan === '') {
        errorTujuan.innerHTML = 'Tujuan keberangkatan harus diisi';
        isValid = false;
    }
    
    if (jumlahTiket === '') {
        errorJumlahTiket.innerHTML = 'Jumlah tiket harus diisi';
        isValid = false;
    } else {
        var tiket = parseInt(jumlahTiket);
        if (isNaN(tiket) || tiket < 1 || tiket > 10) {
            errorJumlahTiket.innerHTML = 'Jumlah tiket harus bilangan 1 - 10';
            isValid = false;
        }
    }
    
    if (isValid) {
        var summary = 'Data Form:\n\n';
        summary += 'Nama: ' + nama + '\n';
        summary += 'Email: ' + email + '\n';
        summary += 'Jam Keberangkatan: ' + jam + '\n';
        summary += 'Tujuan: ' + tujuan + '\n';
        summary += 'Jumlah Tiket: ' + jumlahTiket;
        
        alert(summary);
    }
});