/**
 * @fileoverview Main angular app for magicpairings.org.
 */

goog.provide('pairings.Pairings');
goog.require('pairings.PlayerController');

pairings.Pairings = angular.module('Pairings', ['ngRoute', 'ngMaterial']);
pairings.Pairings.controller('PlayerController', pairings.PlayerController);
