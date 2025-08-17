function generateQRCode() {
    let website = document.getElementById('website').value.trim();

    if (website) {
        let qrCodeContainer = document.getElementById('qrcode');
        
        // เคลียร์ QR เก่าก่อน (ถ้ามี)
        qrCodeContainer.innerHTML = "";

        // สร้าง QR ใหม่
        new QRCode(qrCodeContainer, {
            text: website,
            width: 200,
            height: 200
        });

        document.getElementById('qrcode-container').style.display = 'block';
    } else {
        alert('⚠️ Please enter a valid URL');
    }
}
