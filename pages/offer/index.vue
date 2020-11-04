<template>
	<view class="offer">
		<view class="casePicker">
			<view class="selectorBox">
				<view class="">品牌/型号</view>
				<picker class="selectorPicker" @change="bindPickerChange" :value="brandIndex" :range="brand" mode="multiSelector">
					<view class="uni-input">{{brand[brandIndex]}}</view>
				</picker>
			</view>
			<view class="selectorBox">
				<view class="">系列</view>
				<picker class="selectorPicker" @change="bindPickerChange" :value="seriesIndex" :range="series" mode="selector">
					<view class="uni-input">{{series[seriesIndex]}}</view>
				</picker>
			</view>
			<view class="selectorBox">
				<view class="">颜色</view>
				<picker class="selectorPicker" @change="bindPickerChange" :value="colourIndex" :range="colour" mode="selector">
					<view class="uni-input">{{colour[colourIndex]}}</view>
				</picker>
			</view>
		</view>
		<view class="price">整车价格：<text>1230000</text> <text>RMB</text></view>
		<image class="priceList" src="/static/logo.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				brand: [["请选择","b"], ["请选择","d"]],
				brandIndex: 0,
				series: ['请选择'],
				seriesIndex: 0,
				colour: ['请选择'],
				colourIndex: 0
			}
		},
		methods:{
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			}
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
</style>
