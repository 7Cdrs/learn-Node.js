// Mengimpor kelas Tiger dan Wolf
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

// Fungsi untuk memerangi tiger dan wolf
const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if (wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    }

    console.log('Tiger and Wolf have same strength');
}

// Buat objek tiger dan wolf
const tiger = new Tiger();
const wolf = new Wolf();

// Panggil fungsi fighting dengan objek tiger dan wolf
fighting(tiger, wolf);
