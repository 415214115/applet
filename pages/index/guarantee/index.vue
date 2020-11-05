<template>
	<view class="guarantee">
		<view class="tip">
			恭喜您选用正品KWK车身膜，尖端技术使您的爱车得到至尊保护！
		</view>
		<view class="searchGuarantee">
			<input class="searchInput" type="text" value="" placeholder="请输入手机号或车牌号"/>
			<view class="searchButton" @tap="toGuaranteeContent">查询</view>
		</view>
		<view class="guaranteeContent">
			<view class="title">质保内容</view>
			<view class="cont">
				<view class="contText">
					KWK车膜在产品施工后，根据产品所属的分类，在对应的统一质保时间内提供以下质量保证：
				</view>
				<view class="contText">
					1.保证膜的自身附着性能，不产生非触碰变形、分层或自然脱离车体。
				</view>
				<view class="contText">
					2.保证膜与漆面剥离时几乎不留残胶，原厂漆无脱落损失（漆面二次喷涂部分发生脱落或损失，不在保证范围内，以权威机构漆面成份检测结果为准）。
				</view>
				<!-- <view class="contText">
					3、保证膜与漆面剥离时几乎不留残胶，原厂漆无脱落损伤(漆面二次喷涂部分发生脱落或损伤，不在保证范围内，以权威机构漆面成分检测结果为准)。
				</view> -->
			</view>
			<view class="title">免责情况</view>
			<view class="cont">
				<view class="contText">
					1.因天灾，外力或强酸碱物体等因素导致的车体、膜面损伤及不正确的保养方法造成的产品损伤，KWK及施工单位将不承担任何责任。
				</view>
				<view class="contText">
					2.去除膜时，应由施工单位进行专业去除，由车主擅自去除操作引起的膜体损坏或漆面损伤，KWK及施工单位将不承担任何责任。
				</view>
				<view class="contText">
					3.对人为造成的划痕或破损可由施工单位对破损补位进行局部修复或更换。车身是由多个部分组合而成，更换相应的破损部位即可。
				</view>
			</view>
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
			toGuaranteeContent(){
				uni.navigateTo({
					url: '../guaranteeContent/index'
				})
			}
		}
	}
</script>

<style scoped>
	.guarantee{
		padding: 20upx;
	}
	.searchInput{
		padding: 8upx 15upx;
		border: 1px solid #EEEEEE;
		border-radius: 10upx;
		color: #6E6E6E;
	}
	.searchButton{
		width: 600upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		color: #FFFFFF;
		background: #CE1520;
		position: relative;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: 40upx;
		border-radius: 10upx;
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
	.tip{
		color: #CE1520;
		font-size: 24upx;
		text-align: center;
		margin-bottom: 40upx;
	}
</style>
