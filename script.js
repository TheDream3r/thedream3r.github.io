// Automatisch ersten Konverter laden
document.addEventListener('DOMContentLoaded', function() {
    showConverter('ascii-hex');
});

// Sidebar Toggle für Mobile
document.getElementById('mobileToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

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
    // Sidebar auf Mobile schließen
    if (window.innerWidth < 992) {
        document.getElementById('sidebar').classList.remove('active');
    }
}

function convertAsciiToHex() {
    const asciiInput = document.getElementById('asciiInput').value;
    let hexOutput = '';
    try {
        for (let i = 0; i < asciiInput.length; i++) {
            hexOutput += asciiInput.charCodeAt(i).toString(16).padStart(2, '0');
        }
        const result = document.getElementById('asciiHexResult');
        result.textContent = hexOutput.toUpperCase();
        result.classList.remove('d-none', 'alert-danger');
        result.classList.add('alert-info');
    } catch (error) {
        const result = document.getElementById('asciiHexResult');
        result.textContent = 'Fehler: Ungültige Eingabe';
        result.classList.remove('d-none', 'alert-info');
        result.classList.add('alert-danger');
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
        const result = document.getElementById('asciiHexResult');
        result.textContent = asciiOutput;
        result.classList.remove('d-none', 'alert-danger');
        result.classList.add('alert-info');
    } catch (error) {
        const result = document.getElementById('asciiHexResult');
        result.textContent = 'Fehler: Ungültige Hex-Eingabe';
        result.classList.remove('d-none', 'alert-info');
        result.classList.add('alert-danger');
    }
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    try {
        const binaryOutput = parseInt(decimalInput).toString(2);
        const result = document.getElementById('decimalBinaryResult');
        result.textContent = binaryOutput;
        result.classList.remove('d-none', 'alert-danger');
        result.classList.add('alert-info');
    } catch (error) {
        const result = document.getElementById('decimalBinaryResult');
        result.textContent = 'Fehler: Ungültige Eingabe';
        result.classList.remove('d-none', 'alert-info');
        result.classList.add('alert-danger');
    }
}

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value.replace(/\s/g, '');
    try {
        const decimalOutput = parseInt(binaryInput, 2).toString(10);
        const result = document.getElementById('decimalBinaryResult');
        result.textContent = decimalOutput;
        result.classList.remove('d-none', 'alert-danger');
        result.classList.add('alert-info');
    } catch (error) {
        const result = document.getElementById('decimalBinaryResult');
        result.textContent = 'Fehler: Ungültige Binär-Eingabe';
        result.classList.remove('d-none', 'alert-info');
        result.classList.add('alert-danger');
    }
}