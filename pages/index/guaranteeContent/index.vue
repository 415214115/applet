<template>
	<view class="guaranteeContent">
		<view class="guaranteeMsg">
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">客户姓名:</view>
				<view class="guaranteeMsgContent">{{ pageData.userName }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">手机号码:</view>
				<view class="guaranteeMsgContent">{{ pageData.phone }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">受保车型:</view>
				<view class="guaranteeMsgContent">{{ pageData.carType }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">车牌号码:</view>
				<view class="guaranteeMsgContent">{{ pageData.carNum }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">施工膜类:</view>
				<view class="guaranteeMsgContent">{{ pageData.chemoName }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">质保日期:</view>
				<view class="guaranteeMsgContent">{{ pageData.updateTime }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">交车日期:</view>
				<view class="guaranteeMsgContent">{{ pageData.createTime }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">施工店铺:</view>
				<view class="guaranteeMsgContent">{{ pageData.storeName }}</view>
			</view>
			<view class="guaranteeMsgList">
				<view class="guaranteeMsgTitle">整车价格:</view>
				<view class="guaranteeMsgContent">{{ pageData.price }}</view>
			</view>
		</view>
		<view class="picture" v-if="pageData.imgs && pageData.imgs.length > 0">
			<view class="pictureTitle">车辆图片</view>
			<image class="pictureList" v-for="item in pageData.imgs" :key="item" :src="item" mode="widthFix"></image>
		</view>
		<view class="guaranteeContent">
			<view class="title">保养方法</view>
			<view class="cont">
				<view class="contText">
					1.施工完毕一周后胶水完全干燥后方能洗车。
				</view>
				<view class="contText">
					2.施工完毕初期，可能会有产生气泡或者水泡的可能性，属正常现象，10天左右即可自然消失，也可到施工单位进行快速处理。
				</view>
				<view class="contText">
					3.请避免有粘性物品和膜表面长期接触。
				</view>
				<view class="contText">
					4.请避免使用易对膜面造成损伤的清洗工具，尽量使用柔软湿毛巾擦拭膜面，如需使用清洗剂，须使用中性清洁剂。
				</view>
				<view class="contText">
					5.可在施工后一周内到店进行免费检查，以保证车膜最好的使用性能。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pageData: ''
			}
		},
		onLoad(e) {
			this.pageData = JSON.parse(e.data)
			// this.getPageData(e.data)
		},
		methods:{
			// getPageData(data){
				
			// }
		}
	}
</script>

<style scoped>
	.guaranteeContent{
		padding: 20upx;
	}
	.title{
		font-size: 32upx;
		color: #CE1520;
		margin-top: 40upx;
		margin-bottom: 40upx;
		text-align: center;
	}
	.cont{
		text-align: justify;
	}
	.contText{
		color: #555555;
		line-height: 56upx;
		margin-bottom: 10upx;
	}
	.guaranteeMsgList{
		display: flex;
		justify-content: start;
		flex-wrap: nowrap;
		line-height: 56upx;
		align-items: center;
	}
	.guaranteeMsgTitle{
		margin-right: 20upx;
		color: #313131;
	}
	.guaranteeMsgContent{
		color: #555555;
		font-size: 24upx;
	}
	.pictureList{
		width: 100%;
		margin-bottom: 20upx;
	}
	.pictureTitle{
		line-height: 64upx;
		text-align: center;
		margin-bottom: 20upx;
		color: #313131;
		font-weight: 400;
	}
</style>
