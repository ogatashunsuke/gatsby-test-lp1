import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
<div>

<header>
<div className="header__line"></div>

<div className="header_txt">
	<h1>戸田市で腰痛の改善なら戸田たつき整体</h1>
</div>

<div className="header__cnt">

	<div className="logo">
		<Image 
			filename="img_logo.jpg" 
			className="" 
			alt="戸田たつき整体"
			style={{ 
				width: "100%",
				height: "100%"
			 }}
		 />
	</div>

	<div className="pc-header__cnt__right pc">
		<ul>
			<li className="pc-header__tel-btn">
				<Image 
					filename="img_cta_tel_pc.jpg" 
					className="header__cta__btn1" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%",
						height: "100%"
					 }}
				 />
			</li>
			<li className="pc-header__line-btn">
				<a href="#lineinquiry">
					<Image 
						filename="img_cta_line.png" 
						className="header__cta__btn2" 
						alt="LINEでのご予約・ご相談"
						style={{ 
							width: "100%",
							height: "100%"
						 }}
					 />
				</a>
			</li>
			<li className="pc-header__mail-btn">
				<a href="#inquiry">
					<Image 
						filename="img_cta_mail.png" 
						className="header__cta__btn2" 
						alt="メールでのご予約・ご相談"
						style={{ 
							width: "100%",
							height: "100%"
						 }}
					 />
				</a>
			</li>
		</ul>
	</div>

	<div className="tbl-header__cnt__right tbl">
		<ul>
			<li className="tbl-header__tel-btn">
				<Image 
					filename="img_cta_tel_pc.png" 
					className="header__cta__btn1" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%",
						height: "100%"
					 }}
				 />
			</li>
			<li className="tbl-header__line-btn">
				<a href="#lineinquiry">
					<Image 
						filename="img_cta_line_mini.png" 
						className="header__cta__btn2" 
						alt="LINEでのご予約・ご相談"
						style={{ 
							width: "100%",
							height: "100%"
						 }}
					 />
				</a>
			</li>
			<li className="tbl-header__mail-btn">
				<a href="#inquiry">
					<Image 
						filename="img_cta_mail_mini.png" 
						className="header__cta__btn2" 
						alt="メールでのご予約・ご相談"
						style={{ 
							width: "100%",
							height: "100%"
						 }}
					 />
				</a>
			</li>
		</ul>
	</div>

</div>
</header>

<div className="sp__fixedbar sp">
	<ul>
		<li className="sp__fixedbar__btn2__1">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')"
			>
				<Image 
					filename="img_cta_tel_sp.png" 
					className="" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%",
						height: "auto" 
					}}
				 />
			</a>
		</li>
		<li className="sp__fixedbar__btn2__2">
			<a href="#inquiry">
				<Image 
					filename="img_cta_line.png" 
					className="" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%",
						height: "auto" 
					}}
				 />
			</a>
		</li>
	</ul>
</div>

<section id="top" className="fv">
	<h2>
		<div className="pctbl">
			<Image 
				filename="img_fv_txt_pc.png" 
				className="" 
				alt="腰痛の改善なら戸田たつき整体。痛みを和らげ、再発させない施術"
				style={{ 
					width: "auto",
					height: "100%"
				 }}
			 />
		</div>
		<div className="sp">
			<Image 
				filename="img_fv_sp.jpg" 
				className="" 
				alt="腰痛の改善なら戸田たつき整体。痛みを和らげ、再発させない施術"
				style={{ 
					width: "100%",
					height: "auto"
				 }}
			 />
		</div>
	</h2>
</section>

<section id="case" className="case">
	<h2>「腰痛が改善した！」<br className="sptbl" />よろこびの声が続々と</h2>
	<figure className="case__imgcnt">
		<Image 
			filename="img_case_01.jpg" 
			className="" 
			alt="腰の痛みが改善したお客様" 
			style={{ borderRadius: "4px" }}
		 />
	</figure>
</section>

<section id="problem" className="problem">
<h2>こんなお悩みを<br className="sptbl" />抱えていませんか？</h2>
<div className="bg">
	<div className="wrapper">
		<div className="cnt">
			<figure className="problem__img">
				<Image 
					filename="img_problem_01.jpg" 
					className="" 
					alt="腰の痛み"
					style={{ 
						width: "100%",
						height: "auto"
					 }}
				 />
			</figure>
			<div className="txt">
				<ul>
					<li><p>長い間、<span className="red">慢性的な腰痛</span>で悩んでいる</p></li>
					<li><p><span className="red">前屈み</span>や<span className="red">腰を反らす</span>のがきつい</p></li>
					<li><p><span className="red">座っているだけ</span>でつらい</p></li>
					<li><p>腰の痛みで<span className="red">長く歩けない</span></p></li>
					<li><p>お尻や太もも、脚まで<span className="red">痛みや痺れがある</span></p></li>
					<li><p>整形外科や他の整体は<span className="red">効果なかった</span></p></li>
					<li><p><span className="red">薬</span>や<span className="red">ブロック注射</span>に頼りたくない</p></li>
					<li><p>病院で<span className="red">手術しかない</span>と言われた</p></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</section>

<section className="cta">
<div className="cta__title">
	<p>1つでも当てはまる方は<br className="sptbl" />お気軽にご相談ください</p>
