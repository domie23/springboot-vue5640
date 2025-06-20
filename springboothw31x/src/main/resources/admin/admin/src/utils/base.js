const base = {
    get() {
        return {
            url : "http://localhost:8080/springboothw31x/",
            name: "springboothw31x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboothw31x/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的喀什旅游网站设计与开发"
        } 
    }
}
export default base
