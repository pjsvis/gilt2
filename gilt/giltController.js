function GiltController($scope, $http) {

    $scope.saleRoot='https://api.gilt.com/v1/sales/';
    $scope.productRoot='https://api.gilt.com/v1/products/';
    $scope.active='/active.json';
    $scope.upcoming='/upcoming.json';
    //$scope.apikey='?apikey=88658e0b728c695d6145ffde625f01f6';
    $scope.apikey='?apikey=2440447922c57c973d514596633f7c2f0bdef21c5d831613bc88cfbba88e79e9';
    $scope.callback='&callback=JSON_CALLBACK';
    $scope.method="JSONP";

    $scope.fetchStore = function(store, saleMethod) {
        $scope.code = null;
        $scope.response = null;

        $scope.store=store;
        $scope.saleMethod=saleMethod;
        $scope.saleUrl=$scope.saleRoot + $scope.store +  $scope.saleMethod + $scope.apikey + $scope.callback;
        console.log($scope.saleUrl);

        var url='https://api.gilt.com/v1/sales/active.json?apikey=2440447922c57c973d514596633f7c2f0bdef21c5d831613bc88cfbba88e79e9';
        $http.get('JSONP', url).success(function(data, status){
            $scope.status = status;
            $scope.data = data;
            console.log(data);
        }).error(function(data, status){
            $scope.data = data || "Request failed";
            $scope.status = status;
            console.log($scope.data + '\n' +  status);
        });
        return;
        //TODO:  Refactor this lot
        $http({method: $scope.method, url: $scope.saleUrl}).success(success).error(error);

        function success(data, status) {
            $scope.status = status;
            $scope.data = data;
            console.log(data);
        }

        function error(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;
            console.log($scope.data + '\n' +  status);
        }
    };
    // Initialise
    $scope.store='women';
    $scope.fetchStore($scope.store, $scope.active);
}