</div>
<div className="bg">
	<div className="wrapper">
		<h2>
			<div className="pctbl">
				<div className="cta__txt">
					<Image 
						filename="img_cta_txt_pc.png" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
			<div className="sp">
				<div className="cta__txt">
					<Image 
						filename="img_cta_sp.jpg" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
		</h2>
	</div>
	<ul className="cta__cnt2 pctbl">
		<li className="pctbl">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#lineinquiry">
				<Image 
					filename="img_cta_line.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#inquiry">
				<Image 
					filename="img_cta_mail.png" 
					className="cta__btn" 
					alt="メールでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel6_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<div className="cta__txtcnt sp">
		<p className="cta__spacer sp"></p>
		<p>※施術中は電話に出れませんので、<br />留守番電話をお願いします。<br />確認後、折り返しお電話させていただきます。</p>
	</div>
</div>
</section>

<section id="description" className="description">
<h2>累計1.2万件以上の感謝の声<br />なぜ痛みを再発させないのか？</h2>
<div className="description__cnt">

	<div className="description__cntpart">
		<p className="description__txtsmr">実は、病院の痛み止め薬・ブロック注射・湿布では再発していまいます</p>
		<div className="description__txtimgcnt">
			<figure className="description__imgcnt">
				<Image 
					filename="img_description_01.jpg" 
					alt="病院では症状が再発してしまうことも"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<div className="description__txtdtcnt">
				<p className="description__txtdt">病院では、腰の痛みや痺れを抑えるために、痛み止め薬やブロック注射などをします。</p>
				<p className="description__txtdt"><span className="bold">症状は一時的に軽減するかもしれません</span>が、根本原因は改善していないため、結果的に<span className="bold red">再発してしまいます</span>。</p>
				<p className="description__txtdt">それどころか、筋肉だけでなく骨や椎間板にも負担がかかり<span className="bold">椎間板ヘルニア、すべり症などの骨変形を進行</span>させてしまいます。</p>
			</div>
		</div>
	</div>

	<div className="description__cntpart">
		<p className="description__txtsmr">腰痛の本当の原因は、レントゲンやMRIでは見つからないことが多い</p>
		<div className="description__txtimgcnt">
			<figure className="description__imgcnt">
				<Image 
					filename="img_description_02.jpg" 
					alt="症状の本当の原因は？"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<div className="description__txtdtcnt">
				<p className="description__txtdt">日本整形外科学会と日本腰痛学会によると、レントゲンやMRIなどで、<span className="bold">腰痛の原因が特定</span>されるのは、たった15%とされています。<span className="red bold">9割弱は原因が特定できない</span>のです。</p>
				<p className="description__txtdt">実際、人にもよりますが、股関節や骨盤などの関節の動きが悪ければ、腰椎に負担がかかり腰痛が生じることもあります。</p>
				<p className="description__txtdt">つまり、多くの場合、<span className="bold">腰痛の原因は腰にはない</span>ということです。</p>
			</div>
		</div>
	</div>

	<div className="description__cntpart">
		<p className="description__txtsmr">腰痛に特化して、お客様に一人ひとりにあった施術を行います！</p>
		<div className="description__txtimgcnt">
			<figure className="description__imgcnt">
				<Image 
					filename="img_info_04.jpg" 
					alt="一人ひとりに合わせた施術をします"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<div className="description__txtdtcnt">
				<p className="description__txtdt">痛みの出ている場所、原因は<span className="bold">人それぞれ違う</span>のでそれらを的確に捉えて<span className="bold"><span className="red">お客様に合った施術法</span></span>を選択しています。</p>
				<p className="description__txtdt">私自身が病院などのリハビリの現場経験が豊富だからこそ、原因をしっかり見極め、対処することができると自負しております。</p>
				<p className="description__txtdt"><span className="bold">根本原因を見つけて施術</span>していくことで、痛みのない生活にいち早く戻ることができます。</p>
			</div>
		</div>
	</div>

</div>
</section>

<section id="reason" className="reason">
<div  className="reason">
	<div className="wrapper2">
		<div className="reason__smr3">
			<h2>他院とはココが違う！<br />選ばれる5つの理由</h2>
		</div>

		<div className="cnt__d">

			<div className="cnt__c">
				<div className="cnt__a">
					<div className="img__number">
						<Image 
							filename="img_reason_07.jpg" 
							alt="戸田駅8分で通いやすい"
							style={{ 
								width: "100%"
						 	}}
						 />
						<p>&nbsp;&nbsp;1&nbsp;&nbsp;</p>
					</div>
				</div>
				<div className="cnt__b">
					<p className="txt__smr">戸田駅10分で<br />通いやすい</p>
					<p className="txt__dtl">当院はJR埼京線、戸田駅から徒歩10分に立地しております。駅から近く、通いやすくなっております。</p>
				</div>
			</div>

			<div className="cnt__c">
				<div className="cnt__a">
					<div className="img__number">
						<Image 
							filename="img_reason_02.jpg" 
							alt="国家資格保有施術歴4年"
							style={{ 
								width: "100%"
						 	}}
						 />
						<p>&nbsp;&nbsp;2&nbsp;&nbsp;</p>
					</div>
				</div>
				<div className="cnt__b">
					<p className="txt__smr">国家資格保有<br />施術歴4年</p>
					<p className="txt__dtl">病院や訪問介護にて臨床経験を積み、柔道整復師の国家資格を保有しています。開業前も含め4年以上、様々な部位・症状の施術をしてきました。</p>
				</div>
			</div>

			<div className="cnt__c">
				<div className="cnt__a">
					<div className="img__number">
						<Image 
							filename="img_reason_01.jpg" 
							alt="腰痛専門の豊富な知識と経験"
							style={{ 
								width: "100%"
						 	}}
						 />
						<p>&nbsp;&nbsp;3&nbsp;&nbsp;</p>
					</div>
				</div>
				<div className="cnt__b">
					<p className="txt__smr">腰痛専門の<br />豊富な知識と経験</p>
					<p className="txt__dtl">慢性的な腰痛、椎間板ヘルニア、ぎっくり腰、坐骨神経痛など腰痛の経験施術が豊富な整体院です。</p>
				</div>
			</div>

			<div className="cnt__c">
				<div className="cnt__a">
					<div className="img__number">
						<Image 
							filename="img_info_01.jpg" 
							alt="清潔で綺麗な施術室"
							style={{ 
								width: "100%"
						 	}}
						 />
						<p>&nbsp;&nbsp;4&nbsp;&nbsp;</p>
					</div>
				</div>
				<div className="cnt__b">
					<p className="txt__smr">清潔で<br />綺麗な施術室</p>
					<p className="txt__dtl">2020年6月に開店したばかりの綺麗で落ち着いた雰囲気の個室で施術をいたします。アルコール除菌など衛生管理も徹底しています。</p>
				</div>
			</div>

			<div className="cnt__c">
				<div className="cnt__a">
					<div className="img__number">
						<Image 
							filename="img_reason_05.jpg" 
							alt="完全予約制で待ち時間なし"
							style={{ 
								width: "100%"
						 	}}
						 />
						<p>&nbsp;&nbsp;5&nbsp;&nbsp;</p>
					</div>
				</div>
				<div className="cnt__b">
					<p className="txt__smr">完全予約制で<br />待ち時間なし</p>
					<p className="txt__dtl">お忙しい方でも大丈夫！事前に予約をするから、施術までお待たせしません。</p>
				</div>
			</div>
		</div>
			
	</div>
