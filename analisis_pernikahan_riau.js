// Skrip analisis persentase pernikahan di Provinsi Riau
var provinces = ee.FeatureCollection('users/username/Indonesia_Provinces'); // Ganti dengan path yang benar

// Pilih Provinsi Riau
var riau = provinces.filter(ee.Filter.eq('provinsi', 'Riau'));

// Dataset data pernikahan (misalnya status pernikahan)
var pernikahanData = ee.FeatureCollection('users/username/data_pernikahan_riau'); // Ganti dengan path yang benar

// Hitung persentase pernikahan
var totalPenduduk = riau.size();
var pendudukMenikah = pernikahanData.filter(ee.Filter.eq('status_pernikahan', 'menikah')).size();
var persentasePernikahan = pendudukMenikah.divide(totalPenduduk).multiply(100);

// Visualisasi peta
Map.centerObject(riau, 6);
Map.addLayer(riau, {color: 'blue'}, 'Provinsi Riau');
Map.addLayer(persentasePernikahan, {min: 0, max: 100, palette: ['red', 'green']}, 'Persentase Pernikahan');
