<template>
	<view class="series">
		<view class="seriesList" v-for="item in 12" :key="item" @tap="toCase">
			<view class="seriesTitle">产品系列</view>
			<view class="seriesNum">2311案例</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			toCase(){
				// 查看案例
				uni.switchTab({
				    url: '/pages/case/index/index'
				});
			},
		}
	}
</script>

<style scoped>
	.series{
		padding: 20upx;
	}
	.seriesList{
		width: 340upx;
		border: 1px solid #EEEEEE;
		border-radius: 10upx;
		padding: 10upx 0;
		text-align: center;
		display: inline-block;
		margin-left: 20upx;
		margin-bottom: 20upx;
	}
	.seriesList:nth-child(2n+1){
		margin-left: 0;
	}
	.seriesTitle{
		font-size: 32upx;
		color: #313131;
		margin-bottom: 20upx;
	}
	.seriesNum{
		font-size: 24upx;
		color: #6E6E6E;
	}
</style>
