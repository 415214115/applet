<template>
	<view class="search">
		<view class="searchBoxW flex">
			<view class="searchBox flex">
				<image class="searchImg" mode="scaleToFill" src="/static/image/index/search.png"></image>
				<input class="searchInput" type="text" value="" @confirm="search" placeholder="请输入搜索内容" placeholder-class="placeholder" confirm-type="search" />
			</view>
			<view class="searchBtn" @tap="search">搜索</view>
		</view>
		<view class="searchListW">
			<view class="searchList">热门搜索</view>
			<view class="searchListBox">
				<view class="searchListItem">画画的baby</view>
				<view class="searchListItem">画画的baby</view>
				<view class="searchListItem">奔驰的小野马</view>
				<view class="searchListItem">和</view>
				<view class="searchListItem">带刺的玫瑰</view>
			</view>
		</view>
		<view class="searchListW">
			<view class="searchList flex">
				<text>历史搜索</text>
				<image class="deleteImg" @tap="deleteSearchData" src="/static/image/index/delete.png" mode="aspectFit"></image>
			</view>
			<view class="searchListBox">
				<view class="searchListItem">画画的baby</view>
				<view class="searchListItem">画画的baby</view>
				<view class="searchListItem">奔驰的小野马</view>
				<view class="searchListItem">和</view>
				<view class="searchListItem">带刺的玫瑰</view>
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
			search(){
				// 搜索
				uni.switchTab({
				    url: '/pages/case/index'
				});
			}
		}
	}
</script>

<style scoped>
	.search{
		padding: 20upx;
	}
	.flex{
		display: flex;
		flex-wrap: nowrap;
	}
	.searchBox{
		width: 600upx;
		border: 1px solid #c9c9c9;
		/* background: #f5f5f5; */
		border-radius: 10upx 0 0 10upx;
		left: 0;
		right: 0;
		top: 20upx;
		margin: auto;
		padding: 10upx 15upx;
		justify-content: start;
		align-items: center;
		font-size: 24upx;
		color: #6E6E6E;
		border-right: none;
	}
	.searchBoxW{
		justify-content: space-between;
		margin-bottom: 20upx;
	}
	.searchInput{
		width: 520upx;
	}
	.searchImg{
		width: 36upx;
		height: 36upx;
		margin-right: 10upx;
	}
	.placeholder{
		font-size: 24upx;
		color: #6E6E6E;
	}
	.searchBtn{
		width: 110upx;
		padding: 10upx 15upx;
		background: #CE1520;
		border-radius: 0 10upx 10upx 0;
		color: #FFFFFF;
		font-size: 24upx;
		text-align: center;
		line-height: 48upx;
	}
	.searchList{
		line-height: 64upx;
		font-size: 32upx;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20upx;
	}
	/* .searchListW{
		margin-bottom: 20upx;
	} */
	.searchListItem{
		padding: 0 15upx;
		border-radius: 10upx;
		border: 1px solid #6E6E6E;
		font-size: 24upx;
		line-height: 48upx;
		color: #313131;
		display: inline-block;
		margin-right: 20upx;
		margin-bottom: 20upx;
	}
	.deleteImg{
		width: 30upx;
		height: 30upx;
	}
</style>
