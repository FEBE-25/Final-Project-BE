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

| Atrributes      | Tipe Data 	  | Deksripsi                    |
| --------------- | ------------- | ---------------------------- |
| teacherId      	| String      	| id pengajar                  |
| userId	        | String      	| id pelajar                   |
| biaya           | String    	  | biaya les perjam             |
|jenjangMateri    | String    	  | tingkatan materi             |
|topikMateri      | String    	  | topik mater                  |
|detilTopik       | String    	  | detil topik                  |
|tanggal          | String    	  | tanggal pemesanan            |
|jamMulai         | String    	  | jam mulai les                |
|durasi           | String    	  | durasi berapa lama les       |
|modeBelajar      | String    	  | belajar online/offline       |
|alamat           | String    	  | alamat jika les offline      |
|maps             | String    	  | link maps                    |
|tambahan         | String    	  | tambahan                     |

- getAllPesanLes : menggunakan method GET, method ini akan mendapatkan semua data pesanan les yang telah dibuat

Request :

Method : GET

Endpoint : pesanLes

Header : authUser

Response :

```javascript
  {
  "message": "succes get data",
  "data": [
    {
      "_id": "String",
      "teacherId": {
        "_id": "String",
        "nama": "String"
      },
      "userId": {
        "_id": "String",
        "name": "String"
      },
      "biaya": "String",
      "jenjangMateri": "String",
      "topikMateri": "String",
      "detilTopik": "String",
      "tanggal": "String",
      "jamMulai": "String",
      "durasi": "String",
      "modeBelajar": "String",
      "alamat": "String",
      "maps": "String",
      "tambahan": "String",
      "__v": 0
    },  
  ]
}
```

- getPesanLesByID : menggunakan method GET, method ini akan mendapatkan data pesanan berdasarkan ID

Request :

Method : GET

Endpoint : pesanLes/:id

Header : authUser

Response :

```javascript
  {
  "message": "succes get data",
  "data": [
    {
      "_id": "String",
      "teacherId": {
        "_id": "String",
        "nama": "String"
      },
      "userId": {
        "_id": "String",
        "name": "String"
      },
      "biaya": "String",
      "jenjangMateri": "String",
      "topikMateri": "String",
      "detilTopik": "String",
      "tanggal": "String",
      "jamMulai": "String",
      "durasi": "String",
      "modeBelajar": "String",
      "alamat": "String",
      "maps": "String",
      "tambahan": "String",
      "__v": 0
    },  
  ]
}
```

- addPesanLes : menggunakan method POST, method ini akan menambah pesanan les ke database

Request :

Method : POST

Endpoint : pesanLes

Header : authUser

Body :

```javascript
   {
   "teacherId" : "String",
  "userId" : "String",
  "biaya" : "String",
  "jenjangMateri" : "String",
  "topikMateri" : "String",
  "detilTopik" : "String",
  "tanggal" : "String",
  "jamMulai" : "String",
  "durasi" : "String",
  "modeBelajar" : "String",
  "alamat" : "String",
  "maps" : "String",
  "tambahan" : "String"
  }
```

Response :

```javascript
    {
      "message": "pesanan dibuat!!!
    }
```
- deletePesanLesByID : menggunakan method DELETE, method ini akan menghapus pesanan lesberdasarkan ID

Request :

Method : DELETE

Endpoint : pesanLes/:id

Header : authAdmin

Response :

```javascript
 {
  "message": "Pesanan telah dihapus",
  "doc": {
    "_id": "String",
  "teacherId" : "String",
  "userId" : "String",
  "biaya" : "String",
  "jenjangMateri" : "String",
  "topikMateri" : "String",
  "detilTopik" : "String",
  "tanggal" : "String",
  "jamMulai" : "String",
  "durasi" : "String",
  "modeBelajar" : "String",
  "alamat" : "String",
  "maps" : "String",
  "tambahan" : "String",
    "__v": 0
  }
}
```

- updatePesanLesByID : menggunakan method PUT, method ini akan mengupdate pesanan les berdasarkan ID

Request :

Method : PUT

Endpoint : pesanLes/:id

Header : authUser

Body :

```javascript
   {
   "teacherId" : "String",
  "userId" : "String",
  "biaya" : "String",
  "jenjangMateri" : "String",
  "topikMateri" : "String",
  "detilTopik" : "String",
  "tanggal" : "String",
  "jamMulai" : "String",
  "durasi" : "String",
  "modeBelajar" : "String",
  "alamat" : "String",
  "maps" : "String",
  "tambahan" : "String"
  }
```