</div>
</section>


<section id="greeting" className="greeting">
	<h2>院長あいさつ</h2>
	<div className="wrapper">
		<div className="cnt">
			<p className="message">痛みのあるところに原因はない！<br />根本治療で再発を防ぎます</p>
			<div className="cnt2">
				<figure className="sp">
					<Image 
						filename="img_greeting_sp.jpg" 
						alt="院長のあいさつ"
						style={{ 
							width: "100%"
					 	}}
					 />
				</figure>
				<figure className="pctbl">
					<Image 
						filename="img_greeting_pc.jpg" 
						alt="院長のあいさつ"
						style={{ 
							width: "100%"
					 	}}
					 />
				</figure>
				<div className="comment">
					<p>私は<span className="bold">国家資格取得後</span>、理学療法士として約4年間、<span className="bold red">病院</span>や<span className="bold red">訪問看護</span>で、約1.2万人の様々な部位・症状の施術をしてきました。</p>
					<p>これまでの経験上、実は、病院や整骨院などで改善しない方の多くは、その<span className="bold red">原因にアプローチできていませんでした</span>。なぜなら、痛みのあるところに原因はなく、違うところにアプローチしてしまっているからです。</p>
					<p>当院は、単なる気休めではなく、根本から改善することを目指して施術をします。原因としっかり見つけ、再発させないようにしていきたい方は、ぜひ一度ご相談ください。</p>
					<p className="name">院長 白石将悟</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="voice" className="voice">
	<h2>実際にご利用いただいた<br className="sptbl" />お客様の声</h2>
	<div className="voice__wrapper">
	<div className="voice__cntl">

	<div className="voice__cntm2">
		<p className="voice__smrtxt">
			<span className="font-bold red">歩くのにも痛かったヘルニアが良くなった</span>
		</p>
		<div className="voice__cntm">
			<div className="voice__cnts">
				<figure className="voice__img__box">
					<Image 
						filename="img_voice_02.jpg" 
						alt="お客様の声"
						style={{ 
							width: "100%"
					 	}}
					 />
				</figure>
				<p className="voice__name">
					<span className="font-bold">椎間板ヘルニア</span>&nbsp;&nbsp;
					<br className="pctbl" />20代&nbsp;女性
				</p>
			</div>
			<div className="voice__cnt">
				<span className="voice__txt">
					<p>病院で椎間板ヘルニアと診断されて、腰から足先まで痛みとしびれがありました。歩くのも辛いほどだったときに、知り合いからの紹介で来院しました。</p>
					<p>今では歩いても痛みはなく、かがむ動作をして腰に負担をかけなければ、痛むことはほとんどありません。同じように腰が痛くて悩んでいる方は、ぜひ一度先生にみてもらうと良いと思います。</p>
				</span>
				<span className="voice__subtxt">
					<p>※個人の感想であり、成果や成功を保証するものではありません。</p>
				</span>
			</div>
		</div>
	</div>

	<div className="voice__cntm2">
		<p className="voice__smrtxt">
			<span className="font-bold red">スッと楽になってもっと早くいっておけばよかった</span>
		</p>
		<div className="voice__cntm">
			<div className="voice__cnts">
				<figure className="voice__img__box">
					<Image 
						filename="img_voice_03.jpg" 
						alt="お客様の声"
						style={{ 
							width: "100%"
					 	}}
					 />
				</figure>
				<p className="voice__name">
					<span className="font-bold">腰痛・肩こり</span>&nbsp;&nbsp;
					<br className="pctbl" />30代&nbsp;男性
				</p>
			</div>
			<div className="voice__cnt">
				<span className="voice__txt">
					<p>仕事柄、腰痛と肩こりに悩まされていました。腰は前屈の動作がきつく、肩は首のほうまで痛く、ひどいときは頭痛もありました。</p>
					<p>近所のマッサージにいくと、気持ちは良かったのですが、すぐ悪くなっていて、どうしようかなと思っていたときに、戸田たつき整体をみつけました。</p>
					<p>強く揉んだりはしないのですが、症状がスッと楽になってもっと早くいっておけばよかったです。</p>
				</span>
				<span className="voice__subtxt">
					<p>※個人の感想であり、成果や成功を保証するものではありません。</p>
				</span>
			</div>
		</div>
	</div>

	<div className="voice__cntm2">
		<p className="voice__smrtxt">
			<span className="font-bold red">施術を受けて魔法にかかったかのようにすごく楽になりました</span>
		</p>
		<div className="voice__cntm">
			<div className="voice__cnts">
				<figure className="voice__img__box">
					<Image 
						filename="img_voice_01.jpg" 
						alt="お客様の声"
						style={{ 
							width: "100%"
					 	}}
					 />
				</figure>
				<p className="voice__name">
					<span className="font-bold">腰痛・肩こりなど</span>&nbsp;&nbsp;
					<br className="pctbl" />40代&nbsp;女性
				</p>
			</div>
			<div className="voice__cnt">
				<span className="voice__txt">
					<p>腰痛、肩こり、全身の疲れがありました。指圧マッサージや整形外科へ通院し、痛み止めの薬を飲んだり、湿布を貼ったり、ストレッチをしたり、色々とやってきました。</p>
					<p>なかなか良くならず薬やもみほぐしも、その時は気持ちが良くても時間とともに痛み出すの繰り返しでした。</p>
					<p>痛みや症状、悩みなど話をよく聞いてくれます。またそれについて色々と調べたり、勉強したりしてくれてとても親身になって対応してくれます。</p>
					<p>もみかえしの痛みがないことや、もみほぐしがないのに痛みが和らいだことにはびっくりしました。施術を受けて魔法にかかったかのようにすごく楽になりました。</p>
					<p>まだ年が若いのに努力家で親身になって対応してくれる先生です。もみほぐしが無いのにウソのように痛みが和らぎとても楽になります。悩んでいる方は騙されたと思って一度で良いから先生の施術を受けてみてください。すごくオススメです!!</p>
				</span>
				<span className="voice__subtxt">
					<p>※個人の感想であり、成果や成功を保証するものではありません。</p>
				</span>
			</div>
		</div>
	</div>

	</div>
	</div>

	<div className="voice__othercase">
		<p className="voice__othercase__title">改善事例</p>
		<p>
			<span className="font-bold">
			慢性腰痛 / 椎間板ヘルニア / <br className="sp" />ぎっくり腰 / 坐骨神経痛 / <br />
			脊柱管狭窄症 / 腰椎分離症 / <br className="sp" />腰椎すべり症 / 産後の腰痛 
			</span>
			など
		</p>
		<p>他にも多数の改善実績がございます。</p>
		<p>あなたの症状が対応できるかどうか、<br className="sp" />まずはお気軽にご相談ください。</p>
	</div>

