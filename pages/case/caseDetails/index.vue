<template>
	<scroll-view class="caseDetails" :scroll-y="true" :scroll-x="false">
		<!-- <video 
			class="myVideo" 
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
			enable-danmu 
			danmu-btn 
			controls>
		</video> -->
		<!-- <image class="caseImage" :lazy-load="true" :src="pagedata.showImg" mode="widthFix"></image> -->
		<view class="caseTitle">
			<view class="caseTitleTitle">{{ pagedata.title }}</view>
			<view class="caseTitleText">{{ pagedata.context }}</view>
			<!-- <view class="timeLook">
				<text class="time">2020-11-4 14:41:15</text>
				<text class="look">1322</text>
			</view> -->
		</view>
		<view class="caseCont">
			<view class="texts">{{ pagedata.showText }}</view>
			<image class="caseImage" v-for="(item, index) in pagedata.imgs" :key="item" :lazy-load="true" :src="item" @tap="previewImage(index)"
			 mode="widthFix"></image>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				pagedata: '',
				caseID: '',
				imagesList: []
			}
		},
		onLoad(e) {
			this.caseID = e.id
			this.getPageData(e.id)
		},
		methods: {
			previewImage(index) {
				uni.previewImage({
					current: index,
					urls: this.imagesList,
					longPressActions: {
						// itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			getPageData(id) {
				this.$request.get('/car/selectModelInfoById', {
					id: id
				}).then(res => {
					if (res.code == 'succes') {
						this.pagedata = res.data[0]
						this.pagedata.imgs.forEach((v) => {
							this.imagesList.push(v)
						})
						// this.imagesList
						uni.setNavigationBarTitle({
							title: this.pagedata.title
						})
					}
				})
			}
		},
		onShareAppMessage(res) {
			return {
				title: '我正在使用KWK色彩车身保护膜，快来看看有没有你想要的',
				path: `/pages/case/caseDetails/index?id=${this.caseID}`,
				imageUrl: this.pagedata.showImg
			}
		}
	}
</script>

<style scoped>
	.caseDetails {
		padding: 20upx;
	}

	.timeLook,
	.myVideo,
	.caseImage,
	.texts {
		width: 710upx;
	}

	.caseTitle {
		border-bottom: 1px solid #EEEEEE;
	}

	.caseTitleText {
		width: 710upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 40upx;
		text-align: justify;
		margin-bottom: 30upx;
	}

	.timeLook {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		margin-bottom: 30upx;
	}

	.timeLook {
		font-size: 20upx;
		color: #555555;
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

	.texts {
		line-height: 48upx;
		margin-top: 20upx;
	}

	.caseImage {
		margin-top: 20upx;
	}

	.caseTitleTitle {
		line-height: 64upx;
		font-size: 36upx;
		font-weight: bold;
		color: #333333;
	}
</style>
