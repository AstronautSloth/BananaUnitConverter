document.getElementById('button_mass').onclick = function mass(banana_field, metric_field, imperial_field){
	var banana_mass, metric_mass, imperial_mass;
	if(banana_field != 0){
		metric_mass = 113.398 * banana_field;
		imperial_mass = 4 * banana_field;
		return metric_mass, imperial_mass, banana_field;
	}
	else if(metric_field != 0){
		banana_mass = (metric_field / 113.398);
		imperial_mass = (metric_field * .035274);
		return banana_mass, imperial_mass, metric_field;
	}
	else(imperial_field != 0){
		banana_mass = (imperial_field / 4);
		metric_mass = (imperial_field * 28.3495);
		return banana_mass, metic_mass, imperial_field;
	}
}