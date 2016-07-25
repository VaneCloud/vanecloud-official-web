$(function(){
	var head=
	'<div class="container">'+
		'<div class="logo pull-left"></div>'+
		'<nav class="navHead pull-left">'+
			'<li><a href="index.html">首页</a></li>'+
			'<li><a href="javascript:">新闻动态</a>'+
				'<div class="navSection">'+
					'<ul>'+
						'<li><a href="newsInternational.html">国际动态</a></li>'+
						'<li><a href="newsBusiness.html">行业动态</a></li>'+
						'<li><a href="newsVane.html">氢氧动态</a></li>'+
						'<li><a href="newsIssue.html">新品发布</a></li>'+
					'</ul>'+
				'</div>'+
			'</li>'+
			'<li><a href="javascript:">CSHO+</a>'+
				'<div class="navSection">'+
					'<ul>'+
						'<li><a href="company.html">企业简介</a></li>'+
						'<li><a href="productLine.html">企业生产线</a></li>'+
						'<li><a href="javascript:">氢氧培训</a></li>'+
					'</ul>'+
				'</div>'+
			'</li>'+
			'<li><a href="javascript:">解决方案</a>'+
				'<div class="navSection">'+
					'<ul>'+
						'<li><a href="finance.html">金融</a></li>'+
						'<li><a href="education.html">教育</a></li>'+
						'<li><a href="government.html">政府</a></li>'+
						'<li><a href="retail.html">零售</a></li>'+
						'<li><a href="bigData.html">大数据</a></li>'+
					'</ul>'+
				'</div>'+
			'</li>'+
			'<li><a href="javascript:">产品中心</a>'+
				'<div class="navSection">'+
					'<ul>'+
						'<li><a href="vaneDisk.html">氢氧云盘</a></li>'+
						'<li><a href="vaneCloud.html">氢氧云</a></li>'+
						'<li><a href="vaneQueue.html">氢氧云管平台</a></li>'+
						'<li><a href="vaneAnalytics.html">氢氧智讯</a></li>'+
						'<li><a href="vaneReport.html">氢氧万信</a></li>'+
					'</ul>'+
				'</div>'+
			'</li>'+
			'<li><a href="javascript:">体验中心</a>'+
				'<div class="navSection">'+
					'<ul>'+
						'<li><a href="yunCloud.html">云盘下载</a></li>'+
						'<li><a href="otherDownload.html">其它产品下载</a></li>'+
					'</ul>'+
				'</div>'+
			'</li>'+
		'</nav>'+
		'<ul class="logInOut pull-left">'+
			'<li><a href="login.html">登录</a></li>'+
			'<li><a href="registry.html" class="active">注册</a></li>'+
		'</ul>'+
		'<div class="search pull-left">'+
			'<input type="search" placeholder="搜索vaneWIKI" />'+
			'<a href="http://192.168.20.116:3000"></a>'+
		'</div>'+
	'</div>';

	$('.header').append(head);
})