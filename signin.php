<!DOCTYPE html>
<html lang="en">
<head>
	<title>用户注册 - e万家 - 爱生活.e万家</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>   
   	<link rel="stylesheet" type="text/css" href="style/signin.css">    
    <script src="js/jquery-1.11.3.js" type="text/javascript"></script>


</head>
<body class="payBg">
	<div id="Loginpage" class="header">
		<div class="center">
			<div class="headerBody mt8">
				<a style="background-image: url('images/4312385.png');" imgsize="341X71" data-id="loginHeaderLogo" data-type="imgLink" class="headerLogo" target="_blank" href="http://www.ewj.com"></a>
				<div class="headerBiaoyu">
					<div class="loginTopR mt30">
						您好，欢迎您来到华润e万家！
						<span>|</span>
						<a href="#">帮助中心</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="clear"></div>
	<div class="center">
		<div class="panel">
			<div class="panelHd">
				<h1>用户注册</h1>
				<a class="float_r signin" href="/login.html">用户登录</a>
			</div>
			<div class="panelBd">
				<!-- UserSignIn -->
				<div class="UserSignIn registerEmail">
					<form method="post" id="registerForm" >
						<input type="hidden"  name="token">
						<div style="margin-left: 83px">
							<p class="form-group">
								<label>
									<span style="color: #e14041;">*</span>
									用户名 :
								</label>
								<input type="text" tabindex="1" placeholder="请输入您的用户名，支持4-20字符" class="textInput username" name="loginId"></p>
							<div id="emailOrMobileBlock">
								<!--<p class="mt10 form-group">
								<label>
									<span style="color: #e14041;">*</span>
									邮箱 :
								</label>
								<input type="text" name="email" class="textInput useremail" placeholder="请输入您的邮箱" tabindex="2">
								<a href="#" class="Plink ml10 bindBtn" id="mobileBlock">手机注册</a>
							</p>
							-->
							<p class="mt10 form-group">
								<label>
									<span style="color: #e14041;">*</span>
									手机号码 :
								</label>
								<input type="text" maxlength="11" tabindex="2" placeholder="输入您的手机号码" class="textInput userphone" name="mobilePhone">
								<!--<a href="javascript:;" class="Plink bindBtn" id="emailBlock">邮箱注册</a>
							-->
						</p>
						<p class="mt10 aptchaWrap form-group">
							<label>
								<span style="color: #e14041;">*</span>
								验证码 :
							</label>
							<input type="text" tabindex="6" placeholder="请填写验证码" class="textInput aptcha" maxlength="4" name="captcha">
							<img height="30" class="captchaImg" src="images/ValidateCode.jpg">
							<a id="flushCode" href="javascript:;">看不清，换一张？</a>
						</p>
						<p class="mt10 aptchaWrap form-group">
							<label>
								<span style="color: #e14041;">*</span>
								短信验证码 :
							</label>
							<input type="text" tabindex="3" maxlength="6" placeholder="输入短信验证码" class="textInput aptcha" name="mobileValidateCode">
							&nbsp;
							<a id="getMobileCaptcha" class="btn bindBtn">获取短信验证码</a>
						</p>
					</div>
					<p class="mt10 form-group">
						<label>
							<span style="color: #e14041;">*</span>
							设置密码 :
						</label>
						<input type="password" tabindex="4" placeholder="请设置您的密码，支持6-20位字符，区分大小写" class="textInput userpassword" name="password"></p>
					<p class="mt10 form-group">
						<label>
							<span style="color: #e14041;">*</span>
							确认密码 :
						</label>
						<input type="password" tabindex="5" placeholder="请确认密码" class="textInput againpassword" name="password_confirm"></p>
					<div id="registerImgCodeBlock"></div>

					<p class="mt10 aptchaWrap form-group">
						<label>推广码 :</label>
						<input type="text" tabindex="7" placeholder="推广码" class="textInput aptcha" maxlength="20" name="parentId"></p>
					<p class="mt40 operatePw form-group">
						<span data-checked="true" class="checkbox enableSelect active">
							<input type="hidden" value="true" name="protocol_check"> <i></i>
						</span>
						我已阅读并同意
						<a style="float: none; color: #e14041;" onclick="$('.protocolPanel').fadeIn();" href="javascript:;" class="ml10">e万家服务协议</a>

					</p>
				</div>
				<p class="mt20">
					<button onclick="javascript:try {_smq.push(['custom', 'register', 'register-submit']);} catch (e) {};" tabindex="8" class="SignInBtn btnPrimary" type="submit">完成注册</button>
				</p>
				<p style="margin-left: 90px;" class="mt10 form-group">
					<a href="/enterprise_register.html">企业用户注册 &gt;</a>
				</p>
				<input type="hidden" value="ewj_login" name="appId">
				<input type="hidden" value="register" name="pageId">
				<input type="hidden" value="head_merchant" name="mid">
				<input type="hidden" value="0.153023426282757739636409614746" id="pageValidateCode" name="pageValidateCode"></form>
		</div>
		<!-- UserSignIn -->

		<!-- 服务协议弹窗 -->
		<div class="messagePanel protocolPanel">
			<div class="messagePanelHd">
				<p>
					e万家服务协议 <i onclick="$('.protocolPanel').fadeOut();" class="closeBtn"></i>
				</p>
			</div>
			<div class="messagePanelBd">
				<div id="protocol-con">
					<div class="protocol-content">

						<div style="padding-left:5%;padding-right:5%">
							<p>
								《e万家服务协议》（以下简称“本协议“）是由e万家网站的运营方，即华润万家有限公司（以下简称“e万家网站”）在提供域名为www.ewj.com的网站交易平台服务时与e万家网站的使用者（以下 简称“用户”）达成的关于使用e万家网站服务的各项条款、条件和规则。
							</p>

							<p> <strong>如果您访问e万家网站或在e万家网站购物，或以任何行为实际使用、享受e万家网站的服务，即表示您接受了本协议，并同意受本协议各项条款的约束。如果您不同意本协议中的任何内容，您可以选择不使用本网站服务。</strong> 
							</p>

							<p>
								本协议包括协议正文及所有e万家网站已经发布的或将来可能发布或更新的各类规则（在该等规则中e万家网站或被简称为“e万家”），所有规则为本协议不可分割的组成部分，与本协议正文具有同等法律效力。您应当仔细阅读本协议的正文内容及其所属各类规则，对于本协议中以加粗字体显示的内容，您应重点阅读。
							</p>

							<p> <strong>e</strong>
								<strong>万家网站有权根据需要不时地制订、修改本协议及/或各类规则，并以网站公示的方式进行公告，不再单独通知您。修订后的协议或将来可能发布或更新的各类规则一经在网站公布后，立即自动生效。如您不同意相关修订，应当立即停止使用e万家网站服务。如您继续使用e万家网站服务，即表示您接受经修订的协议或规则。</strong> 
							</p>

							<ul>
								<li>
									<strong>e</strong>
									<strong>万家网站账户</strong>
								</li>
							</ul>

							<ol>
								<li>
									用户在注册成为e万家网站用户时所提供的信息应真实、完整、有效，并保证e万家网站可以通过该信息与用户本人进行联系。同时，用户也有义务在相关资料发生变更时及时更新注册信息；
								</li>
								<li>
									在成功注册后，e万家网站会为每位用户开通一个账户，作为其使用e万家网站服务的唯一身份标识，用户应妥善保管该账户的用户名和密码，并对在其账户项下发生的所有行为负责。用户不得以任何形式转让或授权他人使用自己的e万家网站账户；
								</li>
								<li>
									每位用户只允许拥有一个e万家网站账户。如有证据证明或e万家网站有理由相信用户存在注册多个e万家网站账户的情形，e万家网站有权采取取消订单、冻结或关闭账户、拒绝提供服务等措施，给e万家网站及相关方造成损失的，用户还应承担赔偿责任；
								</li>
								<li>
									e万家网站用户必须是具有完全民事行为能力的自然人，或者是具有合法经营资格的实体组织。无民事行为能力、限制民事行为能力人以及无经营或特定经营资格的组织不得注册为e万家网站用户或超过其民事权利或行为能力范围在e万家网站进行交易，如否，e万家网站有权采取取消订单、冻结或关闭账户、拒绝提供服务等 措施，给e万家网站及相关方造成损失的，用户还应承担赔偿责任。
								</li>
							</ol>

							<ul>
								<li>
									<strong>用户的权利和义务</strong>
								</li>
							</ul>

							<p>
								1.用户有权根据本协议的约定，以及e万家网站上发布的相关规则在e万家网站上查询商品信息、订购具体商品、发表使用体验、参与商品讨论、邀请关注好友、上传商品图片、参加e万家网站的有关活动，以及使用e万家网站提供的其他服务;
							</p>

							<p>2.用户应当保证在e万家网站购买商品过程中遵守诚实信用原则，不扰乱网上交易的正常秩序；</p>

							<p>3.用户享有言论自由权利，并拥有适度修改、删除自己发表的文章的权利；</p>

							<p>4.用户不得在e万家网站发表包含以下内容的言论：</p>

							<p style="margin-left:40px">a.反对宪法所确定的基本原则，煽动、抗拒、破坏宪法和法律、行政法规实施的；</p>

							<p style="margin-left:40px">b.煽动颠覆国家政权，推翻社会主义制度，煽动、分裂国家，破坏国家统一的；</p>

							<p style="margin-left:40px">c.损害国家荣誉和利益的；</p>

							<p style="margin-left:40px">d.煽动民族仇恨、民族歧视，破坏民族团结的；</p>

							<p style="margin-left:40px">e.任何包含对种族、性别、宗教、地域内容等歧视的；</p>

							<p style="margin-left:40px">f.捏造或者歪曲事实，散布谣言，扰乱社会秩序的；</p>

							<p style="margin-left:40px">g.宣扬封建迷信、邪教、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；</p>

							<p style="margin-left:40px">h.公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；</p>

							<p style="margin-left:40px">i.损害国家机关信誉的；</p>

							<p style="margin-left:40px">j.其他违反宪法和法律行政法规的。</p>

							<p>5.用户在发表使用体验、商品讨论或图片等内容时，除遵守本条款外，还应遵守e万家网站的其他相关规定；</p>

							<p>6.未经e万家网站同意，禁止用户在e万家网站上发布任何形式的广告。</p>

							<p>
								<strong>三、 e万家网站的权利和义务</strong>
							</p>

							<p>1.e万家网站有义务在现有技术上维护整个网站的正常运行，并努力提升和改进技术，使用户网上交易活动得以顺利进行；</p>

							<p>2.对于用户在e万家网站上做出下列行为的，e万家网站有权做出相应处理，而无须事先通知用户或取得用户同意：</p>

							<p style="margin-left:40px">
								a.e万家网站有权对用户的注册信息及购买行为进行查阅，如发现注册信息或购买行为中存在任何问题的，有权向用户发出询问及要求改正或者做出冻结或关闭账户、取消订单等处理；
							</p>

							<p style="margin-left:40px">
								b.用户违反本协议规定或有违反法律法规和地方规章的行为的，e万家网站有权删除其信息，禁止用户发言，限制用户订购，注销用户账户并按照相关法律规定向相关主管部门进行披露；
							</p>

							<p style="margin-left:40px">
								c.对于用户在e万家网站进行的下列行为，e万家网站有权对用户采取删除其信息，禁止用户发言，限制用户订购，注销用户账户等限制性措施：包括Ⅰ发布或以电子邮件或以其他方式传送存在恶意、虚假和侵犯他人人身财产权利内容的信息；Ⅱ进行与网上购物无关或不是以购物为目的的活动，试图扰乱正常购物秩序；Ⅳ将有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料，加以上载、发布、发送电子邮件或以其他方式传送；Ⅴ干扰或破坏e万家网站和服务或与e万家网站和服务相连的服务器和网络；Ⅵ发布其他违反公共利益或可能严重损害e万家网站和其他用户 合法利益的信息；
							</p>

							<p style="margin-left:40px">d.e万家有权对注册用户发送电子邮件和短信信息，来做消息告知。如用户不愿接受相关信息，可选择退订功能。</p>

							<p>
								3.用户在此授予e万家网站无偿、永久的独家使用权，并有权对该使用权进行再授权，以使e万家网站有权在全球范围内全部或部分地使用、复制、修改、改写、发布、翻译和展示用户登记或发布在e万家网站上的各类信息，或制作其派生作品，或以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入e万家网站其他作品内。
							</p>

							<p>
								<strong>四、 责任限制与不可抗力</strong>
							</p>

							<ol>
								<li>
									在法律法规所允许的限度内，因使用e万家网站服务而引起的任何损害或经济损失，e万家网站承担的全部责任均不超过就用户所购买的与该索赔有关的商品所实际获得的直接收益。这些责任限制条款将在法律所允许的最大限度内适用，并在用户账户被注销后仍继续有效；
								</li>
								<li>
									e万家网站仅限在“按现状”和“按现有”的基础上，向用户提供全部的信息、内容、材料、产品（包括软件）和服务。除非另有明确的书面说明，e万家网站不对其包含在e万家网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的担保；
								</li>
								<li>
									不论在任何情况下，e万家网站均不对由于互联网设备正常维护，互联网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工，暴乱，骚乱，灾难性天气 （如火灾、洪水、风暴等），爆炸，战争，政府行为，司法行政机关的命令或第三方的不作为而造成的不能履行或延迟履行承担责任。
								</li>
							</ol>

							<p>
								<strong>五、 服务的中断和终止：</strong>
							</p>

							<p>
								1.用户向e万家网站提出注销账户申请，经e万家网站审核同意后，由e万家网站注销该用户账户，本协议即告终止。但在注销该用户账户后，e万家网站仍有权：
							</p>

							<p style="margin-left:40px">a.保留该用户的注册信息及过往的全部交易行为记录；</p>

							<p style="margin-left:40px">b.如用户在账户注销前在e万家网站上存在违法行为或违反本协议的行为，e万家网站仍可行使本协议所规定的权利。</p>

							<p>2.在下列情况下，e万家网站可以通过注销用户账户的方式单方解除本协议：</p>

							<p style="margin-left:40px">
								a.在用户违反本协议相关规定时，e万家网站有权暂停或终止向该用户提供服务。如该用户在e万家网站暂停或终止提供服务后，再一次直接或间接或以他人名义注册为e万家网站用户的，则e万家网站有权再次暂停或终止向该用户提供服务；
							</p>

							<p style="margin-left:40px">
								b.如e万家网站通过用户提供的信息与用户联系时，发现用户在注册时填写的电子邮箱已不存在或无法接收电子邮件的，经e万家网站以其他联系方式（如有）通知用户，而用户在三个工作日内仍未能提供新的有效电子邮箱地址的，e万家网站有权终止向该用户提供服务；
							</p>

							<p style="margin-left:40px">c.一经发现用户注册信息中的内容是虚假的，e万家网站即有权终止向该用户提供服务；</p>

							<p style="margin-left:40px">d.本协议修改或更新时，如用户表示不愿接受新的服务协议的，e万家网站有权终止向该用户提供服务；</p>

							<p style="margin-left:40px">e.e万家网站认为需终止提供服务的其他情况。</p>

							<p>
								<strong>六、 适用的法律和管辖权</strong>
							</p>

							<p style="margin-left:21.3pt">
								本协议的订立、执行和解释及争议的解决均应适用中华人民共和国的法律。如发生本协议与法律相抵 触的情形，则该条款将按法律规定重新解释，而其他条款继续有效。如就本协议内容或其执行发生任何争议，则双方应首先通过友好协商方式解决；协商不成的，任何一方均应向e万家网站所在地有管辖权的法院提起诉讼解决。
							</p>

							<p>
								<strong>七、 知识产权</strong>
							</p>

							<ol>
								<li>
									e万家网站上的图表、标识、网页页眉、按钮图标、文字、服务品名等标示在网站上的信息都是e万家网站运营方及其关联方的财产，受中国和国际知识产权法的保护。未经e万家网站许可，任何人不得使用、复制或用作其他用途。在e万家网站上出现的其他商标是其商标权利人各自的财产，未经e万家网站运营方或相关商标 所有人的书面许可，任何第三方都不得使用；
								</li>
								<li>e万家网站用户发表的文章仅代表作者本人观点，与e万家网站立场无关，作者文责自负；</li>
								<li>
									e万家网站及其关联方有权将用户在本网站发表的商品使用体验、商品讨论或图片进行使用或者与其他人合作使用，使用范围包括但不限于网站、电子杂志、杂志、刊物等，使用时需为作者署名，以发表文章时注明的署名为准。文章有附带版权声明者除外；
								</li>
								<li>
									用户在e万家网站上发表的文章及图片（包括转贴的文章及图片）版权仅归属原作者所有，若作者有版权声明或原作从其他网站转载而附带有原版权声明者，其版权归属以附带声明为准；
								</li>
								<li>
									<strong>任何转载、引用发表于e万家网站的版权文章须符合以下规范：</strong>
								</li>
							</ol>

							<p style="margin-left:40px">a.用于非商业、非盈利、非广告性目的时需注明作者及文章及图片的出处为“e万家网站”或“www.ewj.com”；</p>

							<p style="margin-left:40px">
								b.用于商业、盈利、广告性目的时需征得文章或图片原作者的同意，并注明作者姓名、授权范围及原作出处“e万家网站”或“www.ewj.com”；
							</p>

							<p style="margin-left:40px">c.任何文章或图片的修改或删除均应保持作者原意并征求原作者同意，并注明授权范围。</p>

							<p>
								<strong>八、 信息保护</strong>
							</p>

							<p>
								1.用户个人隐私：请阅读e万家网站的
								<a href="http://cms.yhd.com/cms/view.do?topicId=24109">隐私声明</a>
								以了解隐私政策。该声明适用于您访问e万家网站，或在e万家网站购买商品或使用e万家网站提供的任何服务；
							</p>

							<p>2.信息安全</p>

							<p style="margin-left:40px">a.e万家网站账户和提现功能有密码保护，请用户妥善保管账户及密码信息；</p>

							<p style="margin-left:40px">
								b.如果用户发现自己的个人信息泄密，尤其是e万家网站账户及密码或提现密码发生泄露，请用户立即联络e万家网站客服，以便e万家网站采取相应措施。
							</p>

							<p>3.Cookie的使用规则</p>

							<p style="margin-left:40px">a.通过e万家网站所设Cookie所取得的有关信息，将适用本规则；</p>

							<p style="margin-left:40px">b.编辑和删除个人信息的权限：用户可以点击“我的e万家”对用户的个人信息进行编辑和删除，除非e万家网站另有规定。</p>

							<h2>&nbsp;</h2>

							<h2>
								<strong>隐私声明</strong>
							</h2>

							<p>本e万家网站（www.ewj.com）由华润万家有限公司（以下简称“我们”）运营并由其关联公司提供各种支持。</p>

							<p>
								我们注重对您个人隐私的保护。有时候我们需要某些信息才能为您提供您请求的服务，本隐私声明解释了这些情况下的数据收集和使用情况。本隐私声明适用于本网站的所有相关服务。
								<strong>如果您访问本网站、使用本网站的任何服务，那么您便接受了本隐私声明。</strong>
							</p>

							<p>
								<strong>一、用户信息的获取：</strong>
							</p>

							<p>我们获取用户信息的主要目的在于向您提供一个顺畅、高效的购物流程，并致力于不断完善和提升您的购物体验。</p>

							<p>我们可能获取的用户信息类型包括：</p>

							<p style="margin-left:40px">a.注册信息（如，用户名、及在注册过程中提供的其他信息）。</p>

							<p style="margin-left:40px">b.个人或公司联系方式（如，姓名、公司名称、通讯地址、电邮地址、电话、手机号码、传真号码）。</p>

							<p style="margin-left:40px">
								c.订购信息（如，Ⅰ订购人和收货人名称、送货地址、电邮地址和电话号码等与订购相关的任何信息，Ⅱ 在交付文件上的签名，Ⅲe万家网站帐户及帐户信息，Ⅴ为帮助我们提供服务（包括特定服务）而提供给我们的信息）。
							</p>

							<p style="margin-left:40px">d.用于您身份识别的信息（如，身份证号码、护照号码、驾驶证号码）。</p>

							<p style="margin-left:40px">e.指示我们将商品或服务提供给其他人士时提供的该人士的有关信息（如，该人士的姓名、送货地址、电邮地址和电话号码）。</p>

							<p style="margin-left:40px">f.支付信息（如，订单支付详情）和财务信息（如，银行账号）。</p>

							<p style="margin-left:40px">g.其他个人、公司、单位、或社会实体信息。</p>

							<p>我们可能会就下列各种情况，获得您的用户信息：</p>

							<p style="margin-left:40px">a.您在访问或使用本网站服务时提供的信息。</p>

							<p style="margin-left:40px">b.您在与我们的沟通中自动获取的信息：无论您何时与我们沟通，我们接收并储存的信息。</p>

							<p style="margin-left:40px">c.从其他来源获取的信息：如您参加我们或我们与合作伙伴组织的任何活动。</p>

							<p>
								<strong>二、顾客信息的使用：</strong>
							</p>

							<p>我们可能会利用我们获取的用户信息：</p>

							<p style="margin-left:40px">a,向您提供所需要的产品或服务（如，定向采购、货物配送）。</p>

							<p style="margin-left:40px">b.处理和收取款项。</p>

							<p style="margin-left:40px">c.就您的要求向您提供咨询服务，或向您做出回应或与您沟通。</p>

							<p style="margin-left:40px">d.向您提供我们认为您可能会感兴趣的产品或服务。</p>

							<p style="margin-left:40px">e.为提升我们的服务，联系您进行调研。</p>

							<p style="margin-left:40px">f.进行数据分析（如，购买行为或趋势分析、市场或顾客调查、财务分析）。</p>

							<p style="margin-left:40px">g.管理或认可您参加各种活动的资格，如线上或线下活动、优惠或促销活动。</p>

							<p style="margin-left:40px">
								h.经营、评估和完善我们的业务（包括开发新产品和服务；管理我们的通信；判断我们的销售、营销和广告效果；分析和强化我们的产品、服务和网站；和开展会计、审计、记账、对账和收集活动）。
							</p>

							<p style="margin-left:40px">i.在事先获得您同意的情况下，向您指定的联系人发送信息。</p>

							<p style="margin-left:40px">j.防止各种违法或犯罪活动和其他法律责任。</p>

							<p style="margin-left:40px">k.遵守法律规定和我们的政策规则。</p>

							<p>
								<strong>三、用户信息的共享、披露与转让：</strong>
							</p>

							<p>用户的信息是我们业务的重要组成部分，我们不会出售或以其他方式共享您的个人信息，但本《隐私声明》中已列明的如下情况除外。</p>

							<ul>
								<li>
									<strong>合作伙伴：</strong>
								</li>
							</ul>

							<p style="margin-left:21.3pt">
								我们可能会与我们的关联公司或合作伙伴（包括但不限于，您通过我们提供的联合登陆方式登陆的其它网站，以下统称“合作伙伴”）共享用户信息。您可以辨别您的使用或交易行为何时会涉及我们的合作伙伴，我们会与该合作伙伴分享与这些使用或交易行为有关的用户信息。
							</p>

							<ul>
								<li>
									<strong>第三方服务提供者：</strong>
								</li>
							</ul>

							<p style="margin-left:21.3pt">
								我们有可能聘请外部公司或个人代表我们提供某些产品或服务，包括但不限于，提供运营、维护、 IT平台和/或技术服务、数据安全或备份服务、处理订单、递送货物、发送信函或电子邮件、清除用户名单中的重复信息、分析数据、提供市场营销帮助、提供搜 索结果和链接（包括付费搜索名单和链接）、处理收/付款事项以及提供用户服务。在该等情况下，我们可能会共享用户信息。
							</p>

							<ul>
								<li>
									<strong>征得您的同意：</strong>
								</li>
							</ul>

							<p style="margin-left:21.3pt">
								除以上规定及本《隐私声明》已列明的情况外，当您的信息有可能披露给第三方时，您将会得到通知，并且您将有机会选择不与第三方共享此信息。
							</p>

							<p>在下列情况下，我们可能还会披露您的相关信息：</p>

							<p style="margin-left:40px">a.根据法律、法规或法律程序（如，法院法令或传召出庭令）的规定。</p>

							<p style="margin-left:40px">b.根据政府部门（如，行政机构、执法机构）的要求。</p>

							<p style="margin-left:40px">
								c.为了保护本网站、我们的用户或其他人的权利及其财产或安全，或当我们认为对防止实际损害或财务损失，或调查可疑或实际非法活动来说，披露乃属必要或适当时。这也包括为防止欺诈等违法活动和减少信用风险而与其他公司和组织交换信息。
							</p>

							<p>
								我们希望您能够理解，我们可能会向第三方出售或转让本网站，和/或允许承继方承继本网站的服务。在该等情况中，作为本网站不可分割一部分，您的个人信息也将被提供给该等第三方和/或承继方，以使其可以继续为您提供网站服务。接受本隐私声明意味着您已同意该等信息提供。
							</p>

							<p>
								<strong>四、未成年人信息的保护：</strong>
							</p>

							<p>
								我们非常重视对未成年人（依照现行法律的定义）个人信息的保护。我们不希望未成年人直接使用本网站提供的产品或服务，我们希望未成年人与其监护人一起，或在监护人的监督下使用本网站的产品或服务。
							</p>

							<p>
								我们既不主动寻求、也不希望收到直接来自未成年人的个人信息；但我们无法保证时刻都能准确地了 解到访问或使用本网站的访问者年龄。如果未成年人在无监护人同意的情况下向我们提供了他/她的个人信息，我们建议他/她的监护人与我们联系以删除该信息， 并且通知我们以后不再向该未成年人发送任何信息。
							</p>

							<p>
								<strong>五、其他网站链接：</strong>
							</p>

							<p>
								为给您提供更多便利和商业信息，本网站可能会包含至其他网站的链接。该等网站的运营商有可能不 是我们的关联公司。所链接的网站也可能拥有其自身的隐私政策或声明，所以，我们强烈建议您，在访问任何所链接的网站时查看该等隐私政策或声明。对于非由我 们运营之任何网站的内容、对该等网站的任何使用或该等网站的隐私政策，我们概不负责。
							</p>

							<p>
								<strong>六、《隐私声明》的更新：</strong>
							</p>

							<p>
								在中国法律允许的范围内，我们可能会不时更新本《隐私声明》，恕不提前通知。我们将在本网站上醒目位置发布公告，告知您我们《隐私声明》的任何重大变动。
							</p>
						</div>

					</div>
				</div>
				<div class="textCenter mt20">
					<button class="btn btnPrimary btnLg">同意并继续</button>
				</div>
			</div>
		</div>
		<!-- end 服务协议弹窗 -->
	</div>
