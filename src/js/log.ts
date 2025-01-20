function log(p: any) {
    if (import.meta.env.PROD){
        return
    } else {
        console.log(p); 
    }
}

export default log;