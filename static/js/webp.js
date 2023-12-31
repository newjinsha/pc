window.addEventListener('DOMContentLoaded', async () => {
    const detectWebp = () => new Promise((resolve) => {
        const imgSrc = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';
        const pixel = new Image();
        pixel.addEventListener('load', () => {
            const isSuccess = (pixel.width > 0) && (pixel.height > 0);
            resolve(isSuccess);
        });
        pixel.addEventListener('error', () => { resolve(false); });
        pixel.setAttribute('src', imgSrc); // 開始載入測試圖
    });

    const hasSupport = await detectWebp();
    $(".checkWebp").each(function(){
        
        if(hasSupport){
            if($(this).attr("data-webp-img")==""){
                 $(this).attr("data-img-url", $(this).attr("data-default-img"));
                 
            }else{
                $(this).attr("data-img-url", $(this).attr("data-webp-img"));
            }
        }else{
            
            $(this).attr("data-img-url", $(this).attr("data-default-img"));
        }

    });

    
});