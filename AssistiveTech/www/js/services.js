'use strict';

angular.module('starter.services', ['ngResource'])
        .constant("baseURL","http://192.168.2.11:3000")
        
        //.factory('browseList', ['$resource', 'baseURL', function($resource,baseURL) {  
        //    return $resource(baseURL+"/api/dishes");
        //    //return $resource(baseURL + "/api/dishes");
        //}]);
        //.factory('categoryList', ['$resource', 'baseURL', function($resource,baseURL) {  
        //    return $resource(baseURL+"/api/categories");
        //    //return $resource(baseURL + "/api/dishes");
        //}])
        .factory('itemsList', ['$resource', 'baseURL', function($resource,baseURL) {  
            return $resource(baseURL+"/api/items");
            //return $resource(baseURL + "/api/dishes");
        }]);