</div>
<script type="text/html" id="emailTemplate">
        &lt;p class="mt10 form-group"&gt;&lt;label&gt;&lt;span style="color: #e14041;"&gt;*&lt;/span&gt;邮箱 :&lt;/label&gt;&lt;input type="text" name="email" class="textInput useremail" placeholder="输入您的邮箱地址" tabindex="2"&gt;&lt;a href="javascript:;" class="Plink ml10 bindBtn" id="mobileBlock"&gt;手机注册&lt;/a&gt;&lt;/p&gt;
    </script>
<script type="text/html" id="mobileTemplate">
        &lt;p class="mt10 form-group"&gt;&lt;label&gt;&lt;span style="color: #e14041;"&gt;*&lt;/span&gt;手机号码 :&lt;/label&gt;&lt;input type="text" name="mobilePhone" class="textInput userphone" placeholder="输入您的手机号码" tabindex="2"&gt;&lt;a href="javascript:;" class="Plink bindBtn" id="emailBlock"&gt;邮箱注册&lt;/a&gt;&lt;/p&gt;
        &lt;p class="mt10 aptchaWrap form-group"&gt;&lt;label&gt;&lt;span style="color: #e14041;"&gt;*&lt;/span&gt;验证码 : &lt;/label&gt;&lt;input type="text" name="captcha" maxlength="4" class="textInput aptcha" placeholder="请填写验证码" tabindex="6"&gt;
            &lt;img src="/ValidateCode" class="captchaImg" height="30"/&gt;
            &lt;a href="javascript:;" id="flushCode"&gt;看不清，换一张？&lt;/a&gt;
        &lt;/p&gt;
        &lt;p class="mt10 aptchaWrap form-group"&gt;&lt;label&gt;&lt;span style="color: #e14041;"&gt;*&lt;/span&gt;短信验证码 : &lt;/label&gt;&lt;input type="text" name="mobileValidateCode" class="textInput aptcha" placeholder="输入短信验证码" maxlength="6" tabindex="3"&gt;&amp;nbsp;
            &lt;a class="btn bindBtn" id="getMobileCaptcha"&gt;获取短信验证码&lt;/a&gt;
        &lt;/p&gt;
    </script>
