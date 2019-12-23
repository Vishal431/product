require(['jquery', 'jquery/ui'], function($){
    $(document).ready(function () {
	    size_li = 42;
	    x=10;
	    $('#table tr:lt('+x+')').show();
	    $('#loadMore').click(function () {
	        x= (x+10 <= size_li) ? x+10 : size_li;
	        $('#table tr:lt('+x+')').show();
	        $('#showLess').show();
	        if(x == size_li){
	            $('#loadMore').hide();
	        }
	    });
	    $('#showLess').click(function () {
	        x=(x-10<0) ? 10 : x-10;
	        $('#table tr').not(':lt('+x+')').hide();
	        $('#loadMore').show();
	        $('#showLess').show();
	        if(x == 10){
	            $('#showLess').hide();
	        }
	    });
	});
});
