<template>
	<view class="information">
		<view class="informationList" v-for="item in informationList" :key="item" @tap="toInformationDetails(item.id)">
			<image class="informationImage" :src="item.cover" mode="aspectFill"></image>
			<view class="informationTextTitle">
				<view class="synopsis">{{ item.context }}</view>
				<view class="timeLook">
					<text class="time">{{ item.creatTime }}</text>
					<!-- <text class="look">1322</text> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				informationList: [],
				queryData:{
					pageNum: 1,
					pageSize: 10
				}
			}
		},
		onLoad() {
			this.getInformationData()
		},
		methods:{
			toInformationDetails(id){
				// 跳转到资讯详情
				uni.navigateTo({
					url: '../informationDetails/index?id=' + id
				})
			},
			getInformationData(){
				this.$request.post('/car/selectInformations', this.queryData).then(res => {
					if (res.code == 'succes') {
						// this.informationList = res.data.list
						this.informationList = this.informationList.concat(res.data.list)
					}
				})
			}
		},
		onReachBottom() {
			this.queryData.pageNum += 1
			this.getInformationData()
		}
	}
</script>

<style scoped>
	.information {
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

	.look::before {
		content: '';
		position: absolute;
		width: 20upx;
		height: 20upx;
		background-image: url(@/static/image/index/eye.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		left: 0;
		top: 6upx;
	}
</style>
