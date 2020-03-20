<template>
	<div>
		<myheader></myheader>
		<div class="lun">
			<mt-swipe :auto="2000">
				<mt-swipe-item v-for="item in swiperData" :key="item.id">
	  				<img :src="item.image" alt="" />
	  		</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="home-item">
			<div class="h-flex">
				<hitem title="新闻资讯">
				<img slot="himg" src="../../../static/himg/home-01.png" alt="" />
				</hitem>
			</div>
			<div class="h-flex">
				<hitem title="图片分享">
				<img slot="himg" src="../../../static/himg/home-02.png" alt="" />
				</hitem>
			</div>
			<div class="h-flex">
				<hitem title="商品购买">
				<img slot="himg" src="../../../static/himg/home-03.png" alt="" />
				</hitem>
			</div>
			<div class="h-flex">
				<hitem title="留言反馈">
				<img slot="himg" src="../../../static/himg/home-04.png" alt="" />
				</hitem>
			</div>
			<div class="h-flex">
				<hitem title="视频专区">
				<img slot="himg" src="../../../static/himg/home-05.png" alt="" />
				</hitem>
			</div>
			<div class="h-flex">
				<hitem title="联系我们">
				<img slot="himg" src="../../../static/himg/home-06.png" alt="" />
				</hitem>
			</div>
		</div>
	</div>
</template>

<script>
	import Hitem from "./home-item"
	import Myheader from '../../components/myheader';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	export default{
		name:"home",
		components:{Myheader,Hitem},
		data(){
			return{
				swiperData:[]
			}
		},
		async created(){
			let res= await this.$ajax.get('shop/getAds')
			this.swiperData=res
		}
	}
</script>

<style>
	.lun{
		width: 100%;
		height: 150px;
	}
	.lun img{width: 100%;height: 100%;}
	.home-item{
		width: 100%;
		margin-top: 20px;
		/*outline: 1px solid red;*/
		display: flex;
		flex-wrap: wrap;
	}
	.home-item .h-flex{
		width: 25%;
		height: 100px;
		padding: 10px;
		box-sizing: border-box;
/*		outline: 1px solid red;*/
	}
</style>