</section>

<section className="cta">
<div className="cta__title">
	<p>戸田市の痛み・歪みなら<br />当院にお任せください</p>
</div>
<div className="bg">
	<div className="wrapper">
		<h2>
			<div className="pctbl">
				<div className="cta__txt">
					<Image 
						filename="img_cta_txt_pc.png" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
			<div className="sp">
				<div className="cta__txt">
					<Image 
						filename="img_cta_sp.jpg" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
		</h2>
	</div>
	<ul className="cta__cnt2 pctbl">
		<li className="pctbl">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#lineinquiry">
				<Image 
					filename="img_cta_line.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#inquiry">
				<Image 
					filename="img_cta_mail.png" 
					className="cta__btn" 
					alt="メールでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a href="#inquiry">
				<Image 
					filename="img_cta_mail6_sp.png" 
					className="cta__btn" 
					alt="メールでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a href="#lineinquiry">
				<Image 
					filename="img_cta_line6_sp.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a></li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel6_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<div className="cta__txtcnt sp">
		<p>※施術中は電話に出れませんので、<br />留守番電話をお願いします。<br />確認後、折り返しお電話させていただきます。</p>
	</div>
</div>
</section>

<section id="recommendation" className="recommendation">
	<h2>専門家の推薦</h2>
	<div className="recommendation__wrapper">
		
		<div className="recommendation__cnt3">
			<figure className="recommendation__img__box pctbl">
				<Image 
					filename="img_recommendation_01.jpg" 
					alt="専門家の推薦"
					style={{ 
						width: "100%",
						borderRadius: "4px"
				 	}}
				 />
			</figure>
			<div className="recommendation__cnt1">
				<p className="recommendation__txt1">痛みの原因がわかり、根本から改善する</p>
				<div className="recommendation__cnt2">
					<p className="recommendation__name"><span className="bold">ひらいトータルボディケア</span><br />院長 平井様</p>
					<figure className="recommendation__img__box sp">
						<Image 
							filename="img_recommendation_01.jpg" 
							alt="専門家の推薦"
							style={{ 
								width: "100%"
						 	}}
						 />
					</figure>
				</div>
				<div className="recommendation__txt2">
					<p>丁寧なカウンセリングと検査で、原因がわかり、症状がしっかり改善していきます。</p>
					<p>根本的に施術をしてくれるため「その場しのぎ」にならず再発予防もしっかりしています。</p>
				</div>
				<p className="recommendation__txt3">※個人の感想であり、成果や成功を保証するものではありません</p>
			</div>
		</div>

		<div className="recommendation__space"></div>

		<div className="recommendation__cnt3">
			<figure className="recommendation__img__box pctbl">
				<Image 
					filename="img_recommendation_02.jpg" 
					alt="専門家の推薦"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<div className="recommendation__cnt1">
				<p className="recommendation__txt1">再発予防までしっかりとサポートする</p>
				<div className="recommendation__cnt2">
					<p className="recommendation__name"><span className="bold">作業療法士</span><br />前川様</p>
					<figure className="recommendation__img__box sp">
						<Image 
							filename="img_recommendation_02.jpg" 
							alt="専門家の推薦"
							style={{ 
								width: "100%"
						 	}}
						 />
					</figure>
				</div>
				<div className="recommendation__txt2">
					<p>技術力はもちろん素晴らしいですが、慢性症状を改善する上で大切な体質改善を行う施術をしてくれます。</p>
					<p>再発予防まで考えて、治療を行ってくれますし、なにより人柄も良いので、初めてでも安心です。</p>
				</div>
				<p className="recommendation__txt3">※個人の感想であり、成果や成功を保証するものではありません</p>
			</div>
		</div>

		<div className="recommendation__space"></div>

	</div>
