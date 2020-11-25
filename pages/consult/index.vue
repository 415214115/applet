<template>
	<view class="consult">
		<view class="tip">TIP：请留下你的基本信息和要咨询的内容，稍后工作人员会主动联系你，请保持电话畅通</view>
		<view class="msgBox">
			<view class="msgList">
				<view class="msgTitle must">用户姓名</view>
				<input class="msgInput" v-model="postData.userName" type="text" value="" placeholder="请输入用户姓名" />
			</view>
			<view class="msgList">
				<view class="msgTitle must">联系电话</view>
				<input class="msgInput" v-model="postData.phone" type="text" value="" placeholder="请输入联系电话" />
			</view>
			<view class="msgList">
				<view class="msgTitle">询价车型</view>
				<input class="msgInput" v-model="postData.carTypeId" type="text" value="" placeholder="请输入车型" />
			</view>
			<view class="msgList">
				<view class="msgTitle">询价系列</view>
				<picker class="selectorPicker" @change="bindPickerChange" :value="seriesIndex" :range="series" mode="selector">
					<view class="uni-input">{{series[seriesIndex]}}</view>
				</picker>
			</view>
		</view>
		<view class="confirmBtn" @tap="postMessage">提交</view>
		<view class="bottomTip">
			<view class="">加盟培训TEL：13983018324</view>
			<view class="">最终解释权归重庆客唔酷汽车饰品有限公司所有</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				series: ['请选择'],
				seriesIndex: 0,
				carSeries: [''],
				postData: {
					userName: '',
					phone: '',
					carTypeId: '',
					carChemoId: ''
				}
			}
		},
		onLoad() {
			this.getCheMo()
		},
		methods: {
			bindPickerChange: function(e) {
				this.seriesIndex = e.target.value
				this.postData.carChemoId = this.carSeries[e.target.value].id
			},
			postMessage() {
				if (this.postData.userName == '' || this.postData.phone == '') {
					uni.showToast({
						icon: 'none',
						title: '名字或电话不能为空'
					});
					return
				}
				this.$request.post('/car/addTourists', this.postData).then(res => {
					if (res.code == 'succes') {
						uni.showToast({
							icon: 'success',
							title: '提交成功'
						});
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/offer/index'
							});
						}, 2000)

					}
				})
			},
			getCheMo() {
				this.$request.post('/car/selectCheMoList', {
					pageNum: 1,
					pageSize: 20000
				}).then(res => {
					if (res.code == 'succes') {
						// this.carSeries = res.data.list
						this.carSeries = this.carSeries.concat(res.data.list)
						res.data.list.forEach((v) => {
							this.series.push(v.name)
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	.tip {
		padding: 20upx;
		color: #CE1520;
		text-align: center;
		line-height: 48upx;
		border-bottom: 6upx solid #EEEEEE;
		font-size: 24upx;
	}

	.msgBox {
		padding: 20upx;
	}

	.msgList {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		padding: 30upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}

	.msgInput,
	.selectorPicker {
		width: 560upx;
		color: #6E6E6E;
	}

	.msgTitle {
		padding-left: 20upx;
		position: relative;
	}

	.must::before {
		content: '*';
		color: #CE1520;
		position: absolute;
		left: 0;
		top: 0;
	}

	.confirmBtn {
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
	.bottomTip{
		width: 100%;
		position: absolute;
		bottom: 20upx;
		text-align: center;
		color: #6E6E6E;
		line-height: 50upx;
	}
	.bottomTip view{
		font-size: 24upx;
	}
</style>
