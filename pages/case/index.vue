<template>
	<view class="case">
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
		<view class="caseShow">
			<view class="caseList" v-for="item in 10" :key="item">
				<image class="caseImage" src="/static/logo.png" mode="aspectFill"></image>
				<view class="caseTextTitle">简介简介简介简介简介简介简介简介简介简介简介简介</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				brand: [["全部","b"], ["全部","d"]],
				brandIndex: 0,
				series: ['全部'],
				seriesIndex: 0,
				colour: ['全部'],
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
	}
	.caseList{
		width: 223upx;
		margin-left: 20upx;
		display: inline-block;
		text-align: center;
	}
	.caseList:nth-child(3n+1){
		margin-left: 0;
	}
	.caseImage{
		width: 223upx;
		height: 223upx;
		border-radius: 10upx;
		margin-bottom: 10upx;
		margin-top: 20upx;
	}
	.caseTextTitle{
		width: 223upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0 10upx;
		color: #313131;
		font-size: 24upx;
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
		width: 520upx;
		text-align: right;
		padding-right: 40upx;
		position: relative;
	}
</style>