</section>

<section id="flow" className="flow">
	<h2>施術の流れ</h2>
	<div className="wrapper">
		<div className="cntl">
			
		<div className="cntm arrow">
			<div className="flow__number">
				<Image 
					filename="img_flow_01.jpg" 
					alt="お問い合わせ"
					style={{ 
						width: "100%"
				 	}}
				 />
				<p>&nbsp;&nbsp;1&nbsp;&nbsp;</p>
			</div>
			<div className="cnt">
				<p className="txt1">お問い合わせ</p>
				<p className="txt2">ご相談だけでも問題ございません。まずはお気軽にお問い合わせください。</p>
			</div>
		</div>
		
		<div className="cntm arrow">
			<div className="flow__number">
				<Image 
					filename="img_flow_02.jpg" 
					alt="問診・検査"
					style={{ 
						width: "100%"
				 	}}
				 />
				<p>&nbsp;&nbsp;2&nbsp;&nbsp;</p>
			</div>
			<div className="cnt">
				<p className="txt1">問診・検査</p>
				<p className="txt2">具合が悪いところや、体質、普段の生活習慣などを問診・検査します。</p>
			</div>
		</div>
		
		<div className="cntm arrow">
			<div className="flow__number">
				<Image 
					filename="img_info_04.jpg" 
					alt="施術開始"
					style={{ 
						width: "100%"
				 	}}
				 />
				<p>&nbsp;&nbsp;3&nbsp;&nbsp;</p>
			</div>
			<div className="cnt">
				<p className="txt1">施術開始</p>
				<p className="txt2">お体の状況をみて、簡単にご説明しながら施術を進めていきます。</p>
			</div>
		</div>
		
		<div className="cntm">
			<div className="flow__number">
				<Image 
					filename="img_info_05.jpg" 
					alt="アフターフォロー"
					style={{ 
						width: "100%"
				 	}}
				 />
				<p>&nbsp;&nbsp;4&nbsp;&nbsp;</p>
			</div>
			<div className="cnt">
				<p className="txt1">アフターフォロー</p>
				<p className="txt2">今後の改善過程や、日常生活のアドバイスをなどをします。</p>
			</div>
		</div>
			
		</div>
	</div>
</section>

<section id="price" className="price">
	<h2>施術料金</h2>
	<div className="wrapper">
		<figure className="table">
			<Image 
				filename="img_price.png" 
				alt="施術料金"
				style={{ 
					width: "100%"
			 	}}
			 />
		</figure>
		<div className="price__txtcnt">
			<p>初回はカウンセリング・検査で<br className="sp" />少しお時間がかかります。</p>
		</div>
	</div>
</section>

<section id="infomation" className="information">
	<h2>当院案内</h2>
	<div className="wrapper">
		<div className="cnt">
			<div className="map">
				<iframe 
					title="map" 
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.4396567025738!2d139.66308981526242!3d35.813687280163634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018eb1389551875%3A0xa289c8492dc418ec!2z44CSMzM1LTAwMjEg5Z-8546J55yM5oi455Sw5biC5aSn5a2X5paw5pu977yR77yQ77yU77yU!5e0!3m2!1sja!2sjp!4v1591339468709!5m2!1sja!2sjp" 
					width="100%" 
					height="100%" 
					frameborder="0" 
					style={{ border: "0" }} 
					allowfullscreen="" 
					aria-hidden="false" 
					tabindex="0">
				</iframe>
			</div>
			<div className="access">
				<p>■&nbsp;住所<br />
					〒335-0021&nbsp;<br className="sppc" />
					埼玉県戸田市大字新曽1044<br />
					グレースB 103号室</p>
				<p>■&nbsp;電車でお越しの場合<br />
					JR埼京線「<span className="red">
					戸田駅</span>」
					西口から徒歩10分</p>
				<p>■&nbsp;営業時間&nbsp;<br />
					平日：19:00～23:00<br />
					土祝：9:00~21:00&nbsp;&nbsp;&nbsp;&nbsp;<br />
					日曜：定休日<br /></p>
				<p>■&nbsp;スタッフ&nbsp;1名&nbsp;（必ず院長が施術します）<br /></p>
				<p>※&nbsp;完全予約制のため他の患者様を気にせず施術がうけれます。<br /></p>
			</div>
		</div>
	</div>
</section>
<div className="wrapper">
	<div className="info-cnt">
{/*
		<div className="info-cnt1">
			<img src="/images/img_map.jpg" alt="店舗までの道のりマップ" />
		</div>
*/}
		<div className="info-cnt3">
		<div className="info-cnt2">
			<figure className="info-cnt2-img">
				<Image 
					filename="img_info_01.jpg" 
					alt="整体院の内観"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<figure className="info-cnt2-img">
				<Image 
					filename="img_info_03.jpg" 
					alt="整体院の外観"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
		</div>
		<div className="info-cnt2">
			<figure className="info-cnt2-img">
				<Image 
					filename="img_info_04.jpg" 
					alt="整体院の診療風景"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
			<figure className="info-cnt2-img">
				<Image 
					filename="img_reason_03.jpg" 
					alt="整体院のスタッフ"
					style={{ 
						width: "100%"
				 	}}
				 />
			</figure>
		</div>
		</div>
	</div>
