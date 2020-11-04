<template>
	<view class="consult">
		<view class="tip">TIP：请留下你的基本信息和要咨询的内容，稍后工作人员会主动联系你，请保持电话畅通</view>
		<view class="msgBox">
			<view class="msgList">
				<view class="msgTitle must">用户姓名</view>
				<input class="msgInput" type="text" value="" placeholder="请输入用户姓名" />
			</view>
			<view class="msgList">
				<view class="msgTitle must">联系电话</view>
				<input class="msgInput" type="text" value="" placeholder="请输入联系电话" />
			</view>
			<view class="msgList">
				<view class="msgTitle must">询价车型</view>
				<input class="msgInput" type="text" value="" placeholder="请输入车型" />
			</view>
			<view class="msgList">
				<view class="msgTitle">询价系列</view>
				<picker class="selectorPicker" @change="bindPickerChange" :value="seriesIndex" :range="series" mode="selector">
					<view class="uni-input">{{series[seriesIndex]}}</view>
				</picker>
			</view>
		</view>
		<view class="confirmBtn">提交</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				series: ['请选择'],
				seriesIndex: 0,
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
	.tip{
		padding: 20upx;
		color: #CE1520;
		text-align: center;
		line-height: 48upx;
		border-bottom: 6upx solid #EEEEEE;
		font-size: 24upx;
	}
	.msgBox{
		padding: 20upx;
	}
	.msgList{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 30upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.msgInput,.selectorPicker{
		width: 560upx;
		color: #6E6E6E;
	}
	.msgTitle{
		padding-left: 20upx;
		position: relative;
	}
	.must::before{
		content: '*';
		color: #CE1520;
		position: absolute;
		left: 0;
		top: 0;
	}
	.confirmBtn{
		width: 600upx;
		position: relative;
		left: 0;
		right: 0;
		top: 20upx;
		margin: auto;
		background: #CE1520;
		border-radius: 10upx;
		color: #FFFFFF;
		padding: 20upx;
		text-align: center;
	}
</style>
