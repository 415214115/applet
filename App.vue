<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("/components/gaoyia-parse/parse.css");
	/*每个页面公共css */
	image{
		display: block;
	}
	view,scroll-view{
		box-sizing: border-box;
		font-size: 28upx;
	}
</style>