</div>

{/*
<section id="route" className="route">
<h2>詳しい道のり</h2>
<p className="route__guidetxt">下をクリックすると表示されます</p>
<dl className="route__flow">

	<input type="checkbox" id="map01" className="check_open" />
    <label for="map01" className="map01">
    	<dt className="route__title">
    		<p>お車でお越しの場合</p>
    	</dt>

		<dd className="route__cntc">

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_01.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_02.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

			</div>

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_03.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_04.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>
			</div>

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_05.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route1_06.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>
			</div>

		</dd>
    </label>

    <input type="checkbox" id="map02" className="check_open" />
    <label for="map02" className="map02">
    	<dt className="route__title">
    		<p>バスでお越しの場合</p>
    	</dt>

		<dd className="route__cntc">

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_01.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_02.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

			</div>

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_03.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_04.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>
			</div>

			<div className="route__cntb">

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_05.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

				<div className="route__cnta">
					<div className="route__cnt">
						<figure className="route__imgcnt">
							<Image 
								filename="img_route2_06.jpg" 
								alt=""
								style={{ width: "100%" }}
							 />
						</figure>
						<p className="route__txt">テキストテキストテキストテキストテキストテキスト</p>
					</div>
				</div>

			</div>

		</dd>
    </label>

</dl>
</section>
	*/}

<section id="qna" className="qna">
<h2>よくあるご質問</h2>
<div className="wrapper">
	<dl className="list_qna">

	    <input type="checkbox" id="q01" className="check_open" checked="checked" />
	    <label for="q01">
	        <dt>どのような施術ですか？</dt>
	        <dd>痛みの原因を特定し、歪みの原因の筋肉や関節の調整を行います。症状の重い方にも患者様の身体を壊さない事を徹底しているのでご安心ください。</dd>
	    </label>

	    <input type="checkbox" id="q02" className="check_open" />
	    <label for="q02">
	        <dt>健康保険は使えますか？</dt>
	        <dd>健康保険を使った施術では制限があり、しっかりした施術を提供できないため当院では、患者様にとってより効果の高い自費施術を行っています。</dd>
	    </label>
	{/*
	    <input type="checkbox" id="q03" className="check_open">
	    <label for="q03">
	        <dt>費用はいくらですか？</dt>
	        <dd>症状やコースにもよりますが、通常1回8,000円です。お得な回数券もご用意しておりますので、お気軽にお問い合わせ下さい。</dd>
	    </label>
	*/}
	    <input type="checkbox" id="q04" className="check_open" />
	    <label for="q04">
	        <dt>カードは使えますか？</dt>
	        <dd>もちろんクレジットカードでお支払いいただけます。取り扱いカードは、VISA、Ｍaster、JCB、American Expressなどとなっております。</dd>
	    </label>

	    <input type="checkbox" id="q05" className="check_open" />
	    <label for="q05">
	        <dt>予約は必要ですか？</dt>
	        <dd>お客様をお待たせしないよう、当院は完全予約制となっています。もちろん、当日でも予約可能な場合がございますので、お早めにお電話でお問い合わせをお願いいたします。</dd>
	    </label>

	    <input type="checkbox" id="q06" className="check_open" />
	    <label for="q06">
	        <dt>過去に脊柱管狭窄症などの手術をした事があるのですが、施術できますか？</dt>
	        <dd>施術できます。カウンセリング時にお伝え下さい。痺れなど神経症状がある患者様には、それに応じた施術を行なっていきます。</dd>
	    </label>

	    <input type="checkbox" id="q07" className="check_open" />
	    <label for="q07">
	        <dt>コロナ対策は大丈夫ですか？営業していますか？</dt>
	        <dd>厚生労働省のHPを確認し、換気や手洗い、マスク、アルコール消毒など万全の感染対策を徹底し、営業しています。安心してご来院いただけるよう務めております。</dd>
	    </label>

	    <input type="checkbox" id="q08" className="check_open" />
	    <label for="q08">
	        <dt>院長が施術してくれますか？</dt>
	        <dd>当院では必ず院長が施術を行います。担当が変わることがないので安心です。</dd>
	    </label>

	</dl>
</div>
</section>

<section className="cta">
<div className="cta__title">
	<p>治らないその痛み<br />一緒に解決していきましょう！</p>
</div>
<div className="bg">
	<div className="wrapper">
		<h2>
			<div className="pctbl">
				<div className="cta__txt">
					<Image 
						filename="img_cta_txt_pc.png" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
			<div className="sp">
				<div className="cta__txt">
					<Image 
						filename="img_cta_sp.jpg" 
						className="" 
						alt="戸田たつき整体なら腰痛の改善施術が初回1,980円でお試し"
						style={{ 
							width: "100%",
							height: "auto"
					 	}}
					 />
				</div>
			</div>
		</h2>
	</div>
	<ul className="cta__cnt2 pctbl">
		<li className="pctbl">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#lineinquiry">
				<Image 
					filename="img_cta_line.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
		<li className="pctbl">
			<a href="#inquiry">
				<Image 
					filename="img_cta_mail.png" 
					className="cta__btn" 
					alt="メールでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a href="#inquiry">
				<Image 
					filename="img_cta_mail6_sp.png" 
					className="cta__btn" 
					alt="メールでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a href="#lineinquiry">
				<Image 
					filename="img_cta_line6_sp.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a></li>
	</ul>
	<ul className="cta__cnt3 sp">
		<li className="sp">
			<a 
				href="tel:080-3184-1536" 
				onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')" 
			>
				<Image 
					filename="img_cta_tel6_sp.png" 
					className="cta__btn" 
					alt="電話でのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
		</li>
	</ul>
	<div className="cta__txtcnt sp">
		<p>※施術中は電話に出れませんので、<br />留守番電話をお願いします。<br />確認後、折り返しお電話させていただきます。</p>
	</div>
