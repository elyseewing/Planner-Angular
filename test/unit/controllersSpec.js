'use strict';

/* jasmine specs for controllers go here */

describe('Planner controllers', function() {

    beforeEach(module('myApp.services'));

    describe('SignupCtrl', function(){
      var ctrl;
      beforeEach(function(){
          ctrl = new SignupCtrl();
      });
      it('should ....', function() {
        //spec body
      });
    });

    describe('LoginCtrl', function(){
      var LoginCtrl;
      beforeEach(function(){
          LoginCtrl = new LoginCtrl();
      });
      it('should ....', function() {
        //spec body
      });
    });

    describe('SubjectListCtrl', function(){
        var SubjectListCtrl;
        beforeEach(function(){
            SubjectListCtrl = new SubjectListCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

    describe('SubjectDetailCtrl', function(){
        var SubjectDetailCtrl;
        beforeEach(function(){
            SubjectDetailCtrl = new SubjectDetailCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

    describe('ItemNewCtrl', function(){
        var ItemNewCtrl;
        beforeEach(function(){
            ItemNewCtrl = new ItemNewCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

    describe('ItemDetailCtrl', function(){
        var ItemDetailCtrl;
        beforeEach(function(){
            ItemDetailCtrl = new ItemDetailCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

    describe('ListDetailCtrl', function(){
        var ListDetailCtrl;
        beforeEach(function(){
            ListDetailCtrl = new ListDetailCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

    describe('TodoDetailCtrl', function(){
        var TodoDetailCtrl;
        beforeEach(function(){
            TodoDetailCtrl = new TodoDetailCtrl();
        });
        it('should ....', function() {
            //spec body
        });
    });

});
