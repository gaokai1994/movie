<template>
    <div>
        <footer id="header">
            <ul>
                <li><router-link    tag="a" class="link" :to="{name:'MineLink'}">我的</router-link></li>
                <li><router-link    tag="a" class="link" :to="{name:'MovieLink'}">电影</router-link></li>
                <li><router-link    tag="a" class="link" :to="{name:'CnameLink'}">影院</router-link></li>
            </ul>
        </footer>
    </div>
</template>
<script>
export default{

}
</script>
<style scoped>
    #header{
        width: 100%;
        height: 50px;
        border-top: 2px;
        position:fixed;
        left: 0;
        bottom: 0;
        background:blue;
    }
    #header ul{
        display:flex;
        text-align: center;
        list-style: none;
        height: 40px;
        align-items: center;
    }

    #header ul li{

        width: 300px;
        height: 40px;
        margin:20rpx 0;
        list-style: none;
    }
    #header ul li a{
        list-style: none;
    }
    #header ul li.active{
        color: red;
    }
    #header ul li .link{
        font: normal;
        font-size: 20px;
        line-height: 18px;
    }
</style>