</div>
</section>

<section id="telinquiry" className="telinquiry">
	<h2>お電話での予約・相談</h2>
	<div className="telinquiry__cnt">
		<div className="telinquiry__txtcnt">
			<p className="telinquiry__smrtxt">まずはお気軽にご相談ください</p>
			<p className="telinquiry__spacer"></p>
		</div>
		<div className="telinquiry__txtcnt sp">
			<p>"あなたの症状でも改善できるか？"<br className="sp" />などのご相談は<br className="sp" />お電話が伝わりやすく簡単です。</p>
			<p className="telinquiry__spacer sp"></p>
		</div>
		<div className="telinquiry__pcbtn pc">
			<Image 
				filename="img_cta_tel_pc.jpg" 
				className="" 
				alt="電話でのご予約・ご相談"
				style={{ 
					width: "100%"
			 	}}
			 />
		</div>
		<a 
			className="telinquiry__spbtn sp" 
			href="tel:080-3184-1536" 
			onclick="ga(‘send’, ‘event’, ‘click’, ‘tel-tap’);yahoo_report_conversion('tel:080-3184-1536')"
		>
			<Image 
				filename="img_cta_tel6_sp.png" 
				className="cta__btn" 
				alt="電話でのご予約・ご相談"
				style={{ 
					width: "100%"
			 	}}
			 />
		</a>
		<div className="telinquiry__txtcnt">
			<p>施術中は出れませんので、<br className="sp" />留守番電話をお願いします。</p>
			<p className="telinquiry__spacer sp"></p>
			<p>確認後、当院から折り返し<br className="sp" />お電話させていただきます。</p>
			<p className="telinquiry__spacer"></p>
			<p>営業時間外はLINEやメールでの<br className="sp" />ご予約・ご相談が便利です。</p>
		</div>
	</div>
</section>

<section id="lineinquiry" className="lineinquiry">
	<h2>LINEでの予約・相談方法</h2>
	<div className="lineinquiry__cnt">

		<div className="lineinquiry__cnt__tbl">

		<div className="lineinquiry__cnt1">
			<div className="lineinquiry__cnt__spacer__sp"></div>
			<div className="lineinquiry__nosmrcnt">
				<p className="lineinquiry__no">1</p>
				<p className="lineinquiry__smr">友達追加</p>
			</div>
			<div className="lineinquiry__cnt__spacer1"></div>
			<p className="lineinquiry__txt">下記のボタンを押して<br />LINE友だち登録します。</p>
			<div className="lineinquiry__cnt__spacer2"></div>
			<a 
				className="lineinquiry__btn__cnt" 
				href="https://line.me/R/ti/p/%40535lwoyl"
			>
				<Image 
					filename="img_cta_line_resi.png" 
					className="cta__btn" 
					alt="LINEでのご予約・ご相談"
					style={{ 
						width: "100%"
				 	}}
				 />
			</a>
			<p className="lineinquiry__txt">お気軽にご相談ください。</p>
			<div className="lineinquiry__cnt__spacer1"></div>
		</div>

		<div className="lineinquiry__cnt2">
			<div className="lineinquiry__cnt__spacer__sp"></div>
			<div className="lineinquiry__nosmrcnt">
				<p className="lineinquiry__no">2</p>
				<p className="lineinquiry__smr">メッセージ送信</p>
			</div>
			<div className="lineinquiry__cnt__spacer2"></div>
			<div className="lineinquiry__txt__ex__cnt">
				<p className="lineinquiry__txt__ex">お名前</p>
				<p className="lineinquiry__txt__ex">電話番号</p>
			</div>
			<div className="lineinquiry__txt__ex__cnt">
				<p className="lineinquiry__txt__ex">ご希望の日時</p>
				<p className="lineinquiry__txt__ex">症状</p>
			</div>
			<p className="lineinquiry__txt">をお送りください。</p>
			<p className="lineinquiry__txt">内容を確認して当院から<br />ご連絡させていただきます。</p>
			<div className="lineinquiry__cnt__spacer1"></div>
		</div>

		</div>

		<div className="lineinquiry__cnt__tbl">
		<div className="lineinquiry__cnt3">
			<div className="lineinquiry__cnt__spacer__sp"></div>
			<div className="lineinquiry__tokutencnt">
				<p className="lineinquiry__tokuten">LINE友達登録でお得な特典</p>
			</div>
			<div className="lineinquiry__cnt__spacer1"></div>
			<p className="lineinquiry__tokutenno">特典1</p>
			<p className="lineinquiry__tokutentxt">24時間いつでもLINE予約</p>
			<p className="lineinquiry__tokutenno">特典2</p>
			<p className="lineinquiry__tokutentxt">慢性的な痛み・しびれに効く<br />セルフケア方法を配信</p>
			<div className="lineinquiry__cnt__spacer2"></div>
		</div>
		</div>
	</div>
	<div className="lineinquiry__cnt__spacer__sp"></div>
	<div className="lineinquiry__cnt__spacer__sp"></div>
</section>

