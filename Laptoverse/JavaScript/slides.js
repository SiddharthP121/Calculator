let slide=document.querySelectorAll(".slide")
let counter=0;
slide.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});

const goPrev=()=>{
if (counter!=0) {
    
    counter--;
    slideImg()
}

}


const goNext=()=>{

if (counter<slide.length-1) {
    
    counter++;
    slideImg()
}
}

const slideImg=()=>{
slide.forEach((slide) => {
    slide.style.transform=`translateX(-${counter*100}%)`
});
}
 

// making the buy now functionable
document.querySelector(".buy").addEventListener("click", function() {
    if (counter===0) {
        
        window.location.href = "https://www.flipkart.com/samsung-galaxy-book4-intel-core-i5-13th-gen-1335u-16-gb-512-gb-ssd-windows-11-home-np750xgj-kg2in-np750xgj-lg2in-thin-light-laptop/p/itm820dc496ef160?pid=COMGZUYDGFJGHZR4&lid=LSTCOMGZUYDGFJGHZR4JPVIN2&marketplace=FLIPKART&q=samsung+galaxy+book4&store=6bo%2Fb5g&spotlightTagId=BestsellerId_6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=1516c8f1-d2e7-4350-af20-c2be148e7b89.COMGZUYDGFJGHZR4.SEARCH&ppt=sp&ppn=sp&ssid=n4y5axbyn40000001728648114428&qH=2e68ca2a86988079";   
    }

    if (counter===1) {
        
        window.location.href = "https://www.flipkart.com/dell-inspiron-intel-core-i5-11th-gen-1135g7-8-gb-512-gb-ssd-windows-11-home-2-graphics-3511-thin-light-laptop/p/itm955cc14b3a283?pid=COMG9NYDSF4N74DN&lid=LSTCOMG9NYDSF4N74DNI2XMPW&marketplace=FLIPKART&q=dell+xps+15&store=6bo%2Fb5g&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_8_sc_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_8_sc_na_na&fm=Search&iid=cbcd8acc-51ef-45b2-b287-af00eea74e93.COMG9NYDSF4N74DN.SEARCH&ppt=sp&ppn=sp&ssid=b198wql5a80000001728648398751&qH=1fcfb5f42493f852";   
    }

    if (counter===2) {
        
        window.location.href = "https://www.flipkart.com/hp-pavilion-amd-ryzen-7-octa-core-5700u-16-gb-1-tb-ssd-windows-11-home-15-eh1147au-thin-light-laptop/p/itm800f23fa517cc?pid=COMGYAM99RJYH6JX&lid=LSTCOMGYAM99RJYH6JXOD50VL&marketplace=FLIPKART&q=hp+pavilion+15&store=6bo%2Fb5g&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_ps&fm=search-autosuggest&iid=a40d175f-befe-425d-8169-0114c8fc8fd0.COMGYAM99RJYH6JX.SEARCH&ppt=sp&ppn=sp&ssid=3uw3j9n2o00000001728648491792&qH=a4d1e77c2137402b";   
    }

    if (counter===3) {
        
        window.location.href = "https://www.flipkart.com/acer-aspire-7-intel-core-i5-13th-gen-13420h-16-gb-512-gb-ssd-windows-11-home-6-graphics-nvidia-geforce-rtx-3050-a715-79g-gaming-laptop/p/itm4fd9f65292403?pid=COMH3G96MYGWSGTF&lid=LSTCOMH3G96MYGWSGTFGZ7TLO&marketplace=FLIPKART&q=acer+laptop&store=6bo%2Fb5g&srno=s_1_10&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=Search&iid=3469d08d-10c0-47e9-a2b8-2dce127bb4d6.COMH3G96MYGWSGTF.SEARCH&ppt=pp&ppn=pp&ssid=j0rqwp04jk0000001728648553568&qH=2a80de980b66e179";   
    }
});
document.querySelector(".buy2").addEventListener("click", function(){
    window.location.href="https://www.apple.com/in/macbook-pro/"
})
document.querySelector(".refimg").addEventListener("click",function(){
    window.location.href="https://www.apple.com/in/macbook-pro/"
})
