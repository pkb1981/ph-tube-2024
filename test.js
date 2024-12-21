function getTime(time){
    const hr=parseInt(time/3600);
    let remSecond=time%3600;
    const min=parseInt(remSecond/60);
    remSecond=remSecond%60;
    return `${hr} hour ${min}minute ${remSecond} second ago`;
};
console.log(getTime(1230));