<section id="inquiry" className="inquiry">
<h2>メールでの予約・無料相談</h2>
<div className="wrapper">
    <form className="" action="mail.php" method="post">
    <div className="inquiry__cnt">
    		<p className="inquiry__guidetxt">下記を入力後、内容確認ボタン<br className="sp" />を押してください。</p>
            <table>
            	<tr>
		            <th style={{ display: "none" }}>問い合わせURL</th>
		            <td>
                    	<input 
                    		className="inquiry-input" 
                    		type="text" 
                    		name="問い合わせURL" 
                    		value="https://####/koshi-lp/" 
                    		required 
                    		style={{ display: "none" }}
                    	 />
                  	</td>
                </tr>
            	<tr>
            		<th className="req">お問い合わせ内容</th>
            		<td>
            			<div>
							<label for="inquiry_item1">
								<input 
									id="inquiry_item1" 
									className="radio-btn" 
									type="radio" 
									name="お問い合わせ内容" 
									value="ご予約" 
									checked="checked"
								 />
								<span className="radio-text">ご予約</span>
							</label>
							<label for="inquiry_item2">
								<input 
									id="inquiry_item2" 
									className="radio-btn" 
									type="radio" 
									name="お問い合わせ内容" 
									value="無料相談"
								 />
								<span className="radio-text">無料相談</span>
							</label>
							<label for="inquiry_item3">
								<input 
									id="inquiry_item3" 
									className="radio-btn" 
									type="radio" 
									name="お問い合わせ内容" 
									value="その他のご質問"
								 />
								<span className="radio-text">その他</span>
							</label>
						</div>
            		</td>
            	</tr>
                <tr>
		            <th className="req">お名前</th>
		            <td>
                    	<input 
                    		className="inquiry-input" 
                    		type="text" 
                    		name="お名前" 
                    		placeholder="  例：田中太郎" 
                    		required
                    	 />
                  	</td>
                </tr>
                <tr>
                	<th className="req">メールアドレス</th>
                	<td>
                    	<input 
                    		className="inquiry-input" 
                    		type="text" 
                    		name="メールアドレス" 
                    		placeholder="  例：abc@example.com" 
                    		required
                    	 />
                	</td>
                </tr>
                <tr>
                  	<th className="req">お電話番号</th>
                  	<td>
                    	<input 
                    		className="inquiry-input" 
                    		type="text" 
                    		name="電話番号" 
                    		placeholder="  例：000-0000-00000" 
                    		required
                    	 />
                  	</td>
                </tr>
                <tr className="inquiry_cnt1">
                  	<th className="any inquiry-dh">希望日時</th>
                  	<td>
                    	<div className="date-content">
                      		<p>・希望日</p>
                      		<input 
                      			type="text" 
                      			id="datepicker" 
                      			className="date-p" 
                      			readonly 
                      			placeholder="日付を選択してください" 
                      			name="希望日"
                      		 />
                    	</div>
                    	<div className="time-content">
                      		<p>・希望時間</p>
                      		<select name="希望時間" className="time-p">
		                        <option selected="selected" className="sel-time">&nbsp;選択してください</option>
		                        <option value="9:00">&nbsp;9:00</option>
		                        <option value="10:00">&nbsp;10:00</option>
		                        <option value="11:00">&nbsp;11:00</option>
		                        <option value="12:00">&nbsp;12:00</option>
		                        <option value="13:00">&nbsp;13:00</option>
		                        <option value="14:00">&nbsp;14:00</option>
		                        <option value="15:00">&nbsp;15:00</option>
		                        <option value="16:00">&nbsp;16:00</option>
		                        <option value="17:00">&nbsp;17:00</option>
		                        <option value="18:00">&nbsp;18:00</option>
		                        <option value="19:00">&nbsp;19:00</option>
		                        <option value="20:00">&nbsp;20:00</option>
		                        {/*<option value="21:00">&nbsp;21:00</option>*/}
		                        <span className="arrow-gray"></span>
                      		</select>
                    	</div>
                  	</td>
                </tr>
                <tr className="inquiry_cnt2">
                  	<th className="any inquiry-item-soudannaiyou">ご相談内容</th>
                  	<td>
                    	<textarea 
                    		className="inquiry-input--comment" 
                    		type="text" 
                    		name="ご相談内容" 
                    		placeholder=""
                    	>
                    	</textarea>
                  	</td>
                </tr>
            </table>
            </div>
            <div className="submit-buttom">
            	<input 
            		className="submit" 
            		type="submit" 
            		name="" 
            		value="入力内容を確認する"
            	 />
            </div>
        </form>
	</div>
</section>

<footer>
	<div className="copyright">
		<p>戸田たつき整体</p>
		<p>
			〒335-0021&nbsp;<br className="sp" />
			埼玉県戸田市大字新曽1044&nbsp;<br />
			グレースB 103号室
		</p>
		<p>080-3184-1536</p>
		<p>
			Copyright&copy; 
			戸田たつき整体&nbsp;
			All Rights Reserved.
		</p>
		<p className="sp"><br /></p>
	</div>
</footer>

</div>
) // export default 終了

const Image = ( props ) => ( 
	<StaticQuery query=
		{ graphql`
			query {
				images: allFile {
				  	edges {
					    node {
					      	relativePath
					      	name
					      	childImageSharp {
								fluid(maxWidth: 1600){
									...GatsbyImageSharpFluid_withWebp
					       		}
					      	}
					    }
				  	}
				}
			}
		`}
		render = {( data ) => {
		  	const image = data.images.edges.find(n => {
		   		return n.node.relativePath.includes(props.filename);
		  	});
		  	if (!image) { return null; }

		  	const imageFluid = image.node.childImageSharp.fluid;
		  	return (
		    	<Img 
			      	alt={props.alt} 
			      	sizes={imageFluid} 
		     	 />
		  	);
		}}
	 />
)