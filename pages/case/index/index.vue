<template>
	<view class="case">
		<view class="casePicker">
			<view class="selectorBox">
				<!-- <view class="">品牌</view> -->
				<picker class="selectorPicker" @change="bindPickerChange" :value="brandIndex" :range="brand" mode="selector">
					<view class="uni-input">{{brand[brandIndex]}}</view>
				</picker>
			</view>
			<view class="selectorBox">
				<!-- <view class="">系列</view> -->
				<picker class="selectorPicker" @change="selectorPickerChange" :value="seriesIndex" :range="series" mode="selector">
					<view class="uni-input">{{series[seriesIndex]}}</view>
				</picker>
			</view>
			<view class="selectorBox">
				<!-- <view class="">颜色</view> -->
				<picker class="selectorPicker" @change="colorPickerChange" :value="colourIndex" :range="colour" mode="selector">
					<view class="uni-input">{{colour[colourIndex]}}</view>
				</picker>
			</view>
		</view>
		<view class="caseShow">
			<view class="caseList" v-for="item in pageData" :key="item">
				<image class="caseImage" :src="item.showImg" mode="aspectFill" @tap="toCaseDetails(item.id)"></image>
				<view class="caseTextTitle">
					<view class="caseTextTitles">{{ item.title }}</view>
					<view class="toCaseDetails" @tap="toCaseDetails(item.id)">查看详情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				brand: ["品牌"],
				brandIndex: 0,
				series: ['系列'],
				seriesIndex: 0,
				colour: ['颜色'],
				colourIndex: 0,
				carType: [null],
				carSeries: [null],
				coloe: [null],
				queryData:{
					showType: null,
					colorId: null,
					chemoId: null,
					typeId: null,
					pageNum: 1,
					pageSize: 10
				},
				pageData: ''
			}
		},
		onShow() {
			if(uni.getStorageSync('seriesId')){
				this.queryData.chemoId = uni.getStorageSync('seriesId')
			}
			if(uni.getStorageSync('showType')){
				this.queryData.showType = uni.getStorageSync('showType')
			}
			if(uni.getStorageSync('carType')){
				this.queryData.typeId = uni.getStorageSync('carType')
			}
			if(uni.getStorageSync('color')){
				this.queryData.colorId = uni.getStorageSync('color')
			}
			this.getPageData()
		},
		onLoad() {
			this.getCarType()
			this.getCarSeries()
			this.getCarColor()
		},
		methods:{
			bindPickerChange: function(e) {
				this.brandIndex = e.target.value
				this.queryData.typeId = this.brand[e.target.value].id || null
				this.getPageData()
			},
			selectorPickerChange: function(e) {
				this.seriesIndex = e.target.value
				this.queryData.chemoId = this.series[e.target.value].id || null
				this.getPageData()
			},
			colorPickerChange: function(e) {
				this.colourIndex = e.target.value
				this.queryData.colorId = this.coloe[e.target.value].id || null
				this.getPageData()
			},
			toCaseDetails(id){
				// console.log(id)
				uni.navigateTo({
					url: '../caseDetails/index?id=' + id
				})
			},
			getPageData(){
				this.$request.post('/car/selectAnLi', this.queryData).then( res => {
					if(res.code == 'succes'){
						this.pageData = res.data.list
						this.queryData.chemoId = null
						this.queryData.colorId = null
						this.queryData.typeId = null
						this.queryData.showType = null
						uni.removeStorageSync('seriesId')
						uni.removeStorageSync('carType')
						uni.removeStorageSync('color')
						uni.removeStorageSync('showType')
					}
				})
			},
			getCarType(){
				// 品牌
				this.$request.post('/back/selectCarType',{
					typeId:"-1"
				}).then( res => {
					if(res.code == 'succes'){
						this.carType = this.carType.concat(res.data) 
						res.data.forEach((v)=>{
							this.brand.push(v.name)
						})
					}
				})
			},
			getCarSeries(){
				// 系列
				this.$request.post('/car/selectCheMoList',{
					pageNum:1,
					pageSize: 20000
				}).then( res => {
					if(res.code == 'succes'){
						// this.carSeries = res.data.list
						this.carSeries = this.carSeries.concat(res.data.list)
						res.data.list.forEach((v)=>{
							this.series.push(v.name)
						})
					}
				})
			},
			getCarColor(){
				// 颜色
				this.$request.get('/car/selectColorList').then( res => {
					if(res.code == 'succes'){
						this.coloe = this.coloe.concat(res.data)
						// this.coloe = res.data
						res.data.forEach((v)=>{
							this.colour.push(v.name)
						})
					}
				})
			}
		},
		onReachBottom() {
			this.queryData.pageNum += 1
			this.getPageData()
		},
		
	}
</script>

<style scoped>
	.case{
		padding: 20upx;
		padding-top: 212upx;
	}
	.casePicker{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		padding: 0 20upx;
		background: #FFFFFF;
		box-shadow: 0 0 10upx 1upx rgba(0,0,0,0.5);
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.caseList{
		width: 710upx;
		/* margin-left: 20upx; */
		/* display: inline-block; */
		text-align: center;
		position: relative;
	}
	/* .caseList:nth-child(3n+1){
		margin-left: 0;
	} */
	.caseImage{
		width: 710upx;
		height: 350upx;
		border-radius: 10upx;
		margin-bottom: 10upx;
		margin-top: 20upx;
	}
	.caseTextTitle{
		padding: 10upx;
		font-size: 24upx;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,0.3);
		height: 130upx;
		color: #FFFFFF;
		border-radius: 0 0 10upx 10upx;
	}
	.caseTextTitles{
		width: 690upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.toCaseDetails{
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #FFFFFF;
		font-size: 20upx;
	}
	.selectorBox{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		line-height: 64upx;
		border-bottom: 1px solid #EEEEEE;
	}
	.selectorPicker::after{
		width: 32upx;
		height: 32upx;
		content: '';
		right: 0;
		top: 16upx;
		position: absolute;
		background-image: url(@/static/image/index/rightJt.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.selectorPicker{
		/* width: 520upx; */
		text-align: right;
		padding-right: 40upx;
		position: relative;
	}
</style>
