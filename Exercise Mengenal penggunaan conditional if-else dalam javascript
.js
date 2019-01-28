var nama = 'sigit'
var peran = ''

if (nama) {
    if (peran) {
        console.log('Selamat datang di dunia Proxytia ' + nama);
    }
}
if (peran === 'ksatria') {
    console.log('Halo Kstria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}
else if (peran === 'tabib') {
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
}
else if (peran === 'penyihir') {
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
else {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}