function log(p: any) {
    if (import.meta.env.PROD){
        console.clear();
        return
    }

	console.log(p); 
}

export default log;