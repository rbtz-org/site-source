<template>
    <div class="btnContainer">
        <button
            onclick="location.href = 'mailto:zhao_yanbo@outlook.com?subject=Hi!👋 I\'m...'"
            tabindex="0"
        >Say Hi!👋</button>
        <button 
            onclick="location.href = 'https://blog.zhaoyanbo.com/'" 
            tabindex="1">
        Blog!🥸</button>
    </div>
</template>
<script>
// import XP.css
import "xp.css/dist/XP.css";
export default {
    name: 'mailButton',
    props: {
        mail: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        }
    },
}
</script>

<style scoped>
div.btnContainer{
    width:66%;
    display: flex;
    flex-flow:row nowrap;
    justify-content: space-between;
}
button {
    user-select: none;
}
</style>