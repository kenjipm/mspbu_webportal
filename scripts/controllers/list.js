'use strict';

angular.module('frontendApp')
  .controller('ListCtrl', function ($scope, $location, $log) {

    $scope.spbu = [
      {
        'id': 0,
        'src': '../images/spbu_1.jpg',
        'name': 'Taman Melati',
        'address': 'Jl. Gading Boulevard nomor 12',
        'city': 'Jakarta',
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
        'totaldemand': 234,
        'avgdemand': 3.5,
        'todayspp': 15,
        'totalpremium': 1320.5,
        'totalpertamax': 1128.9,
        'totalsolar': 982.1,
        'avgpremium': 20.5,
        'avgpertamax': 18.8,
        'avgsolar': 15.6,
        'stock': "OK",
        'order': "1 terlambat di jalan, 2 dalam perjalanan",
      },
      {
        'id': 1,
        'src': '../images/spbu_2.jpg',
        'name': 'Senen 12',
        'address': 'Jl. Senen Raya nomor 32',
        'city': 'Jakarta',
        latitude : -6.210930307358471,
        longitude : 106.87958403262488,
        'totaldemand': 352,
        'avgdemand': 3.9,
        'todayspp': 18,
        'totalsupply': 42,
        'avgsupply': 0.8,
        'totalpremium': 1820.5,
        'totalpertamax': 1198.4,
        'totalsolar': 999.2,
        'avgpremium': 24.5,
        'avgpertamax': 19.4,
        'avgsolar': 12.5,
        'stock': "Pertamax dan Biogas rendah",
        'order': "1 terlambat di jalan, 2 dalam perjalanan",
      },
      {
        'id': 2,
        'src': '../images/spbu_3.jpg',
        'name': 'Menteng Raya',
        'address': 'Jl. Menteng Raya nomor 7',
        'city': 'Jakarta',
        latitude : -6.223030307358471,
        longitude : 106.87118403262488,
        'totaldemand': 190,
        'avgdemand': 1.8,
        'todayspp': 17,
        'totalsupply': 29,
        'avgsupply': 1.2,
        'totalpremium': 1629.1,
        'totalpertamax': 1289.3,
        'totalsolar': 872.3,
        'avgpremium': 23.9,
        'avgpertamax': 17.8,
        'avgsolar': 10.2,
        'stock': "3 BBM rendah",
        'order': "5 dalam perjalanan",
      },
      {
        'id': 3,
        'src': '../images/spbu_4.jpg',
        'name': 'Kebon Kacang',
        'owner': 'PT Minyak Murni',
        'address': 'Jl. Kebon Kacang Raya nomor 87',
        'city': 'Jakarta',
        latitude : -6.250930307358471,
        longitude : 106.86958403262488,
        'totaldemand': 289,
        'avgdemand': 2.1,
        'todayspp': 12,
        'totalsupply': 56,
        'avgsupply': 1.3,
        'totalpremium': 1824.5,
        'totalpertamax': 1743.4,
        'totalsolar': 839.4,
        'avgpremium': 28.3,
        'avgpertamax': 20.3,
        'avgsolar': 17.3,
        'stock': "OK",
        'order': "1 dalam perjalanan",
      },
      {
        'id': 4,
        'src': '../images/spbu_5.jpg',
        'name': 'Menteng 78',
        'owner': 'PT Kencana Sumber Susu',
        'address': 'Jl. Menteng Dalam nomor 78',
        'city': 'Jakarta',
        latitude : -6.223030307358471,
        longitude : 106.89118403262488,
        'totaldemand': 283,
        'avgdemand': 2.5,
        'todayspp': 20,
        'totalsupply': 18,
        'avgsupply': 0.2,
        'totalpremium': 1342.1,
        'totalpertamax': 1832.3,
        'totalsolar': 734.4,
        'avgpremium': 26.3,
        'avgpertamax': 18.3,
        'avgsolar': 14.5,
        'stock': "Premium rendah",
        'order': "3 terlambat di jalan",
      },
    ];

    _.each($scope.spbu, function (site) {
        site.closeClick = function () {
            site.showWindow = false;
            $scope.$apply();
        };
        site.onClicked = function () {
            site.showWindow = false;
            $scope.$apply();
        };
    });

  });
