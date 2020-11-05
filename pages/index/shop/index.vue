<template>
	<scroll-view class="caseDetails" :scroll-y="true" :scroll-x="false">
		<view class="informationList" v-for="item in 6" :key="item">
			<image class="informationImage" :lazy-load="true" src="/static/logo.png" mode="aspectFill"></image>
			<view class="informationTextTitle">
				<view class="synopsis">
					重庆市渝中区企业天地西西弗书店
				</view>
				<view class="timeLook">
					<text class="time">023-12345678</text>
					<text class="look" @tap="call('023-12345678')">拨打电话</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			call(phone){
				uni.makePhoneCall({
				    phoneNumber: phone 
				});
			}
		}
	}
</script>

<style scoped>
	.caseDetails {
		padding: 20upx;
	}
	
	.informationList {
		margin-bottom: 40upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 20upx;
	}
	
	.informationList:last-child {
		border: none;
		padding-bottom: 0;
	}
	
	.informationImage {
		width: 210upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	
	.synopsis {
		height: 80upx;
		width: 480upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 40upx;
		text-align: justify;
		margin-bottom: 40upx;
	}
	
	.timeLook {
		font-size: 20upx;
		color: #555555;
		display: flex;
		justify-content: space-between;
	}
	
	.look {
		position: relative;
		padding-left: 34upx;
	}
	
	/* .look::before {
		content: '';
		position: absolute;
		width: 20upx;
		height: 20upx;
		background-image: url(@/static/image/index/eye.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		left: 0;
		top: 6upx;
	} */
</style>
