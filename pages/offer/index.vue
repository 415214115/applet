<template>
	<view class="offer">
		<view class="casePicker">
			<view class="topTip">KWK车身色彩保护膜/全国统一零售价</view>
			<view class="selectorBox">
				<view class="">品牌/车型</view>
				<picker class="selectorPicker" @change="bindPickerChange" @columnchange="columnChanges" :value="brandSeriesValue" :range="brandSeriesList" mode="multiSelector">
					<view class="uni-input">
						{{brandSeriesList[0][brandSeriesValue[0]]}} , {{brandSeriesList[1][brandSeriesValue[1]]}}
					</view>
				</picker>
			</view>
			<!-- <view class="selectorBox">
				<view class="">型号</view>
				<picker class="selectorPicker" @change="modelPickerChange" :value="modelIndex" :range="model" mode="selector">
					<view class="uni-input">{{model[modelIndex]}}</view>
				</picker>
			</view> -->
			<view class="selectorBox">
				<view class="">系列</view>
				<picker class="selectorPicker" @change="selectorPickerChange" :value="seriesIndex" :range="series" mode="selector">
					<view class="uni-input">{{series[seriesIndex]}}</view>
				</picker>
			</view>
			<!-- <view class="selectorBox">
				<view class="">颜色</view>
				<picker class="selectorPicker" @change="colorPickerChange" :value="colourIndex" :range="colour" mode="selector">
					<view class="uni-input">{{colour[colourIndex]}}</view>
				</picker>
			</view> -->
		</view>
		<view class="price">整车价格：<text>{{ pageData.price || 0 }}</text> <text>RMB</text></view>
		<image class="priceList" src="/static/999.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				brand: '',
				// brandIndex: 0,
				series: ['请选择'],
				seriesIndex: 0,
				brandSeriesList: [['请选择'], ["请选择"]],
				brandSeriesValue: [0, 0],
				// colour: ['请选择'],
				// colourIndex: 0,
				model: '',
				// modelIndex: 0,
				carType: [null],
				carSeries: [null],
				// coloe: [null],
				corModel: [null],
				queryData:{
					typeId: null,
					chemoId: null
				},
				pageData: ''
			}
		},
		onLoad() {
			this.getCarType()
			// this.getCarModel()
			this.getCarSeries()
			// this.getCarColor()
		},
		methods:{
			columnChanges(e){
				if(e.detail.column == 0){
					console.log(this.brand[e.detail.value - 1])
					if(e.detail.value > 0){
						this.brandSeriesValue[1] = 0
						this.getCarModel(this.brand[e.detail.value - 1].id)
					}
				}
				this.pageData = ''
				this.seriesIndex = 0
			},
			bindPickerChange(e) {
				this.brandSeriesValue = e.detail.value
				if(e.detail.value[1] > 0){
					this.queryData.typeId = this.model[e.detail.value[1] - 1].id || null
				}
				
				// this.brandIndex = e.target.value
				// this.queryData.typeId = this.carType[e.target.value].id || null
				// if(this.carType[e.target.value] == null){
					// this.model = ['请选择']
					// this.modelIndex = 0
				// } else {
					// this.getCarModel(this.carType[e.target.value].id)
				// }
			},
			selectorPickerChange(e) {
				if(e.target.value < 1) return
				if(this.brandSeriesValue[1] == 0){
					uni.showToast({
						icon: 'none',
						title: '请先选择车辆品牌及车型',
						duration: 2000
					})
				} else {
					this.seriesIndex = e.target.value
					this.queryData.chemoId = this.carSeries[e.target.value].id || null
					this.getPic()
				}
				
				// this.queryData.chemoId = this.series[e.target.value].id || null
				// this.getPageData()
			},
			// colorPickerChange: function(e) {
			// 	this.colourIndex = e.target.value
			// 	// this.queryData.colorId = this.coloe[e.target.value].id || null
			// 	// this.getPageData()
			// },
			modelPickerChange(e) {
				this.modelIndex = e.target.value
				this.queryData.typeId = this.corModel[e.target.value].id || null
				// this.queryData.colorId = this.model[e.target.value].id || null
				// this.getPageData()
			},
			getPic(){
				this.$request.get('/car/selectModelPrice', this.queryData).then( res => {
					if(res.code == 'succes'){
						this.pageData = res.data
					}
				})
			},
			getCarType(){
				// 品牌
				this.$request.post('/back/selectCarType',{
					typeId:"-1"
				}).then( res => {
					if(res.code == 'succes'){
						// this.carType = this.carType.concat(res.data) 
						this.brand = res.data
						res.data.forEach((v)=>{
							this.brandSeriesList[0].push(v.name)
						})
					}
				})
			},
			getCarModel(type){
				// 型号
				this.$request.post('/back/selectCarType',{
					typeId: type
				}).then( res => {
					if(res.code == 'succes'){
						// this.corModel = this.corModel.concat(res.data) 
						this.model = res.data
						console.log(this.model)
						this.brandSeriesList[1] = ['请选择']
						res.data.forEach((v)=>{
							// this.model.push(v.name)
							this.brandSeriesList[1].push(v.name)
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
			// getCarColor(){
			// 	// 颜色
			// 	this.$request.get('/car/selectColorList').then( res => {
			// 		if(res.code == 'succes'){
			// 			this.coloe = this.coloe.concat(res.data)
			// 			// this.coloe = res.data
			// 			res.data.forEach((v)=>{
			// 				this.colour.push(v.name)
			// 			})
			// 		}
			// 	})
			// }
		}
	}
</script>

<style scoped>
	.offer{
		padding: 20upx;
	}
	.selectorBox{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		line-height: 64upx;
		border-bottom: 1px solid #EEEEEE;
		padding: 20upx 0;
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
		width: 520upx;
		text-align: right;
		padding-right: 40upx;
		position: relative;
	}
	.price{
		width: 500upx;
		height: 80upx;
		line-height: 80upx;
		border: 1px solid #EEEEEE;
		border-radius: 10upx;
		text-align: center;
		position: relative;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: 60upx;
		color: #313131;
	}
	.price text{
		font-weight: 600;
	}
	.priceList{
		width: 100%;
		margin-top: 60upx;
	}
	.topTip{
		width: 100%;
		text-align: center;
		color: red;
		line-height: 64upx;
	}
</style>
