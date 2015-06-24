/**
 * @fileoverview Controller for a single player context.
 */

goog.provide('pairings.PlayerController');

pairings.PlayerController = function($location) {
  /** @export {string} */
  this.dci = $location.path();
};
