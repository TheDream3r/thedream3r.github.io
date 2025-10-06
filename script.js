function showConverter(converterId) {
    // Alle Konverter ausblenden
    document.querySelectorAll('.converter').forEach(converter => {
        converter.classList.remove('active');
    });
    // Alle Links deaktivieren
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Gewählten Konverter und Link aktivieren
    document.getElementById(converterId).classList.add('active');
    document.querySelector(`.nav-link[onclick="showConverter('${converterId}')"]`).classList.add('active');
    // Sidebar auf Mobilgeräten schließen
    if (window.innerWidth < 992) {
        const sidebar = document.getElementById('sidebar');
        const bsOffcanvas = new bootstrap.Offcanvas(sidebar);
        bsOffcanvas.hide();
    }
}

function convertAsciiToHex() {
    const asciiInput = document.getElementById('asciiInput').value;
    let hexOutput = '';
    try {
        for (let i = 0; i < asciiInput.length; i++) {
            hexOutput += asciiInput.charCodeAt(i).toString(16).padStart(2, '0');
        }
        document.getElementById('asciiHexResult').textContent = hexOutput.toUpperCase();
        document.getElementById('asciiHexResult').classList.remove('alert-danger');
        document.getElementById('asciiHexResult').classList.add('alert-info');
    } catch (error) {
        document.getElementById('asciiHexResult').textContent = 'Fehler: Ungültige Eingabe';
        document.getElementById('asciiHexResult').classList.remove('alert-info');
        document.getElementById('asciiHexResult').classList.add('alert-danger');
    }
}

function convertHexToAscii() {
    const hexInput = document.getElementById('hexInput').value.replace(/\s/g, '');
    let asciiOutput = '';
    try {
        if (hexInput.length % 2 !== 0) throw new Error('Ungültige Hex-Länge');
        for (let i = 0; i < hexInput.length; i += 2) {
            const hexPair = hexInput.slice(i, i + 2);
            asciiOutput += String.fromCharCode(parseInt(hexPair, 16));
        }
        document.getElementById('asciiHexResult').textContent = asciiOutput;
        document.getElementById('asciiHexResult').classList.remove('alert-danger');
        document.getElementById('asciiHexResult').classList.add('alert-info');
    } catch (error) {
        document.getElementById('asciiHexResult').textContent = 'Fehler: Ungültige Hex-Eingabe';
        document.getElementById('asciiHexResult').classList.remove('alert-info');
        document.getElementById('asciiHexResult').classList.add('alert-danger');
    }
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    try {
        const binaryOutput = parseInt(decimalInput).toString(2);
        document.getElementById('decimalBinaryResult').textContent = binaryOutput;
        document.getElementById('decimalBinaryResult').classList.remove('alert-danger');
        document.getElementById('decimalBinaryResult').classList.add('alert-info');
    } catch (error) {
        document.getElementById('decimalBinaryResult').textContent = 'Fehler: Ungültige Eingabe';
        document.getElementById('decimalBinaryResult').classList.remove('alert-info');
        document.getElementById('decimalBinaryResult').classList.add('alert-danger');
    }
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value.replace(/\s/g, '');
    try {
        const decimalOutput = parseInt(binaryInput, 2).toString(10);
        document.getElementById('decimalBinaryResult').textContent = decimalOutput;
        document.getElementById('decimalBinaryResult').classList.remove('alert-danger');
        document.getElementById('decimalBinaryResult').classList.add('alert-info');
    } catch (error) {
        document.getElementById('decimalBinaryResult').textContent = 'Fehler: Ungültige Binär-Eingabe';
        document.getElementById('decimalBinaryResult').classList.remove('alert-info');
        document.getElementById('decimalBinaryResult').classList.add('alert-danger');
    }
}