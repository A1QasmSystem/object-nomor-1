var mobil = {
    // Properti
    merek : 'Porsche',
    tipe : 777,
    // Method atau function

    start : function() {
        document.write("Mesin Mobil dinyalakan <br>")
        // document.write(this.merek + "" + this.tipe) = untuk mengakses dirinya sendiri
    }
}
mobil.start()
// ===============================================================================================

var mobil = {
    // Properti
    merek : 'Lamborghini',
    berat: 1575,
    tipe : 137,
    // Method atau function

    start : function() {
        document.write("Mobil berhenti")
        // document.write(this.merek + "" + this.tipe) = untuk mengakses dirinya sendiri
    },
    drift : function() {
        document.write("Rem tangan ditarik <br>")
    }
}
mobil.drift()
// =================================================================================================

var mobil = {
    // Properti
    merek : 'Bentley',
    berat : 2280,
    tipe : 166,
    // Method atau function

    start : function() {
        document.write("Mobil Balap")
        // document.write(this.merek + "" + this.tipe) = untuk mengakses dirinya sendiri
    },
    service : function() {
        document.write("Mobil sedang di Service <br>")
    }
}
mobil.service()
// ===================================================================================================

var mobil = {
    // Properti
    merek : 'Ferrari',
    berat : 1450,
    tipe : 007,
    // Method atau function

    start : function() {
        document.write("Mobil Balap")
        // document.write(this.merek + "" + this.tipe) = untuk mengakses dirinya sendiri
    },
    sold : function() {
        document.write("Mobil telah Terjual <br>")
    }
}
mobil.sold()
// ====================================================================================================

var mobil = {
    // Properti
    merek : 'Formula',
    berat : 702,
    tipe : 001,
    // Method atau function

    start : function() {
        document.write("Mobil Balap")
        // document.write(this.merek + "" + this.tipe) = untuk mengakses dirinya sendiri
    },
    tournamen : function() {
        document.write("Mobil sedang ikut Turnamen")
    }
}
mobil.tournamen()