<template>
	<scroll-view class="caseDetails" :scroll-y="true" :scroll-x="false">
		<image class="topcaseImage" :lazy-load="true" :src="pageData.cover" mode="widthFix"></image>
		<view class="caseTitle">
			<view class="caseTitleText">{{ pageData.title }}</view>
			<view class="timeLook">
				<text class="time">{{ pageData.creatTime }}</text>
				<!-- <text class="look">1322</text> -->
			</view>
		</view>
		<view class="caseCont" >
			<!-- v-html="pageData.context" -->
			<u-parse :content="pageData.context" @preview="preview" @navigate="navigate" />
			<!-- <view >
				
			</view> -->
			<!-- {{ pageData.context }} -->
			<!-- <image class="caseImage" v-for="item in 12" :key="item" :lazy-load="true" src="/static/logo.png" mode="widthFix"></image> -->
		</view>
	</scroll-view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default{
		components: {
		    uParse
		  },
		data(){
			return{
				pageData: ''
			}
		},
		onLoad(e) {
			
			console.log(e.id)
			this.getInformationDetails(e.id)
		},
		methods:{
			getInformationDetails(id){
				this.$request.post('/car/selectInformationById', {
					id: id
				}).then( res => {
					if (res.code == 'succes'){
						this.pageData = res.data
						uni.setNavigationBarTitle({
						    title: this.pageData.title
						});
					}
				})
			},
			 preview(src, e) {
			      // do something
			    },
			    navigate(href, e) {
			      // do something
			    }
		}
	}
</script>

<style scoped>
	.caseDetails{
		padding: 20upx;
	}
	.timeLook,.caseImage,.texts,.topcaseImage{
		width: 710upx;
	}
	.caseTitle{
		border-bottom: 1px solid #EEEEEE;
		margin-bottom: 20upx;
	}
	.caseTitleText{
		width: 710upx;
		display: -webkit-box;
		  -webkit-line-clamp: 2;
		  -webkit-box-orient: vertical;
		  overflow : hidden;
		  text-overflow: ellipsis;
		line-height: 40upx;
		text-align: justify;
		margin-bottom: 30upx;
	}
	.timeLook{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		margin-bottom: 30upx;
	}
	.timeLook{
		font-size: 20upx;
		color: #555555;
	}
	.look{
		position: relative;
		padding-left: 34upx;
	}
	.look::before{
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
	.texts{
		line-height: 48upx;
		margin-top: 20upx;
	}
	.topcaseImage{
		margin-bottom: 20upx;
	}
	.caseCont{
		color: #555555;
		line-height: 48upx;
		text-align: justify;
	}
</style>
