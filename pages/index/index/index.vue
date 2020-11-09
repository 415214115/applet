<template>
	<scroll-view class="content" :scroll-y="true">
		<view class="topBanner">
			<!-- <view class="searchBox" @tap="toSearch">
				<image class="searchImg" mode="scaleToFill" src="/static/image/index/search.png"></image><text>请输入搜索内容</text>
			</view> -->
			<swiper class="swiper" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval" :circular="swiper.circular">
				<swiper-item v-for="item in bannerList" :key="item">
					<image class="swiperImg" :lazy-load="true" :src="item.img" mode="aspectFill"></image>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item> -->
			</swiper>
		</view>
		<view class="functionBtnBox">
			<view class="functionBtnCont">
				<view class="functionBtnList" @tap="toShop">
					<view class="functionBtnListBox">
						<image class="functionBtnListImage" mode="scaleToFill" src="/static/image/index/shop.png"></image>
					</view>
					<text class="functionBtnListText">店铺列表</text>
				</view>
				<view class="functionBtnList" @tap="toSeries">
					<view class="functionBtnListBox">
						<image class="functionBtnListImage" mode="scaleToFill" src="/static/image/index/fire.png"></image>
					</view>
					<text class="functionBtnListText">产品系列</text>
				</view>
				<view class="functionBtnList" @tap="toOffer">
					<view class="functionBtnListBox">
						<image class="functionBtnListImage" mode="scaleToFill" src="/static/image/index/offer.png"></image>
					</view>
					<text class="functionBtnListText">施工报价</text>
				</view>
				<view class="functionBtnList" @tap="toCase('')">
					<view class="functionBtnListBox">
						<image class="functionBtnListImage" mode="scaleToFill" src="/static/image/index/show.png"></image>
					</view>
					<text class="functionBtnListText">案例展示</text>
				</view>
				<view class="functionBtnList" @tap="toGuarantee">
					<view class="functionBtnListBox">
						<image class="functionBtnListImage" mode="scaleToFill" src="/static/image/index/safeguard.png"></image>
					</view>
					<text class="functionBtnListText">电子质保</text>
				</view>
			</view>
		</view>
		<view class="case shortcutFunc">
			<view class="caseBox" @tap="toCase('1')">
				<image class="caseImage" src="/static/logo.png" mode="aspectFill"></image>
				<view class="caseTextTitles">最新案例</view>
			</view>
			<view class="caseBox" @tap="toCase('2')">
				<image class="caseImage" src="/static/logo.png" mode="aspectFill"></image>
				<view class="caseTextTitles">精彩案例</view>
			</view>
		</view>
		<view class="shortcutFunc">
			<view class="shortcutTitle">
				<text class="leftTitle">热门资讯</text>
				<text class="lookMore" @tap="lookMore">查看更多</text>
			</view>
			<view class="information">
				<view class="informationList" v-for="item in informationList" :key="item" @tap="toInformationDetails(item.id)">
					<image class="informationImage" :src="item.cover" mode="aspectFill"></image>
					<view class="informationTextTitle">
						<view class="synopsis">{{ item.context }}</view>
						<view class="timeLook">
							<text class="time">{{ item.creatTime }}</text>
							<!-- <text class="look">1322</text> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 3000,
					circular: true
				},
				bannerList: '',
				informationList: ''
			}
		},
		onLoad() {
			this.gatPageBanner()
			this.getInformationData()
		},
		methods:{
			toSearch(){
				// 跳转至搜索页面
				uni.navigateTo({
					url: '../search/index'
				})
			},
			lookMore(){
				// 热门资讯查看更多
				uni.navigateTo({
					url: '../information/index'
				})
			},
			toCase(type){
				// 查看案例
				if(type){
					uni.setStorageSync('showType', type)
				}
				uni.switchTab({
				    url: '/pages/case/index/index'
				});
			},
			toOffer(){
				uni.switchTab({
				    url: '/pages/offer/index'
				});
			},
			toGuarantee(){
				// 跳转至质保
				uni.navigateTo({
					url: '../guarantee/index'
				})
			},
			toSeries(){
				// 跳转到产品系列
				uni.navigateTo({
					url: '../series/index'
				})
			},
			toInformationDetails(id){
				// 跳转到资讯详情
				console.log(id)
				uni.navigateTo({
					url: '../informationDetails/index?id=' + id
				})
			},
			toShop(){
				// 跳转至店铺列表
				uni.navigateTo({
					url: '../shop/index'
				})
			},
			gatPageBanner(){
				this.$request.get('/car/getLunBoTu').then( res => {
					if (res.code == 'succes') {
						this.bannerList = res.data
						console.log(this.bannerList)
					}
				})
			},
			getInformationData(){
				this.$request.post('/car/selectInformations', {
					pageNum: 1,
					pageSize: 6
				}).then(res => {
					if (res.code == 'succes') {
						this.informationList = res.data.list
					}
				})
			}
		}
		
	}
