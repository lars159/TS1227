##Angular  $scope dependacy injection
1. run
2. Look at the diffrent implimentation they both do the same thing.

Promise using Q implimentation
`
    var d = Q.defer();
    setTimeout(function(){ d.resolve(); }, 1000); 
    return d.promise;

    Promise ECMA6 version
    return new Promise(function(resolve, reject){
       setTimeout(resolve, 1000);
    });
`

3. 


4.