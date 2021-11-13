<template>
    <header>
        <h1 :style="{ fontFamily: font }">{{ title }}</h1>
        <!-- <button @click="updateStyle">Update</button> -->
        <button
            onclick="location.href = 'mailto:zhao_yanbo@outlook.com?subject=Hi!👋 I\'m...'"
        >Say Hi!👋</button>
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
            fontsEN: ['EBGaramomndRoman', 'EBGaramomndItalic', 'Times New Roman'],
            fontsCN: ['宋体', '黑体'],

            title: null,
            font: null,
            titles: [
                {
                    id: 0,
                    title: 'Robert Zhao',
                    lang: 'en',
                },
                {
                    id: 1,
                    title: 'Zhao Yanbo',
                    lang: 'en',
                },
                {
                    id: 2,
                    title: '赵彦博',
                    lang: 'zh-cn',
                }
            ],
        }
    },
    methods: {
        // 每次返回 titles 的一个不同的 index
        // 第一个参数是 array，第二个参数是存储 index 的位置(string)
        getTitleIndex(theArray, Location) {
            if (sessionStorage.getItem(Location)) {
                let index = sessionStorage.getItem(Location);

                // 循环
                if (index >= (theArray.length - 1)) {
                    index = 0;
                } else {
                    index++;
                }

                sessionStorage.setItem(Location, index);
                return index;
            } else {
                let index = Math.floor(Math.random() * theArray.length);

                sessionStorage.setItem(Location, index);
                return index;
            }
        },

        //更新 this.title，并返回对应 title 对象
        getTitle() {
            let titleObj = this.titles[this.getTitleIndex(this.titles, 'titlesIndex')];
            this.title = titleObj.title;
            console.log(titleObj.font);
            console.log(this.titles)
            return titleObj;
        },
        // 通过传入的 title 对象，更新 title 的字体   参数是 title 对象,返回字体名称的字符串
        getFont(titleObj) {
            let fonts = null;

            if (titleObj.lang == 'en') {
                fonts = this.fontsEN;
            } else if (titleObj.lang == 'zh-cn') {
                fonts = this.fontsCN;
            }
            let fontName = fonts[this.getTitleIndex(fonts, 'fonts' + titleObj.lang)];

            this.font = fontName;

            console.log('fontName: ' + fontName);
            return fontName;
        },
        // 执行 getTitle 和 getFont 方法    
        updateStyle() {
            this.getFont(this.getTitle());
            console.log('style updated');
        }
    },
    mounted() {
        this.updateStyle();
    }
}
</script>

<style>
header {
    display: flex;
    flex-flow: column nowrap;
}
h1 {
    font-size: 4em;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1px;
}

h1::selection {
    color: #3d3d3d;
}

button {
    user-select: none;
}
</style>