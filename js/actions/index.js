$(function(){

//功能一:点击报错,弹窗	
$('a.search_errorReport').on('click',function(event){
	//预留给资源标识的值
	var sourseId = $(event.target).data('sourseid') ;
	// sourseId = 
	//资源名不需要预留, 从页面上取
	var sourseName = $(event.target).parent().prev().text() ; 
	// sourseName = '命运石之门【720P】【SEED压制组】' ;
	var htmlStr = ''
	+	'<div>'
	+		'<p class="errorDialog-title ell">请仔细说明该资源存在的问题，谢谢~（' + sourseName + '）</p>'
	+		'<textarea class="errorDialog-textarea" placeholder="迅雷太卡了下载不动"></textarea>'
	+		'<div class="errorDialog-submit">提交</div>'
	+	'</div>' ;
	var dialog = $.dialog(htmlStr) ;
	//弹窗
	$.dialogOpen( dialog , 725 ) ;

	//功能二: ajax处理错误提交
	$('div.errorDialog-submit').on('click',function(event){
		

	})

});


//功能三: 判断是否有权限, 对应各提示标签
$('.search_tabs li').hover(function(event){
	var $tar = $(event.target) ;
	if ( $tar.text() === 'NCOP/ED' ){
		//为NCOP且没权限, 权限判断
		if ( true ){
			var $tipDom = $('<a class="lv2 hoverTip" style="position: relative;top: -50px;display:none;">需要注册</a>')
			.insertAfter( $tar ).show('fast') ;
		}
	}else if( $tar.text() === '抠图' ){
		//为抠图且没权限, 权限判断
		if ( true ){
			var $tipDom = $('<a class="lv3 hoverTip" style="position: relative;top: -50px;display:none;">1000逗币解锁</a>')
			.insertAfter( $tar ).show('fast') ;
		}
	}else if( $tar.text() === '镜头索引' ){
		//为镜头索引且没权限, 权限判断
		if ( true ){
			var $tipDom = $('<a class="lv4 hoverTip" style="position: relative;top: -50px;display:none;">需要提交申请</a>')
			.insertAfter( $tar ).show('fast') ;
		}
	}
},function(){
	$('a.hoverTip').slideDown('fast').remove() ;
});


//功能四: 点击签到, +10效果
//功能按钮重置与否, true已签到
var isSignIn = false ;
if ( isSignIn ){
	$('a.signIn').addClass('hadSignIn').text('已签到') ;
}
$('a.signIn').on('click',function(event){
	if ( $(event.target).hasClass('hadSignIn')){
		return ;
	}else{
		$(event.target).addClass('hadSignIn').text('已签到') ;
	}
	var $tipStr = $('<span class="doubiAddTen">逗币+10</span>').appendTo( $(event.target) ) ;
	setTimeout(function(){
		$tipStr.css({
			'opacity' : '0' ,
			'top' : '-40px',
		}) ;
	},0);

})


//功能五: 网盘下载
$('a.search_download').on('click',function(event){
	//预留给资源标识的值
	var sourseId = $(event.target).data('sourseid') ;
	// sourseId = 
	var htmlStr = ''
	+	'<div>'
	+		'<div class="tiqimaWrap"><span class="tiquma">提取码</span><input type="text" class="tiqumaInput"></div>'
	+		'<div class="tiquma-submit">前往网盘</div>'
	+	'</div>' ;
	var dialog = $.dialog(htmlStr) ;
	//弹窗
	$.dialogOpen( dialog , 360 ) ;

	//前往网盘
	$('div.tiquma-submit').on('click',function(event){
		
	})
});


//功能六: 点击台词切换
$('a.lv2.tanci').on('click',function(event){


});

//功能七: 点击切换生肉部分
$('a.lv0.shengrou').on('click',function(event){


});


})