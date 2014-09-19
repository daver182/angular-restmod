
'use strict';

angular.module('restmod').factory('AMSApi', ['restmod', 'inflector', function(restmod, inflector) {

	return restmod.mixin('DefaultPacker', { // include default packer extension
		$config: {
			style: 'AMS',
			primaryKey: 'id',
			jsonMeta: 'meta',
			jsonLinks: 'links'
		},

		$methods: {
			// special snakecase to camelcase renaming
			type: {
				decodeName: inflector.camelize,
				encodeName: function(_v) { return inflector.parameterize(_v, '_'); }
			}
		}
	});

}]);