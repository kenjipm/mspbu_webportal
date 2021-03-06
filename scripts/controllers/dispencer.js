'use strict';

angular.module('frontendApp')
  .controller('DispencerCtrl', function ($scope, $log, $filter, ngTableParams) {

    $scope.overview = {
      "totalbbm": 2280.5,
      "avgbbm": 3212.3,
      "totalpremium": 1201.3,
      "avgpremium": 1535.2,
      "totalpertamax": 721.1,
      "avgpertamax": 914.8,
      "totalsolar": 366.1,
      "avgsolar": 521.3,
    }

    var dispencerChart = c3.generate({
        bindto: '#dispencer-chart',
        data: {
          columns: [
            ['Premium', $scope.overview.totalpremium],
            ['Pertamax', $scope.overview.totalpertamax],
            ['Solar', $scope.overview.totalsolar],
          ],
          type : 'pie',
        }
      });

    $scope.dispencers = [
      {
        'id': 0,
	nopol: "B 1897 PL",
        time: "2014/2/13 09:32",
        product: "Solar",
        orderamount: 19.1
      },
      {
        'id': 1,
	nopol: "B 2673 PBA",
        time: "2014/2/13 09:25",
        product: "Premium",
        orderamount: 30.2
      },
      {
        'id': 2,
	nopol: "B 234 RS",
        time: "2014/2/13 09:12",
        product: "Premium",
        orderamount: 22.1
      },
      {
        'id': 3,
	nopol: "B 8273 TQ",
        time: "2014/2/13 09:05",
        product: "Premium",
        orderamount: 25.3
      },
      {
        'id': 4,
	nopol: "B 2749 TL",
        time: "2014/2/13 08:34",
        product: "Pertamax",
        orderamount: 45.8
      },
      {
        'id': 5,
	nopol: "B 126 BA",
        time: "2014/2/13 08:10",
        product: "Premium",
        orderamount: 29.7
      },
      {
        'id': 6,
	nopol: "B 1822 UT",
        time: "2014/2/13 07:55",
        product: "Pertamax",
        orderamount: 46.2
      },
      {
        'id': 7,
	nopol: "B 3623 TG",
        time: "2014/2/13 07:47",
        product: "Pertamax",
        orderamount: 35.6
      },
      {
        'id': 8,
	nopol: "B 2373 TGH",
        time: "2014/2/13 07:45",
        product: "Solar",
        orderamount: 34.9
      },
      {
        'id': 9,
	nopol: "B 3567 TU",
        time: "2014/2/13 07:39",
        product: "Premium",
        orderamount: 32.7
      },
      {
        'id': 10,
	nopol: "B 8777 PG",
        time: "2014/2/13 07:32",
        product: "Pertamax",
        orderamount: 27.8
      },
      {
        'id': 11,
	nopol: "B 6765 PB",
        time: "2014/2/13 07:22",
        product: "Pertamax",
        orderamount: 44.6
      },
      {
        'id': 12,
	nopol: "B 4453 UPL",
        time: "2014/2/13 07:01",
        product: "Premium",
        orderamount: 45.3
      }
    ];

    $scope.transactionTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.dispencers.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.dispencers, params.filter()) :
                    $scope.dispencers;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.dispencers;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    var recordchart = c3.generate({
        bindto: '#record-chart',
        data: {
          columns: [
            ['Pertamax', 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250],
            ['Premium', 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 130, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 30, 200],
            ['Solar', 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 130, 100, 140, 200, 150, 50]
          ],
          types: {
            Pertamax: 'bar',
            Premium: 'bar',
            Solar: 'bar',
          },
          groups: [
            ['Pertamax', 'Premium', 'Solar']
          ]
        },
        subchart: {
          show: true
        },
        axis: {
          x: {
            type: 'categorized'
          }
        },
        zoom: {
          enabled: true
        }
      });

  });