</script>

<style scoped>
	.topBanner{
		position: relative;
	}
	.swiper{
		height: 400upx;
	}
	.searchBox{
		position: absolute;
		width: 600upx;
		border: 1px solid #c9c9c9;
		background: #f5f5f5;
		border-radius: 10upx;
		left: 0;
		right: 0;
		top: 20upx;
		margin: auto;
		padding: 10upx 15upx;
		display: flex;
		justify-content: start;
		align-items: center;
		font-size: 24upx;
		color: #6E6E6E;
		z-index: 99;
	}
	.searchImg{
		width: 36upx;
		height: 36upx;
		margin-right: 10upx;
	}
	.functionBtnBox{
		width: 100%;
		padding: 4upx 0;
		background: #EEEEEE;
	}
	.functionBtnCont{
		padding: 20upx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		text-align: center;
	}
	.functionBtnList{
		width: 100upx;
	}
	.functionBtnListBox{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		/* background: #F5F5F5; */
		padding: 8upx;
		margin-left: 10upx;
	}
	.functionBtnListImage{
		width: 64upx;
		height: 64upx;
	}
	.functionBtnListText{
		font-size: 24upx;
		color: #313131;
	}
	.shortcutFunc{
		padding: 20px;
		background: #FFFFFF;
		border-bottom: 6upx solid #EEEEEE;
	}
	.shortcutFunc:last-child{
		border: none;
	}
	.shortcutTitle,.timeLook,.case{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
	}
	.leftTitle{
		padding-left: 16upx;
		position: relative;
	}
	.leftTitle::before{
		width: 8upx;
		height: 100%;
		content: '';
		left: 0;
		top: 0;
		background: #000000;
		position: absolute;
	}
	.lookMore{
		font-size: 24upx;
		padding-right: 32upx;
		position: relative;
	}
	.lookMore::after{
		width: 32upx;
		height: 32upx;
		content: '';
		right: 0;
		top: 0;
		position: absolute;
		background-image: url(@/static/image/index/rightJt.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.caseBox{
		width: 345upx;
		height: 200upx;
		margin-left: 20upx;
		border-radius: 10upx;
		position: relative;
		overflow: hidden;
	}
	.caseImage{
		width: 100%;
		height: 100%;
	}
	.caseBox:nth-child(1){
		margin-left: 0;
	}
	.caseTextTitles{
		background: rgba(0,0,0,0.5);
		text-align: center;
		font-size: 40upx;
		line-height: 200upx;
		color: #FFFFFF;
		font-weight: 600;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.informationList{
		margin-top: 40upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 20upx;
	}
	.informationList:last-child{
		border: none;
		padding-bottom: 0;
	}
	.informationImage{
		width: 210upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	.synopsis{
		height: 80upx;
		width: 480upx;
		 display: -webkit-box;
		  -webkit-line-clamp: 2;
		  -webkit-box-orient: vertical;
		  overflow : hidden;
		  text-overflow: ellipsis;
		line-height: 40upx;
		text-align: justify;
		margin-bottom: 40upx;
	}
	.timeLook{
		font-size: 20upx;
		color: #555555;
	}
	.look{
		position: relative;
		padding-left: 34upx;
	}
	.look::before{
		content: '';
		position: absolute;
		width: 20upx;
		height: 20upx;
		background-image: url(@/static/image/index/eye.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		left: 0;
		top: 6upx;
	}
	.swiperImg{
		width: 100%;
		height: 100%;
	}
</style>
