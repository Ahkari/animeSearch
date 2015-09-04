(function(){
	//工具函数全部追加到$

	$.extend( $ , {
		dialog : function(htmlStr){
			var $dialog = $(htmlStr) ; 
			var $dialogWrap = $('<div id="ui-dialog-wrap" style="display:none;"></div>').append( $dialog ) ;
			$dialogWrap.css({
				"width" : "100%" ,
				"height" : "100%" ,
				"background-color" : "rgba(0,0,0,0.4)" ,
				"z-index" : "100" ,
				"position" : "absolute",
				"top" : "0px" ,
				"left" : "0px",
			}).on('click',function(event){
				if ( event.target.id !== 'ui-dialog-wrap' ){
					return ;
				}else{
					$.dialogClose( $dialogWrap.get(0) ) ;
				}
			}) ;
			var winHeight = $(window).height() ;
			$dialog.css({
				"left" : "50%" ,				
				"top" : winHeight/2 + "px" ,
				"position" : "relative",
				"background-color" : "#ffffff",
				"padding-bottom": "1px"
			}) ;

			return $dialogWrap.get(0) ;
		}
		,
		dialogOpen : function(dialog , width){
			if ( $.type(width) === 'number'){
				width = width + 'px'
			}
			// var innerWidth =  ( $(window).width() - $(dialog).width() )/2 ;
			// var innerHeight = ( $(window).height() - $(dialog).height() )/2 ;
			$(dialog).appendTo('html').slideDown('fast') .children().css({
				"width" : width 
			}).css({
				"margin-left" : "-" + $(dialog).children().width()/2 + "px" ,
				"margin-top" : "-" + $(dialog).children().height()/2 + 'px'
			}) ;

		}
		,
		dialogClose : function(dialog){
			$(dialog).hide('fast') ;
			$(dialog).remove() ;
		}
	})






})($)