<script type="text/html" id="registerImgCodeTemplate">
        &lt;p class="mt10 aptchaWrap form-group"&gt;&lt;label&gt;&lt;span style="color: #e14041;"&gt;*&lt;/span&gt;验证码 : &lt;/label&gt;&lt;input type="text" name="captcha" maxlength="4" class="textInput aptcha" placeholder="请填写验证码" tabindex="6"&gt;
            &lt;img src="/ValidateCode" class="captchaImg" height="30"/&gt;
            &lt;a href="javascript:;" id="flushCode"&gt;看不清，换一张？&lt;/a&gt;
        &lt;/p&gt;
    </script>
</div>

<div style="margin-bottom:50px;" class="center">

<div class="web_map_My">

	<div data-id="footer:bottomLink" data-type="textLinkList" style="display: inline-block;" class="footer_info">

		<a target="_blank" href="http://www.ewj.com/about.html">关于我们</a>
		<span class="split">|</span>

		<a target="_blank" href="http://www.ewj.com/help.html?id=a_50007">联系我们</a>
		<span class="split">|</span>

		<a target="_blank" href="http://www.ewj.com/mobileApp/index.jsx#/indexPage">触屏版</a>

	</div>

	<span data-id="footer:copyright" data-type="htmlSource" class="copyright">
		Copyright@华润万家有限公司&nbsp;&nbsp;粤ICP备05036369号-4&nbsp;&nbsp;&nbsp;ewj.com&nbsp;版权所有
	</span>

</div>
</div>


</body>
</html>