Response :

```javascript
    {
  "doc": {
    "acknowledged": true,
    "modifiedCount": 0,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
  },
  "message": "pesanan telah diedit"
}
```

> /pengajar : endpoint ini memiliki beberapa method, antara lain :
- getAllPengajar : menggunakan method GET, method ini akan mendapatkan data semua pengajar dalam database
- getPengajarByID : menggunakan method GET, method ini akan mendapatkan data pengajar berdasarkan ID yg di-request oleh user
- addPengajar : menggunakan method POST, method ini akan menambahkan data baru ke dalam collection
- deletePengajarByID : menggunakan method DELETE, method ini akan menghapus data pengajar berdasarkan ID yang di-request oleh user
- updatePengajarByID : menggunakan method PUT, method ini akan mengupdate data pengajar berdasarkan ID yg di-request oleh user

> /admin : endpoint ini memiliki beberapa method, antara lain :


| Atrributes    | Tipe Data 	  | Deksripsi                    |
| ------------- | ------------- | ---------------------------- |
| name      	  | String      	| nama akun admin              |
| email 	      | String      	| untuk autentifikasi admin    |
| password      | String    	  | untuk autentifikasi admin    |


- getAllAdmin : menggunakan method GET, method ini akan mendapatkan data semua admin

Request :

Method : GET

Endpoint : admin

Header : authAdmin

Response :

```javascript
  {
  "message": "succes get data",
  "data": [
    {
      "_id": "String",
      "name": "String",
      "email": "String",
      "password": "String",
      "__v": 0
    }
  ]
}
```
- getAdminByID : menggunakan method GET, method ini akan mendapatkan data admin berdasarkan ID

Request :

Method : GET

Endpoint : admin/:id

Header : authAdmin

Response :

```javascript
  {
  "message": "succes get data",
  "data": [
    {
      "_id": "String",
      "name": "String",
      "email": "String",
      "password": "String",
      "__v": 0
    }
  ]
}
```

- addAdmin : menggunakan method POST, method ini akan menambahkan data admin

Request :

Method : POST

Endpoint : admin/register

Header :

Body :

```javascript
   {
    "name":"String",
    "email":"String",
    "password": "String"
    }
```

Response :

```javascript
    {
       "message": "admin data created!!!"
    }
```

- deleteAdminByID : menggunakan method DELETE, method ini akan menghapus data admin berdasarkan ID
- updateAdminByID : menggunakan method PUT, method ini akan mengupdate data admin berdasarkan ID
- login : menggunakan method POST, method ini merupakan method login untuk admin

Request :

Method : POST

Endpoint : admin/login

Header :

Body :

```javascript
   {
    "email":"String",
    "password": "String"
    }
```

Response :

```javascript
    {
     "message": "String",
     "token": "String"
    }
```

> user/register : endpoint ini memiliki beberapa method, antara lain :

| Atrributes        | Tipe Data 	  | Deksripsi                    |
| ----------------- | ------------- | ---------------------------- |
| name      	      | String      	| nama akun user               |
| email 	          | String      	| untuk autentifikasi user     |
| password          | String    	  | untuk autentifikasi user     |
| nohp              | Number        | untuk autentifikasi user     |
| Jenjangpendidikan | String        | untuk autentifikasi user     |
| alamat            | String        | untuk autentifikasi user     |
| asal sekolah      | String        | untuk autentifikasi user     |

Request :

Method : POST

Endpoint : user/register

Header :

Body :

```javascript
   {
    "name": "String",
    "email":"String",
    "password": "String",
    "nohp": "Number",
    "jenjangpendidikan": "String",
    "alamat": "String",
    "asalsekolah": "String"
    }
```

Response :

```javascript
{
  "message": "data has been created!!"
}
```

> user/login : endpoint ini memiliki beberapa method, antara lain :

| Atrributes        | Tipe Data 	  | Deksripsi                    |
| ----------------- | ------------- | ---------------------------- |
| email 	          | String      	| untuk autentifikasi user     |
| password          | String    	  | untuk autentifikasi user     |


Request :

Method : POST

Endpoint : user/login

Header :

Body :

```javascript
   {
    "email":"String",
    "password": "String"
    }
```

Response :

```javascript
{
  "message": "Login Succesful",
  "token": ""
}
```



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
