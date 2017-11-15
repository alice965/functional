	//필터
	function _filter(list, predi){ //list는 users, predi는 조건식(30이상이냐 이하냐)
		var new_list=[];
		_each(list, function(val){ //리스트만큼 돌면서, val로 하나씩을 넘긴다.
			if(predi(val)) new_list.push(val); //조건에 맞으면 푸쉬
		});
		return new_list;
	}
	
	//맵
	function _map(list, mapper){ 
		var new_list = [];
		_each(list, function(val){
			new_list.push(mapper(val));
		});
		return new_list;
	}
	
	//each 만들기
	function _each(list, iter){
		for(var i=0; i<list.length; i++){ //리스트만큼 돌면서 하나씩 이터에 적용시킨다.
			iter(list[i]);
		}
	return list;
	}