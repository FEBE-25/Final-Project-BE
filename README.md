# Ajar.in Backend Project Documentation - BE 25

## Overview
> Ajar.in adalah aplikasi berbasis website yang membantu user dalam mencari mentor / guru untuk les

> Aplikasi yang dibuat memiliki fitur untuk memesan les, memilih mentor, dilengkapi dengan fitur login untuk mengidentifikasi user dan menyimpan data user

## Database design

![database design](./README_ASSETS/1.design%20database.jpeg "database design")

## API Spec

### Endpoints (list-method-(req, res(success/gagal) format json))
> /user : endpoint ini memiliki beberapa method, antara lain :
- getAllUser : menggunakan method GET, method ini akan mendapatkan semua data user
- getUserByID : menggunakan method GET, method ini akan mendapatkan data user berdasarkan ID
- addUser : menggunakan method POST, method ini akan menambahkan data user
- deleteUserByID : menggunakan method DELETE, method ini akan menghapus data user berdasarkan ID
- updateUserByID : menggunakan method PUT, method ini akan mengupdate data user berdasarkan ID
- login : menggunakan method POST, method ini merupakan fitur login

> /pesanLes : endpoint ini memiliki beberapa method, antara lain :
- getAllPesanLes : menggunakan method GET, method ini akan mendapatkan semua data pesanan les yang telah dibuat
- getPesanLesByID : menggunakan method GET, method ini akan mendapatkan data pesanan berdasarkan ID
- addPesanLes : menggunakan method POST, method ini akan menambah pesanan les ke database
- deletePesanLesByID : menggunakan method DELETE, method ini akan menghapus pesanan lesberdasarkan ID
- updatePesanLesByID : menggunakan method PUT, method ini akan mengupdate pesanan les berdasarkan ID

> /pengajar : endpoint ini memiliki beberapa method, antara lain :
- getAllPengajar : menggunakan method GET, method ini akan mendapatkan data semua pengajar dalam database
- getPengajarByID : menggunakan method GET, method ini akan mendapatkan data pengajar berdasarkan ID yg di-request oleh user
- addPengajar : menggunakan method POST, method ini akan menambahkan data baru ke dalam collection
- deletePengajarByID : menggunakan method DELETE, method ini akan menghapus data pengajar berdasarkan ID yang di-request oleh user
- updatePengajarByID : menggunakan method PUT, method ini akan mengupdate data pengajar berdasarkan ID yg di-request oleh user

> /admin : endpoint ini memiliki beberapa method, antara lain :
- getAllAdmin : menggunakan method GET, method ini akan mendapatkan data semua admin
- getAdminByID : menggunakan method GET, method ini akan mendapatkan data admin berdasarkan ID
- addAdmin : menggunakan method POST, method ini akan menambahkan data admin
- deleteAdminByID : menggunakan method DELETE, method ini akan menghapus data admin berdasarkan ID
- updateAdminByID : menggunakan method PUT, method ini akan mengupdate data admin berdasarkan ID
- login : menggunakan method POST, method ini merupakan method login untuk admin

## How to use

- clone repo ini dengan command :
```
git clone <https_url_tothis_repo>
```
- pindah ke direktori ini
- install semua dependencies dengan command :
```
npm i
```
- jalankan command berikut untuk menjalankan :
```
node app
```

## Lampiran
- Business Requirements Document : https://whimsical.com/business-requirements-document-4Vx6CdS1nqEZF7ERx4weRY
  
- 
