class HM{

    constructor(src,title,price,a,b,c,description,x){
        this.src=src;
    this.title=title;
    this.price=price;
    this.a=a;
    this.b=b;
    this.c=c;
    this.description=description;
    this.x=x;

    }
    htmlBlocks=()=>
    {
        return`
                  <div class="mb-[10%]">
        <div class="relative">
            <img class="rounded-md mb-2 h-[235px] w-full " src="${this.src}">
            <img class="absolute bottom-3  right-3" src="./images/favourite.svg">
            <div id="new" class="absolute top-5 left-3 rounded-md">
                <p  class=" text-white font-bold">NEW</p>
            </div>
            
        </div>
        <div class="ml-5">
            <div class="flex mb-1">
                <div id="sqare" class="mr-2 rounded-md"></div>
                <p >${this.title}</p>
            </div>
            <h2 class="md:text-[24px]  text-[20px] md:leading-[32px] leading-[28px] font-bold mb-2">$${this.price}</h2>
            <div class="flex mb-1">
                <p class="mr-2"><b>${this.a} </b>bed</p>
                <p class="mr-2"><b>${this.b} </b>bath</p>
                <p><b>${this.c}</b>sqft lot</p>
            </div>
            <p class="mb-1">${this.description}</p>
            <p>${this.x}</p>
        </div>
        </div>
    `
    }

}
let B1 =new HM("./images/p1.webp",'Single-Family Home',325.344,5,3.5,0.38,'1406 Ellis St','Greensboro, NC 27406')
let B2 =new HM("./images/p2.webp",'Townhome',287.941,2,2.5,3.920,'935 Cannon Crossing Cir','Greensboro, NC 27406')
let B3 =new HM("./images/p3.webp",'Single-Family Home',225.432,3,2,0.25,'5 Acorn Ct','Greensboro, NC 27406')
let B4 =new HM("./images/p4.webp",'Modular home',325.566,3,2,0.3,'3658 Stratford ','Greensboro, NC 27406')
let B5 =new HM("./images/p5.webp",'Multi-family home',462.236,3,2,0.21,'3008 Stratford Dr','Greensboro, NC 27406')
let B6 =new HM("./images/p6.webp",'Single Home',468.566,4,2,0.4,'1406 Ellis St','Greensboro, NC 27406')
let B7 =new HM("./images/p7.webp",'Single-Family Home',235.596,6,2,0.33,'3008 Dr','Greensboro, NC 27406')
let B8 =new HM("./images/p8.webp",'Co-op or condo.',862.986,4,8,78.63,'3433 Crossing Dr','Greensboro, NC 27406')
let B9 =new HM("./images/p9.webp",'Single-Family Home',845.346,8,5,78.63,'3433 Crossing Dr','Greensboro, NC 27406')
let B10 =new HM("./images/p10.webp",'Mobile home',975.346,4,3,78.63,'3433 Crossing Dr','Greensboro, NC 27406')
let B11 =new HM("./images/p11.webp",'Single-Family Home',899.946,4,5,78.63,'3433 Crossing Dr','Greensboro, NC 27406')
let B12 =new HM("./images/p12.webp",'Single-Family Home',999.674,9,7.5,0.87,'1406 Ellis St','Greensboro, NC 27406')