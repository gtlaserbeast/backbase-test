'use strict';

angular.module('backbaseApp.version', [
  'backbaseApp.version.interpolate-filter',
  'backbaseApp.version.version-directive'
])

.value('version', '1.0');
