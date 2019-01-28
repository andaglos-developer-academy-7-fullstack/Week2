
const nama = 'sigit';
let peran = 'Penyihir';
let tahunLahir = 2000;
const umur = 2017 - tahunLahir;
let playerHealth = tahunLahir * Math.random();
let monsterHealth = tahunLahir * Math.random();
const kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (nama === '') {
    peran = 'Kacung';
} else if (nama !== '' && peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else if (nama !== '' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama !== '' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (nama !== '' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}

for (let i = 1; i <= tahunLahir; i++) {
    if (i % umur === 0) {
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth -= umur;
    }
    if (i % kodeMonster === 0) {
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth -= kodeMonster;
    }
    if (i % umur === 0 && i % kodeMonster === 0) {
        console.log('Health keduanya bertambah');
        playerHealth += kodeMonster;
        monsterHealth += umur;
    }
}

if (playerHealth > monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
} else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}