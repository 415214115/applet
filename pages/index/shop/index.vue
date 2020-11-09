<template>
	<scroll-view class="caseDetails" :scroll-y="true" :scroll-x="false">
		<view class="informationList" v-for="item in pageData" :key="item">
			<image class="informationImage" :lazy-load="true" :src="item.image" mode="aspectFill"></image>
			<view class="informationTextTitle">
				<view class="synopsisTitle">{{ item.name }}</view>
				<view class="synopsis">{{ item.roadName }}</view>
				<view class="timeLook">
					<text class="time">{{ item.phone }}</text>
					<text class="look" @tap="call(item.phone)">拨打电话</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
				pageData: ''
			}
		},
		onLoad() {
			this.getPageData()
		},
		methods:{
			call(phone){
				uni.makePhoneCall({
				    phoneNumber: phone 
				});
			},
			getPageData(){
				this.$request.get('/car/getStoreList?name=').then( res => {
					if(res.code == 'succes'){
						this.pageData = res.data
					}
				})
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
		height: 60upx;
		width: 480upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 30upx;
		text-align: justify;
		margin-bottom: 16upx;
		font-size: 24upx;
		color: #555555;
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
		color: red;
	}
	.synopsisTitle{
		font-size: 33upx;
		color: #333333;
		font-weight: 400;
		margin-bottom: 10upx;
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
