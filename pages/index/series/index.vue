<template>
	<view class="series">
		<view class="seriesList" v-for="item in pageData" :key="item" @tap="toCase(item.id)">
			<view class="seriesTitle">{{ item.name }}</view>
			<image class="bgImg" :src="item.img" mode="aspectFill"></image>
			<!-- <view class="seriesNum">2311案例</view> -->
		</view>
	</view>
</template>

<script>
	// import Vue from "vue";
	export default {
		data() {
			return {
				pageData: ''
			}
		},
		onLoad() {
			this.getCarSeries()
		},
		methods: {
			toCase(id) {
				// 查看案例
				// console.log(id)
				// Vue.prototype.$uniReLaunch("/pages/case/index/index");
				uni.setStorageSync('seriesId', id)
				uni.switchTab({
					url: '/pages/case/index/index'
				});


			},
			getCarSeries() {
				// 系列
				this.$request.post('/car/selectCheMoList', {
					pageNum: 1,
					pageSize: 20000
				}).then(res => {
					if (res.code == 'succes') {
						this.pageData = res.data.list
						// res.data.list.forEach((v)=>{
						// 	this.series.push(v.name)
						// })
					}
				})
			}
		}
	}
</script>

<style scoped>
	.series {
		padding: 20upx;
	}

	.seriesList {
		width: 100%;
		border: 1px solid #EEEEEE;
		border-radius: 10upx;
		padding: 40upx 20upx;
		text-align: left;
		display: inline-block;
		/* margin-left: 20upx; */
		margin-bottom: 20upx;
		position: relative;
		overflow: hidden;
	}

	/* .seriesList:nth-child(2n+1){
		margin-left: 0;
	} */
	.seriesTitle {
		font-size: 32upx;
		color: #313131;
		position: relative;
		left: 20upx;
		z-index: 9;
		/* margin-bottom: 20upx; */
	}

	.seriesNum {
		font-size: 24upx;
		color: #6E6E6E;
	}

	.bgImg {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		opacity: 0.4;
	}
</style>
