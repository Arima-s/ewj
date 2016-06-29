<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>麦斯威尔三合一原味咖啡42条-e万家 - 爱生活.e万家,咖啡/奶茶/可可类冲调,麦斯威尔三合一原味咖啡42条报价</title>
	<link rel="stylesheet" type="text/css" href="style/common.css">
	<link rel="stylesheet" type="text/css" href="style/index.css">
	<link rel="stylesheet" type="text/css" href="style/gooddetail.css">
	<style>
		.sidebar_top .sidebar_list{display:none;}
		.sidebar_top .sidebar_list a p {color:#555;font-size: 14px;text-align: center;line-height: 35.7px;display:inline-block;font-weight:normal;}
		.sidebar_top:hover .sidebar_list{display:block}
	</style>
	<script type="text/javascript" src="js/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="js/ewj.js"></script>
	<script type="text/javascript" src="js/gooddetail.js"></script>
</head>
<body>
	<!-- 						 Header  					 	 -->
		<header id="header">
			<!-- Top_animate -->
			<div class="header_ani">
				<ul class="header_ani_ul">
					<li><a href=""><img src="images/header_ani_2.jpg" alt="提示" /></a></li>
					<li><a href=""><img src="images/header_ani_1.jpg" alt="提示" /></a></li>
					<li><a href=""><img src="images/header_ani_2.jpg" alt="提示" /></a></li>
										
				</ul>
			</div>
			

			<!--  						Here need repaired 						-->
			<!--  							 End								-->

			<div class="clear"></div>
			<div id="header_nav">
				<div id="layout">
					<div class="hnav_top">
						<div class="hnav_tl">
							<div class="hnavCity">
								<span class="hnavTitle">我在<span id="areaText">深圳</span></span>
								<ul class="hnavList">
									<li>
										<a href="javascript:;">深圳</a>
									</li>
								</ul>
							</div>
							<div class="welcomeLogin">
								<span>您好</span>，
								<span class="user">
								<?php 
								echo $_SESSION['username'];
								echo "<a href='exit.php'>退出</a>";
								?>
								</span>
								<span>欢迎来<font>e万家</font>！</span>
								<span><a href="login.php" >登录</a>|<a href="exit.php" >退出</a>|<a href="signin.php" >注册</a></span>
							</div>
						</div>
						<div class="hnav_tr">
							<ul class="hnav_tr_ul">
								<li><a href="">在线客服</a><span>|</span></li>
								<li>
									<a href=""><img src="images/card.png" alt="card" /><strong>VIP提货券</strong></a>
									<span>|</span>
								</li>
								<li>
									<a href=""><strong>消费者通告书</strong></a>
									<span>|</span>
								</li>
								<li>
									<a href="">我的订单</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="hnav_bot">
						<div class="hnav_logo">
							<a href="#"><img src="images/logo.png" alt="logo" /></a>
						</div>
						<div class="hnav_ser">
							<form action="" method="get" class="hnav_ser_form">
								<input type="text" value="" class="hnav_ser_text" />
								<input type="submit" value="" class="hnav_ser_sub" />
							</form>
							<ul class="hnav_ul">
								<li>热门:</li>
								<li><a href="#">生日蛋糕</a></li>
								<li><a href="#">跨境婴幼奶粉</a></li>
								<li><a href="#">伊思 SK-II</a></li>
								<li><a href="#">产地直采</a></li>
								<li><a href="#">平台升级大促</a></li>
								<li><a href="#">韩国零食</a></li>
								<li class="hnav_ul_li_last"><a href="#">冰激凌</a></li>
							</ul>
						</div>
						<div class="hnav_cart">
							<img src="images/cart.png" alt="cart" />
							<a href="/cart.html"><span>购物车&nbsp;<strong id="cartItemNumber">0</strong>&nbsp;件商品</span></a>
						</div>
					</div>
				</div>
			</div>
		</header>
	<!-- 						 mainnav  					 	 -->	
		<div id="main_nav" style="width:100%;height:auto;">
			<div class="main_top">			 <!-- 		main_nav	 	-->
				<ul class="main_top_ul">
					<li class="main_top_li"><a href="#">Enjoy 深圳</a></li>
					<li class="main_top_li"><a href="#">跨境购</a></li>
					<li class="main_top_li"><a href="#">产地直采</a></li>
					<li class="main_top_li"><a href="#">企政阳光采购频道</a></li>
				</ul>
			</div>
		<!-- 	<div class="index_banner_group">  index_banner_group
				        <ul class="banner_list">
			            	<li class="active">
				                <a style="background-image: url(images/banner1.jpg)" target="_blank" href="#"></a>
				            </li>
				            <li class="">
				                <a style="background-image: url(images/banner2.jpg)" target="_blank" href="#"></a>
				            </li>		            
				            <li class="">
				                <a style="background-image: url(images/banner3.jpg)" target="_blank" href="#"></a>
				            </li>		            
				            <li class="">
				                <a style="background-image: url(images/banner4.jpg)" target="_blank" href="#"></a>
				            </li>		            
				            <li class="">
				                <a style="background-image: url(images/banner5.jpg)" target="_blank" href="#"></a>
				            </li>
				            <li class="">
				                <a style="background-image: url(images/banner6.jpg)" target="_blank" href="#"></a>
				            </li>
				        </ul>
				        <div class="small_adv_cont">
			                <div class="adv_container">
				                <ul class="small_adv">
				                    <li>
			                      		<a target="_blank" href="#">
				                            <img alt="" src="images/purple.png">
				                        </a>
		                    <a target="_blank" href="#">
				                            <img alt="" src="images/fresh.png">
				                        </a>
				                    </li>
				                </ul>
			                </div>
			            </div>
				        <ul class="banner_nav">
				            <li class="active">1</li>1		            
				            <li class="">2</li>2		            
				            <li class="">3</li>3		            
				            <li class="">4</li>4		            
				            <li class="">5</li>5
				            <li class="">6</li>6
			      		</ul>
				    </div> -->

		   
			<!-- 	===============	index_banner_group end ================	 -->

			<div id="layout" >
				<div class="sidebar">
					<div class="sidebar_top">
						<p>商品分类</p>
					
					<div class="sidebar_list">
						<ul class="sidebar_list_ul" >
							<li>
								<a href="#">
									<img src="images/12410960_100X100.png" alt="" class="ico" />
									<p>产地直采</p>
								</a>
																
							</li>
							<li>
								<a href="#">
									<img src="images/12410969_100X100.png" alt="" class="ico" />
									<p>时令水果</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410967_100X100.png" alt="" class="ico" />
									<p>肉禽蛋品</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410970_100X100.png" alt="" class="ico" />
									<p>水产海鲜</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410968_100X100.png" alt="" class="ico" />
									<p>乳品面点</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410964_100X100.png" alt="" class="ico" />
									<p>粮油干货</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410965_100X100.png" alt="" class="ico" />
									<p>零食酒饮</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410966_100X100.png" alt="" class="ico" />
									<p>母婴呵护</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410962_100X100.png" alt="" class="ico" />
									<p>个护美妆</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410963_100X100.png" alt="" class="ico" />
									<p>家居日用</p>
								</a>								
							</li>
							<li>
								<a href="#">
									<img src="images/12410961_100X100.png" alt="" class="ico" />
									<p>厨房电器</p>
								</a>								
							</li>
							<li class="last">
								<a href="#">
									<img src="images/12410959_100X100.png" alt="" class="ico" />
									<p>地方特产</p>
								</a>								
							</li>

						</ul>
					</div></div>
					<ul class="sideGoodCategoriesDetail" >

						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list"></ul>
							</div>

						</li>

						<li class="item most" >
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">花卉园艺</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">时令蔬菜</a>
										</span>
										<span class="itemGroup">
											<a href="#">新鲜叶菜</a>
											<a href="#">根茎豆瓜</a>
											<a href="#">调味蔬菜</a>
											<a href="#">新鲜菌菇</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">新鲜水果</a>
										</span>
										<span class="itemGroup">
											<a href="#">应季畅销</a>
											<a href="#">进口水果</a>
											<a href="#">国产水果</a>
											<a href="#">水果礼盒礼篮</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">肉类制品</a>
										</span>
										<span class="itemGroup">
											<a href="#">肉馅/调味肉</a>
											<a href="#">火腿/培根/肉肠</a>
											<a href="#">熟食肉禽</a>
											<a href="#">腊肠/腊肉</a>
											<a href="#">肉丸</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">猪牛羊肉</a>
										</span>
										<span class="itemGroup">
											<a href="#">进口牛羊肉</a>
											<a href="#">鲜/冻牛羊肉</a>
											<a href="#">鲜/冻猪肉</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">禽蛋类</a>
										</span>
										<span class="itemGroup">
											<a href="#">蛋品</a>
											<a href="#">禽类</a>
											<a href="#">分割禽类</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">虾蟹类</a>
										</span>
										<span class="itemGroup">
											<a href="#">虾</a>
											<a href="#">蟹</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">参贝类</a>
										</span>
										<span class="itemGroup">
											<a href="#">贝类</a>
											<a href="#">海参</a>
											<a href="#">其它</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">鱼类</a>
										</span>
										<span class="itemGroup">
											<a href="#">进口鱼类</a>
											<a href="#">国产鱼类</a>
											<a href="#">三文鱼</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">水产干货</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">其他水产</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">乳饮酸奶</a>
										</span>
										<span class="itemGroup">
											<a href="#">冷藏鲜奶/豆浆/乳饮品</a>
											<a href="#">冷藏果汁/饮品</a>
											<a href="#">冷藏酸奶</a>
											<a href="#">国产牛奶</a>
											<a href="#">进口牛奶</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">芝士奶酪</a>
										</span>
										<span class="itemGroup">
											<a href="#">黄油</a>
											<a href="#">奶酪/芝士</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">面包糕点</a>
										</span>
										<span class="itemGroup">
											<a href="#">包装面包蛋糕</a>
											<a href="#">生日蛋糕</a>
											<a href="#">烘培粉&amp;用品</a>
											<a href="#">烘焙点心</a>
											<a href="#">西式面包</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">米面食品</a>
										</span>
										<span class="itemGroup">
											<a href="#">小吃点心</a>
											<a href="#">新鲜面条</a>
											<a href="#">包子薄饼</a>
											<a href="#">水饺云吞</a>
											<a href="#">粽子</a>
											<a href="#">汤圆</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">甜品小菜</a>
										</span>
										<span class="itemGroup">
											<a href="#">甜品</a>
											<a href="#">风味小菜</a>
											<a href="#">冰淇淋/雪糕</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">粮油米面</a>
										</span>
										<span class="itemGroup">
											<a href="#">油</a>
											<a href="#">橄榄油</a>
											<a href="#">米</a>
											<a href="#">面粉</a>
											<a href="#">面条粉丝</a>
											<a href="#">五谷杂粮</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#50044">南北干货</a>
										</span>
										<span class="itemGroup">
											<a href="#">红枣生果干</a>
											<a href="#">菌菇类</a>
											<a href="#">干海产</a>
											<a href="#">煲汤料</a>
											<a href="#">香肠腊肉</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">厨房调料</a>
										</span>
										<span class="itemGroup">
											<a href="#">酱油</a>
											<a href="#">醋</a>
											<a href="#">味精/鸡精</a>
											<a href="#">调味汁</a>
											<a href="#">调味料</a>
											<a href="#">食用糖</a>
											<a href="#">调味酱</a>
											<a href="#">火锅料</a>
											<a href="#">酱菜</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#550000">方便食品</a>
										</span>
										<span class="">
											<a href="#">方便面/粉/粥</a>
											<a href="#">火腿肠</a>
											<a href="#">八宝粥/龟苓膏</a>
											<a href="#">罐头食品</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">休闲零食</a>
										</span>
										<span class="itemGroup">
											<a href="#">坚果</a>
											<a href="#">海味零食</a>
											<a href="#">果冻/零食</a>
											<a href="#">蜜饯果干</a>
											<a href="#">肉干/肉松</a>
											<a href="#">薯片/香脆小食</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">糖果</a>
										</span>
										<span class="itemGroup">
											<a href="#">硬糖软糖</a>
											<a href="#">巧克力</a>
											<a href="#">口香糖</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">饼干曲奇</a>
										</span>
										<span class="itemGroup">
											<a href="#">甜味/咸味饼干</a>
											<a href="#">威化饼干</a>
											<a href="#">曲奇</a>
											<a href="#">糕点</a>
											<a href="#">无糖食品</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">冲饮茗茶</a>
										</span>
										<span class="itemGroup">
											<a href="#">茶叶/茶包</a>
											<a href="#">麦片/玉米片/芝麻糊</a>
											<a href="#">咖啡</a>
											<a href="#">蜂蜜</a>
											<a href="#">成人奶粉</a>
											<a href="#">其它冲调饮品</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">滋补保健</a>
										</span>
										<span class="itemGroup">
											<a href="#">滋补品</a>
											<a href="#">保健品</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">酒品</a>
										</span>
										<span class="itemGroup">
											<a href="#">洋酒</a>
											<a href="#">葡萄酒</a>
											<a href="#">滋补酒/黄酒</a>
											<a href="#">果酒</a>
											<a href="#">白酒</a>
											<a href="#">啤酒</a>
											<a href="#">酒具</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">饮料水</a>
										</span>
										<span class="itemGroup">
											<a href="#">茶饮料</a>
											<a href="#">运动健康饮料</a>
											<a href="#">醋饮料</a>
											<a href="#">饮用水</a>
											<a href="#">咖啡饮料</a>
											<a href="#">碳酸饮料</a>
											<a href="#">果汁饮料</a>
											<a href="#">夏日畅饮合集</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">母婴食品</a>
										</span>
										<span class="itemGroup">
											<a href="#">婴幼奶粉</a>
											<a href="#">婴儿辅食</a>
											<a href="#">婴儿保健</a>
											<a href="#">孕期营养</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">尿裤湿巾</a>
										</span>
										<span class="itemGroup">
											<a href="#">湿巾</a>
											<a href="#">婴儿尿裤</a>
											<a href="#">拉拉裤</a>
											<a href="#">成人尿裤</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">洗护用品</a>
										</span>
										<span class="itemGroup">
											<a href="#">宝宝洗浴</a>
											<a href="#">宝宝护肤</a>
											<a href="#">洗衣液/皂</a>
											<a href="#">坐便器</a>
											<a href="#">日常护理</a>
											<a href="#">驱蚊防蚊</a>
											<a href="#">奶瓶清洗</a>
											<a href="#">理发器</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">喂养用品</a>
										</span>
										<span class="itemGroup">
											<a href="#">辅食料理机</a>
											<a href="#">奶瓶奶嘴</a>
											<a href="#">暖奶消毒</a>
											<a href="#">水壶水杯</a>
											<a href="#">碗盘叉勺</a>
											<a href="#">牙胶安抚</a>
											<a href="#">吸奶器</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">童车童床</a>
										</span>
										<span class="itemGroup">
											<a href="#">婴儿推车</a>
											<a href="#">安全座椅</a>
											<a href="#">婴儿床</a>
											<a href="#">餐椅摇椅</a>
											<a href="#">电动车</a>
											<a href="#">扭扭/滑板车</a>
											<a href="#">三轮/自行车</a>
											<a href="#">学步车</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">童装童鞋</a>
										</span>
										<span class="itemGroup">
											<a href="#">外出服</a>
											<a href="#">内衣</a>
											<a href="#">配饰</a>
											<a href="#">套装</a>
											<a href="#">鞋类</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">妈妈专区</a>
										</span>
										<span class="itemGroup">
											<a href="#">妈咪包/背婴带</a>
											<a href="#">孕产妇服饰</a>
											<a href="#">孕产妇洗护</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">玩具</a>
										</span>
										<span class="itemGroup">
											<a href="#">遥控/电动</a>
											<a href="#">毛绒布艺</a>
											<a href="#">益智玩具</a>
											<a href="#">积木拼插</a>
											<a href="#">模型</a>
											<a href="#">其他玩具</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">轻奢优品</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">美发护发</a>
										</span>
										<span class="itemGroup">
											<a href="#">洗发</a>
											<a href="#">护发</a>
											<a href="#">染发</a>
											<a href="#">造型</a>
											<a href="#">假发</a>
											<a href="#">套装</a>
											<a href="#">电吹风/理发器</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">面部护理</a>
										</span>
										<span class="itemGroup">
											<a href="#">清洁</a>
											<a href="#">护肤</a>
											<a href="#">面膜</a>
											<a href="#">眼部</a>
											<a href="#">套装</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">身体护理</a>
										</span>
										<span class="itemGroup">
											<a href="#">沐浴</a>
											<a href="#">润肤</a>
											<a href="#">手足</a>
											<a href="#">纤体塑形</a>
											<a href="#">美胸</a>
											<a href="#">套装</a>
											<a href="#">其他</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">口腔护理</a>
										</span>
										<span class="itemGroup">
											<a href="#">牙膏/牙粉</a>
											<a href="#">牙刷/牙线</a>
											<a href="#">漱口水</a>
											<a href="#">套装</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">女士护理</a>
										</span>
										<span class="itemGroup">
											<a href="#">卫生巾</a>
											<a href="#">护垫</a>
											<a href="#">私密护理</a>
											<a href="#">脱毛膏/脱毛器</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">香水彩妆</a>
										</span>
										<span class="itemGroup">
											<a href="#">香水</a>
											<a href="#">底妆</a>
											<a href="#">腮红</a>
											<a href="#">眼部</a>
											<a href="#">唇部</a>
											<a href="#">美甲</a>
											<a href="#">美容工具</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">成人用品</a>
										</span>
										<span class="itemGroup">
											<a href="#">测孕</a>
											<a href="#">避孕</a>
											<a href="#">情趣用品</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">男士护理</a>
										</span>
										<span class="itemGroup">
											<a href="#">男士美发护发</a>
											<a href="#">男士面部护理</a>
											<a href="#">男士身体护理</a>
											<a href="#">剃须刀</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">纸品湿巾</a>
										</span>
										<span class="itemGroup">
											<a href="#">卷纸</a>
											<a href="#">抽纸</a>
											<a href="#">湿纸巾</a>
											<a href="#">手帕纸</a>
											<a href="#">厨房用纸</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">衣物清洁</a>
										</span>
										<span class="itemGroup">
											<a href="#">洗衣液/粉</a>
											<a href="#">消毒液/除菌剂</a>
											<a href="#">柔顺剂</a>
											<a href="#">漂白剂/彩漂</a>
											<a href="#">衣领净</a>
											<a href="#">洗衣皂</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">家庭清洁</a>
										</span>
										<span class="itemGroup">
											<a href="#">洗手液</a>
											<a href="#">洗洁精</a>
											<a href="#">油污净</a>
											<a href="#">消毒液</a>
											<a href="#">空调清洁</a>
											<a href="#">地板清洁</a>
											<a href="#">洁厕剂</a>
											<a href="#">管道疏通</a>
											<a href="#">驱蚊防虫</a>
											<a href="#">吸湿防蛀</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">清洁工具</a>
										</span>
										<span class="itemGroup">
											<a href="#">扫把拖把</a>
											<a href="#">抹布百洁布</a>
											<a href="#">垃圾桶/袋</a>
											<a href="#">清洁刷</a>
											<a href="#">清洁手套/围裙</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">家纺收纳</a>
										</span>
										<span class="itemGroup">
											<a href="#">收纳整理</a>
											<a href="#">衣架晾晒</a>
											<a href="#">浴室用品</a>
											<a href="#">毛巾浴巾</a>
											<a href="#">凉席蚊帐</a>
											<a href="#">枕头枕芯</a>
											<a href="#">被子被芯</a>
											<a href="#">地毯地垫</a>
											<a href="#">家居服饰</a>
											<a href="#">F&amp;F服装</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">办公户外</a>
										</span>
										<span class="itemGroup">
											<a href="#">书写工具</a>
											<a href="#">本册便签</a>
											<a href="#">桌面文具</a>
											<a href="#">文具收纳</a>
											<a href="#">雨伞雨具</a>
											<a href="#">车载香氛</a>
											<a href="#">旅行装备</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">五金工具</a>
										</span>
										<span class="itemGroup">
											<a href="#">电池</a>
											<a href="#">灯具插座</a>
											<a href="#">五金卫浴</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">厨房电器</a>
										</span>
										<span class="itemGroup">
											<a href="#">电磁炉</a>
											<a href="#">电饭煲</a>
											<a href="#">电压力锅</a>
											<a href="#">电炖锅</a>
											<a href="#">电水壶</a>
											<a href="#">豆浆机</a>
											<a href="#">微波炉</a>
											<a href="#">榨汁机/料理机</a>
											<a href="#">煮蛋器</a>
											<a href="#">酸奶机</a>
											<a href="#">咖啡机</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">生活电器</a>
										</span>
										<span class="itemGroup">
											<a href="#">取暖电器</a>
											<a href="#">净水设备</a>
											<a href="#">电风扇</a>
											<a href="#">加湿器/除湿器</a>
											<a href="#">电熨斗/挂烫机</a>
											<a href="#">扫地机器人</a>
											<a href="#">智能家居</a>
											<a href="#">智能穿戴</a>
											<a href="#">净化器</a>
											<a href="#">干衣机</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">个护健康</a>
										</span>
										<span class="itemGroup">
											<a href="#">剃须刀</a>
											<a href="#">电吹风/理发器</a>
											<a href="#">按摩器</a>
											<a href="#">运动器材</a>
											<a href="#">健康秤</a>
											<a href="#">血压计</a>
											<a href="#">血糖仪/血糖试纸</a>
											<a href="#">体温计</a>
											<a href="#">计步器</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">厨房烹饪</a>
										</span>
										<span class="itemGroup">
											<a href="#">烹饪锅具</a>
											<a href="#">刀剪砧板</a>
											<a href="#">铲勺筷叉</a>
											<a href="#">调味容器</a>
											<a href="#">烘焙烧烤</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">餐饮用具</a>
										</span>
										<span class="itemGroup">
											<a href="#">餐具</a>
											<a href="#">保鲜餐盒</a>
											<a href="#">水杯水具</a>
											<a href="#">保温杯壶</a>
											<a href="#">茶具</a>
											<a href="#">酒具</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">厨房配件</a>
										</span>
										<span class="itemGroup">
											<a href="#">保鲜用品</a>
											<a href="#">储物置物</a>
											<a href="#">一次性用品</a>
											<a href="#">厨房工具</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">手机数码</a>
										</span>
										<span class="itemGroup">
											<a href="#">手机</a>
											<a href="#">平板电脑/电子书</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">家用电器</a>
										</span>
										<span class="itemGroup">
											<a href="#">电视机</a>
											<a href="#">饮水机</a>
											<a href="#">热水器</a>
											<a href="#">洗衣机</a>
											<a href="#">冰箱</a>
											<a href="#">抽风机</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">家电保养</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
						<li class="item most" style="display: none;">
							<div class="listWrap">
								<ul class="list">
									<li>
										<span class="title">
											<a href="#">上海</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">湖南</a>
										</span>
									</li>
									<li>
										<span class="title">
											<a href="#">福建</a>
										</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>			
		</div>
		<div class="backededed">
			<div class="center product">
				<div class="crumb">
					<a href="/">首页</a><span class="arrow"></span>
		
					<a href="#">零食酒饮</a> <span class="arrow"></span>
		
					<a href="#">冲饮茗茶</a> <span class="arrow"></span>
		
					<a href="#">咖啡/奶茶/可可类冲调</a>
		
					<span class="arrow"></span>
		
					<span class="active">麦斯威尔三合一原味咖啡42条</span>
				</div>
				<div class="detail_meta">
					<div class="preview gallery" id="preview_div">					
						<div class="midImg" id="midView">
							<span class="mark"></span>
							<span class="float_layer"></span>
							<img id="midimg" alt="麦斯威尔三合一原味咖啡42条" src="images/995553_420X420.jpg">
							<!-- <ul class="mid_img_ul">
								<li><img src="images/995553_420X420.jpg"></li>
								<li><img src="images/995554_420X420.jpg"></li>
								<li><img src="images/995555_420X420.jpg"></li>
							</ul> -->
						</div>
						<div class="out_pic" id="bigView" style="display: none;">
							<img src="images/995553_800X800.jpg" alt="" >

						</div>
						<div class="smallImg">
							<div class="scrollbutton smallImgUp ico disabled">❇</div>
							<!-- <div id="imageMenu">
								<ul style="margin-left: 0px;">												
									<li class="">
										<img alt="" src="http://image1.ewj.com/2015/3/13/995553_85X85.jpg">
									</li>						
									<li  class="">
										<img alt="" src="http://image2.ewj.com/2015/3/13/995554_85X85.jpg">
									</li>
									<li class="">
										<img alt="" src="http://image1.ewj.com/2015/3/13/995555_85X85.jpg"
									</li>
									<li class="">
										<img alt="" src="http://image2.ewj.com/2015/3/13/995556_85X85.jpg">
									</li>
									<li class="">
										<img alt="" src="http://image1.ewj.com/2015/3/13/995557_85X85.jpg">
									</li>														
								</ul>
							</div> -->
							<div class="scrollbutton smallImgDown ico">✔</div>
						</div>
		
					</div>
		
					<div class="detail_right">
						<span style="" class="name">麦斯威尔三合一原味咖啡42条</span>
						<span class="introduce"></span>
						<span class="introduce"></span>
						<span class="introduce">滴滴香浓，意犹未尽</span>		
						<div id="loadDetailRight">
							<div class="money">
								价格
								<p class="textPrimary">		
									¥<strong>45</strong>.00		
								</p>		
							</div>		
							<div class="dt_lins ">		
								<span class="title">促销</span>
								<ul id="saleRuleList" class="list">		
									<li style="">
										<span class="flag red">		                
							                送积分							                
							            </span>
										<span>购物送积分</span>
									</li>
								</ul>
							</div>
		
							<!--同款属性-->
		
							<!-- ko foreach:skuSelector.inventoryAttrs -->
							<!-- /ko -->
		
							<div class="dt_lins quantity" id="buy_num">
								<span class="title">数量</span>
								<a  id="less" class="less" ></a>
								<input data-bind="value:buyAmount,event:{blur:changeNumber}" value="1" id="quantity_txt" class="quantity_txt">

								<a id="add" class="add"></a>
								<span class="kucun">库存:41&nbsp;</span>
								<span id="error_tips" class="tips">
		        				<!--您所选的商品数量大于库存!-->
		   						</span>
							</div>
							
		
		
							<div class="dt_lins buyOperate pr">
		
								<a class="btnAddToCart" href="#"><i class="ico">❁</i><span>加入购物车</span></a>
								<a class="but25 btnAddFavorite"><i></i><span>收藏</span></a>
		
								<!-- add to cart panel -->
								<div class="messagePanel successPanel recommend1 addToCart"></div>
								<!-- end add to cart panel -->
								<!-- add to favorite panel -->
								<div style="width: 350px;" class="messagePanel successPanel recommend2 addToFavorite"></div>
								<!-- end add to favorite panel -->
							</div>
							
						</div>
		
						<div class="dt_lins region">
		
							<img src="http://image2.ewj.com/2015/2/2/50460.png">
		
						</div>
		
					</div>
				</div>
			</div>
		</div>
		<!-- 						floatEntry  					 -->
		<div style="display:none;" class="floatEntry">
		    <ul>
		        <li class="count"><a id="sideCartItemNumber"  href="#">0</a></li>
		        <li class="entry entry01 active"><a  href="#"></a></li>
		        <li class="entry entry02"><a href="#" ></a></li>
		        <li class="entry entry03"><a href="javascript:;"></a></li>
		        <li class="entry entry05"><a  onclick="javascript:window.open('http://183.62.99.137:81/Web1800/Service/AutoLogin.aspx?GpId=&amp;ClientType=iscompact&amp;Version=&amp;id=8080152&amp;bgColor=&amp;ud=','newwindow','height=820,width=1000,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')" href="javascript:;"></a></li>
		        <li class="entry entry04 go_top"><a  href="javascript:;"></a></li>
		    </ul>
		</div>
			<!-- 						floatEntry  END					 -->

	<!-- 						 footer  						 -->
		<div class="footer">
			
				<div class="footer-biaoyu">
					<ul class="clearfix">
						<li class="fl">
							<img alt="" src="images/1600019.png" class="fl">			
							<span class="fl">
								7X24小时营业<br>
								全年无休
							</span>
						</li>
						<li  class="fl">
							<img alt="" src="images/1600020.png" class="fl">			
							<span class="fl">
								全国服务热线
								<br>400-883-1984</span>

						</li>

						<li class="fl">

							<img alt="" src="images/1600021.png" class="fl">			
							<span class="fl">
								新鲜直达
								<br>全程冷链</span>

						</li>

						<li class="fl">

							<img alt="" src="images/1600022.png" class="fl">			
							<span class="fl">
								央企正品承诺
								<br>证照管控、每批检验</span>

						</li>

						<li class="fl last">

							<img alt="" src="images/1600023.png" class="fl">			
							<span class="fl">
								满百免运费
								<br>今日下单次日送达</span>

						</li>
					</ul>
				</div>

				<ul class="web_map">
					<li>
						<span data-id="footer:helpTitle1" data-type="htmlSource" class="title">购物指南</span>
						<div data-id="footer:helpLink1" data-type="textLinkList">

							<a target="_blank" href="#">购物流程</a>

							<a target="_blank" href="#">收货贴士</a>

							<a target="_blank" href="#">联系客服</a>

						</div>
					</li>
					<li>
						<span data-id="footer:helpTitle2" data-type="htmlSource" class="title">配送信息</span>
						<div data-id="footer:helpLink2" data-type="textLinkList">

							<a target="_blank" href="#">配送政策</a>

							<a target="_blank" href="#">进度查询</a>

						</div>
					</li>
					<li>
						<span data-id="footer:helpTitle3" data-type="htmlSource" class="title">支付方式</span>
						<div data-id="footer:helpLink3" data-type="textLinkList">

							<a target="_blank" href="#">在线支付</a>

							<a target="_blank" href="#">货到付款</a>

							<a target="_blank" href="#">支付遇到问题</a>

						</div>
					</li>
					<li>
						<span data-id="footer:helpTitle4" data-type="htmlSource" class="title">售后服务</span>
						<div data-id="footer:helpLink4" data-type="textLinkList">

							<a target="_blank" href="#">售后政策</a>

							<a target="_blank" href="#">退款说明</a>

							<a target="_blank" href="#">退换货地址</a>

							<a target="_blank" href="#">消费者告知书</a>

						</div>
					</li>
					<li>
						<span data-id="footer:helpTitle5" data-type="htmlSource" class="title">优惠规则</span>
						<div data-id="footer:helpLink5" data-type="textLinkList">

							<a target="_blank" href="#">积分政策</a>

							<a target="_blank" href="#">优惠券规则</a>

							<a target="_blank" href="#">华润预付卡</a>

						</div>
					</li>
					<li class="last">
						<span data-id="footer:helpTitle6" data-type="htmlSource" class="title">友情链接</span>
						<div data-id="footer:helpLink6" data-type="textLinkList">

							<a target="_blank" href="http://www.crv.com.cn/">华润万家官网</a>

							<a target="_blank" href="http://www.crvole.com.cn/">ole</a>

						</div>
					</li>
				</ul>

				<div class="foot_saoma clearfix">
					<dl>
						<dt imgsize="110X110" data-id="footer:code1_img" data-type="imgLink">

							<img src="images/4060558.png" alt=""></dt>
						<dd data-id="footer:code1_text" data-type="htmlSource">

							<span class="tit1">e万家客户端</span>
							<span class="tit2">扫描有惊喜</span>
							<span class="tit3">
								<a class="iphone" href="javascript:;" style="color:#000;"> <i></i>
									iPhone
								</a>
								<a class="Android" href="javascript:;" style="color:#000;"> <i></i>
									Android
								</a>
							</span>

						</dd>
					</dl>
					<dl>
						<dt imgsize="110X110" data-id="footer:code2_img" data-type="imgLink">

							<img src="images/3190047.png" alt=""></dt>
						<dd data-id="footer:code2_text" data-type="htmlSource">

							<span class="tit1">e万家官方微信</span>
							<span class="tit2">扫描有惊喜</span>

						</dd>
					</dl>
				</div>

				<div class="web_map_My">

					<div data-id="footer:bottomLink" data-type="textLinkList" style="display: inline-block;" class="footer_info">

						<a target="_blank" href="http://www.ewj.com/about.html">关于我们</a>
						<span class="split">|</span>

						<a target="_blank" href="http://www.ewj.com50007">联系我们</a>
						<span class="split">|</span>

						<a target="_blank" href="http://www.ewj.com/mobileApp/index.jsx#/indexPage">触屏版</a>

					</div>

					<span data-id="footer:copyright" data-type="htmlSource" class="copyright">
						Copyright@华润万家有限公司&nbsp;&nbsp;粤ICP备05036369号-4&nbsp;&nbsp;&nbsp;ewj.com&nbsp;版权所有
					</span>

				</div>
		</div>
		
	<!-- 						 footer  	END					 -->
</body>
</html>