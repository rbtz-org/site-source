<template>
    <header>
        <h1>{{title}}</h1>
        <button @click="getTitle">Update</button>
    </header>
    

</template>
<script>
export default {
    name: 'Title',
    // props: {
    //     title: {
    //         type: String,
    //         required: true
    //     }
    // },
    data() {
        return {
            fontsEN: ['Arial', 'Courier New', 'Times New Roman'],
            fontsCN: ['宋体', '黑体', '楷体'],

            title: null,
            fonts: null,

            titles: [
                {
                    title: 'Robert Zhao',
                    font: this.fontsEN,
                },
                {
                    title: 'Zhao Yanbo',
                    font: this.fontsEN,
                },
                {
                    title: '赵彦博',
                    font: this.fontsCN,
                }
            ],
        }
    },
    methods: {
        // 每次返回 titles 的一个不同的 index
        getTitleIndex() {
            if(sessionStorage.getItem('titleIndex')) {
                let index = sessionStorage.getItem('titleIndex');

                // 循环
                if( index == (this.titles.length - 1) ) {
                    index = 0;
                } else {
                    index++;
                }

                sessionStorage.setItem('titleIndex', index);
                return index;
            } else {
                let index = Math.floor(Math.random() * this.titles.length);

                sessionStorage.setItem('titleIndex', index);
                return index;
            }
        },
        getTitle() {
            this.title = this.titles[this.getTitleIndex()].title;
        }
    },
    mounted() {
        this.getTitle();
    }
}
</script>

<style>
header{
    display:flex;
    flex-flow:column nowrap;
}
h1 {
    font-size: 4em;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1px;
}
</style>