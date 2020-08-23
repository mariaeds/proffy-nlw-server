
export default function convertHourToMinutes(hora : string){
     const [hour, minutes] = hora.split(':').map(Number);
     const timeInMinutes = (hour * 60) + minutes;
     return timeInMinutes;
}