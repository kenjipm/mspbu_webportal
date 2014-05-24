'use strict';

angular.module('frontendApp')
  .controller('SppCtrl', function ($scope, $location, $log, $filter, ngTableParams) {

    $scope.showComparison = function(id, status) {
      $log.log("statusnya " + status);
      if (status == "gagal") {
        $scope.spps[id].isComparedError = !$scope.spps[id].isComparedError;
      }
      else if (status == "dalam perjalanan") {
      }
      else {
        $scope.spps[id].isCompared = !$scope.spps[id].isCompared;
      }
    };

    $scope.spps = [
      {
        'id': 0,
        'imgurl': "",
        time: "2014/2/25 09:32",
        vtime: "2014/2/25 10:55",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'status': "dalam perjalanan",
      },
      {
        'id': 1,
        'imgurl': "",
        time: "2014/2/25 13:34",
        vtime: "2014/2/25 14:54",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B3439",
        noshipment: "9340373783045929248",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 18.2,
        'denstemp': "0.846/23",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'status': "sukses",
      },
      {
        'id': 2,
        'imgurl': "",
        time: "2014/2/22 08:59",
        vtime: "2014/2/22 10:29",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2834TH",
        noshipment: "9340373783045928956",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 7.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "gagal",
        'color': true,
      },
      {
        'id': 3,
        'imgurl': "",
        time: "2014/2/22 09:33",
        vtime: "2014/2/22 10:51",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 12.1,
        'denstemp': "0.823/24",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'status': "sukses",
      },
      {
        'id': 4,
        'imgurl': "",
        time: "2014/2/21 12:12",
        vtime: "2014/2/21 13:55",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7821PL",
        noshipment: "9340373783045928734",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 11.3,
        'denstemp': "0.834/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "sukses",
      },
      {
        'id': 5,
        'imgurl': "",
        time: "2014/2/20 14:28",
        vtime: "2014/2/20 16:22",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7899DK",
        noshipment: "9340373783045928678",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 5.3,
        'denstemp': "0.891/23",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "sukses",
      },
      {
        'id': 6,
        'imgurl': "",
        time: "2014/2/20 09:32",
        vtime: "2014/2/20 11:36",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'status': "sukses",
      },
      {
        'id': 7,
        'imgurl': "",
        time: "2014/2/18 13:34",
        vtime: "2014/2/18 16:09",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B3439",
        noshipment: "9340373783045929248",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 18.2,
        'denstemp': "0.846/23",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'status': "sukses",
      },
      {
        'id': 8,
        'imgurl': "",
        time: "2014/2/17 08:59",
        vtime: "2014/2/17 10:29",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2834TH",
        noshipment: "9340373783045928956",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 7.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "sukses",
      },
      {
        'id': 9,
        'imgurl': "",
        time: "2014/2/13 07:15",
        vtime: "2014/2/13 10:22",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 12.1,
        'denstemp': "0.823/24",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'status': "sukses",
      },
      {
        'id': 10,
        'imgurl': "",
        time: "2014/2/13 15:14",
        vtime: "2014/2/13 16:59",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7821PL",
        noshipment: "9340373783045928734",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 11.3,
        'denstemp': "0.834/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "sukses",
      },
      {
        'id': 11,
        'imgurl': "",
        time: "2014/2/12 15:21",
        vtime: "2014/2/12 16:18",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7899DK",
        noshipment: "9340373783045928678",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 5.3,
        'denstemp': "0.891/23",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'status': "sukses",
      },
      {
        'id': 12,
        'imgurl': "",
        time: "2014/2/12 09:32",
        vtime: "2014/2/12 12:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'status': "sukses",
      }
    ];

    $scope.sppTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.spps.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.spps, params.filter()) :
                    $scope.spps;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.spps;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.tracelog = [
      {
        'type': "Notifikasi",
        'sender': "System",
        'time': "2014/2/22 10:29",
        'note': "Pengiriman melewati batas waktu"
      },
      {
        'type': "Keluhan",
        'sender': "SPBU Owner",
        'time': "2014/2/22 11:02",
        'note': "Pesanan Premium dgn nomor 9340373783045928956 belum sampai hingga waktu yang ditentukan. Supir dan sales tidak bisa saya hubungi sejak pukul 10. Bisa dijadwalkan ulang pengirimannya? Stok Premium saya diperkirakan hanya sampai akhir minggu ini."
      },
      {
        'type': "Catatan",
        'sender': "Operator",
        'time': "2014/2/22 11:32",
        'note': "Supir mengalami kecelakaan di tol Priuk, truk terbalik. Saat ini sudah dijadwalkan pengiriman ulang di ritase ke 3."
      },
    ];

  });
