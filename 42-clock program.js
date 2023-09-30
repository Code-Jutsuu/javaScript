
const label = document.getElementById("myLabel");
setInterval(update,1000);

function update(){
    let date = new Date();
    label.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let sec = date.getSeconds();
        let amOrPm = (hours >= 12) ? ("PM"):("AM");
        
        hours = (hours%12) || 12;

        hours = zeroes(hours);
        minutes = zeroes(minutes);
        sec = zeroes(sec);

        return `${hours}:${minutes}:${sec} ${amOrPm}`
    }
     function zeroes(time){
        time = time.toString();

        return (time.length<2) ? "0"+time : time;
     }
}