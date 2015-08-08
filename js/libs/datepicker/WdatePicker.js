/*
 * My97 DatePicker 4.72 Release
 * License: http://www.my97.net/dp/license.asp
 */
var $dp,WdatePicker;
(function(){	
	//��ʼ����̬����
	var Config = {
		//[��̬����]�Ƿ��Զ�����Wdate�� Ĭ��Ϊ�� ����Ϊ��ʱ,��ֱ��������WdatePicker.js��ҳ����ʹ�� class="Wdate"
		$wdate: true,
		//[��̬����]�Ƿ���ʾָ�������ľ��λ��,һ�������Ϊ�ռ���(�����Զ�����),��������Ϊ��ֹ�������������³��򴴽���������õ�
		//�����ľ��λ�� ע��,Ҫ��/��ͷ ��/��β 
		//Ĭ��Ϊ��, Ϊ��ʱ,�����Զ�����
		//����:�������http�еĵ�ַΪ http://localhost/proName/My97DatePicker/
		//�� $dpPath = '/proName/My97DatePicker/';
		$dpPath: '',
		//[��̬����]�Ƿ����
		$crossFrame: true,
		
		//˫����ʾ
		doubleCalendar: false,
		//���̿��ƿ���
		enableKeyboard: true,
		//�Ƿ������������빦��
		enableInputMask: true,
		
		//���޸�������ʱ�����Ԫ��ʱ,�Զ����µ�el,Ĭ���ǹرյ�(��:��Ҫ���ȷ���������ڲŸ���)
		autoUpdateOnChanged: null,
		//��һ����Ϊ,һ��ĵ�һ��
		//�����㷨������
		//1. ISO8601:�涨��һ��������Ϊ��һ��,Ĭ��ֵ: 4
		//2. MSExcel:1��1�����ڵ���: ������д: 7
		//3. ÿ��ĵ�һ������X��Ϊ��һ��,������д: X
		whichDayIsfirstWeek: 4,
		
		//------------------
		//���²�������� WdatePicker �������洫��,���δ����,��ʹ������ֵ
		//------------------
		//����ѡ�����ʾλ��
		//ע��:���Ĭ�ϵ�λ��px,����Ե�ǰ������(���ܹ�����Ӱ��),left����ֻ��������,top���Գ���������⻹���Խ��� 'above' �Ϸ���ʾ, 'under' �·���ʾ, 'auto' ϵͳ���ҳ���С�Զ�ѡ��(Ĭ��)
		//��:
		//{left:100,top:50}��ʾ�̶����[100,50]
		//{top:50}��ʾ������Զ����,�����ָ��Ϊ 50
		//{left:100}��ʾ������Զ����,�����ָ��Ϊ 100
		//{top:'above'}��ʾ�Ϸ���ʾ
		//{top:'under'}��ʾ�·���ʾ
		position: {},
		//Ĭ������,��ֵΪ'auto'ʱ�Զ���ݿͻ���������������Զ�ѡ������ 
		//���Ե����������ο�config.js
		lang: 'auto',
		//Ƥ����� Ĭ���Դ� default��whyGreen����Ƥ��
		//���������css��ǿ�Ļ�,�����Լ���Ƥ��,�����Ը��,�ҿ��԰����Ƥ�����ɵ����ذ���
		//Ƥ�������������ο�config.js
		skin: 'twoer',
		
		//������ʾ��ʽ
		dateFmt: 'yyyy-MM-dd',
		//���ڸ�ʽ[һ������²���Ҫ�޸�](RealValue)	
		realDateFmt: 'yyyy-MM-dd',
		//ʱ���ʽ[һ������²���Ҫ�޸�](RealValue)	
		realTimeFmt: 'HH:mm:ss',
		//ʱ�����ڸ�ʽ[һ������²���Ҫ�޸�](RealValue)
		realFullFmt: '%Date %Time',
		//��С����
		minDate: '1900-01-01 00:00:00',
		//�������
		maxDate: '2099-12-31 23:59:59',
		//��ʼ����,�ȵ�����ڿ�ʱ��ʾ����ʼ���� 
		startDate: '',
		//falseʱ(Ĭ��ֵ): ��ʾ�����ı����ֵΪ��ʱ��ʹ��startDate ��Ϊ��ʼ����
		//trueʱ: ����ʹ�� startDate ��Ϊ��ʼ����
		alwaysUseStartDate: false,
		//��ݲ���
		yearOffset: 1911,
		
		//------------------
		//��ʾѡ��
		//------------------
		//�ܵĵ�һ�� 0��ʾ������ 1��ʾ����һ
		firstDayOfWeek: 0,
		//�Ƿ���ʾ��
		isShowWeek: false,
		//�Ƿ������ʾ ���� ����
		highLineWeekDay: true,
		//�Ƿ���ʾ��հ�ť
		isShowClear: false,
		//�Ƿ���ʾ���찴ť
		isShowToday: true,
		//�Ƿ���ʾOK��ť
		isShowOK: true,
		//��һ�пհ״���ʾ���µ����ڣ�ĩ�пհ״���ʾ���µ�����
		isShowOthers: true,
		//�Ƿ�ֻ��
		readOnly: false,
		
		//����ģʽ���� ������3��ģʽ 0 - ��ʾ 1 - �Զ����� 2 - ���
		errDealMode: 0,
		//Ϊfalseʱ �����ڵ�ʱ���Զ�����,����Ҫͨ��ȷ����������
		//Ϊtrueʱ ��������ڼ��ɷ�������ֵ
		//Ϊnullʱ(�Ƽ�ʹ��) �����ʱ����Ϊfalse ������Ϊtrue
		autoPickDate: null,
		//�Ƿ����ÿ���ѡ����
		qsEnabled: true,
		//�Ƿ��Զ���ʾ����ѡ��
		autoShowQS: false,
		
		//��������,������ʾ
		specialDates: null,
		//������ ���Ա�ʾΪ 0,1,2,3,4,5,6 �ֱ������յ�����
		specialDays: null,
		//��Ч����
		disabledDates: null,
		//��Ч�� ���Ա�ʾΪ 0,1,2,3,4,5,6 �ֱ������յ�����
		disabledDays: null,
		//Ϊtrueʱ ��Ч�����Ч���ڱ����Ч�����Ч����
		opposite: false,
		
		//------------------
		//�¼�
		//------------------
		onpicking: null,
		onpicked: null,
		onclearing: null,
		oncleared: null,
		
		ychanging: null,
		ychanged: null,
		Mchanging: null,
		Mchanged: null,		
		dchanging: null,
		dchanged: null,
		Hchanging: null,
		Hchanged: null,
		mchanging: null,
		mchanged: null,
		schanging: null,
		schanged: null,
		
		//--------------------------
		//���´���������
		//--------------------------
		
		//�ؼ�������,��eCont�ǿ�ʱ,����flatģʽֱ�ӽ����ڿ���ʾ��������
		eCont: null,
		
		//�洢��ʵֵ��element,������value����
		vel: null,
			
		//������Ϣ
		errMsg: '',
		//����ѡ������
		quickSel: [],
		//ֻ���Ƿ���ʱ���ĳ���ֶ���
		has: {}
	};
	
	WdatePicker = main;
	var w = window, d = 'document', de = 'documentElement', tag = 'getElementsByTagName', dptop, jsPath, $IE, $FF, $OPERA;
		
	switch (navigator.appName) {
		case 'Microsoft Internet Explorer':
			$IE = true;
			break;
		case 'Opera':
			$OPERA = true;
			break;
		default://FF or Safari
			$FF = true;
			break;
	}
	jsPath = getJsPath();
	
	if (Config.$wdate) {
		loadCSS(jsPath + 'skin/WdatePicker.css');
	}
	
	//dptop
	dptop = w;
	if (Config.$crossFrame) {
		try {
			while (dptop.parent && dptop.parent[d] != dptop[d] && dptop.parent[d][tag]('frameset').length == 0) {
				dptop = dptop.parent;
			}
		} 
		catch (e) {
			
		}
	}
	
	if (!dptop.$dp) {
		dptop.$dp = {
			ff: $FF,
			ie: $IE,
			opera: $OPERA,
			el: null,
			win: w,
			status: 0,
			defMinDate: Config.minDate,
			defMaxDate: Config.maxDate,
			flatCfgs:[]
		};		
	}
	
	initTopDP();
	
	if ($dp.status == 0) {
		callback(w, function(){
			main(null, true);
		});
	}
		
	//����¼�
	if (!w[d].docMD) {
		dpAttachEvent(w[d], 'onmousedown', disposeDP);
		w[d].docMD = true;
	}
	if (!dptop[d].docMD) {
		dpAttachEvent(dptop[d], 'onmousedown', disposeDP);
		dptop[d].docMD = true;
	}
	dpAttachEvent(w, 'onunload', function(){
		if ($dp.dd) {
			display($dp.dd, "none");
		}
	});
	//end ������
	
	//�ڲ�����	
	function initTopDP(){
		dptop.$dp = dptop.$dp || {};
		
		obj = {			
			$: function(el){
				return (typeof el == 'string') ? w[d].getElementById(el) : el;
			},
			$D: function(id, arg){
				return this.$DV(this.$(id).value, arg);
			},
			$DV: function(v, arg){
				if (v != '') {
					this.dt = $dp.cal.splitDate(v, $dp.cal.dateFmt);
					if (arg) {
						for (var p in arg) {
							if (this.dt[p] === undefined) {
								this.errMsg = 'invalid property:' + p;
							}
							else {
								this.dt[p] += arg[p];
								if (p == 'M') {
									var offset = arg['M'] > 0 ? 1 : 0;
									var tmpday = new Date(this.dt['y'], this.dt['M'], 0).getDate();
									this.dt['d'] = Math.min(tmpday + offset, this.dt['d']);
								}
							}
						}
					}
					if (this.dt.refresh()) {
						return this.dt;
					}
				}
				return '';
			},
			show: function(){
				var divs = dptop[d].getElementsByTagName('div'), maxZIndex = 1e5;
				for (var i = 0; i < divs.length; i++) {
					var curZ = parseInt(divs[i].style.zIndex);
					if (curZ > maxZIndex) {
						maxZIndex = curZ;
					}
				}
				this.dd.style.zIndex = maxZIndex + 2;
				display(this.dd, "block");
			},
			hide: function(){
				display(this.dd, "none");
			},
			attachEvent: dpAttachEvent
		};
		for(var p in obj){
			dptop.$dp[p] = obj[p];
		}
		$dp = dptop.$dp;
		$dp.dd = dptop[d].getElementById('_my97DP');
	}
	
	//����¼�
	function dpAttachEvent(o, sType, fHandler){
		if ($IE) {
			o.attachEvent(sType, fHandler);
		}
		else if (fHandler) {			
			var shortTypeName = sType.replace(/on/, "");
			fHandler._ieEmuEventHandler = function(e){
				return fHandler(e);
			};
			o.addEventListener(shortTypeName, fHandler._ieEmuEventHandler, false);
		}
	}
	
	//����jsPath
	function getJsPath(){
		var path, tmp, scripts = w[d][tag]("script");
		for (var i = 0; i < scripts.length; i++) {
			path = scripts[i].src.substring(0, scripts[i].src.toLowerCase().indexOf('wdatepicker.js'));
			var tmp = path.lastIndexOf("/");
			
			if (tmp > 0) 
				path = path.substring(0, tmp + 1);
			
			if (path) 
				break;
			
		}
		return path;
	}
	
	//�õ����ļ���·�� path = jsPath �������ʱ����Ѿ��õ���
	function createDPPath(path){
		var a, b;
		if (path.substring(0, 1) != "/" && path.indexOf('://') == -1) {/* ˵�������·�� */
			a = dptop.location.href;
			b = location.href;
			if (a.indexOf('?') > -1) 
				a = a.substring(0, a.indexOf('?'));
			
			if (b.indexOf('?') > -1) 
				b = b.substring(0, b.indexOf('?'));
			
			//alert('path:' + path + '\ndptop: ' + a + '\nwin: ' + b);
			var aa,bb,al = '', bl = '', bls = '', i, j, s = '';
			for (i = 0; i < Math.max(a.length, b.length); i++) {
				aa = a.charAt(i).toLowerCase();
				bb = b.charAt(i).toLowerCase();
				if (aa == bb) {
					if (aa == '/') 
						j = i;
				}
				else {
					al = a.substring(j + 1, a.length);
					al = al.substring(0, al.lastIndexOf('/'));
					bl = b.substring(j + 1, b.length);
					bl = bl.substring(0, bl.lastIndexOf('/'));
					//alert('al:'+al+'\nbl:'+bl)
					break;
				}
			}
			if (al != '') {
				for (i = 0; i < al.split('/').length; i++) {
					s += "../";
				}
			}
			if (bl != '') 
				s += bl + '/';
			
			path = a.substring(0, a.lastIndexOf('/') + 1) + s + path;
		}
		//alert(path);
		Config.$dpPath = path;
	}
	
	function loadCSS(path, title, charset){
		var head = w[d][tag]('HEAD').item(0),style = w[d].createElement('link');
		if (head) {
			style.href = path;
			style.rel = 'stylesheet';
			style.type = 'text/css';
			if (title) 
				style.title = title;
			
			if (charset) 
				style.charset = charset;
			
			head.appendChild(style);
		}
	}
	
	function callback(o, func){
		dpAttachEvent(o, 'onload', func);
	}
	
	function getAbsM(w){
		w = w || dptop;
		var lm = 0, tm = 0;
		while (w != dptop) {
			var ifs = w.parent[d][tag]('iframe');
			for (var i = 0; i < ifs.length; i++) {
				try {
					if (ifs[i].contentWindow == w) {
						var rc = getBound(ifs[i]);
						lm += rc.left;
						tm += rc.top;
						break;
					}
				} 
				catch (e) {
				}
			}
			w = w.parent;
		}
		return {
			'leftM': lm,
			'topM': tm
		};
	}
	
	//����һ���ܺõĺ���
	//���Ե����ٳ���ʹ��
	function getBound(o){
		if (o.getBoundingClientRect) {
			return o.getBoundingClientRect();
		}
		else {
			var patterns = {
				ROOT_TAG: /^body|html$/i, 
				OP_SCROLL: /^(?:inline|table-row)$/i
			};
			
			var hssFixed = false, win = null, t = o.offsetTop, l = o.offsetLeft, r = o.offsetWidth, b = o.offsetHeight;
			
			var parentNode = o.offsetParent;
			if (parentNode != o) {
				while (parentNode) {
					l += parentNode.offsetLeft;
					t += parentNode.offsetTop;
					
					if(getStyle(parentNode,'position').toLowerCase() == 'fixed')
						hssFixed = true;
					else if (parentNode.tagName.toLowerCase() == "body") 
						win = parentNode.ownerDocument.defaultView;
					
					parentNode = parentNode.offsetParent;
				}
			}
			
			parentNode = o.parentNode;
			while (parentNode.tagName && !patterns.ROOT_TAG.test(parentNode.tagName)) {
				if (parentNode.scrollTop || parentNode.scrollLeft) {
					if (!patterns.OP_SCROLL.test(display(parentNode))) {
						if (!$OPERA || parentNode.style.overflow !== 'visible') { 
							l -= parentNode.scrollLeft;
							t -= parentNode.scrollTop;
						}
					}
				}
				parentNode = parentNode.parentNode;
			}
			
			if (!hssFixed) {
				var scr = getScroll(win);
				l -= scr.left;
				t -= scr.top;
			}
			r += l;
			b += t;
			
			return {
				'left': l,
				'top': t,
				'right': r,
				'bottom': b
			};
		}
	}
	
	//�����������óߴ�
	function getWH(w){
		w = w || dptop;
		var doc = w[d],
		    width = (w.innerWidth) ? w.innerWidth : (doc[de] && doc[de].clientWidth) ? doc[de].clientWidth : doc.body.offsetWidth,
            height = (w.innerHeight) ? w.innerHeight : (doc[de] && doc[de].clientHeight) ? doc[de].clientHeight : doc.body.offsetHeight; 
		//alert(doc.clientHeight);
		//alert('width:' + width + '\nheight:' + height);
		return {
			'width': width,
			'height': height
		};
	}
	
	//ȡ��scrollTop �� scrollLeft ����html xhtml1.0
	function getScroll(w){
		w = w || dptop;
		var doc = w[d], doce = doc[de], db = doc.body;
		doc = (doce && doce.scrollTop != null && (doce.scrollTop > db.scrollTop || doce.scrollLeft > db.scrollLeft)) ? doce : db;
		//alert('Left:' + doc.scrollLeft + '\nTop:' + doc.scrollTop);
		return {
			'top': doc.scrollTop,
			'left': doc.scrollLeft
		};
	}
	
	//�������ڿ�
	function disposeDP(e){
		var src = e ? (e.srcElement || e.target) : null;
		
		try {
			if ($dp.cal && !$dp.eCont && $dp.dd && src != $dp.el && $dp.dd.style.display == 'block') {
				$dp.cal.close();
			}
		}catch(e){}
	}
	
	//DatePicker�������ʱ
	function dpLoaded(){
		$dp.status = 2;
		
		loadFlat();
	}
	
	function loadFlat(){		
		if ($dp.flatCfgs.length > 0) {			
			var cfg = $dp.flatCfgs.shift();
			cfg.el = {
				innerHTML: ''
			};			
			cfg.autoPickDate = true;
			cfg.qsEnabled = false;
			showPicker(cfg);
		}
	}
	
	var isDptopReady,dptopInterval
	function main(cfg, preLoad){		
		$dp.win = w;
		
		initTopDP();
		
		cfg = cfg ||
		{};
		//��һ������
		if (preLoad) {
			if (!dptopReady()) {
				dptopInterval = dptopInterval ||
				setInterval(function(){
					//loadTime+=50;
					if (dptop[d].readyState == 'complete') {
						clearInterval(dptopInterval);
					//alert('�����ڵ�����:\ntime:'+loadTime+'\nstatus:'+$dp.status+'\nurl:'+w.location.href);
					}
					
					main(null, true);
				}, 50);
				
				return;
			}
			
			//˵���ǵ�һ��Ԥ��
			if ($dp.status == 0) {
				//״̬��Ϊ loading
				$dp.status = 1;
				//��ʼ����
				showPicker({
					el: {
						innerHTML: ''
					}
				}, true);
			}
			else {
				return;
			}
		}
		else 
			if (cfg.eCont) {
				cfg.eCont = $dp.$(cfg.eCont);
				$dp.flatCfgs.push(cfg);
				if ($dp.status == 2) {
					loadFlat();
				}
			}
			else {
				if ($dp.status == 0) {
					main(null, true);
					return;
				}
				if ($dp.status != 2) {
					return;
				}
				
				//�ҵ�����WdatePicker�Ķ���
				var evt = SearchEvent();
				//$dp.srcEl��ʾ����WdatePicker�Ķ���
				if (evt) {
					$dp.srcEl = evt.srcElement || evt.target;
					evt.cancelBubble = true;
				}
				
				$dp.el = cfg.el = $dp.$(cfg.el || $dp.srcEl);
						
				if (!$dp.el || $dp.el['My97Mark'] === true || $dp.el.disabled || ($dp.el == $dp.el && display($dp.dd) != 'none' && $dp.dd.style.left != '-1970px')) {
					//alert($dp.dd.style.cssText+'\ncfg.el && cfg.el.disabled :'+(cfg.el && cfg.el.disabled)+'\ncfg.el == $dp.el : '+(cfg.el == $dp.el)+'\n$dp.dd.style.display!=none :'+($dp.dd.style.display != 'none'))
					$dp.el['My97Mark'] = false;
					return;
				}
				showPicker(cfg);
				
				if (evt && $dp.el.nodeType == 1 && $dp.el['My97Mark'] === undefined) {				
					$dp.el['My97Mark'] = false;
					
					var evt1,evt2;
					if (evt.type == 'focus') {
						evt1 = 'onclick';
						evt2 = 'onfocus';
					}
					else {
						evt1 = 'onfocus';
						evt2 = 'onclick';
					}
						
					dpAttachEvent($dp.el, evt1, $dp.el[evt2]);										
				}				
			}
			
		function dptopReady(){
			if ($IE && dptop != w && dptop[d].readyState != 'complete') 
				return false;
			return true;
		}
		
		//����һ���ܺõĺ���
		//���Ե����ٳ���ʹ��
		function SearchEvent(){
			if ($FF) {
				func = SearchEvent.caller;
				while (func != null) {
					var arg0 = func.arguments[0];
					if (arg0 && (arg0 + '').indexOf('Event') >= 0) {
						return arg0;
					}
					func = func.caller;
				}
				return null;
			}
			return event;
		}
	}
	
	//����������ʽ�������IE��DOM�����ò���Ԫ�ض�����ʽ���� 
	function getStyle(obj, attribute){
		return obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute];
	}
		
	//��ȡ��������ʽ
	function display(obj, value){
		if (obj) {
			if (value != null) 
				obj.style.display = value;
			else 
				return getStyle(obj, 'display');
		}
	}
	
	function showPicker(cfg, preLoad){
		//��Ĭ��ģ���������
		for (var p in Config) {
			if (p.substring(0, 1) != '$') {
				$dp[p] = Config[p];
			}
		}		
		//��cfg��ֵ��ֵ��$dp
		for (var p in cfg) {
			if ($dp[p] !== undefined) 
				$dp[p] = cfg[p];
			//ȡ����ʾ	$dp.errMsg = 'invalid property:' + p;
		}
		
		var nodeName = $dp.el ? $dp.el.nodeName : 'INPUT';		
		if(preLoad || $dp.eCont || new RegExp(/input|textarea|div|span|p|a/ig).test(nodeName)){
			$dp.elProp = nodeName == 'INPUT' ? 'value' : 'innerHTML';
		}
		else
			//���Ϸ���el
			return;
				
		if ($dp.lang == 'auto') {
			$dp.lang = $IE ? navigator.browserLanguage.toLowerCase() : navigator.language.toLowerCase();
		}
		
		if (!$dp.dd || $dp.eCont || ($dp.lang && $dp.realLang && $dp.realLang.name != $dp.lang && $dp.getLangIndex && $dp.getLangIndex($dp.lang)>=0)) {
			if ($dp.dd && !$dp.eCont) {
				dptop[d].body.removeChild($dp.dd);
			}
			if (Config.$dpPath == '') 
				createDPPath(jsPath);
			var ifrHTML = '<iframe style="width:1px;height:1px" src="' + Config.$dpPath + 'My97DatePicker.htm" frameborder="0" border="0" scrolling="no"></iframe>';
			
			if ($dp.eCont) {
				$dp.eCont.innerHTML = ifrHTML;
				callback($dp.eCont.childNodes[0], dpLoaded);
			}
			else {
				$dp.dd = dptop[d].createElement("DIV");
				$dp.dd.id = '_my97DP';
				$dp.dd.style.cssText = 'position:absolute';
				$dp.dd.innerHTML = ifrHTML;
				
				//��������ӵ�dptop
				dptop[d].body.appendChild($dp.dd);
				//dptop[d].body.insertBefore($dp.dd, dptop[d].body.firstChild);
				//});
				callback($dp.dd.childNodes[0], dpLoaded);
				
				if (preLoad) {
					$dp.dd.style.left = $dp.dd.style.top = '-1970px';
				}
				else {
					$dp.show();
					//�����������
					setPos();
				}
			}
		}
		else if ($dp.cal) {
			$dp.show();
			$dp.cal.init();
			if (!$dp.eCont) setPos();
		}
		
		//���$dp.position����λ��
		function setPos(){
			var l = $dp.position.left, t = $dp.position.top, el = $dp.el;
			
			if(el != $dp.srcEl && (display(el)=='none' || el.type == 'hidden'))
				el = $dp.srcEl;
			
			
			//������ʾλ��
			var objxy = getBound(el),
			//alert('objxy.left:'+objxy.left+'\nobjxy.right:'+objxy.right+'\nobjxy.top:'+objxy.top+'\nobjxy.bottom'+objxy.bottom);
			//��߾���ϱ߾�
			mm = getAbsM(w),
			/* ���winsize */
			currWH = getWH(dptop),
			//��� scrollTop �� scrollLeft			
			scr = getScroll(dptop), ddHeight = $dp.dd.offsetHeight, ddWidth = $dp.dd.offsetWidth;
			
			// top
			if (isNaN(t)) {
				if (t == 'above' || (t != 'under' && ((mm.topM + objxy.bottom + ddHeight > currWH.height) && (mm.topM + objxy.top - ddHeight > 0)))) {
					t = scr.top + mm.topM + objxy.top - ddHeight - 2;
				}
				else {
					t = scr.top + mm.topM + Math.min(objxy.bottom, currWH.height - ddHeight) + 2;
				}
			}
			else {
				t += scr.top + mm.topM;
			}
			
			//left
			if (isNaN(l)) {
				l = scr.left + Math.min(mm.leftM + objxy.left, currWH.width - ddWidth - 5) - ($IE ? 2 : 0);
			}
			else {
				l += scr.left + mm.leftM;
			}
						
			$dp.dd.style.top = t + 'px';
			$dp.dd.style.left = l + 'px';
		}
	}
})();
