(function(win){
	archieve_list=[];
	archieve_list[archieve_list.length] = {
		'postid' : '1',
		'post_name' : 'hello-world',
		'post_chinese_name' : '你要创作中心站创建',
		'type_name' : 'none',
		'last_modi' : '',
		'tag' : [],
	};
	for (var i in archieve_list) archieve_list[i].tag.sort(function(a, b){ return tags_val[a] - tags_val[b]});
for (var i in archieve_list) {
let u = archieve_list[i], qaq = u.last_modi.split('-');
u.last_modi_val = qaq[0] * 100000000 + qaq[1] * 10000 + qaq[2];
}
})(document);